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
            processesVector.push({struct});
        }
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
}

const process = {
    startingProcesses(){
        for(let i = 0; i < processesVector.length; i++){ 
            let element = processesVector[i].struct.querySelector('#time-init').value;  
            processesVector[i].priority = element;
            let elementPriority = processesVector[i].struct.querySelector('#time-init').value;  
            processesVector[i].priority = parseInt(elementPriority);
        }

        this.orderProcesses(processesVector);
        runningAlgorithmFifo.addQuantum();
        
    },

    orderProcesses(){
        processesVector.sort((a, b) => {
            return a.priority - b.priority;
        })
    },

}

const runningAlgorithmFifo = {
    addQuantum(){
        for(let i = 0; i < processesVector.length; i++){
            let elementQuantum = processesVector[i].struct.querySelector('#time-execution').value;
            processesVector[i].quantum = parseInt(elementQuantum); 
        }

        this.run();
    },

    // BARRA DE PROGRESSO
    run(){
        const myBar = document.getElementById('myBar');
        var width = 0;
        var timeInt = setInterval(frame, 100);
    
        function frame(){
            if (width >= 100) {
                clearInterval(timeInt);
            }else {
                width++;
                myBar.style.width = width + '%';
                // myBar.innerHTML = width + '%';
            }
        }
    }
}

   


 // running(){ 
    //     for(let i = 0; i < processesVector.length; i++){

    //         setTimeout(() => {
    //             console.log(processesVector);
    //         }, (processesVector[i].quantum) * 1000);
    //     }
    // },



