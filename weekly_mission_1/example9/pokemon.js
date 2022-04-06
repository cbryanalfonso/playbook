class Pokemon{
    constructor(name){
        this.name = name
    }

    sayHello(){
        console.log('Mi pokemon pikachu te saluda!!!');
    }

    sayMessage(message){
        console.log('Mi pokemon pikachu dice:',message);
    }
}

    module.exports = Pokemon;
    

    
    // Esta clase se exporta en este módulo
    //module.exports = Logger