/* START CODE UNDER THIS LINE */
console.log("30/3");
////Pulse Check///
///q1///
///Write a function that accepts two arguments, 
//number and callback, and using the callback return the number squared.
//const squared= function (number){
//return number **2}
//const square= function (number,cb){
//return cb(number)

//}
//console.log(square(3,squared));


//q2//
//Using forEach iterate over the following arrays and console log all the indexes.

//const numbers = [1, 2, 3, 4];
//const animals = ["Cat", "Dog", "Bear", "Bat"];
//numbers.forEach(function(elem,i){
  //  console.log("Elem", elem, "i", i);
//})

//animals.forEach(function(elem,i){
  //  console.log("Elem", elem, "i", i);
//})



//q3//
//Using map iterate over the following array and decrement all elements by 1.

//const numbers = [1, 2, 3, 4];
//const newArray = numbers.map(function(elem,i){
    //console.log("Elem", elem, "i: ", i);
    ///const modifiedvalue = elem-1;


//return modifiedvalue;;

//})

//q4///
//Using filter iterate over the following array and return all string values.

const array = [1, "two", "three", 4];

const string  =function(array){
    const newArray = array.filter(function(elem,i){
        
        console.log(elem, );
     return typeof elem === "string"

    })
    return newArray
}
console.log(string (array));
///q5///
///Using reduce iterate over the following array and return
///the sum of all the numbers doubled.

const numbers = [1, 2, 3, 4];
numbers.reduce(function (doubled  ,number) {
    
    return accumulator ,doubled 
  }); 
console.log(number);



    