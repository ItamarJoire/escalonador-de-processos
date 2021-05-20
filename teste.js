
// RETORNA O MENOR VALOR DO ARRAY
const min = processesVector.reduce((a,b)=>{
    if(b.priority < a.priority) a = b;
    return a;
 });
 
 console.log(min.priority);