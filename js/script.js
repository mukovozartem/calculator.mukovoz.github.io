function multiply1(){
    var num1, num2, num3, result1;
    num1=document.getElementById("n1").value;
    num1=parseInt(num1); 
    num2=document.getElementById("n2").value;
    num2=parseInt(num2);
    num3=document.getElementById("n3").value;
    num3=parseInt(num3);
    result=(num1*num2*num3)/10000;
    document.getElementById("rd_data33").innerHTML = result;
    }
    
function multiply2(){
    var num4,result2;
    num4=document.getElementById("n4").value;
    num4=parseInt(num4);
    result=(num4*0.75);
    document.getElementById("lok_data23").innerHTML = result;
}
    