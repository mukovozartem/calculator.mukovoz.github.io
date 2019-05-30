function multiply1(){
    var num1, num2, num3, resultCalc1;
    num1 = document.getElementById("input-1").value;
    num1 = parseInt(num1); 
    num2 = document.getElementById("input-2").value;
    num2 = parseInt(num2);
    num3 = document.getElementById("input-3").value;
    num3 = parseInt(num3);
    resultCalc1 = (num1*num2*num3)/10000;
    var result1 = Math.round(resultCalc1)
    document.getElementById("output-1").innerHTML = result1;
    }
    
function multiply2(){
    var num4,resultCalc2;
    num4 = document.getElementById("input-4").value;
    num4 = parseInt(num4);
    resultCalc2 = (num4*0.75);
    var result2 = Math.round(resultCalc2)
    document.getElementById("output-2").innerHTML = result2;
}

// Попробывать сделать ввод в поля только цифры