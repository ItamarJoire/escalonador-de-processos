const processesVector = [];
const tableProcesses = document.querySelector('.execution-processes');

const dom = {
    elementShowProcess: document.querySelector('#number-process'),  
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

        this.orderProcesses(processesVector);

        for(let i = 0; i < processesVector.length; i++){
            let numberPriority = document.querySelector(`#tc-${i}`);
            let numberExecution = document.querySelector(`#te-${i}`);
            numberPriority.innerHTML = processesVector[i].priority;
            numberExecution.innerHTML = processesVector[i].runtime;
        }

        this.addBar();
        console.log(processesVector);
        this.runProcesses(processesVector[0].priority, 0);
    },

    orderProcesses(){
        processesVector.sort((a, b) => {
            return a.priority - b.priority;
        })
    },

    addBar(){
        for(let i = 0; i < processesVector.length; i++){
            processesVector[i].bar = `.my-bar-${i}`;
        } 
    },

    
    runProcesses(newTimeOfArrial, newWidth){
            const elementQuantum = document.querySelector('#quantum');
            const quantum = elementQuantum.value;
            var j = 0;

            for(let i = 0; i < processesVector.length; i++){
                let transition = tableProcesses.querySelector(processesVector[i].bar);
                console.log(transition);
                
                var timeOfArrival = newTimeOfArrial + newWidth;
               
                transition.style.marginLeft = `${timeOfArrival.toString()}%`;
                
               
                var width = 0;
                var timeInt = setInterval(frame, 400);
                   
                function frame(){
                    if(processesVector[i].runtime <= quantum){
                        if(width == processesVector[i].runtime){
                            if(processesVector[i].runtime <= quantum){
                                processesVector.shift();
                                i--;
                                clearInterval(timeInt);

                            }else{
                                processesVector[i].runtime = processesVector[i].runtime - quantum;
                                let newElement = processesVector.shift();
                                processesVector.push(newElement);
                            }
                            
                            
                            setTimeout(() =>{
                                widthOverload++;
                                newDiv.style.backgroundColor = 'red';
                                newDiv.style.width = widthOverload + '%';
                                newDiv.innerHTML = widthOverload;
                            }, 1000);
                            
                            j++;
                            clearInterval(timeInt);
                        
                        }else{ 
                            width++; 
                            transition.style.width = width + '%';
                            transition.innerHTML = width;                   
                        }
                    }else{
                    width++; 
                    transition.style.width = width + '%';
                    transition.innerHTML = width; 
                    
                    processesVector[i].runtime = processesVector[i].runtime - 1;
                
            
                }
            }
          
        }
    }
}


// function timeExecution(){
//     var turnaround = 0;
//     for(let i = 0; i < processesVector.length; i++){
//         turnaround += processesVector[i].runtime;
//     }
//     turnaround = turnaround / processesVector.length;

//     const turn = document.querySelector('.turnaround');
//     turn.innerHTML = `Turnaround é: ${turnaround.toFixed(0)}`;
// }
