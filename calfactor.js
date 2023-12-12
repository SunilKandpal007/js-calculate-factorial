function factCal(){  
    var i, num, fact;
    fact = 1;
    num = parseInt(document.getElementById('factvalue').value);

    if(num == ''){
        document.getElementById('result3').innerText = `Please enter a value to get factorial.`;
    }
    else{
        for(i = 1; i <= num; i++){
            fact = fact * i;
    }
        i = i - 1;
        document.getElementById('result3').style.color='white';
        document.getElementById('result3').style.background='green';
        document.getElementById('result3').innerHTML = `Factorial of ${i} is: ${fact}` ;
        document.getElementById('factvalue').value = " ";
    }
}