/*
var myArray = [];

// Only change code below this line
var i = 5;
while (i >= 0) {
myArray.push(i);
i = i - 1;
}

console.log(myArray.toString);


// Setup
var myArray = [];

// Only change code below this line
var i = 0;
for(i;i <= 5;i++) {
    myArray.push(i);
}
console.log(myArray);

// Setup
var myArray2 = [];

// Only change code below this line
for(var i = 9;i>=1;i--) {
    myArray2.push(i);
}

console.log(myArray2);

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
  for(var i = 0;i<=arr.length;i++) {
    
    for(var j = 0;j<=arr[i].length;j++) {
        
   product = product*arr[i][j];
   
   
    }
  
  }
    // Only change code above this line
    return product;
  }
  
  console.log(multiplyAll([[1,2],[3,4],[5,6,7]]));
  */

const { PassThrough } = require("stream");

var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

//console.log(contacts[0])

/*
function lookUpProfile(name, prop){
  // Only change code below this line
  for(var c=0;c<contacts.length;c++) {
    console.log(c)
    var infoBlock = contacts[c];
    function package(name, prop) {
      if(infoBlock.firstName == name && infoBlock.hasOwnProperty(prop) == true){
        return infoBlock[prop];
    }else if(infoBlock.firstName == name && infoBlock.hasOwnProperty(prop) == false) {
        return "No such property";
    } else if(infoBlock.firstName != name){
        return "No such contact";
    }else{
      
      }
    }
    package(name, prop)
  }
  // Only change code above this line
  }
*/
// SPACE SPACE SPACE SPACE SPACE SPACE SPACE

function lookUpProfile(name, prop){
  // Only change code below this line
  for(var c=0;c<contacts.length;c++) {
  var return_value;
  var infoBlock = contacts[c];
  //console.log(infoBlock)
  if(infoBlock.firstName == name && infoBlock.hasOwnProperty(prop) == true){
  //console.log(infoBlock[prop]);
    return return_value = infoBlock[prop];}
  else if(infoBlock.firstName == name && infoBlock.hasOwnProperty(prop) == false) {
    return return_value = "No such property";}
  
  /*else(infoBlock.firstName != name) {
    return_value = "No such contact"
  } */
  
    }
  
  return "No such contact";
  // Only change code above this line
    }
  
console.log(lookUpProfile("Kristian", "lastName"));