const processesVector = [];
const newVectorProcesses = [];
const tableProcesses = document.querySelector('.execution-processes');

const dom = {
    elementShowProcess: document.querySelector('#number-process'),
    quantum: document.querySelector('#quantum'),
    structForm: document.querySelector('.information-process'),
    buttonRuntime: document.querySelector('.button-runtime'),
    
    addForm(){
        for(let i = 0; i < this.elementShowProcess.value; i++){
            let newForm = document.createElement('div');
            newForm.setAttribute('class', 'all-process');
            newForm.innerHTML = this.createStruct(newForm, i+1);

            let struct = this.structForm.appendChild(newForm);
            processesVector.push({struct});
        }

        this.buttonRuntime.classList.add('show');
    },

    createStruct(html, i){
        html = `
            <h2>Processo ${i}</h2>
            <div class="inputs-main">
                <div class="inputs arrival">
                    <label for="arrival">Tempo de chegada</label>
                    <input id="arrival" type="number" min="1" max="10">
                </div>

                <div class="inputs runtime">
                    <label for="runtime">Tempo de execução</label>
                    <input id="runtime" type="number" min="1" max="10">
                </div>
                
                <div class="inputs deadline">
                    <label for="deadline">Deadline</label>
                    <input id="deadline" disabled type="number" min="1" max="10">
                </div>
            </div>
            <div class="line"></div>
        `
        return html;
    },
}

const startingProcesses = {
    addPriority(){
        for(let i = 0; i < processesVector.length; i++){ 
            let element = processesVector[i].struct.querySelector('#arrival').value;  
            processesVector[i].priority = element;
            let elementPriority = processesVector[i].struct.querySelector('#arrival').value;  
            processesVector[i].priority = parseInt(elementPriority);
 
        }
        
        this.addRuntime();
    },

    addRuntime(){
        for(let i = 0; i < processesVector.length; i++){
            let elementRuntime = processesVector[i].struct.querySelector('#runtime').value;
            processesVector[i].runtime = parseInt(elementRuntime); 
        }

        for(let i = 0; i < processesVector.length; i++){
            let numberPriority = document.querySelector(`#tc-${i}`);
            let numberExecution = document.querySelector(`#te-${i}`);
            numberPriority.innerHTML = processesVector[i].priority;
            numberExecution.innerHTML = processesVector[i].runtime;
        }

        this.orderProcesses(processesVector);
        this.runProcesses(processesVector[0].priority, 0);
    },

    orderProcesses(){
        processesVector.sort((a, b) => {
            return a.priority - b.priority;
        })
    },

    position: 0,
    runProcesses(newTimeOfArrial, newWidth){
        let bar = tableProcesses.querySelector(`.my-bar-${position}`);

        let timeOfArrival = newTimeOfArrial + width;

        bar.style.marginLeft = `${timeOfArrival.toString()}%`;

        var width = 0;
        var widthOverload = 0;
        var timeInt = setInterval(frame, 400);
           
        function frame(){
            if((width == dom.quantum) && (processesVector[position].runtime > 0)){
                if(processesVector.length == 0){
                    clearInterval(timeInt);
                    console.log('Acabou os processos');
                    return;
                }else{
                    let newElement = processesVector.shift();   
                    newVectorProcesses.push(newElement);
                    
                    widthOverload++;
                    bar.style.widthOverload = widthOverload + '%';
                    bar.innerHTML = widthOverload;
                    position++;
                    clearInterval(timeInt);
                    this.runProcesses(); 
                }

            }else{
                width++;
                bar.style.width = width + '%';
                bar.innerHTML = width; 
            }
                
        }
    }
}


console.log(tableProcesses);
// function timeExecution(){
//     var turnaround = 0;
//     for(let i = 0; i < processesVector.length; i++){
//         turnaround += processesVector[i].runtime;
//     }
//     turnaround = turnaround / processesVector.length;

//     const turn = document.querySelector('.turnaround');
//     turn.innerHTML = `Turnaround é: ${turnaround.toFixed(0)}`;
// }
