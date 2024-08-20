// let button = document.getElementById("btn1")

let inp = document.getElementById("inputbox").value
console.log(inp);

function append(num){
    number =   document.getElementById("inputbox").value += num
}


// function appendOperator(operator) {
//     const display = document.getElementById('display');
//     const currentText = display.innerText;

//     // Avoid appending an operator if the display is empty or ends with an operator
//     if (currentText === '' || /[+\-*/]$/.test(currentText)) return;

//     display.innerText += operator;
// }

function result(){
    const percentage = document.getElementById("inputbox")
    try {
        if(percentage.value.includes('%')){
            // alert("hello")
            const [per,base]=percentage.value.split('%')
            const pervalue = parseFloat(per)
            // console.log(pervalue);
            const basevalue = parseFloat(base)
            // console.log(basevalue);
            const result = (basevalue*pervalue)/100
            percentage.value = result
        }
        else{
            let final = eval(document.getElementById("inputbox").value)
            document.getElementById("inputbox").value = final
        }
    }
     catch (error) {
        document.getElementById("inputbox").value = `Math Error`
    }
}

function delet(){
    document.getElementById("inputbox").value = ""
}
function backspace() {
    const display = document.getElementById('inputbox');    
    if (display.value.length >= 1) {
        display.value = display.value.slice(0, -1);
    } 
}

// function appendOperator(operator) {
//     const display = document.getElementById('display');
//     const currentText = display.innerText;

//     // Avoid appending an operator if the display is empty or ends with an operator
//     if (currentText === '' || /[+\-*/]$/.test(currentText)) return;

//     display.innerText += operator;
// }