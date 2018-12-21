
class RegisterPage extends Polymer.Element {
    static get is() { return 'register-page'; }

    static get properties() {
        return {
            formData: {
                type: Object,
                value: {}
            }
        }
    }
    submit(){
        this.set('route.path', '/home-page');
       
    }
}

window.customElements.define(RegisterPage.is, RegisterPage);