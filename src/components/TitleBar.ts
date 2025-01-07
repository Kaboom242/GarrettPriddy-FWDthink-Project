import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('title-bar')
export default class TitleBar extends LitElement {
  // Define styles for the component
  static styles = css`
    .TitleBar {
      display: grid;
      grid-template-columns: 1fr auto;
      justify-content: space-between;
      align-items: center;
      /* padding: 1rem; */
    }
    .tools {
      display: grid;
      gap: 1rem;
    }
    .icon {
      color: var(--main-color, #007bff);
      font-size: 1.5rem;
      cursor: pointer;
    }
    h1 {
      font-size: 3.2em;
      line-height: 1.1;
      font-weight: 600;
      color: #0e4c87;
      margin: 0;
    }
  `;

  render() {
    return html`
      <div class="TitleBar">
        <h1>Your Resources</h1>
        <div class="tools">
          <!-- Example: Replace with actual buttons or functionality -->
           Placeholder
          <i class="icon bi bi-pencil"></i>
        </div>
      </div>
    `;
  }
}
