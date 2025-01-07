import { LitElement, html, css, property } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('filter-chips')
export class FilterChips extends LitElement {
  @property({ type: Array }) chips: string[] = [];
  @property({ type: String }) selectedChip: string = 'ALL';


  private handleChipClick(chip: string): void {
    this.selectedChip = chip;
    this.dispatchEvent(new CustomEvent('chip-selected', { detail: chip }));
  }

  render() {
    return html`
      ${this.chips.map(
        (chip) =>
          html`<div
            class="chip ${this.selectedChip === chip ? 'selected' : ''}"
            @click=${() => this.handleChipClick(chip)}
          >
            ${chip}
          </div>`
      )}
    `;
  }

  static styles = css`
    .chip {
      display: inline-block;
      padding: 0.5em 1em;
      margin: 0.2em;
      border-radius: 16px;
      background: #f0f0f0;
      cursor: pointer;
    }
    .chip.selected {
      background: #007bff;
      color: white;
    }
  `;

}
