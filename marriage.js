let age,gender,sum;
 gender=prompt("enter the gender");
 age= prompt( "enter the age");
 
if (gender=="male"){
if(age>21){
    alert("eligible to marriage")
}
else{
    alert("not eligible to marriage")
}
}
else if(gender=="female"){
    if(age>18){
        alert("eligible to marriage")
    }
    else{
        alert("not eligible to marriage")
    }
}