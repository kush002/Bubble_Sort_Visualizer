
const button = document.querySelector("#create-btn");
const input = document.querySelector("#number_input");
const createDiv = document.querySelector(".num-holder");
// ------------------------Div Creation------------------------------------
let element = '';
let idx = 0;
let order = 0;
button.addEventListener('click', (e)=>{
    e.preventDefault();
    if(createDiv.textContent!= ''){
        createDiv.textContent = ''
    }
    const string = input.value;
   
    for(let char of string){
        if(char!==','){
            
            element += char;
        }
        else{
            
            createDivElement();
        
            
        }
    }
    createDivElement();
   
    
    input.value = "";
    console.log(string)
    console.log(element)
    document.forms['input-form'].reset();
    
    sort();
    
})







// -------------------------------------Functions--------------------------------------

const createDivElement = function(){
    if(element !== ""){
    let div = document.createElement('div');
        div.classList.add ('num',`num-${idx++}`);
        div.setAttribute('data-val', element)
        div.innerText = div.dataset.val;
        div.style.height = 26+5*(2*(parseInt(element)))+'px';
        div.style.order = ++order;
        createDiv.append(div);
        element = '';
    }
}

// -----------------------Sort-BTN-----------------------

    const next = document.querySelector('#sort-btn');
 const clickNext = ()=>{
    return new Promise((resolve)=>{
        next.addEventListener('click',()=>{
            resolve();
        })
    })
 }
 const sort = ()=>{

    const arrayElement = document.getElementsByClassName('num');
    
    
    const call = async ()=>{
        for(let i=0;i<arrayElement.length;i++){
            
            
             
            for(let j=0;j<arrayElement.length-1-i;j++){
                await clickNext();
                let e1 = parseInt(arrayElement[j+1].dataset.val);
                let e2 = parseInt(arrayElement[j].dataset.val);
                arrayElement[j].style.border = '2px solid black'
                arrayElement[j+1].style.border = '2px solid black'  
                
                if(e2>e1){
                
                    
                arrayElement[j+1].parentNode.insertBefore(arrayElement[j+1], arrayElement[j]);
                
                let temp = arrayElement[j].style.order;
                arrayElement[j].style.order = arrayElement[j+1].style.order;
                arrayElement[j+1].style.order = temp;
                    
                } 
                setTimeout(()=>{
                    arrayElement[j].style.border = 'none'
                    arrayElement[j+1].style.border = 'none'
                },100);
                
        }
        
    }
    
}
call();
}
