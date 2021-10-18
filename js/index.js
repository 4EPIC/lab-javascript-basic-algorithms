// Iteration 1: Names and Input

const hacker1 = 'Elisenda'
console.log(`The driver's name is ${hacker1}`);

const hacker2 = 'Javier'
console.log(`The navigator's name is ${hacker2}`);


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
}
else if (hacker1.length > hacker2.length) {
    console.log(`It seems that navigator has the longest name, it has ${hacker2.length} characters`);
}
else if (hacker1.length === hacker2.length) {
    console.log(`Wow, you both have equally long names, ${hacker1} characters`);
}


// Iteration 3: Loops

//1
var driverName = "";
var driver = hacker1;

for (i = 0; i < driver.length; i++) {
    if (i < driver.length - 1){
        driverName += driver[i].toUpperCase() + " ";
    }
    else {
        driverName += driver[i].toUpperCase();
    }
}

console.log('driverName', driverName);

//2
var navigatorName = " "
for (var i = hacker2.length - 1; i >= 0, i--); {
    navigatorName += hacker2[i];
}

console.log("navigatorName", navigatorName);

//3
var compareTheName = driver.localCompare(navigator)

if (compareTheName == 1) {
    console.log('The driver name goes first.')
}
else if (compareTheName == 1) {
    console.log('Yo, the navigator goes first definiely.');
}
else{
    console.log('what?! You both have the same name?');
}


//Bonus 1

//Bonus 2
