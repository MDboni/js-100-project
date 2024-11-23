
const num = document.getElementById('numberr');
let count = 0 ;

const finalkhela = (valu) =>{

    count = count + valu ;
    num.textContent = count ;
 
    if(count >=  10){
     plouse.setAttribute('disabled', true);
    }
    else{
     plouse.removeAttribute('disabled',false)
    }

    // minous ater khela 

    
    if(count <= 0){
        mienous.setAttribute('disabled',true)
    }
    else{
        mienous.removeAttribute('disabled',false)
       }

    

}

document.getElementById('plouse').addEventListener('click', () => {
    
    finalkhela(1);

})

document.getElementById('mienous').addEventListener('click', () => {
    finalkhela(-1);
})