import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('chip-button')
export default class ChipButton extends LitElement {
  // Define styles for the component
  static styles = css`
    .chip {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 0.25rem;
      background-color: #f1f1f1;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: background-color 0.3s;
      transition: border 0.3s;
    }
    .chip:hover {
      background-color: #e0e0e0;
    }
    .chip.active {
      background-color: #2196F3;
      color: white;
    }
  `;

  // Define properties
  @property({ type: String }) label?: string = '';
  @property({ type: Boolean }) active: boolean = false;


  // Toggle active state on click
  private toggleActive() {
    this.active = !this.active;
    this.dispatchEvent(new CustomEvent('chip-toggle', { detail: { active: this.active } }));
  }

  render() {
    return html`
      <div
        class="chip ${this.active ? 'active' : ''}"
        @click=${this.toggleActive}
      >
        ${this.label}
      </div>
    `;
  }
}
