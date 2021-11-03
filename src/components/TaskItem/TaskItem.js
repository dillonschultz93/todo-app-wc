/* eslint-disable lit-a11y/anchor-is-valid */
/* eslint-disable lit-a11y/click-events-have-key-events */
import { LitElement, html, css } from 'lit';
import { reset, tokens } from '../../styles/globalStyles.js';

import '../Button/index.js';
import '../Input/index.js';

export class TaskItem extends LitElement {
  static get properties() {
    return {
      id: { type: String },
      task: { type: String },
      completed: { type: Boolean },
      _isEditing: { type: Boolean },
      _previousTaskValue: { type: String },
    };
  }

  static get styles() {
    return [
      reset,
      tokens,
      css`
        :host {
          --background: var(--gray--0);
          --corner: 0.5rem;
          --border-color: var(--gray--2);
          --shadow: var(--shadow--sm);

          color: var(--gray--9);
        }

        .task {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          padding: 1rem 1.5rem;
          background: var(--background);
          border-radius: var(--corner);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow);
        }

        .edit-area {
          box-sizing: border-box;
          padding: 0.5rem;
          border-radius: var(--corner);
          background: transparent;
          transition: background 150ms ease-in-out;
          height: calc(2rem + 1rem);
          flex-grow: 1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.25rem;
        }

        .edit-area:hover {
          background: var(--gray--1);
        }

        .edit-area:focus {
          outline: none;
          background: var(--gray--1);
        }

        .edit-area todo-input {
          flex-grow: 1;
        }

        .edit-area #edit {
          cursor: pointer;
          transition: opacity 150ms ease-in-out;
          opacity: 0;
        }

        .edit-area #edit:hover {
          text-decoration: underline;
        }

        .edit-area:hover #edit {
          opacity: 1;
        }
        .edit-area:focus #edit {
          opacity: 1;
        }

        .completed {
          text-decoration: line-through;
          opacity: 0.75;
        }
      `,
    ];
  }

  constructor() {
    super();

    this._isEditing = false;
  }

  connectedCallback() {
    super.connectedCallback();
    this._previousTaskValue = this.task;
  }

  _handleChangeDispatch(id, task) {
    if (this.task !== this._previousTaskValue) {
      this._previousTaskValue = this.task;
      this.dispatchEvent(new CustomEvent('edit', { detail: { id, task } }));
    }
  }

  _handleEditOpen() {
    if (!this._isEditing) {
      this._isEditing = true;
    }
  }

  _handleEditClose() {
    const { id, task } = this;
    if (this._isEditing) {
      this._isEditing = false;
    }

    this._handleChangeDispatch(id, task);
  }

  _handleSubmit(e) {
    const { id, task } = this;

    if (e.code === 'Enter') {
      this._handleChangeDispatch(id, task);

      if (this._isEditing) {
        this._isEditing = false;
      }
    }
  }

  _handleTaskInput(e) {
    e.preventDefault();

    this.task = e.target.value;
  }

  _handleCompletedToggle() {
    const { id } = this;
    this.completed = !this.completed;

    this.dispatchEvent(
      new CustomEvent('completed', {
        detail: { id, completed: this.completed },
      })
    );
  }

  _handleDeleteTask() {
    const { id } = this;

    this.dispatchEvent(new CustomEvent('delete', { detail: { id } }));
  }

  render() {
    return html`
      <div class="task">
        <div class="edit-area" tabindex="0">
          ${this._isEditing
            ? html`
                <todo-input
                  placeholder="Enter a task"
                  value=${this.task}
                  @change=${this._handleTaskInput}
                  @keydown=${this._handleSubmit}
                ></todo-input>
                <todo-button
                  @click=${this._handleEditClose}
                  ?disabled=${this.task === ''}
                  type="submit"
                  >Update</todo-button
                >
              `
            : html`
                <h3 class=${this.completed ? 'completed' : ''}>${this.task}</h3>
                ${!this.completed
                  ? html`
                      <a
                        id="edit"
                        @click=${this._handleEditOpen}
                        role="button"
                        tabindex="0"
                        >Edit</a
                      >
                    `
                  : ''}
              `}
        </div>
        <div class="button-container">
          <todo-button
            @click=${this._handleCompletedToggle}
            ?disabled=${this._isEditing}
          >
            ${this.completed ? 'Undo' : 'Done'}
          </todo-button>
          <todo-button
            kind="danger"
            ?disabled=${this._isEditing}
            @click=${this._handleDeleteTask}
            >Delete</todo-button
          >
        </div>
      </div>
    `;
  }
}
