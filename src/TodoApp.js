import { LitElement, html, css } from 'lit';

export class TodoApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css``;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html``;
  }
}
