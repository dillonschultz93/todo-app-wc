import { html } from 'lit';
import '../src/components/Input/index.js';

export default {
  title: 'Input',
  component: 'todo-input',
};

function Template({ label, placeholder }) {
  return html`
    <todo-input
      label=${label}
      placeholder=${placeholder}
      @change=${e => console.log(e)}
    ></todo-input>
  `;
}

export const Input = Template.bind({});
Input.args = {
  label: 'Label',
  placeholder: 'Placeholder',
};
