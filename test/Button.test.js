import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import '../src/components/Button/index.js';

describe('Button', () => {
  let component;

  beforeEach(async () => {
    component = await fixture(html`<todo-button>Test</todo-button>`);
  });

  it('should exist', () => {
    expect(component).to.exist;
  });

  it('should render with the role of "button"', () => {
    const role = component.type;

    expect(role).to.equal('button');
  });

  it('should render with the role of "submit"', () => {
    component.type = 'submit';

    expect(component.type).to.equal('submit');
  });

  it('should render with default styles', () => {
    expect(component.kind).to.equal('neutral');
  });

  it('should render with primary styles', () => {
    component.kind = 'primary';

    expect(component.kind).to.equal('primary');
  });

  it('should render with danger styles', () => {
    component.kind = 'danger';

    expect(component.kind).to.equal('danger');
  });

  it('should be accessible', async () => {
    await expect(component).shadowDom.to.be.accessible();
  });
});
