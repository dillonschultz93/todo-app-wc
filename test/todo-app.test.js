import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';

import '../src/todo-app.js';

describe('TodoApp', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`<todo-app></todo-app>`);
  });

  it('renders a h1', () => {
    expect(element).to.exist;
  });
});
