import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

@customElement('resource-card')
export class ResourceCard extends LitElement {
  // Styles
  static styles = css`
    .card {
      padding: 1rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      text-align: center;
      background-size: cover;
      background-position: center;
      color: white;
      height: 150px;
      width: 350px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .card h3, .card p {
      background: rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      border-radius: 4px;
    }
    button { /*Bookmark Button*/
      margin-top: 0.5rem;
      padding: 0.5rem 1rem;
      background-color: #2196f3;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #1976d2;
    }
  `;

  @property({ type: Object }) resource: { id: number; title: string; tags: string[]; img: string; bookmarked: boolean } = {
    id: 0,
    title: '',
    tags: [],
    img: '',
    bookmarked: false,
  };

  @state() bookmarked = this.resource.bookmarked;

  toggleBookmark() {
    this.bookmarked = !this.bookmarked;
    // Maybe Ill add Bookmarked Cards to a new section or List. Mostly just playing around.
    this.dispatchEvent(
      new CustomEvent('bookmark-toggled', {
        detail: { id: this.resource.id, bookmarked: this.bookmarked },
      })
    );
  }

  render() {
    return html`
      <div class="card" style="background-image: url(${this.resource.img});">
        <h3>${this.resource.title}</h3>
        <button @click=${this.toggleBookmark}>
          ${this.bookmarked ? 'Unbookmark' : 'Bookmark'}
        </button>
      </div>
    `;
  }
}
