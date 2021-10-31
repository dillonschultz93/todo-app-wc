import { LitElement, html, css } from 'lit';
import { reset, tokens } from '../../styles/globalStyles.js';

export class Input extends LitElement {
  static get properties() {
    return {
      value: { type: String },
      label: { type: String },
      placeholder: { type: String },
      disabled: { type: Boolean },
    };
  }

  static get styles() {
    return [
      reset,
      tokens,
      css`
        :host {
          --border-color: var(--gray--9);
          --background: var(--gray--0);
          --corner: 0.25rem;
          font-family: var(--font);
        }

        input {
          appearance: none;
          outline: none;
          border-radius: var(--corner);
          border: 1px solid var(--border-color);
          background: var(--background);
          color: var(--gary--9);
          height: 2rem;
          width: 100%;
          padding: 0 0.5rem;
          transition: all 150ms ease-in-out;
        }

        input::placeholder {
          color: var(--gray--7);
        }

        input:hover:not(:disabled) {
          --border-color: var(--indigo--5);
        }

        input:focus:not(:disabled) {
          --border-color: var(--indigo--5);
          box-shadow: 0 0 0 2px var(--indigo--2);
        }

        input:active:not(:disabled) {
          --border-color: var(--indigo--7);
          box-shadow: 0 0 0 2px var(--indigo--2);
        }

        input:disabled {
          cursor: not-allowed;
          background: var(--gray--1);
          opacity: 0.5;
        }
      `,
    ];
  }

  static get formAssociated() {
    return true;
  }

  static get observedAttributes() {
    return [...super.observedAttributes, 'aria-labelledby'];
  }

  constructor() {
    super();

    this.internals = this.attachInternals();
    this.value = '';
  }

  update(changed) {
    if (changed.has('value')) {
      this.internals.setFormValue(this.value);
    }

    super.update(changed);
  }

  attributeChangedCallback(name, oldVal, newVal) {
    if (name === 'aria-labelledby') {
      if (!this._removingLabelledBy) {
        const elements = this.ariaLabelledByElements;
        this._removingLabelledBy = true;
        this.removeAttribute('aria-labelledby');
        this.shadowRoot.querySelector('input').ariaLabelledByElements =
          elements;
      } else {
        this._removingLabelledBy = false;
      }
    }

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  _handleChange(e) {
    this.value = e.target.value;

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: this.value,
      })
    );
  }

  render() {
    return html`
      ${this.label
        ? html`
            <label id="label" ?disabled=${this.disabled}>${this.label}</label>
          `
        : ''}
      <input
        aria-labelledby="label"
        type="text"
        .value=${this.value}
        .placeholder=${this.placeholder}
        ?disabled=${this.disabled}
        @input=${this._handleChange}
      />
    `;
  }
}
