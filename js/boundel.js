// const Numounter = document.getElementById("counter");
// const Plusbtn = document.getElementById('plusbtn');
// const Minusbtn = document.getElementById('minusbtn');


// let counter = 0 ;

// Plusbtn.addEventListener('click', () =>{
    
//   counter=counter+1;
//   Numounter.textContent = counter; 
  
//   if(counter >= 10){
//     Plusbtn.setAttribute('disabled',true);
//   }
//   else{
//     Plusbtn.removeAttribute('disabled',false )
//   }
    
    
// })

// Minusbtn.addEventListener('click', () =>{
//     counter=counter-1;
//     Numounter.textContent = counter;

//     if(counter <= 10){
//       Plusbtn.setAttribute('disabled',true);
//     }
//     else{
//       Plusbtn.removeAttribute('disabled',false )
//     }

    
// })
 
// const names = "Jayed"
// const price = 20

// `<div>
//   <h2>Price ${price}</h2>
// </div> `

// const  age  = 18;

// age >= 20 ? "I am Big" : "I am Child"


// example -2 

const generateRGBcolor = () => {

const r =(Math.floor(Math.random() * 255) );
const g =(Math.floor(Math.random() * 255) );
const b =(Math.floor(Math.random() * 255) );
    

return `rgb(${r},${g},${b})`

}

const updateCOlor = () => {
  const Rgbcolor = generateRGBcolor();
  const divbox = document.getElementById('color-box');
  const prargb = document.getElementById('color-code');

  divbox.style.backgroundColor = Rgbcolor ;
  prargb.innerHTML = Rgbcolor ;
}

const copycolorcode = () => {
  const copycolorcode = document.getElementById('color-code');
  const inputtag = document.createElement('input');
  document.body.appendChild(inputtag);
  inputtag.value = copycolorcode.innerHTML;

  inputtag.select();
  document.execCommand('copy');
  document.body.removeChild(inputtag);
  alert('copy');
   
}
document.getElementById('copycolor').addEventListener('click', () =>{
  
  copycolorcode();

})

updateCOlor();


