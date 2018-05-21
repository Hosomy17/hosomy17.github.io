import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `hosomy17-github-io`
 * 
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class Hosomy17GithubIo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'hosomy17-github-io',
      },
    };
  }
}

window.customElements.define('hosomy17-github-io', Hosomy17GithubIo);
