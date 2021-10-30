import { html } from 'lit';
import '../src/todo-app.js';

export default {
  title: 'TodoApp',
  component: 'todo-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <todo-app
      style="--todo-app-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </todo-app>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
