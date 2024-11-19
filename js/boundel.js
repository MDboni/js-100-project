const Numounter = document.getElementById("counter");
const Plusbtn = document.getElementById('plusbtn');
const Minusbtn = document.getElementById('minusbtn');


let counter = 0 ;

Plusbtn.addEventListener('click', () =>{
    
  counter=counter+1;
  Numounter.textContent = counter; 
  
  if(counter >= 10){
    Plusbtn.setAttribute('disabled',true);
  }
  else{
    Plusbtn.
  }
    
    
})

Minusbtn.addEventListener('click', () =>{
    counter=counter-1;
    Numounter.textContent = counter;

    
})
 
