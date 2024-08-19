// let button = document.getElementById("btn1")


function  append(num){
    document.getElementById("inputbox").value += num
}

function result(){
    let final = eval(document.getElementById("inputbox").value)
    document.getElementById("inputbox").value = final
}

function delet(){
    document.getElementById("inputbox").value = " "
}