export class FancySlider extends HTMLElement {
  value: number;
  // etc...
}
customElements.define('fancy-slider', FancySlider);

declare global {
  interface HTMLElementTagNameMap {
    'fancy-slider': FancySlider,
  }
}
