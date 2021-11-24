import { LitElement, html, css } from 'lit';
import { reset, tokens, baseStyles } from './styles/globalStyles.js';
import './components/Button/index.js';
import './components/Input/index.js';
import './components/TaskItem/index.js';

export class TodoApp extends LitElement {
  static get properties() {
    return {
      tasks: { type: Array },
      _newTask: { type: String },
    };
  }

  static get styles() {
    return [
      reset,
      tokens,
      baseStyles,
      css`
        .header-container {
          background: var(--gray--0);
          padding: 1rem 0;
          border-bottom: 1px solid var(--gray--2);
          position: sticky;
          top: 0;
          left: 0;
        }

        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-direction: column;
          gap: 1.5rem;
        }

        header .input-container {
          display: flex;
          gap: 0.5rem;
          flex-grow: 1;
          width: 100%;
        }

        header .input-container todo-input {
          flex-grow: 1;
        }

        .task-list {
          padding: 1rem 0 0 0;
        }

        .task-list li {
          list-style: none;
        }

        .task-list li:not(:last-child) {
          margin-bottom: 1.25rem;
        }

        .empty-task-list-container {
          height: calc(100vh - 137px);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--gray--6);
          text-align: center;
        }

        @media (min-width: 768px) {
          header {
            flex-direction: row;
          }

          header .input-container {
            width: auto;
          }

          .empty-task-list-container {
            height: calc(100vh - 81px);
          }
        }
      `,
    ];
  }

  constructor() {
    super();
    // Initialize with an empty
    this.tasks = [];
    this.getTasks();

    this._newTask = '';
  }

  connectedCallback() {
    super.connectedCallback();
  }

  async getTasks() {
    const rawTasks = await fetch('http://localhost:3000/api/tasks', {
      method: 'GET',
    });
    const tasks = await rawTasks.json();

    this.tasks = tasks;
  }

  static async handleEdit(e) {
    const { id, task, completed } = e.detail;

    await fetch(`http://localhost:3000/api/task/${id}/update`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task, completed }),
    });
  }

  static async handleNewTask() {
    if (this._newTask) {
      await fetch('http://localhost:3000/api/task/create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: this._newTask }),
      });

      this._newTask = '';

      await this.getTasks();
    }
  }

  static async handleDeleteTask(e) {
    const { id } = e.detail;

    await fetch(`http://localhost:3000/api/task/${id}/delete`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    await this.getTasks();
  }

  handleChange(e) {
    e.preventDefault();

    this._newTask = e.detail;
  }

  render() {
    return html`
      <div class="todo-app">
        <div class="header-container">
          <header class="container">
            <h1>Task List</h1>
            <div class="input-container">
              <todo-input
                placeholder="Add a task"
                .value=${this._newTask}
                @change=${this.handleChange}
              ></todo-input>
              <todo-button
                kind="primary"
                @click=${this.constructor.handleNewTask}
                >Add task</todo-button
              >
            </div>
          </header>
        </div>
        ${this.tasks.length > 0
          ? html`
              <ul class="task-list container">
                ${this.tasks.map(
                  task => html`
                    <li>
                      <todo-task-item
                        id=${task._id}
                        .task=${task.task}
                        .completed=${task.completed}
                        @edit=${this.constructor.handleEdit}
                        @completed=${this.constructor.handleEdit}
                        @delete=${this.constructor.handleDeleteTask}
                      ></todo-task-item>
                    </li>
                  `
                )}
              </ul>
            `
          : html`
              <div class="empty-task-list-container">
                <div>
                  <h3>No tasks</h3>
                  <p>Please add some tasks.</p>
                </div>
              </div>
            `}
      </div>
    `;
  }
}
