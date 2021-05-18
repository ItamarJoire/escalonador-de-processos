// const elementShowProcess = document.querySelector('.show-process');
// const processFifo = document.querySelector('.show-fifo');

// function fifo(){
//     let processNumber = elementShowProcess.value;

//     const newForm = document.createElement('div');
//     newForm.innerHTML = createStruct(newForm);

//     processFifo.appendChild(newForm);

//     console.log(processFifo);

// }  

// function createStruct(html){
//     html = `
//         <h3>Tempo de chegada</h3>
//         <input type="number">

//         <h3>Tempo de execução</h3>
//         <input type="number">
//     `
//     return html;
// }
// var notas = new Array(n);

// const elementShowProcess = 
// const n = elementShowProcess.value;

// const arrayForm = new Array();

// const arrayForm = new Array

const processesVector = [];

const dom = {
    elementShowProcess: document.querySelector('.show-process'),
    structForm: document.querySelector('.show-fifo'),

    addForm(){

        for(let i = 0; i < this.elementShowProcess.value; i++){
            let newForm = document.createElement('div');
            newForm.setAttribute('class', 'form');
            newForm.innerHTML = this.createStruct(newForm);
            let struct = this.structForm.appendChild(newForm);
            processesVector.push(struct);
        }

        this.displayProcess();
       
    },

    createStruct(html){
        html = `
            <h3>Tempo de chegada</h3>
            <input id="time-init" type="number">
    
            <h3>Tempo de execução</h3>
            <input id="time-execution" type="number">
        `
        return html;
    },

    displayProcess(){
            console.log(processesVector);
    }
}


const arrayValue = [];

const process = {   
 
    startingProcesses(){
        for(let i = 0; i < processesVector.length; i++){
            let valueTimeInit = processesVector[i].querySelector('#time-init');
            arrayValue.push(valueTimeInit.value);  
           
            console.log(valueTimeInit.value);
        }

        console.log(this.priorityProcess(arrayValue));
    },

    // Pega o processo que tem o menor tempo de chegada
    priorityProcess(array){
        return Math.min.apply(Math, array);
    }

}



    