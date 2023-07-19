function calculateCube(){
    var Num1=document.getElementById('Num1').value;
    var Results=Math.pow(Num1 , 3);
    // var Results=Num1 * Num1 * Num1; 
    document.getElementById('Result').value=Results;
}

function reset(){
    document.getElementById('Num1').value = ""
    document.getElementById('Result').value = ""
}