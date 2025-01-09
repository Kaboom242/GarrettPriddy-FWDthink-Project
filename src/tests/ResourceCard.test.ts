import { html, fixture, expect } from '@open-wc/testing';
import '../components/ResourceCard';

describe('ResourceCard Component', () => {
  it('renders correctly with given properties', async () => {
    const element = await fixture(
      html`
        <resource-card
          id="1"
          title="Test Resource"
          .tags=${['JavaScript', 'Web']}
          img="test-image.jpg"
          bookmarked
        ></resource-card>
      `
    );

    const title = element.shadowRoot?.querySelector('.title')?.textContent;
    const tags = Array.from(element.shadowRoot?.querySelectorAll('.tags span') || []).map(
      (tag) => tag.textContent
    );

    expect(title).to.equal('Test Resource');
    expect(tags).to.deep.equal(['JavaScript', 'Web']);
    expect(element.shadowRoot?.querySelector('.background')?.getAttribute('style')).to.include(
      'test-image.jpg' //todo replace with test image.
    );
    expect(
      element.shadowRoot?.querySelector('.bi-bookmark-fill')?.classList.contains(
        'bookmark-active'
      )
    ).to.be.true;
  });

  it('toggles bookmarked state when the bookmark button is clicked', async () => {
    const element: any = await fixture(
      html`
        <resource-card
          id="1"
          title="Test Resource"
          .tags=${['JavaScript']}
          img="test-image.jpg"
          bookmarked
        ></resource-card>
      `
    );

    const bookmarkButton = element.shadowRoot?.querySelector('.circle-button')!;
    let bookmarkEventDetail: any = null;

    element.addEventListener('bookmark-toggled', (event: CustomEvent) => {
      bookmarkEventDetail = event.detail;
    });

    // Simulate a bookmark toggle
    bookmarkButton.click();
    expect(element.bookmarked).to.be.false;
    expect(bookmarkEventDetail).to.deep.equal({ id: '1', bookmarked: false });

    // Toggle it back
    bookmarkButton.click();
    expect(element.bookmarked).to.be.true;
    expect(bookmarkEventDetail).to.deep.equal({ id: '1', bookmarked: true });
  });

  it('renders tags correctly', async () => {
    const element = await fixture(
      html`
        <resource-card
          id="1"
          title="Test Resource"
          .tags=${['Tag1', 'Tag2', 'Tag3']}
          img="test-image.jpg"
        ></resource-card>
      `
    );

    const tagElements = element.shadowRoot?.querySelectorAll('.tags span')!;
    expect(tagElements.length).to.equal(3);
    expect(tagElements[0].textContent).to.equal('Tag1');
    expect(tagElements[1].textContent).to.equal('Tag2');
    expect(tagElements[2].textContent).to.equal('Tag3');
  });

  it('dispatches a custom event when the card is clicked', async () => {
    const element: any = await fixture(
      html`
        <resource-card
          id="1"
          title="Test Resource"
          .tags=${['JavaScript']}
          img="test-image.jpg"
        ></resource-card>
      `
    );

    let cardClicked = false;
    element.openResource = () => (cardClicked = true);

    const card = element.shadowRoot?.querySelector('.card');
    card?.click();
    expect(cardClicked).to.be.false;
  });

  it('dispatches no events when the context menu is clicked', async () => {
    const element: any = await fixture(
      html`
        <resource-card
          id="1"
          title="Test Resource"
          .tags=${['JavaScript']}
          img="test-image.jpg"
        ></resource-card>
      `
    );

    let bookmarkEventDetail: any = null;
    let cardClicked = false;

    element.addEventListener('bookmark-toggled', (event: CustomEvent) => {
      bookmarkEventDetail = event.detail;
    });

    element.openResource = () => (cardClicked = true);

    const contextMenuButton = element.shadowRoot?.querySelector('.bi-three-dots-vertical');
    contextMenuButton?.parentElement?.click();

    expect(bookmarkEventDetail).to.be.null;
    expect(cardClicked).to.be.false;
  });
});
