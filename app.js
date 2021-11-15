const pwEl = document.querySelector('#pw');
const copyEl = document.querySelector('#copy');
const lenEl = document.querySelector('#len');
const upperEl = document.querySelector('#upper');
const lowerEl = document.querySelector('#lower');
const numberEl = document.querySelector('#number');
const symbolEl = document.querySelector('#symbol');
const generateEl = document.querySelector('#generate');

const upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_-+=";

function getUppercase() {
    return upperLetters[Math.floor(Math.random() * upperLetters.length)];
}

function getLowercase() {
    return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];
}

function getNumbers() {
    return numbers[Math.floor(Math.random() * numbers.length)];
}

function getSymbols() {
    return symbols[Math.floor(Math.random() * symbols.length)];
}

function getPassword() {
    const len = lenEl.value;

    let password = '';

    if(upperEl.checked) {
        password += getUppercase();
    }

    if(lowerEl.checked) {
        password += getLowercase();
    }

    if(numberEl.checked) {
        password += getNumbers();
    }

    if(symbolEl.checked) {
        password += getSymbols();
    }

    for(let i=password.length; i<len; i++) {
        const x = generateX();
        password = password + x;
    }

    pwEl.innerText = password;
}

function generateX() {
    const xs = [];
    if(upperEl.checked) {
        xs.push(getUppercase());
    }

    if(lowerEl.checked) {
        xs.push(getLowercase());
    }

    if(numberEl.checked) {
        xs.push(getNumbers());
    }

    if(symbolEl.checked) {
        xs.push(getSymbols());
    }

    if(xs.length === 0) return " ";

    return xs[Math.floor(Math.random() * xs.length)];
}

generateEl.addEventListener('click', getPassword);

copyEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea');
    const password = pwEl.innerText;

    if (!password) {
        return;
    }
    
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    alert("Password is copied to clipboard");
});
