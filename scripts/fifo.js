const processesVector = [];

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
        this.orderProcesses();
      
        
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
        this.runProcesses();
        
    },

    orderProcesses(){
        processesVector.sort((a, b) => {
            return a.priority - b.priority;
        })

        
    },

    runProcesses(){
        runOne();
    },
}

function runOne(){
    const myBarOne = document.querySelector('.my-bar-one');
    let timeOfArrival = processesVector[0].priority;
   
    myBarOne.style.marginLeft = `${timeOfArrival.toString()}%`;
        
    var width = 0;
    
    var timeInt = setInterval(frame, 400);
    
    function frame(){
        if(width == processesVector[0].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 1){
                timeExecution();
                
            }else{
                setTimeout(() => {
                    runTwo(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarOne.style.width = width + '%';
            myBarOne.innerHTML = width; 
        }   
    }  
}

function runTwo(newTimeOfArrial, newWidth){
    const myBarTwo = document.querySelector('.my-bar-two');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarTwo.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[1].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 2){
                timeExecution()
                
            }else{
                setTimeout(() => {
                    runThree(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarTwo.style.width = width + '%';
            myBarTwo.innerHTML = width; 
        }   
    }  
}

function runThree(newTimeOfArrial, newWidth){
    const myBarThree = document.querySelector('.my-bar-three');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarThree.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[2].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 3){
                timeExecution()
                
            }else{
                setTimeout(() => {
                    runFour(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarThree.style.width = width + '%';
            myBarThree.innerHTML = width; 
        }   
    }  
}

function runFour(newTimeOfArrial, newWidth){
    const myBarFour = document.querySelector('.my-bar-four');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarFour.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[3].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 4){
                timeExecution()
                
            }else{
                setTimeout(() => {
                    runFive(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarFour.style.width = width + '%';
            myBarFour.innerHTML = width; 
        }   
    }  
}

function runFive(newTimeOfArrial, newWidth){
    const myBarFive = document.querySelector('.my-bar-five');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarFive.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[4].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 5){
                timeExecution()
                
            }else{
                setTimeout(() => {
                    runSix(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarFive.style.width = width + '%';
            myBarFive.innerHTML = width; 
        }   
    }  
}

function runSix(newTimeOfArrial, newWidth){
    const myBarSix = document.querySelector('.my-bar-six');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarSix.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[5].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 6){
                timeExecution()
                
            }else{
                setTimeout(() => {
                    runSeven(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarSix.style.width = width + '%';
            myBarSix.innerHTML = width; 
        }   
    }  
}

function runSeven(newTimeOfArrial, newWidth){
    const myBarSeven = document.querySelector('.my-bar-seven');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarSeven.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[6].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 7){
                timeExecution()
                
            }else{
                setTimeout(() => {
                    runEight(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarSeven.style.width = width + '%';
            myBarSeven.innerHTML = width; 
        }   
    }  
}

function runEight(newTimeOfArrial, newWidth){
    const myBarEight = document.querySelector('.my-bar-eight');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarEight.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[7].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 8){
                timeExecution();
                
            }else{
                setTimeout(() => {
                    runNine(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarEight.style.width = width + '%';
            myBarEight.innerHTML = width; 
        }   
    }  
}

function runNine(newTimeOfArrial, newWidth){
    const myBarNine = document.querySelector('.my-bar-nine');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarNine.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[8].runtime){
            clearInterval(timeInt);
            if(processesVector.length == 9){
                timeExecution();
                
            }else{
                setTimeout(() => {
                    runTen(timeOfArrival, width);
                }, 1000);
            }
        }
        else{
            width++;
            myBarNine.style.width = width + '%';
            myBarNine.innerHTML = width; 
        }   
    }  
}

function runTen(newTimeOfArrial, newWidth){
    const myBarTen = document.querySelector('.my-bar-ten');

    let timeOfArrival =  newTimeOfArrial + newWidth;
    
    myBarTen.style.marginLeft = `${timeOfArrival.toString()}%`;
    
    var width = 0;

    var timeInt = setInterval(frame, 400);

    function frame(){
        if(width == processesVector[9].runtime){
            if(processesVector.length == 10){
                timeExecution();
                clearInterval(timeInt);
            }
        }
        else{
            width++;
            myBarTen.style.width = width + '%';
            myBarTen.innerHTML = width; 
        }   
    }  
}

function timeExecution(){
    var turnaround = 0;
    for(let i = 0; i < processesVector.length; i++){
        turnaround += processesVector[i].runtime;
    }
    turnaround = turnaround / processesVector.length;

    const turn = document.querySelector('.turnaround');
    turn.innerHTML = `Turnaround é: ${turnaround.toFixed(0)}`;
}
