const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [
            "js",
            "c#"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: true,
                exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: [
            "js"
        ],
        missions: {
            onboarding: {
                isFinished: false,
                exercisesFinished: false
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
            "elixir"
        ],
        missions: {
            onboarding: {
                isFinished: true,
                exercisesFinished: true
            },
            frontend: {
                isFinished: false,
                exercisesFinished: false
            }
        }
    }
]

/* Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH */

explorers.forEach(i=>{
    console.log(i.name);
})

explorers.forEach(i=>{
    console.log(i.stack);
})

console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP ");
explorers.map((i)=>{
    //console.log(JSON.stringify(i.stack));
    console.log((i.stack).toString());
})

console.log("Obtén la lista de explorers que tengan en su stack js, usa FILTER para validar un elemento en un lista se usa el método includes");

const result = explorers.filter(desarrollador => desarrollador.stack.includes('js'))
console.log(result);

console.log('Busca el primer explorer que sea de la CDMX, usa FIND');
const ciudad = explorers.find(desarrollador => desarrollador.city.includes('CDMX'))
console.log(ciudad);


console.log('Obtén la suma de todos los exercises_completed, usa REDUCE');


const array = []
explorers.map((i)=>{
    array.push(i.exercises_completed)
})
const sum = array.reduce((a,b)=>a+b)
console.log(sum);

console.log('Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME');

const usuarios = explorers.map((ex)=> ex.missions.frontend.exercisesFinished)
const validacion = usuarios.some((v) => v === true)
validacion ? console.log('Existe un usuario que cumple con la validacion jejej ') : console.log("Nadie")

console.log('Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.');

const user = explorers.map((ex) => ex.missions.onboarding.isFinished)
const ev = user.every(res => typeof res === true)
console.log(ev);