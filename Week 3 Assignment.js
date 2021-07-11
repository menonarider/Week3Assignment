
// Problem 1
//a. Create array and find difference between last/first.

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
console.log(ages[ages.length - 1] - ages[0]);

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic .

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
ages.push(25);
console.log(ages[ages.length - 1] - ages[0]);

//c. 

let ages = [3, 9, 23, 64, 2, 8, 28, 93]
var total= 0;
for(var i = 0; i < ages.length; i++) {
    total += ages[i];
}
var avg = total / ages.length;
console.log(avg);

  
//  Problem 2

let names = ["Sam", "Tommy", "Tim","Sally","Buck","Bob"];

  console.log(names);


  // a. Loop to iterate through the array - cacluate the average number of letters.

let names = ["Sam", "Tommy", "Tim","Sally","Buck","Bob"];

let lengths = names.map(function(element) {
    return element.length;
});

let sum = lengths.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;

});

var avg = sum / names.length;

console.log(avg);

//b


let names = ["Sam", "Tommy", "Tim","Sally","Buck","Bob"];

for(var i = 0; i <= names.length; i++){

        console.log(names[i])
    }


//3. array[array.length - 1] 

//4.array[0]

// 5. Array Lengths

let names = ["Sam", "Tommy", "Tim","Sally","Buck","Bob"];

let lengths = names.map(function(element) {
    return element.length;
});
    

let nameLengths = []

nameLengths.push(lengths);

console.log(nameLengths);


// 6.

let nameLengths = [3,5,3,5,4,3];

var total = 0;

for(var i = 0; i < nameLengths.length; i++) {
       total+= nameLengths[i];
    }


    console.log(total);


    //7. 


    function repeatStringNumTimes(word, n) {
        var repeatedString = "";
        while (n > 0) {
          repeatedString += word;
          n--;
        }
        return repeatedString;
      }
      repeatStringNumTimes("Hello", 3);



    //8.

    function fullName(firstName, lastName){
        return  firstName + " " + lastName;
      }
  
      var firstName = "Donald";
      var lastName = "John";
  
      console.log(fullName(firstName,lastName));
    

  
    
    /// 9.

let numbers = [1,2,3,5,6,5,6,5,6]

var sum = numbers.reduce(function(a, b){
    return a + b;
}, 0);


function testNum(sum) {
    sum>100;


    


    //10.

    
let testArray = [3, 9, 23, 64, 2, 8, 28, 93]

var total= 0;

for(var i = 0; i < testArray.length; i++) {
    total += testArray[i];
}
var avg = total / testArray.length;

console.log(avg);



//11.






//12.




let a = "isHotOutside"

function willBuyDrink(a,moneyInPocket ){
    if(a && moneyInPocket > 10.50) { return true; }
    else { return 10.50 - moneyInPocket; }
}

willBuyDrink(a,20);

//13.


function speakEasyPassword(a){
    if a = 'Javascript' { return 'Welcome to Joe Speakeasy';
}
    else return "Are you lost,friend"}
    
}
