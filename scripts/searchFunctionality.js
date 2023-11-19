class searchFunctionality {
    constructor() {
        this.searchbar = document.querySelector('#searchbar');
        this.dropDownDiv = document.querySelector('#dropdown');

        this.searchbarTyped()

    }

    searchbarTyped() {
        this.searchbar.addEventListener('input', () => {
            if(this.searchbar.value !== '') {
                console.log('value not 0')
                this.dropDownDiv.style.display = 'block';
            } else {
                console.log('value 0')
                this.dropDownDiv.style.display = 'none';
            }
        })
    }
}

new searchFunctionality();