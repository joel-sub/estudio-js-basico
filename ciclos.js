// const personas = ['pepe', 'pablo', 'pedro']

function saludo(persona){
    console.log(`hola ${persona}, que tal todo?`);
}
// ciclo for 
for(let i = 0; i<personas.length; i++){
    saludo(personas[i])
}

// ciclo for of 
for(let persona of personas){
    saludo(persona)
}

// ciclo while
// este se ejecuta siempre y cuando la operacion sea true 
const personas = ['pepe', 'pablo', 'pedro']
function saludo(perona){
    console.log(`hola ${perona}, que tal todo?`);
}
while(personas.length > 0){
    // extraigo a la primera persona del array con shift
    let persona = personas.shift()
    saludo(persona)
}
