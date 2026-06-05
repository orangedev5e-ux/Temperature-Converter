const angleDown = document.querySelector('#down');
const angleUp = document.querySelector('#up');
const dropDown = document.querySelector('.from-box');
const angleDown1 = document.querySelector('#down1');
const angleUp1 = document.querySelector('#up1');
const dpDw = document.querySelector('.to-box');




const opt1 = document.querySelector('#ft');
const opt2 = document.querySelector('#sc');
const opt3 = document.querySelector('#th');
const opt4 = document.querySelector('#ft1');
const opt5 = document.querySelector('#sc1');
const opt6 = document.querySelector('#th1');




const name = document.querySelector('#title');
const name1 = document.querySelector('#title1');



angleDown.addEventListener('click', function(){
    if(dropDown.style.display === "none" || angleUp.style.display === "none"){
        dropDown.style.display = "block";
        angleDown.style.display = "none";
        angleUp.style.display = "block";
    }else{
        dropDown.style.display = "none";
        angleUp.style.display = "none";
        angleDown.style.display = "block";
    }

})

angleUp.addEventListener('click', function(){
    if(dropDown.style.display === "block" || angleDown.style.display === "none"){
        dropDown.style.display = "none";
        angleDown.style.display = "block";
        angleUp.style.display = "none";
    }else{
        dropDown.style.display = "block";
        angleUp.style.display = "block";
        angleDown.style.display = "none";
    }

})


angleDown1.addEventListener('click', function(){
    if(dpDw.style.display === "none" || angleUp1.style.display === "none"){
        dpDw.style.display = "block";
        angleDown1.style.display = "none";
        angleUp1.style.display = "block";
    }else{
        dpDw.style.display = "none";
        angleUp1.style.display = "none";
        angleDown1.style.display = "block";
    }

})

angleUp1.addEventListener('click', function(){
    if(dpDw.style.display === "block" || angleDown1.style.display === "none"){
        dpDw.style.display = "none";
        angleDown1.style.display = "block";
        angleUp1.style.display = "none";
    }else{
        dpDw.style.display = "block";
        angleUp1.style.display = "block";
        angleDown1.style.display = "none";
    }

})


opt1.addEventListener('click', function(){
       name.textContent = opt1.textContent;
        dropDown.style.display = 'none';
        angleUp.style.display = 'none';
        angleDown.style.display = 'block';
    })

opt2.addEventListener('click', function(){
       name.textContent = opt2.textContent;
        dropDown.style.display = 'none';
        angleUp.style.display = 'none';
        angleDown.style.display = 'block';
    })

opt3.addEventListener('click', function(){
       name.textContent = opt3.textContent;
        dropDown.style.display = 'none';
        angleUp.style.display = 'none';
        angleDown.style.display = 'block';
    })


opt4.addEventListener('click', function(){
       name1.textContent = opt4.textContent;
        dpDw.style.display = 'none';
        angleUp1.style.display = 'none';
        angleDown1.style.display = 'block';
    })

opt5.addEventListener('click', function(){
       name1.textContent = opt5.textContent;
        dpDw.style.display = 'none';
        angleUp1.style.display = 'none';
        angleDown1.style.display = 'block';
    })

opt6.addEventListener('click', function(){
       name1.textContent = opt6.textContent;
        dpDw.style.display = 'none';
        angleUp1.style.display = 'none';
        angleDown1.style.display = 'block';
    })





// 1. Select all the elements from the DOM
const tempInput = document.getElementById('tempInput');
const fromUnit = document.getElementById('fromUnit');
const toUnit = document.getElementById('toUnit');
const convertBtn = document.getElementById('convertBtn');
const resultOutput = document.getElementById('resultOutput');

// 2. Add an Event Listener to the button
convertBtn.addEventListener('click', function() {
    
    // Convert the input string value into a real number
    const inputValue = Number(tempInput.value);
    
    // Get the current selected units from the dropdowns
    const sourceUnit = name.textContent;
    const targetUnit = name1.textContent;
    
    // Validation check: If input box is empty, stop here
    if (tempInput.value === "") {
        resultOutput.textContent = "Please enter a valid number!";
        return;
    }
    
    let result = 0;

    // 3. Logic Matrix: Check the "From" and "To" units
    if (sourceUnit === targetUnit) {
        result = inputValue; // Same units, no math needed
    } 
    // --- CELSIUS CONVERSIONS ---
    else if (sourceUnit === 'Celcius' && targetUnit === 'Farenheit') {
        result = (inputValue * 9/5) + 32;
    } else if (sourceUnit === 'Celcius' && targetUnit === 'Kelvin') {
        result = inputValue + 273.15;
    }
    // --- FAHRENHEIT CONVERSIONS ---
    else if (sourceUnit === 'Farenheit' && targetUnit === 'Celcius') {
        result = (inputValue - 32) * 5/9;
    } else if (sourceUnit === 'Farenheit' && targetUnit === 'Kelvin') {
        result = (inputValue - 32) * 5/9 + 273.15;
    }
    // --- KELVIN CONVERSIONS ---
    else if (sourceUnit === 'Kelvin' && targetUnit === 'Celcius') {
        result = inputValue - 273.15;
    } else if (sourceUnit === 'Kelvin' && targetUnit === 'Farenheit') {
        result = (inputValue - 273.15) * 9/5 + 32;
    }

    // 4. Print the final result to the screen (rounded to 2 decimal places)
    resultOutput.textContent = `Result: ${result.toFixed(2)} °${targetUnit.charAt(0)}`;
});
