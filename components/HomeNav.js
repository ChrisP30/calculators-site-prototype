class HomeTopNavigation extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <link rel="stylesheet" href="styles/home-navbars.css">
        <link rel="stylesheet" href="styles/home-mobile.css">
        <link rel="stylesheet" href="styles/hamburgerAnimation.css">
        <nav class="navbar-regular-logo">
        <div class="hamburger-menu">
            <span class="bars" id="bar1"></span>
            <span class="bars" id="bar2"></span>
            <span class="bars" id="bar3"></span>
        </div>
        <a href="index.html">
            <h1>The Calculator Pro</h1>
        </a>
    </nav>
    <nav class="navbar-regular-menu">
        <div class="regular-health-menu">
            <h2>Health</h2>
            <div class="menu-img-container"><img src="../images/menu-down.png" alt=""></div>
        </div>
        <div class="regular-finance-menu">
            <h2>Finance</h2>
            <div class="menu-img-container"><img src="../images/menu-down.png" alt=""></div>
        </div>
        <div class="regular-math-menu">
            <h2>Math</h2>
            <div class="menu-img-container"><img src="../images/menu-down.png" alt=""></div>
        </div>
        <div class="regular-science-menu">
            <h2>Science</h2>
            <div class="menu-img-container"><img src="../images/menu-down.png" alt=""></div>
        </div>
    </nav>
    <nav class="mobile-screen-menu">
        <div class="mobile-health-menu-btn">
            <h2>Health</h2>
        </div>
        <div class="mobile-finance-menu-btn">
            <h2>Finance</h2>
        </div>
        <div class="mobile-math-menu-btn">
            <h2>Math</h2>
        </div>
        <div class="mobile-science-menu-btn">
            <h2>Science</h2>
        </div>
    </nav>
    <nav class="mobile-health-menu mobile-menus">
        <div class="exit-btn-container">
            <img src="images/alpha-x.png" alt="" id="exit-btn-health">
        </div>
        <div class="mobile-list-1">
            <ul>
                <li><a href="healthpages/BMICal.html">BMI Calculator</a></li>
                    <li><a href="healthpages/CalorieCal.html">Calorie Calculator</a></li>
                    <li><a href="healthpages/ProteinCal.html">Protein Calculator</a></li>
                    <li><a href="healthpages/LeanBodyCal.html">Lean Body Mass Calculator</a></li>
                    <li><a href="healthpages/BodyFatCal.html">Body Fat Calculator</a></li>
                    <li><a href="healthpages/IdealWeight.html">Ideal Weight Calculator</a></li>
                    <li><a href="healthpages/ArmyFat.html">Army Body Fat Calculator</a></li>
            </ul>
        </div>
        <div class="mobile-list-2">
            <ul>
                <li><a href="healthpages/OneRepMax.html">One Rep Max Calculator</a></li>
                <li><a href="healthpages/MeasurementCal.html">Measurement Converter</a></li>
                <li><a href="healthpages/StepMile.html">Steps to Miles</a></li>
                <li><a href="healthpages/StepKM.html">Steps to KM</a></li>
                <li><a href="healthpages/SoberCal.html">Sobriety Calculator</a></li>
                <li><a href="healthpages/PregnancyCal.html">Pregnancy Calculator</a></li>
            </ul>
        </div>
    </nav>
    <nav class="mobile-finance-menu mobile-menus">
        <div class="exit-btn-container">
            <img src="images/alpha-x.png" alt="" id="exit-btn-finance">
        </div>
        <div class="mobile-list-1">
            <ul>
                <li><a href="financepages/interestCal.html">Interest Calculator</a></li>
                    <li><a href="financepages/k401.html">401k Calculator</a></li>
                    <li><a href="financepages/compoundInterest.html">Compound Interest Calculator</a></li>
                    <li><a href="financepages/autoLoan.html">Auto Loan Calculator</a></li>
                    <li><a href="financepages/rentCal.html">Rent Calculator</a></li>
                    <li><a href="financepages/incomeTax.html">Income Tax Calculator</a></li>
                    <li><a href="financepages/loanCal.html">Loan Calculator</a></li>
            </ul>
        </div>
        <div class="mobile-list-2">
            <ul>
                <li><a href="financepages/salaryCal.html">Salary Calculator</a></li>
                <li><a href="financepages/paycheckCal.html">Paycheck Calculator</a></li>
                <li><a href="financepages/investmentCal.html">Investment Calculator</a></li>
                <li><a href="financepages/savingsCal.html">Savings Calculator</a></li>
                <li><a href="financepages/cdCal.html">CD Calculator</a></li>
                <li><a href="financepages/blackScholes.html">Black-Scholes Calculator</a></li>
                <li><a href="financepages/inflationCal.html">Inflation Calculator</a></li>
            </ul>
        </div>
        <div class="mobile-list-3">
            <ul>
                <li><a href="financepages/marginCal.html">Margin Calculator</a></li>
                    <li><a href="financepages/currencyConverter.html">Currency Converter</a></li>
                    <li><a href="financepages/debtPayoff.html">Debt Payoff Calculator</a></li>
                    <li><a href="financepages/commissionCal.html">Commission Calculator</a></li>
                    <li><a href="financepages/mortgageCal.html">Mortgage Calculator</a></li>
                    <li><a href="financepages/houseAfford.html">House Affordability Calculator</a></li>
                    <li><a href="financepages/roiCal.html">ROI Calculator</a></li>
            </ul>
        </div>
    </nav>
    <nav class="mobile-math-menu mobile-menus">
        <div class="exit-btn-container">
            <img src="images/alpha-x.png" alt="" id="exit-btn-math">
        </div>
        <div class="mobile-list-1">
            <ul>
                <li><a href="mathpages/calculator.html">Calculator</a></li>
                    <li><a href="mathpages/percentageCal.html">Percentage Calculator</a></li>
                    <li><a href="mathpages/QuadraticCal.html">Quadratic Formula Calculator</a></li>
                    <li><a href="mathpages/surfaceArea.html">Surface Area Calculator</a></li>
                    <li><a href="mathpages/areaCal.html">Area Calculator</a></li>
                    <li><a href="mathpages/slopeCal.html">Slope Calculator</a></li>
                    <li><a href="mathpages/distanceCal.html">Distance Calculator</a></li>
            </ul>
        </div>
        <div class="mobile-list-2">
            <ul>
                <li><a href="mathpages/matrixCal.html">Matrix Calculator</a></li>
                <li><a href="mathpages/exponentCal.html">Exponent Calculator</a></li>
                <li><a href="mathpages/randomNum.html">Random Number Calculator</a></li>
                <li><a href="mathpages/ratioCal.html">Ratio Calculator</a></li>
                <li><a href="mathpages/circleCal.html">Circle Calculator</a></li>
                <li><a href="mathpages/pythagorean.html">Pythagorean Theorem Calculator</a></li>
                <li><a href="mathpages/roundingCal.html">Rounding Calculator</a></li>
            </ul>
        </div>
        <div class="mobile-list-3">
            <ul>
                <li><a href="mathpages/hexCal.html">Hex Calculator</a></li>
                    <li><a href="mathpages/probability.html">Probability Calculator</a></li>
                    <li><a href="mathpages/deviation.html">Standard Deviation Calculator</a></li>
                    <li><a href="mathpages/triangleCal.html">Triangle Calculator</a></li>
                    <li><a href="mathpages/volumeCal.html">Volume Calculator</a></li>
                    <li><a href="mathpages/logCal.html">Logarithm Calculator</a></li>
                    <li><a href="mathpages/binaryCal.html">Binary Calculator</a></li>
            </ul>
        </div>
    </nav>
    <nav class="mobile-science-menu mobile-menus">
        <div class="exit-btn-container">
            <img src="images/alpha-x.png" alt="" id="exit-btn-science">
        </div>
        <div class="mobile-list-1">
            <ul>
                <li><a href="sciencepages/ohmsLaw.html">Ohms Law</a></li>
                <li><a href="sciencepages/velocity.html">Velocity</a></li>
                <li><a href="sciencepages/acceleration.html">Acceleration</a></li>
                <li><a href="sciencepages/momentum.html">Momentum</a></li>
                <li><a href="sciencepages/power.html">Power</a></li>
                <li><a href="sciencepages/coulombsLaw.html">Coulomb's Law</a></li>
                <li><a href="sciencepages/electricResistance.html">Electric Resistance</a></li>
            </ul>
        </div>
        <div class="mobile-list-2">
            <ul>
                <li><a href="sciencepages/weight.html">Weight</a></li>
                <li><a href="sciencepages/newtons2nd.html">Newton's Second Law</a></li>
                <li><a href="sciencepages/density.html">Density</a></li>
                <li><a href="sciencepages/frequency.html">Frequency</a></li>
                <li><a href="sciencepages/pressure.html">Pressure</a></li>
                <li><a href="sciencepages/currentDensity.html">Current Density</a></li>
                <li><a href="sciencepages/chargeDensity.html">Charge Density</a></li>
            </ul>
        </div>
        <div class="mobile-list-3">
            <ul>
                <li><a href="sciencepages/kinematics.html">Kinematics</a></li>
                <li><a href="sciencepages/work.html">Work</a></li>
                <li><a href="sciencepages/potentialEnergy.html">Potential Energy</a></li>
                <li><a href="sciencepages/horsepower.html">Horsepower</a></li>
                <li><a href="sciencepages/dotProduct.html">Dot Product</a></li>
                <li><a href="sciencepages/electricPotential.html">Electric Potential</a></li>
                <li><a href="sciencepages/thermo1stLaw.html">1st Law Thermodynamics</a></li>
            </ul>
        </div>
    </nav>
    <div class="regular-health-menu-sub-nav regular-menu">
        <h3>Health</h3>
        <div class="regular-menu-items-container">
            <div class="list-left">
                <ul>
                    <li><a href="healthpages/BMICal.html">BMI Calculator</a></li>
                        <li><a href="healthpages/CalorieCal.html">Calorie Calculator</a></li>
                        <li><a href="healthpages/ProteinCal.html">Protein Calculator</a></li>
                        <li><a href="healthpages/LeanBodyCal.html">Lean Body Mass Calculator</a></li>
                        <li><a href="healthpages/BodyFatCal.html">Body Fat Calculator</a></li>
                        <li><a href="healthpages/IdealWeight.html">Ideal Weight Calculator</a></li>
                        <li><a href="healthpages/ArmyFat.html">Army Body Fat Calculator</a></li>
                </ul>
            </div>
            <div class="list-middle">
                <ul>
                    <li><a href="healthpages/OneRepMax.html">One Rep Max Calculator</a></li>
                    <li><a href="healthpages/MeasurementCal.html">Measurement Converter</a></li>
                    <li><a href="healthpages/StepMile.html">Steps to Miles</a></li>
                    <li><a href="healthpages/StepKM.html">Steps to KM</a></li>
                    <li><a href="healthpages/SoberCal.html">Sobriety Calculator</a></li>
                    <li><a href="healthpages/PregnancyCal.html">Pregnancy Calculator</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="regular-finance-menu-sub-nav regular-menu">
        <h3>Finance</h3>
        <div class="regular-menu-items-container">
            <div class="list-left">
                <ul>
                    <li><a href="financepages/interestCal.html">Interest Calculator</a></li>
                        <li><a href="financepages/k401.html">401k Calculator</a></li>
                        <li><a href="financepages/compoundInterest.html">Compound Interest Calculator</a></li>
                        <li><a href="financepages/autoLoan.html">Auto Loan Calculator</a></li>
                        <li><a href="financepages/rentCal.html">Rent Calculator</a></li>
                        <li><a href="financepages/incomeTax.html">Income Tax Calculator</a></li>
                        <li><a href="financepages/loanCal.html">Loan Calculator</a></li>
                </ul>
            </div>
            <div class="list-middle">
                <ul>
                    <li><a href="financepages/salaryCal.html">Salary Calculator</a></li>
                    <li><a href="financepages/paycheckCal.html">Paycheck Calculator</a></li>
                    <li><a href="financepages/investmentCal.html">Investment Calculator</a></li>
                    <li><a href="financepages/savingsCal.html">Savings Calculator</a></li>
                    <li><a href="financepages/cdCal.html">CD Calculator</a></li>
                    <li><a href="financepages/blackScholes.html">Black-Scholes Calculator</a></li>
                    <li><a href="financepages/inflationCal.html">Inflation Calculator</a></li>
                </ul>
            </div>
            <div class="list-right">
                <ul>
                    <li><a href="financepages/marginCal.html">Margin Calculator</a></li>
                        <li><a href="financepages/currencyConverter.html">Currency Converter</a></li>
                        <li><a href="financepages/debtPayoff.html">Debt Payoff Calculator</a></li>
                        <li><a href="financepages/commissionCal.html">Commission Calculator</a></li>
                        <li><a href="financepages/mortgageCal.html">Mortgage Calculator</a></li>
                        <li><a href="financepages/houseAfford.html">House Affordability Calculator</a></li>
                        <li><a href="financepages/roiCal.html">ROI Calculator</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="regular-math-menu-sub-nav regular-menu">
        <h3>Math</h3>
        <div class="regular-menu-items-container">
            <div class="list-left">
                <ul>
                    <li><a href="mathpages/calculator.html">Calculator</a></li>
                        <li><a href="mathpages/percentageCal.html">Percentage Calculator</a></li>
                        <li><a href="mathpages/QuadraticCal.html">Quadratic Formula Calculator</a></li>
                        <li><a href="mathpages/surfaceArea.html">Surface Area Calculator</a></li>
                        <li><a href="mathpages/areaCal.html">Area Calculator</a></li>
                        <li><a href="mathpages/slopeCal.html">Slope Calculator</a></li>
                        <li><a href="mathpages/distanceCal.html">Distance Calculator</a></li>
                </ul>
            </div>
            <div class="list-middle">
                <ul>
                    <li><a href="mathpages/matrixCal.html">Matrix Calculator</a></li>
                    <li><a href="mathpages/exponentCal.html">Exponent Calculator</a></li>
                    <li><a href="mathpages/randomNum.html">Random Number Calculator</a></li>
                    <li><a href="mathpages/ratioCal.html">Ratio Calculator</a></li>
                    <li><a href="mathpages/circleCal.html">Circle Calculator</a></li>
                    <li><a href="mathpages/pythagorean.html">Pythagorean Theorem Calculator</a></li>
                    <li><a href="mathpages/roundingCal.html">Rounding Calculator</a></li>
                </ul>
            </div>
            <div class="list-right">
                <ul>
                    <li><a href="mathpages/hexCal.html">Hex Calculator</a></li>
                        <li><a href="mathpages/probability.html">Probability Calculator</a></li>
                        <li><a href="mathpages/deviation.html">Standard Deviation Calculator</a></li>
                        <li><a href="mathpages/triangleCal.html">Triangle Calculator</a></li>
                        <li><a href="mathpages/volumeCal.html">Volume Calculator</a></li>
                        <li><a href="mathpages/logCal.html">Logarithm Calculator</a></li>
                        <li><a href="mathpages/binaryCal.html">Binary Calculator</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="regular-science-menu-sub-nav regular-menu">
        <h3>Science</h3>
        <div class="regular-menu-items-container">
            <div class="list-left">
                <ul>
                    <li><a href="sciencepages/ohmsLaw.html">Ohms Law</a></li>
                    <li><a href="sciencepages/velocity.html">Velocity</a></li>
                    <li><a href="sciencepages/acceleration.html">Acceleration</a></li>
                    <li><a href="sciencepages/momentum.html">Momentum</a></li>
                    <li><a href="sciencepages/power.html">Power</a></li>
                    <li><a href="sciencepages/coulombsLaw.html">Coulomb's Law</a></li>
                    <li><a href="sciencepages/electricResistance.html">Electric Resistance</a></li>
                </ul>
                </ul>
            </div>
            <div class="list-middle">
                <ul>
                    <li><a href="sciencepages/weight.html">Weight</a></li>
                    <li><a href="sciencepages/newtons2nd.html">Newton's Second Law</a></li>
                    <li><a href="sciencepages/density.html">Density</a></li>
                    <li><a href="sciencepages/frequency.html">Frequency</a></li>
                    <li><a href="sciencepages/pressure.html">Pressure</a></li>
                    <li><a href="sciencepages/currentDensity.html">Current Density</a></li>
                    <li><a href="sciencepages/chargeDensity.html">Charge Density</a></li>
                </ul>
            </div>
            <div class="list-right">
                <ul>
                    <li><a href="sciencepages/kinematics.html">Kinematics</a></li>
                    <li><a href="sciencepages/work.html">Work</a></li>
                    <li><a href="sciencepages/potentialEnergy.html">Potential Energy</a></li>
                    <li><a href="sciencepages/horsepower.html">Horsepower</a></li>
                    <li><a href="sciencepages/dotProduct.html">Dot Product</a></li>
                    <li><a href="sciencepages/electricPotential.html">Electric Potential</a></li>
                    <li><a href="sciencepages/thermo1stLaw.html">1st Law Thermodynamics</a></li>
                </ul>
            </div>
        </div>
    </div>`;
    this.initializeNavigationState();
    }

    initializeNavigationState() {
        const regularElementsHide = this.querySelectorAll('.regular-menu');
        regularElementsHide.forEach(el => el.classList.add('hidden-top'))
        const mobileElementsHide = this.querySelectorAll('.mobile-menus')
        mobileElementsHide.forEach(el => el.classList.add('hidden-side-items-menu'))
        const mobileMainMenu = document.querySelector('.mobile-screen-menu')
        mobileMainMenu.classList.add('hidden-side-menu')
    }
}

customElements.define('home-navigation', HomeTopNavigation)