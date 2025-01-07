import { html, fixture, expect } from '@open-wc/testing';
import './ChipButton'; // Import the component to test

describe('ChipButton Component', () => {
  it('renders with a label', async () => {
    const el = await fixture(
      html`<chip-button label="Test Label"></chip-button>`
    );
    const chip = el.shadowRoot?.querySelector('.chip');
    expect(chip).to.exist;
    expect(chip?.textContent).to.contain('Test Label');
  });

  it('applies the "active" class when active property is true', async () => {
    const el = await fixture(
      html`<chip-button label="Test Label" active></chip-button>`
    );
    const chip = el.shadowRoot?.querySelector('.chip');
    expect(chip?.classList.contains('active')).to.be.true;
  });

  it('toggles active state on click', async () => {
    const el: any = await fixture(
      html`<chip-button label="Test Label"></chip-button>`
    );
    const chip = el.shadowRoot?.querySelector('.chip');
    chip?.click();
    expect(el.active).to.be.true;
    chip?.click();
    expect(el.active).to.be.false;
  });

  it('dispatches chip-toggle event on click', async () => {
    const el: any = await fixture(
      html`<chip-button label="Test Label"></chip-button>`
    );
    let eventDetail: any = null;

    el.addEventListener('chip-toggle', (event: CustomEvent) => {
      eventDetail = event.detail;
    });

    const chip = el.shadowRoot?.querySelector('.chip');
    chip?.click();

    expect(eventDetail).to.deep.equal({ label: 'Test Label', active: true });
  });
});
