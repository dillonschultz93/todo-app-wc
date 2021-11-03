import { html } from 'lit';
import '../src/components/TaskItem/index.js';

export default {
  title: 'TaskItem',
  component: 'todo-task-item',
};

function Template({ id, task, completed = false }) {
  return html`
    <todo-task-item
      id=${id}
      task=${task}
      ?completed=${completed}
      @edit=${e => console.log(e)}
      @completed=${e => console.log(e)}
      @delete=${e => console.log(e)}
    ></todo-task-item>
  `;
}

export const TaskItem = Template.bind({});
TaskItem.args = {
  id: 'djasklfldhsakhfliuerlkewub',
  task: 'This is a task',
  completed: false,
};
