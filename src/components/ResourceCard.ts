import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';

export class ResourceCard extends LitElement {
  

  // Styles
  static styles = css`
    .card {
      position: relative;
      height: 175px;
      width: 325px;
      overflow: hidden;
      
      padding: 1.2rem;
      /* border: 1px solid #ccc; */
      border-radius: 12px;
      box-sizing: border-box;
      
      text-align: left;
      
      color: white;
      cursor: pointer;
      transition: all 0.3s;
    }
    @media (min-width: 500px) {
      .card {
        height: 215px;
        width: 425px;
      }
    }
    .card:hover {
      box-shadow: 0px 0px 15px #0e4c87;
      top: -1px;
    }
    .card:active {
      box-shadow: 0px 0px 15px #67dbb1;
      top: 1px;
    }
    .background {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-size: cover;
      background-position: center;
      filter: contrast(0.5) brightness(60%);
      z-index: 1;
    }
    .gradient {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%);
      z-index: 2;
    }
    .card-content {
      position: relative;
      z-index: 2;
      width: 100%;

      display: grid;
      grid-template-rows: 2fr 1fr;
      align-items: start;
      gap: 0.5rem;
      color: lightgray;
    }
    .card h3, .card p {
      background: rgba(0, 0, 0, 0.5);
      padding: 0.5rem;
      border-radius: 4px;
    }
    .tags {
      display: flex;
      flex-direction: row; 
      align-items: center;
      justify-content: start;
      gap: 0.1rem;
    }
    .title {
      font-size: 1.1rem;
      font-weight: 100;
      text-align: left;
    }
    .bi-lightbulb {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
    .menuButtons {
        justify-self: end;
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
    }
    .bi-three-dots-vertical {
      font-size:  1.5rem;
    }
    .bi-bookmark-fill {
      font-size:  1.2rem;
    }
    .bookmark-active {
      color: #67dbb1;
    }
    .circle-button {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: none;
      box-sizing: border-box;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: #00263a;
      color: white;

      cursor: pointer;
      transition: all 0.3s;
    }
    .circle-button:hover {
      background-color:rgb(15, 73, 104);
    }
  `;
  
 @property({ type: String }) id: string = '';
  @property({ type: String }) title: string = '';
  @property({ type: Array }) tags: string[] = [];
  @property({ type: String }) img: string = '';
  @property({ type: Boolean }) bookmarked: boolean = false;


  //import Bootcamp icons
  connectedCallback() {
    super.connectedCallback();
    const styleLink = document.createElement('link');
    styleLink.rel = 'stylesheet';
    styleLink.href = '/node_modules/bootstrap-icons/font/bootstrap-icons.css';
    this.shadowRoot?.appendChild(styleLink);
  }

  toggleBookmark(event: Event) {
    event.stopPropagation();
    this.bookmarked = !this.bookmarked;

    // Send to backend to save the bookmark state.
    this.dispatchEvent(
      new CustomEvent('bookmark-toggled', {
        detail: { id: this.id, bookmarked: this.bookmarked },
      })
    );
  }
  openContextMenu(event: Event) {
    event.stopPropagation();
    // Open Context Menu
  }

  openResource() {
  this.dispatchEvent(
    new CustomEvent('open-resource', {
      detail: { 
        id: this.id, 
        title: this.title, 
        tags: this.tags, 
        bookmarked: this.bookmarked 
      }
    })
  );
}

  render() {
    return html`
      <div class="card" @click="${this.openResource}">
        <div class="background" style="background-image: url(${this.img});"></div>
        <div class="gradient"></div>
        <div class="card-content">

          <!-- Menu Buttons -->
          <div class='menuButtons'>
            <div class='circle-button' @click="${this.toggleBookmark}">
              ${this.bookmarked ? html`<i class="bi bi-bookmark-fill bookmark-active"></i>` : html`<i class="bi bi-bookmark-fill"></i>`}
            </div>
            <div class='circle-button'  @click="${this.openContextMenu}">
              <i class="bi bi-three-dots-vertical"></i>
            </div>
          </div>

          <!-- Tags and Title -->
          <div class='tags'>
            <i class="bi bi-lightbulb"></i>
            ${this.tags.map((tag, index) => html`
              ${index > 0 ? html`<i class="bi bi-dot"></i>` : ''}
              <span>${tag}</span>
              ${this.tags.length == 1 ? html`<i class="bi bi-dot"></i><span>Resources</span>` : ''}
            `)}
          </div>
          <div class='title'>${this.title}</div>

        </div>
      </div>
    `;
  }
}
customElements.define('resource-card', ResourceCard);