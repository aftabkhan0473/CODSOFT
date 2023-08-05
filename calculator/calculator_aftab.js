var result_input = document.getElementById('result_calc');
var buttons = document.querySelectorAll('button');

let result_calc = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            result_calc = eval(result_calc);
            result_input.value = result_calc;
        }

        else if(e.target.innerHTML == 'AC'){
            result_calc = "";
            result_input.value = result_calc;
        }
        else if(e.target.innerHTML == 'DEL'){
            result_calc = result_calc.substring(0, result_calc.length-1);
            result_input.value = result_calc;
        }
        else{
            result_calc += e.target.innerHTML;
            result_input.value = result_calc;
        }
        
    })
})