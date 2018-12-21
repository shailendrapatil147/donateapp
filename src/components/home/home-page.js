class HomePage extends Polymer.Element {
    static get is() { return 'home-page'; }

    static get properties() {};

    getQuote() {
        this.$.getQuoteAjax.generateRequest();
    }
}
window.customElements.define(HomePage.is, HomePage);