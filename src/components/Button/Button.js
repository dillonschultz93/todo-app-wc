import { LitElement, html, css } from 'lit';
import { reset, tokens } from '../../styles/globalStyles.js';

export class Button extends LitElement {
  static get properties() {
    return {
      type: { type: String },
      kind: { type: String },
      disabled: { type: Boolean },
    };
  }

  static get styles() {
    return [
      reset,
      tokens,
      css`
        :host {
          --color: var(--gray--9);
          --border-color: var(--gray--9);
          --background: transparent;
          --corner: 0.25rem;
          --padding: 0.25rem 1rem;
          font-weight: 600;
        }

        :host([kind='primary']) {
          --color: var(--gray--0);
          --background: var(--indigo--5);
          --border-color: var(--indigo--5);
        }

        :host([kind='primary']) button:hover:not(:disabled) {
          --border-color: var(--indigo--7);
          background: var(--indigo--7);
          box-shadow: var(--shadow---medium);
        }

        :host([kind='primary']) button:focus:not(:disabled) {
          outline: none;
          background: var(--indigo--7);
          box-shadow: var(--shadow---medium);
        }

        :host([kind='primary']) button:active:not(:disabled) {
          --border-color: var(--indigo--8);
          outline: none;
          background: var(--indigo--8);
          box-shadow: var(--shadow---short);
        }

        :host([kind='primary']) button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        :host([kind='danger']) {
          --color: var(--red--7);
          --border-color: var(--red--7);
        }

        :host([kind='danger']) button:hover:not(:disabled) {
          --border-color: var(--red--8);
          background: var(--red--0);
        }

        :host([kind='danger']) button:focus:not(:disabled) {
          --border-color: var(--red--9);
          outline: none;
          background: var(--red--0);
        }

        :host([kind='danger']) button:active:not(:disabled) {
          --border-color: var(--red--9);
          outline: none;
          background: var(--red--1);
        }

        :host([kind='danger']) button:disabled {
          cursor: not-allowed;
          opacity: 0.5;
        }

        button {
          appearance: none;
          cursor: pointer;
          border: 1px solid var(--border-color);
          border-radius: var(--corner);
          background: var(--background);
          color: var(--color);
          padding: var(--padding);
          transition: all 150ms ease-in-out;
          height: 2rem;
        }

        button:hover:not(:disabled) {
          background: var(--gray--1);
        }

        button:focus:not(:disabled) {
          background: var(--gray--1);
          outline: none;
        }

        button:active:not(:disabled) {
          background: var(--gray--2);
        }
      `,
    ];
  }

  constructor() {
    super();

    this.type = 'button';
    this.kind = 'neutral';
  }

  render() {
    return html`
      <button .type=${this.type} ?disabled=${this.disabled}>
        <slot></slot>
      </button>
    `;
  }
}
