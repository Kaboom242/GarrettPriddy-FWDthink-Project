import { LitElement, html, css } from 'lit';

export default class ChipButton extends LitElement {
  // Define styles for the component
  static styles = css`
    .chip {
      position: relative;
      display: inline-block;
      padding: 0.3rem 1.1rem;
      margin: 0.25rem;
      font-size: 1rem;
      font-weight: 600;
      color: rgb(59, 59, 59);

      border: 1px solid rgb(59, 59, 59);
      border-radius: 2rem;
      background-color: white;
      box-sizing: border-box;

      cursor: pointer;
      transition:
        all 0.3s,
        padding-left 0.5s;
      padding-left: 1rem;
    }
    .chip:hover {
      background-color: #e0e0e0;

      top: -1px;
    }
    .chip.active {
      background-color: #c9e6ff;
      border-color: white;
      padding-left: 2rem;
    }
    .bi {
      position: absolute;
      left: 0.5rem;
      opacity: 0;
      transition: opacity 1s;
    }
    .chip.active .bi {
      opacity: 1;
    }
  `;

  static get properties() {
    return {
      label: { type: String },
      active: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.label = ''; 
    this.active = false; 
  }

  // Boy, I sure do love the shadow DOM
  connectedCallback() {
    super.connectedCallback();
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    //styleLink.href = '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
    styleLink.href = 'https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css'; //
    this.shadowRoot?.appendChild(styleLink);
  }
  // Toggle active state on click
  private toggleActive() {
    this.active = !this.active;
    this.dispatchEvent(new CustomEvent('chip-toggle', { detail: { active: this.active, label: this.label } }));
  }

  render() {
    return html`
      <div
        class="chip ${this.active ? 'active' : ''}"
        @click=${this.toggleActive}
      >
        ${this.active ? html`<i class="bi bi-check2"></i>` : ''} ${this.label}
      </div>
    `;
  }
}

customElements.define('chip-button', ChipButton);
