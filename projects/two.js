const height = document.querySelector('#height');
const weight = document.querySelector('#weight');
const result = document.querySelector('#results');
const form = document.querySelector('form');
form.addEventListener('click',(e)=>{
    e.preventDefault();
    const h = Number(height.value)/100;
    const w = Number(weight.value);
    if(h<=0 || w <=0 || isNaN(h) || isNaN(w)){
        result.innerText="Please enter valid height and weight";
        return;
    }
    else{
        const bmi = (w/(h*h)).toFixed(2);
        return result.innerHTML = `Your BMI is ${bmi}`;
        
    }
})