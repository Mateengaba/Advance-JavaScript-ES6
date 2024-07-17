


// Ternary opt => ` `


// find ,  findIndex , filter , map , forEach  => Arrays Method
// ya sub function hai . in ka under jo callback function hota hai who high order function hota hai.



// const arr = ["Karachi", "Lahore", "Multan", "Islamabad"]

// const value = arr.find((value, index, array) => {
//     if (value == "Lahore") {
//         // return true
//         return value
//     }
//    
//     // console.log(value, index);

//     // if (value === "Multan") {
//     //     return true
//     // }
// })

// console.log("value", value)



// findIndex

// const arr = ["Karachi", "Lahore", "Multan", "Islamabad"]


// var indexNum = arr.findIndex((value, index) => {
//     // console.log(value, "value")
//     if (value === "Islamabad") {
//         return true
//     }
// })
// console.log("indexNum", indexNum)




//map
// map array pa loop chalata hai. or 1 new array return karta hai. map sa new array ma value pa altration kar sakte hai.
//Original array ko change nahi karta, balki ek naya array return karta hai.
//new array ma value nahi hogi to undefine show kare ga

//ES5

// var arr = [2, 4, 6, 8, 10]
// var tempArr = []
// for (var i = 0; i < arr.length; i++) {
//     tempArr.push(arr[i] * 2)

// }

// console.log(arr)
// console.log(tempArr)

//..........






//1
// let number = [10,20,30,40,50,60]

// const newNumber = number.map((value, index)=>{

// //console.log(value);
// return value *5

// }
// )

// console.log(number);
// console.log(newNumber);

//....




//2

// const persons = [
//     {firstname : "Malcom", lastname: "Reynolds"},
//     {firstname : "Kaylee", lastname: "Frye"},
//     {firstname : "Jayne", lastname: "Cobb"}
//   ];

//   const newName = persons.map((value, index)=>{

//     //console.log(value.lastname);
//     return value.firstname

//   })

//   console.log(newName);  newName ak new array hai.


//3

// let users = [
//     {firstName : "Susan", lastName: "Steward"},
//     {firstName : "Daniel", lastName: "Longbottom"},
//     {firstName : "Jacob", lastName: "Black"}
//   ];
  
//                            // calback function
//   let userFullnames = users.map((value)=>{
//      // return `${value.firstName} ${value.lastName}`;
//       return value.firstName + " " +value.lastName
//   })
  
//   console.log(userFullnames);


// Filter Method
// .filter method ek naya array return karta hai . Agar condition true ho, to element naye array mein add ho jata hai.
// Original array ko change nahi karta.
// new array ma value nahi hogi to empty array show kare ga


// 1

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNumbers = numbers.filter((value) => {
//     return value % 2 === 0;
//  });

//  console.log(evenNumbers);



//2
// users array mein har object ek user ko represent karta hai jo firstName aur age properties rakhta hai.
// adults array ko filter kiya gaya hai based on age property.


// let users = [
//     {firstName: "Susan", age: 25},
//     {firstName: "Daniel", age: 30},
//     {firstName: "Jacob", age: 18},
//     {firstName: "John", age: 22}
// ];

//                          // parameter
// let adults = users.filter((user) => {
//     return user.age >= 21;  // (user ki age 21 ya usse zyada hai).
// });

// console.log(adults);



//3

// var arr = [8, 2, 4, 8, 6, 8, 8, 10]

// var filterValue = arr.filter((value, index) => {
//     console.log(value)
//     if (value == 8) {
//         return value
//     }
// })

// console.log("filterValue", filterValue)



// ForEach
// Ye method kuch return nahi karta. sirf array ke har element pe operation perform karta hai.


//1 

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach((value) => {
//     console.log(value);
//  });


 //2

//  let numbers = [1, 2, 3, 4, 5];
// let sum = 0;

// numbers.forEach((value) => {
//    sum += value;
// });

// console.log(sum); 


//3
// arr[index] = value  * 2 (explain)
//Har element ko double kar rahe hain aur original array arr mein usi index pe store kar rahe hain.
//For example, agar value 1 hai to arr[index] = 1 * 2 yani 2 store ho jayega.



// var arr = [1, 11, 23, 8, 2, 4, 8, 6, 8, 8, 10]
// var tempArr = []
// const value = arr.forEach((value, index) => {

//      arr[index] = value  * 2 
//     if (value % 2 === 0) {
//         tempArr.push(value)
//     }
// })


// console.log("value", value) // value undefined hai kyunki .forEach kuch return nahi karta.
// console.log("arr", arr)
// console.log("tempArr", tempArr)



//Difference between find vs filter

//.find Method:
//.find method array ke pehle element ko return karta hai jo specified condition ko meet karta hai.
// Ye method sirf pehla matching element return karta hai aur agar koi element match nahi hota to undefined return karta hai.



//.filter Method:
//.filter method array ke un saare elements ko return karta hai jo specified condition ko meet karte hain. 
//Ye method ek naya array return karta hai jo saare matching elements ko contain karta hai. 
//Agar koi element match nahi hota to empty array [] return karta hai.

//1
// let numbers = [1, 2, 3, 4, 5, 6];

// let firstEven = numbers.find((value) => {
//     return value % 2 === 0;
// });

// console.log(firstEven); // Output: 2

// //2
// let numbers = [1, 2, 3, 4, 5, 6];

// let allEven = numbers.filter((value) => {
//     return value % 2 === 0;
// });

// console.log(allEven); // Output: [2, 4, 6]


// 3
//Example: Active users ko filter karna.

// let users = [
//     { name: "John", isActive: true },
//     { name: "Jane", isActive: false },
//     { name: "Jack", isActive: true }
// ];
// let activeUsers = users.filter(user => user.isActive);
// console.log(activeUsers); // Output: [{ name: "John", isActive: true }, { name: "Jack", isActive: true }]


//4
//Example: Active Users' Names in Uppercase
//Pehle active users ko filter karte hain.
//Phir active users ke names ko uppercase mein transform karte hain.


// let users = [
//     { name: "John", isActive: true },
//     { name: "Jane", isActive: false },
//     { name: "Jack", isActive: true }
// ];
// let activeUsers = users.filter(user => user.isActive);
// let activeUserNames = activeUsers.map(user => user.name.toUpperCase());
// console.log(activeUserNames); // Output: ["JOHN", "JACK"]





//Difference between map vs filter
// use case
// .map) Jab aapko array ke har element ko transform karna ho aur naya array create karna ho.


//1
//Example: Prices ko tax add karke update karna.

// let prices = [100, 200, 300];
// let taxedPrices = prices.map(price => price * 1.15);
// console.log(taxedPrices); // Output: [115, 230, 345]



//2
//Example: Users ki list mein har user ka full name banana.

// let users = [
//     { firstName: "John", lastName: "Doe" },
//     { firstName: "Jane", lastName: "Doe" }
// ];
// let fullNames = users.map(user => `${user.firstName} ${user.lastName}`);
// console.log(fullNames); // Output: ["John Doe", "Jane Doe"]


//3

//Jab aapko UI mein lists ko render karna ho, jaise React mein JSX elements banana.

// let products = ["Apple", "Banana", "Cherry"];
// let productElements = products.map(product => `<li>${product}</li>`);
// console.log(productElements); // Output: ["<li>Apple</li>", "<li>Banana</li>", "<li>Cherry</li>"]

// let liList = document.getElementById("liList").innerHTML = productElements
// console.log(liList);
