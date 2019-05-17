function multiply1(){
    var num1, num2, num3, result1;
    num1=document.getElementsByClassName("input-1").value;
    num1=parseInt(num1); 
    num2=document.getElementsByClassName("input-2").value;
    num2=parseInt(num2);
    num3=document.getElementsByClassName("input-3").value;
    num3=parseInt(num3);
    result=(num1*num2*num3)/10000;
    document.getElementsByClassName("output-1").innerHTML = result;
    }
    
function multiply2(){
    var num4,result2;
    num4=document.getElementsByClassName("input-4").value;
    num4=parseInt(num4);
    result=(num4*0.75);
    document.getElementsByClassName("output-2").innerHTML = result;
}

// Попробывать сделать ввод в поля только цифры