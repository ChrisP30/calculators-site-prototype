class otherSearchFunctionality {
    constructor() {
        this.searchbar = document.querySelector('#searchbar');
        this.dropDownDiv = document.querySelector('#dropdown');

        this.searchbarTyped()

    }

    async fetchData() {
        try {
            const response = await fetch('../data/data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data; 
        } catch (error) {
            console.error('Error fetching data: ', error);
        }
    }

    async searchData(query) {
        try {
            const data = await this.fetchData();
            if (!data) return;

            const queryLower = query.toLowerCase();

        const filteredData = data.filter(item => 
            item.name.toLowerCase().includes(queryLower) || 
            item.type.toLowerCase().includes(queryLower)
        );
            const limitedData = filteredData.slice(0, 10);
            return limitedData;
        } catch (error) {
            console.error('Error in searchData: ', error);
        }
    }

    searchbarTyped() {
        this.searchbar.addEventListener('input', async () => { 
            if (this.searchbar.value !== '') {
                this.search = this.searchbar.value;
                this.dropDownDiv.innerHTML = ''
                this.dropDownDiv.style.display = 'block';
                try {
                    this.data = await this.searchData(this.search); 
                    if (this.data) {
                        this.data.forEach(element => {
                            this.item = document.createElement('li')
                            this.item.textContent = `${element.name}`
                            this.item.addEventListener('click', () => {
                                window.location.href = `../${element.location}`
                            })
                            this.dropDownDiv.appendChild(this.item)
                        });
                    }
                } catch (error) {
                    console.error('Error processing data: ', error);
                }
            } else {
                this.dropDownDiv.style.display = 'none';
            }
        });
    }
    
}

new otherSearchFunctionality();