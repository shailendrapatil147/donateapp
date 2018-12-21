class LoginPage extends Polymer.Element {
    static get is() { return 'login-page'; }

    static get properties() {
        return {
            formData: {
                type: Object,
                value: {}
            },
            storedUser: Object,
            error: String
        }
    }

    _setReqBody() {
        this.$.registerLoginAjax.body = this.formData;
    }

    postLogin() {
        this.$.registerLoginAjax.url = 'http://localhost:3001/sessions/create';
        this._setReqBody();
        this.$.registerLoginAjax.generateRequest();
    }

    postRegister() {
        this.$.registerLoginAjax.url = 'http://localhost:3001/users';
        this._setReqBody();
        this.$.registerLoginAjax.generateRequest();
    }

    handleUserResponse(event) {
        var response = JSON.parse(event.detail.response);

        if (response.id_token) {
            this.error = '';
            this.storedUser = {
                name: this.formData.username,
                id_token: response.id_token,
                access_token: response.access_token,
                loggedin: true
            };
            // redirect to Secret Quotes
            this.set('route.path', '/secret-quotes');
        }

        // reset form data
        this.formData = {};
    }

    handleUserError(event) {
        this.error = event.detail.request.xhr.response;
    }
}

window.customElements.define(LoginPage.is, LoginPage);