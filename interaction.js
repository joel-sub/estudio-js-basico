const formulario = document.querySelector('#formulario')
const a = document.querySelector('#calcA');
const b = document.querySelector('#calcB');
const calcular = document.querySelector('#btnCalc')
const result = document.querySelector('#calcResult')

// calcular.addEventListener('click', calc);
formulario.addEventListener('submit', calc);
result.addEventListener('copy', showCopyMessage)
a.addEventListener('focus', changeInput)

function calc(event) {
    event.preventDefault();
    const suma =+a.value + +b.value;
    const sumaParse = parseInt(a.value) + parseInt(b.value);
    result.innerHTML = `tu resultado es ${sumaParse}`;
}

function showCopyMessage(event){
    event.preventDefault()
    alert('hey no copies el texto!')
}