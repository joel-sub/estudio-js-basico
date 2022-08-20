// 1. generar funcion constructora para los vehiculos 
function car(brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
}

// 2. generar arrays para las marcas, modelos y años
const brands = [
    'Toyota', 'Mazda', 'Volvo', 
    'Citroen', 'Tesla', 'Ferrari', 
    'Lamborginni', 'Mini', 'Hyundai', 
    'Chevrolet', 'Ford', 'Peugeot'
]
const models = [
    'Fiesta', 'Focus', 'La Roma', 
    'Cooper', 'Accent', 'Murcielago',
    'Model X', 'Model Y', 'Cupe',
    'Yaris', 'Citrus', 'New Beattle'
]
const years = [
    2000, 2003, 2006,
    2009, 2010, 2011,
    2012, 2014, 2016,
    2018, 2020, 2022
]
const cars = [];

// 3. generar un ciclo que pase por brands-models-years extraer sus valores y generar un 'new car'

function carBuilder(){
    for(let i = 0 ; i < brands.length && i < models.length && i < years.length ; i++){
        let newCar = new car(brands[i], models[i], years[i]);
        cars.push(newCar)
    }
}
carBuilder()

console.log(cars);
console.log(JSON.stringify(cars));
