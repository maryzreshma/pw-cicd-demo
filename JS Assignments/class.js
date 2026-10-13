class Cars{
    constructor(brandName, model){
        this.brandName = brandName
        this.model = model

    }
    start(){
        console.log(`${this.brandName} has STARTED`)
    }

    stop(){
        console.log(`${this.model} has STOPPED`)

    }
}

let carName = new Cars('Volvo', 'XC40')
carName.start();
carName.stop()