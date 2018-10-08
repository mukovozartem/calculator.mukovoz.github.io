function multiply1(){
    var num1, result1;
    num1=document.getElementsByClassName("n1").value;
    num1=parseInt(num1);
    result1=(num1*0.33);
    // result2=(num1*0.06);
    document.getElementsByClassName("row_1_2_2").innerHTML = result1;
    // document.getElementsByClassName("row_1_3_2").innerHTML = result2;
}
