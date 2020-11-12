document.getElementById('ex1').addEventListener('click', excercise1);
document.getElementById('ex2').addEventListener('click', excercise2);
document.getElementById('ex3').addEventListener('click', excercise3);
document.getElementById('ex4').addEventListener('click', excercise4);
document.getElementById('ex5').addEventListener('click', excercise5);
document.getElementById('ex6').addEventListener('click', excercise6);
document.getElementById('ex7').addEventListener('click', excercise7);

function excercise1 () {
    let a = prompt('enter any number: ');
    let b = prompt('enter any number again: ');
    let c = a%b;

    if (c==0) {
        alert('number ' + a + ' divisible for ' +b);
    }
    else{
        alert('number ' + a + ' is not divisible for ' +b);
    }
}

function excercise2 () {
    let age = prompt('enter your age:');
    if (age ==16) {
        alert('You are eligible for grade 10th');
    }
    else {
        alert('Sorry! You are not eligible for grade 10th');
    }
}

function excercise3 () {
    let integer = prompt('Enter any integer:');
    if (integer > 0) {
        alert(integer + ' is  great more than number 0');
    }
    else if (integer == 0) {
        alert(integer + ' is zero');
    }
    else {
        alert(integer + ' is lesser than number 0');
    }
}

function excercise4 () {
    let number1 = prompt('Enter first any number:');
    let number2 = prompt('Enter second number: ');
    let number3 = prompt('Enter third number: ');

    if (number1 > number2) {
        if (number1 > number3) {
            alert(number1 + ' is maximum');
        }
        else {
            alert(number3 + ' is maximum');
        }
    }
    else {
        if (number2>number3){
            alert(number2 + ' is maximum');
        }
        else {
            alert( number3 + ' is maximum');
        }
    }
}

function excercise5 () {
    let endSemester = parseInt(prompt("Enter end semester's score"));
    let midterm = parseInt(prompt("Enter midterm's score"));
    let score = parseInt(prompt("'Enter one exam's score"));
    let averageScore = (endSemester*2 + midterm + score)/4;

    if (averageScore < 4) {
        alert('Rated F');
    }
    else if (averageScore < 5.5) {
        alert('Rated D');
    }
    else if (averageScore < 7) {
        alert('Rated C');
    }
    else if (averageScore < 8.5) {
        alert('Rated B');
    }
    else if (averageScore <=10) {
        alert('Rated A');
    }
    else {
        alert('Check again the score');
    }
}

function excercise6 () {
    let sale = prompt('Enter the sales');
    let bonus;

    if (sale < 5000000) {
        alert('You do not have bonus!');
    }
    else if (sale < 10000000) {
        alert('Your bonus is: ' + sale*0.03);
    }
    else if (sale < 15000000) {
        alert('Your bonus is: ' + sale*0.05);
    }
    else {
        alert('Your bonus is: ' + sale*0.1);
    }
}

function excercise7 () {
    let kwh = prompt('Enter your power (unit: kWh): ');

    if (kwh > 400) {
        alert('Your power fee is: ' + Math.ceil(kwh*2.587)*1000 + ' VND');
    }
    else if (kwh > 300) {
        alert('Your power fee is: ' + Math.ceil(kwh*2.503)*1000 + ' VND');
    }
    else if (kwh > 200) {
        alert('Your power fee is: ' + Math.ceil(kwh*2.242)*1000 + ' VND');
    }
    else if (kwh > 100) {
        alert('Your power fee is: ' + Math.ceil(kwh*1.786)*1000 + ' VND');
    }
    else if (kwh > 50) {
        alert('Your power fee is: ' + Math.ceil(kwh*1.533)*1000 + ' VND');
    }
    else if (kwh > 0) {
        alert('Your power fee is: ' + Math.ceil(kwh*1.484)*1000 + ' VND');
    }
    else {
        alert('the power was wrong, Please check and enter again!');
    }
}