import { html } from 'lit';
import '../src/components/Button/index.js';

export default {
  title: 'Button',
  component: 'todo-button',
};

function Template({ innerText }) {
  return html`
    <todo-button type="submit">${innerText}</todo-button>
    <todo-button type="button" kind="primary">${innerText}</todo-button>
    <todo-button type="button" kind="danger">${innerText}</todo-button>
  `;
}

export const Button = Template.bind({});
Button.args = {
  innerText: 'Button',
};
