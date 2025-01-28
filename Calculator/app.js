function inputvalue(value){
    var input = document.getElementById("input")
    input.value += value; 
}

function result() {
     var input = document.getElementById("input")
var ans =eval(input.value)
console.log(ans)
input.value =ans;
}

function allClear() {
    var input = document.getElementById("input");
    input.value = "";
  }

// function clear() {
//     var input = document.getElementById("input");
//     var inputNum = input.value.slice(0, -1)
//     inputNum.value = "inputNum";
//     console.log(inputNum)
// }


  function remove() {
    var input = document.getElementById("input");
    var copy = input.value.slice(0, -1)
    console.log(input , "copy")
    input.value = copy
    
}