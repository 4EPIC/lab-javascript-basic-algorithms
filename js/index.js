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
let driverName = "";
let driver = hacker1;

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
let navigatorName = ""
for (var i = hacker2.length - 1; i >= 0; i--) {
    navigatorName += hacker2[i];
}

console.log("navigatorName", navigatorName);

//3
 const compareTheName = driver.localeCompare(navigatorName)

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
const paragraph = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut tincidunt nibh, nec efficitur lorem. Cras sit amet augue vitae leo mattis tempus. Sed nisi orci, maximus ac volutpat sed, ultrices sed lectus. Aliquam lorem nisl, auctor id nulla a, maximus efficitur purus. Phasellus blandit purus erat, sit amet vestibulum risus dictum sit amet. Etiam et malesuada lacus. Nunc euismod vehicula massa ac interdum. Nunc congue justo sed dolor interdum, laoreet pellentesque est egestas. Fusce iaculis tristique maximus. Sed ornare metus molestie nisl pretium cursus. Donec ultricies convallis tellus pulvinar ullamcorper. Proin auctor eu mauris nec blandit. Sed ex lectus, lacinia in congue tincidunt, bibendum eu quam. Sed tempor ante quam, sed ultricies augue efficitur eget.
Vestibulum bibendum feugiat ante, nec dictum ligula lacinia sed. Etiam dui justo, sagittis quis vehicula et, lacinia vitae enim. Quisque nulla velit, posuere nec commodo eu, bibendum id orci. Nam ligula quam, mollis ut feugiat et, sollicitudin eget orci. Phasellus condimentum elit in lacus mollis pharetra. Phasellus nec gravida ante. Maecenas eu orci pellentesque, posuere orci sit amet, auctor arcu. Fusce pharetra porta diam ac suscipit. Aliquam tempor elit justo, a commodo elit ultrices ut. Aliquam accumsan iaculis sapien eu iaculis. Curabitur non eros non nisi lacinia sollicitudin. Curabitur at lacinia nisl. In nisl turpis, eleifend et enim vel, fermentum iaculis nunc. Suspendisse bibendum interdum dolor ultrices gravida. Mauris consequat posuere felis, ut feugiat est luctus dapibus.
Donec tempus ligula non lacus laoreet, efficitur tempor neque suscipit. Vivamus in elit et ligula ullamcorper iaculis sed non orci. Integer non metus imperdiet, interdum nibh at, venenatis odio. Donec a ultricies nulla. Phasellus nec felis eget velit congue porttitor. Nunc tortor augue, maximus ut scelerisque non, sodales id urna. Donec eu lacus vel odio tincidunt sollicitudin sed et sem. Quisque fringilla sem felis. Vivamus ac diam faucibus, aliquet mi aliquet, vehicula lacus. Praesent eget cursus neque, vitae ullamcorper justo. Nam consectetur enim id rutrum porttitor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque a convallis turpis, et maximus lectus. Nulla viverra tellus quis tristique eleifend.`

let words = 1;
let etCount = 0;

for (let i = 0; i < paragraph.length; i++) {
  if (paragraph[i] === ' ' || paragraph[i] === '\n') {
    words++;
  }
  else if (
    (paragraph[i - 1]  === ' ' &&  paragraph[i] === 'e') 
    && paragraph[i + 1] === 't' 
    && ( paragraph[i + 2] === ' ' || paragraph[i + 2] === ',')
  ) {
    etCount++;
  }
}

console.log('words', words);
console.log('et count', etCount);


//Bonus 2
let phraseToCheck = "stack cats";   

let reversedPhrase = phraseToCheck.toLowerCase().split('').reverse().join('');

console.log(reversedPhrase);

if (phraseToCheck === reversedPhrase) {
   console.log('String is a palindrome');
}
else {
  console.log('Not a palindrome');
}