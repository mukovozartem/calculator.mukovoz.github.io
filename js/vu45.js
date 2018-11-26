function multiply1(){
    var treb, fakt, num1, result1;
    treb = 0.33;
    fakt = 0.6;
    
    num1=document.getElementsByClassName("n1").value;
    num1=parseInt(num1);
    result1=(num1*treb);
    result2=(num1*fakt);
    document.getElementsByClassName("row_1_2_2").innerHTML = result1;
    document.getElementsByClassName("row_1_3_2").innerHTML = result2;
}
