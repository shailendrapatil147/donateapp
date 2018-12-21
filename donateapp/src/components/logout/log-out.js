(function() {
    class LogOut extends Polymer.Element {
        static get is() {
            return 'log-out';
        }

        static get properties() {
            return {
                storedUser: Object,
                link: {
                    type: Boolean,
                    value: false
                }
            }
        }

        logout() {
            this.storedUser = null;
        }
    }

    window.customElements.define(LogOut.is, LogOut);
}());