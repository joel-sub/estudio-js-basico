// esta es una funcion constructora de objetos 

function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}
let miAutito = new car('toyota', 'corolla', 2020);
console.log(miAutito)

