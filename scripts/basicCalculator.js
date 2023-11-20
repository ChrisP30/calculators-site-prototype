class Calculator {
    constructor() {
        this.deleteKey = document.querySelector('#delete-key')
        this.clearKey = document.querySelector('#clear-key')
        this.equalKey = document.querySelector('#equal-key')
        this.decimalKey = document.querySelector('#decimal-key')
        this.minusKey = document.querySelector('#minus-key')
        this.plusKey = document.querySelector('#plus-key')
        this.timesKey = document.querySelector('#times-key')
        this.divideKey = document.querySelector('#divide-key')
        this.oneKey = document.querySelector('#key-1')
        this.twoKey = document.querySelector('#key-2')
        this.threeKey = document.querySelector('#key-3')
        this.fourKey = document.querySelector('#key-4')
        this.fiveKey = document.querySelector('#key-5')
        this.sixKey = document.querySelector('#key-6')
        this.sevenKey = document.querySelector('#key-7')
        this.eightKey = document.querySelector('#key-8')
        this.nineKey = document.querySelector('#key-9')
        this.zeroKey = document.querySelector('#key-0')
        this.history = document.querySelector('#history')
        this.current = document.querySelector('#current')

        this.deleteClicked();
        this.clearClicked();
        this.initEventListeners();
    }

    initEventListeners() {
        this.oneKey.addEventListener('click', () => {
            this.appendNumber('1');
        });
        
        this.twoKey.addEventListener('click', () => {
            this.appendNumber('2');
        });
        
        this.threeKey.addEventListener('click', () => {
            this.appendNumber('3');
        });
        
        this.fourKey.addEventListener('click', () => {
            this.appendNumber('4');
        });
        
        this.fiveKey.addEventListener('click', () => {
            this.appendNumber('5');
        });
        
        this.sixKey.addEventListener('click', () => {
            this.appendNumber('6');
        });
        
        this.sevenKey.addEventListener('click', () => {
            this.appendNumber('7');
        });
        
        this.eightKey.addEventListener('click', () => {
            this.appendNumber('8');
        });
        
        this.nineKey.addEventListener('click', () => {
            this.appendNumber('9');
        });
        
        this.zeroKey.addEventListener('click', () => {
            this.appendNumber('0');
        });
        
        this.decimalKey.addEventListener('click', () => {
            this.appendDecimal('.');
        });
        
        this.plusKey.addEventListener('click', () => {
            this.chooseOperation('+');
        });
        
        this.minusKey.addEventListener('click', () => {
            this.chooseOperation('-');
        });
        
        this.timesKey.addEventListener('click', () => {
            this.chooseOperation('x');
        });
        
        this.divideKey.addEventListener('click', () => {
            this.chooseOperation('÷');
        });
        
        this.equalKey.addEventListener('click', () => {
            this.compute();
        });
    }

    deleteClicked() {
        this.deleteKey.addEventListener('click', () => {
            console.log('delete clicked')
            let currentNum = this.current.textContent;
            let currentArr = currentNum.split('')
            currentArr.pop()

            this.current.textContent = currentArr.join('')

        })
    }

    clearClicked() {
        this.clearKey.addEventListener('click', () => {
            this.history.textContent = ""
            this.current.textContent = '0'
        })
    }

    appendDecimal(decimal) {
        if(!this.current.textContent.includes('.')) {
            this.current.textContent += `${decimal}`
        } else{
            return;
        }
    }

    appendNumber(number) {
        if(this.current.textContent === '0' && number === '0') return;
        if(this.current.textContent === '0' && number !== '0') {
            this.current.textContent = number;
            return;
        }
        this.current.textContent += number
    }

    chooseOperation(operation) {
        if (this.current.textContent === '') return;
        if (this.history.textContent !== '') {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.current.textContent;
        this.history.textContent = `${this.previousOperand} ${operation} `;
        this.current.textContent = '';
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.current.textContent);
        if (isNaN(prev) || isNaN(current)) return;
        switch (this.operation) {
            case '+':
                computation = prev + current;
                break;
            case '-':
                computation = prev - current;
                break;
            case 'x':
                computation = prev * current;
                break;
            case '÷':
                computation = prev / current;
                break;
            default:
                return;
        }
        this.current.textContent = computation;
        this.history.textContent = `${this.previousOperand} ${this.operation} ${current} =`;
        this.operation = undefined
        this.previousOperand = ''
    }

}

new Calculator();