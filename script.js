let number = parseFloat(number);
function convertT(number){
    document.getElementById("fahrenheit").innerHTML = ((number*(9/5))+32) +'\u00B0 F';
}