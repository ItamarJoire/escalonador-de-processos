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

    //BARRA DE PROGRESSO

    run(){
        runOne();
    },   
}

function runOne(){
    const myBarOne = document.querySelector('.myBarOne');
        
    let timeOfArrival = processesVector[0].priority;
    
    myBarOne.style.marginLeft = `${timeOfArrival.toString()}%`;
        
    var width = 0;
    
    var timeInt = setInterval(frame, 400);
    
    function frame(){
        if(width == processesVector[0].quantum){
            clearInterval(timeInt);
            if(processesVector.length == 1){
                console.log('fim')
            }else{
                setTimeout(() => {
                    runTwo(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarOne.style.width = width + '%';
            myBarOne.innerHTML = width + '%'; 
        }   
    }  
}

function runTwo(newTimeOfArrial, newWidth){
    const myBarTwo = document.querySelector('.myBarTwo');
            
    let timeOfArrival = newTimeOfArrial + newWidth;

    myBarTwo.style.marginLeft = `${timeOfArrival.toString()}%`;
        
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[1].quantum){
            clearInterval(timeInt);
            if(processesVector.length == 2){
                console.log('fim')
            }else{
                setTimeout(() => {
                    runThree(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarTwo.style.width = width + '%';
            myBarTwo.innerHTML = width + '%'; 
        }   
    }  
}

function runThree(newTimeOfArrial, newWidth){
    const myBarThree = document.querySelector('.myBarThree');
            
    let timeOfArrival = newTimeOfArrial + newWidth;

    myBarThree.style.marginLeft = `${timeOfArrival.toString()}%`;
        
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[2].quantum){
            clearInterval(timeInt);
        }
        else{
            width++;
            myBarThree.style.width = width + '%';
            myBarThree.innerHTML = width + '%'; 
        }   
    }  
}

