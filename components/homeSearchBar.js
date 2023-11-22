class homeSearchBar extends HTMLElement {
    constructor() {
        super()
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="styles/search.css">
        <div class="searchbar-container">
            <div>
                <input type="text" placeholder="Search..." id="searchbar">
                <ul id="dropdown">
                
                </ul>
            </div>
        </div>`
    }
}

customElements.define('home-search-bar', homeSearchBar)