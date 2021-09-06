function compute()
{
    // p = document.getElementById("principal").value;
    var principal = document.getElementById("principal").value;

    if (principal < 1) {
        window.alert('Enter a positive number')
        document.getElementById("principal").focus()
    }

    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    var interest = principal * years * rate / 100

    var year = new Date().getFullYear()+parseInt(years);

    // parsing results
    document.getElementById('result').innerHTML=
    "<br/>If tou deposit "+'<span class="highligh">'+principal+"</span>"+",<br/>"+
    "at an interest rate of "+'<span class="highligh">'+rate+"</span>"+",<br/>"+
    "You will receive an amount of "+'<span class="highligh">'+interest+"</span>"+",<br/>"+
    'in the year '+'<span class="highligh">'+year+"</span>"
}
        
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}