
class calculator{


    constructor(previousvalue, currentvalue){
        this.previousvalue = previousvalue
        this.currentvalue = currentvalue

    }

clear(){

    this.currentvalue = ""
    this.previousvalue = ""
    this.operation = undefined

}


delete(){


}

append(number){


}

chooseoperation(operation){



}

compute(){


}

updateDisplay(){


}
}



const numberbuttons = document.querySelectorAll("[data-number");
const operationbuttons = document.querySelectorAll("[data-operations");
const equalsbutton = document.querySelector(["data-equals"])
const deletebutton = document.querySelector(["data-delete"])
const previousvalue = document.querySelector(["data-previous"])
const currentvalue = document.querySelector(["data-previous"])
const clear = document.querySelector(["data-clear"])