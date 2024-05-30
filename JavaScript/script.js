console.log('Hello world!')
let a = 1 //dinamikusan tipusos nyelv: nem kell a fajtáját megadni.
console.log(typeof(a));
console.log(1 == '1');
console.log(1 === '1');
var b = 2 // nem használjuk már.
const c = 3 // nem változható az értéke --> konstans
if (c == 3) {
    console.log('c értéke 3')
}

const cim = document.querySelector('h1')
const input = document.querySelector('input#nev')
const button = document.querySelector('button#send')
console.log(cim, input, button)

button.addEventListener('click', OnClick)
function OnClick(){
    cim.innerHTML = `Hello, ${input.value}!`;
}
console.log(cim);

