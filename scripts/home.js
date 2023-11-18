class Navigation {
    constructor() {

        this.financeRegularBtn = document.querySelector('.regular-finance-menu')
        this.healthRegularBtn = document.querySelector('.regular-health-menu')
        this.scienceRegularBtn = document.querySelector('.regular-science-menu')
        this.mathRegularBtn = document.querySelector('.regular-math-menu')

        this.healthRegularMenu = document.querySelector('.regular-health-menu-sub-nav')
        this.financeRegularMenu = document.querySelector('.regular-finance-menu-sub-nav')
        this.scienceRegularMenu = document.querySelector('.regular-science-menu-sub-nav')
        this.mathRegularMenu = document.querySelector('.regular-math-menu-sub-nav')

        this.exitBtnHealth = document.querySelector('#exit-btn-health')
        this.exitBtnFinance = document.querySelector('#exit-btn-finance')
        this.exitBtnScience = document.querySelector('#exit-btn-science')
        this.exitBtnMath = document.querySelector('#exit-btn-math')

        this.mobileHealthBtn = document.querySelector('.mobile-health-menu-btn')
        this.mobileScienceBtn = document.querySelector('.mobile-science-menu-btn')
        this.mobileFinanceBtn = document.querySelector('.mobile-finance-menu-btn')
        this.mobileMathBtn = document.querySelector('.mobile-math-menu-btn')

        this.mobileHealthMenu = document.querySelector('.mobile-health-menu')
        this.mobileScienceMenu = document.querySelector('.mobile-science-menu')
        this.mobileFinanceMenu = document.querySelector('.mobile-finance-menu')
        this.mobileMathMenu =document.querySelector('.mobile-math-menu')


        this.hamburgerMenu = document.querySelector('.hamburger-menu')
        this.bar1 = document.querySelector('#bar1')
        this.bar2 = document.querySelector('#bar2')
        this.bar3 = document.querySelector('#bar3')
        this.mobileMenu = document.querySelector('.mobile-screen-menu')
        this.initRegularNavBtns()
        this.hamburgerMenuClicked()
        this.exitBtnHealthClicked()
        this.exitBtnFinanceClicked()
        this.exitBtnMathClicked()
        this.exitBtnScienceClicked()
        this.initMobileBtns()
    }

    initRegularNavBtns() {
        this.financeRegularBtn.addEventListener('click', () => {
            if(!this.financeRegularMenu.classList.contains('regular-active')) {
                this.resetMenuScreens()
                console.log('Science Clicked')
                this.financeRegularMenu.classList.toggle('regular-active')
            } else if(this.financeRegularMenu.classList.contains('regular-active')) {
                this.financeRegularMenu.classList.toggle('regular-active')
            }
        })

        this.healthRegularBtn.addEventListener('click', () => {
            if(!this.healthRegularMenu.classList.contains('regular-active')) {
                this.resetMenuScreens()
                console.log('Science Clicked')
                this.healthRegularMenu.classList.toggle('regular-active')
            } else if(this.healthRegularMenu.classList.contains('regular-active')) {
                this.healthRegularMenu.classList.toggle('regular-active')
            }
        })

        this.scienceRegularBtn.addEventListener('click', () => {
            if(!this.scienceRegularMenu.classList.contains('regular-active')) {
                this.resetMenuScreens()
                console.log('Science Clicked')
                this.scienceRegularMenu.classList.toggle('regular-active')
            } else if(this.scienceRegularMenu.classList.contains('regular-active')) {
                this.scienceRegularMenu.classList.toggle('regular-active')
            }
        })

        this.mathRegularBtn.addEventListener('click', () => {
            if(!this.mathRegularMenu.classList.contains('regular-active')) {
                this.resetMenuScreens()
                console.log('Science Clicked')
                this.mathRegularMenu.classList.toggle('regular-active')
            } else if(this.mathRegularMenu.classList.contains('regular-active')) {
                this.mathRegularMenu.classList.toggle('regular-active')
            }
        })
    }

    initMobileBtns() {
        this.mobileHealthBtn.addEventListener('click', () => {
            this.mobileHealthMenu.classList.toggle('mobile-menu-active')
        })
        this.mobileFinanceBtn.addEventListener('click', () => {
            this.mobileFinanceMenu.classList.toggle('mobile-menu-active')
        })
        this.mobileMathBtn.addEventListener('click', () => {
            this.mobileMathMenu.classList.toggle('mobile-menu-active')
        })
        this.mobileScienceBtn.addEventListener('click', () => {
            this.mobileScienceMenu.classList.toggle('mobile-menu-active')
        })
    }

    exitBtnHealthClicked() {
        this.exitBtnHealth.addEventListener('click', () => {
        this.mobileHealthMenu.classList.toggle('mobile-menu-active')
        })
    }

    exitBtnFinanceClicked() {
        this.exitBtnFinance.addEventListener('click', () => {
            this.mobileFinanceMenu.classList.toggle('mobile-menu-active')
        })
    }

    exitBtnScienceClicked() {
        this.exitBtnScience.addEventListener('click', () => {
            this.mobileScienceMenu.classList.toggle('mobile-menu-active')
        })
    }

    exitBtnMathClicked() {
        this.exitBtnMath.addEventListener('click', () => {
            this.mobileMathMenu.classList.toggle('mobile-menu-active')
        })
    }

    resetMenuScreens() {
        if(this.financeRegularMenu.classList.contains('regular-active')) this.financeRegularMenu.classList.toggle('regular-active')
        if(this.healthRegularMenu.classList.contains('regular-active')) this.healthRegularMenu.classList.toggle('regular-active')
        if(this.scienceRegularMenu.classList.contains('regular-active')) this.scienceRegularMenu.classList.toggle('regular-active')
        if(this.mathRegularMenu.classList.contains('regular-active')) this.mathRegularMenu.classList.toggle('regular-active')
    }

    hamburgerMenuClicked() {
        this.hamburgerMenu.addEventListener('click', () => {
            console.log('Hamburger Clicked')
            if(!this.mobileMenu.classList.contains('mobile-screen-menu-active')) {
                this.mobileMenu.classList.toggle('mobile-screen-menu-active')
                this.bar1.classList.toggle('rotate-bar1')
                this.bar2.classList.toggle('fade-bar2')
                this.bar3.classList.toggle('rotate-bar3')
            } else {
                this.mobileMenu.classList.toggle('mobile-screen-menu-active')
                this.bar1.classList.toggle('rotate-bar1')
                this.bar2.classList.toggle('fade-bar2')
                this.bar3.classList.toggle('rotate-bar3')
            }
        })
    }
}

new Navigation();