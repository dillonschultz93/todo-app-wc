import { LitElement, html, css } from 'lit';
import { reset, tokens } from './styles/globalStyles.js';

// const logo = new URL('../assets/open-wc-logo.svg', import.meta.url).href;

export class TodoApp extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return [reset, tokens, css``];
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html``;
  }
}
