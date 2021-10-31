import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/components/Input/index.js';

describe('Input', () => {
  let component;

  beforeEach(async () => {
    component = await fixture(html`<todo-input></todo-input>`);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });
});
