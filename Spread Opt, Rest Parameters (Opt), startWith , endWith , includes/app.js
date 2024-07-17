


// Ternary opt => ` `

// Spread Opt => (... Three dots)


// ES5

// const arr1 = ["karachi", "Multan"]
// const arr2 = ["lahore"]



//const arr3 = arr1.concat(arr2)
// console.log(arr3)


// ES6

//1
// const arr1 = ["karachi", "Multan"]
// const arr2 = ["lahore"]

// const arr3 = [...arr1 , ...arr2]

// console.log(arr3)



//2
// const numbersOne = [1, 2, 3];
// const numbersTwo = [4, 5, 6];
// const numbersCombined = [...numbersOne, ...numbersTwo];
// console.log(numbersCombined);


//3

// const obj1 = {
//     firstName: "Mateen"
// }


// const obj2 = {
//     lastName: "Gaba"
// }

// const obj3 = { ...obj1, ...obj2 }
// console.log(obj3)


//4
//the property that did match, color, was overwritten by the last object that was passed, 
//updateMyVehicle. The resulting color is now yellow.


// const myVehicle = {
//     brand: 'Ford',
//     model: 'Mustang',
//     color: 'red'
//   }
  
//   const updateMyVehicle = {
//     type: 'car',
//     year: 2021, 
//     color: 'yellow'
//   }
  
//   const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}

// console.log(myUpdatedVehicle);




//1
// Rest Parameters
//Assign the first and second items from numbers to variables and put the rest in an array:

// const foo = (firstName, lastName,  ...rest ) => {
//     console.log(firstName, lastName, rest)
// }

// foo("Mateen", "Gaba", 22, "male", "trainer", "web and app")


//2
// const numbers = [1, 2, 3, 4, 5, 6];

// const [one, two, ...rest] = numbers;
// console.log(one);
// console.log(two);
// console.log(...rest);


// string includes
// const str = "Saylani Mass"
// console.log(str.includes("Mass"))





// startWith , endWith

// const str = "Saylani"
// console.log(str.toLowerCase().startsWith("sa"))



// const str = "Saylani"
// console.log(str.endsWith("ni"))





