class DonateApp extends Polymer.Element {
    static get is() { return 'donate-app'; }

    static get properties() {
        return {
            page: {
                type: String,
                reflectToAttribute: true,
                observer: '_pageChanged',
            },
            routeData: Object,
            subroute: String,
            // This shouldn't be neccessary, but the Analyzer isn't picking up
            // Polymer.Element#rootPath
            rootPath: String,
            storedUser: Object
        };
    }

    static get observers() {
        return [
            '_routePageChanged(routeData.page)',
        ];
    }

    _routePageChanged(page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'view1' in that case.
        this.page = page || 'home-page';

        // Close a non-persistent drawer when the page & route are changed.
        if (!this.$.drawer.persistent) {
            this.$.drawer.close();
        }
    }

    _pageChanged(page) {
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl(page + '.html');
        if(page == "publish-work")
            resolvedPageUrl = this.resolveUrl("components/"+ page + '.html');
        if(page == "home-page")
            resolvedPageUrl = this.resolveUrl("components/home/"+ page + '.html');
        if(page == "log-out")
            resolvedPageUrl = this.resolveUrl("components/logout/"+ page + '.html');
        if(page == "login-page")
            resolvedPageUrl = this.resolveUrl("components/login/"+ page + '.html');
        if(page == "register-page")
            resolvedPageUrl = this.resolveUrl("components/register/"+ page + '.html');
        if(page == "not-found")
            resolvedPageUrl = this.resolveUrl("components/errorpages/"+ page + '.html');
        if(page == "internalserver-error")
            resolvedPageUrl = this.resolveUrl("components/errorpages/"+ page + '.html');
            if(page == "register-page")
            resolvedPageUrl = this.resolveUrl("components/register/"+ page + '.html');
        
        Polymer.importHref(
            resolvedPageUrl,
            null,
            this._showPage404.bind(this),
            true);
    }

    _showPage404() {
        this.page = 'not-found';
    }
}

window.customElements.define(DonateApp.is, DonateApp);