// ejemplo de array 
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
console.table(frutas);

// metodos de array

// length, largo de un array 
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
console.log(frutas.length);

// .sort, ordena alfabeticamene un array / .reverse ordena inversamente un array
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
console.log(frutas.sort());
console.log(frutas.reverse());

// push, añade un elemento al array, este se agrega al final 
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
frutas.push('frutilla') 
console.table(frutas);

// unshift, añade un elemento al array, este se agrega al principio 
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
frutas.unshift('frutilla') 
console.table(frutas);

// pop, elimina el ultimo elemento del array
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
frutas.pop()
console.table(frutas);

// shift, elimina el primer elemento del array
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
frutas.shift()
console.table(frutas);


// splice, corta elementos el primer valor es el indice donde me posiciono y
// el segundo valor indica cuantos elementos deseo eliminar
// en este caso me posiciono en 0(kiwi) y eliminare 2 elementos (kiwi y manzana) 
// es un metodo que destruye el array al cortarlo 
let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
// let spliced = frutas.splice(0,2);

// tambien puedo agregar un tercer valor que indica un elemento a agregar
let spliced = frutas.splice(0,2,'banana');

console.table(spliced);
console.table(frutas);


// slice, fija el primer parametro de partida y corta el elementod hasta el segundo parametro indicado
// este metodo no es destructivo ya que genera una copia del array
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
let frutaSlice = frutas.slice(0,2);
console.table(frutaSlice);
console.table(frutas);


// .map itera sobre el array completo 
// let frutas = ['kiwi', 'manzana', 'naranja', 'platano', 'arandano', 'pera'];
let nuevasFrutas = frutas.map(function(fruta){
    return `${fruta} $500`
})
console.table(nuevasFrutas)

let numbers = [1,2,3,4,5,6];
let numberData = numbers.map(function(element, index){
    console.log(element, index);
    return element
});

let numberMultiply = numbers.map(function(num){
    return num * 10;
})
console.log(numberMultiply);


// .find busca dentro del array 
const personas = [
    {
        nombre: 'pepe',
        apellido: 'perez'
    },
    {
        nombre: 'pablo',
        apellido: 'suarez'
    },
    {
        nombre: 'enrique',
        apellido: 'papitas'
    },
];
// console.table(personas)

function especificPerson(persona){
    return persona.nombre === 'pepe';  
}
console.log(personas.find(especificPerson));


// metodo de filtrado 
let articulos = [
    {
        nombre: 'bici', precio: 75000
    },
    {
        nombre: 'libro',precio: 500
    },
    {
        nombre: 'taza', precio: 1200
    },
    {
        nombre: 'silla', precio: 25000
    },
    {
        nombre: 'librero',precio: 55000
    },
    {
        nombre: 'televisión', precio: 150000
    }
]

let filtrado = articulos.filter(function(articulo){
    return articulo.precio <= 1200
});
console.log(filtrado);

// metodo map, mapea lo que le solicito 
let mapeado = articulos.map(function(articulo){
    return articulo.nombre
})
console.log(mapeado)


// metodo find, encuentra el primer elemento que coincida 
let finder = articulos.find(function(articulo){
    return articulo.nombre === 'librero'
})
console.log(finder)

// recorre el arreglo y devuelve por cada elemento 
let foreach = articulos.forEach(function(articulos){
    console.log(articulos.precio)
})


// some retorna un valor true o false dependiendo de la condicion dada 
let some = articulos.some(function(articulo){
    return articulo.precio <= 1000
})
console.log(some)