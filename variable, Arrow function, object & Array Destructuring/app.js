
// ES5
// var firstName = "Mateen"
// console.log("first name" , firstName)

//  var ma 1 name se variable bana ne ka bad dubara usi name se variable banjahe ga 
//  or first wala variable overhide ho jahe ga. error nahi ahega.

// var firstName = "mateen"

// var firstName = "Gaba"
// console.log(firstName);



// ES6
// let
// const



// let
// let ma 1 name sa variable bana ne ka bad dubara usi name sa variable bana ne sa error da ga. (firstName' has already been declared).
// let variable ki value ko re-initialize kar sakte hai.


// let firstName = "Mateen"
// //let firstName = "gaba"   // error

// firstName = "Gaba"
// console.log(firstName);


// const

// const 1 constant variable hai. const ma isi name sa dusra variable nahi bana sakte or nahi variable ki value
// re-initialize kar sakte hai. or const ko khali declier bhi nahi kar sakte.

// const firstName = "Mateen"
// //const firstName = "gaba"   // error

// firstName = "Gaba"
// console.log(firstName);

//re-initialize 
// const appName = "SMIT"
// appName = "SMIT HELLO"
// console.log(appName, "appName")


// var = > function scope
//block scope variable , let , const
// let or const agar block of statement ma declier kia hai to usi ma milan ga.



// let fullName;
// if (true) {
//     fullName = "Mateen"
// }
// console.log(fullName, "fullName")



// var fullname = "Mateen"

// function foo() {
//     fullname = "Gaba"
//    console.log(" 2",fullname)
// }

// console.log("1", fullname)
// foo()



// let fullname = "Mateen"

// function foo() {
//     fullname = "Mateen Gaba"
//     console.log("2", fullname)
// }
// foo()
// console.log("1", fullname)



// Arrow Function

//1

// const foo = () => {
//     block of statement
// }

// foo()



//2

// const foo = (name, lastName) => {
//     console.log("foo arrow function", name, lastName)
// }

// foo("Mateen", "Gaba")



//3


// const add = (num1, num2) => {
//     console.log(num1 + num2)
// }


// add(20, 30)


//4
// const add = () => {
//     return 10 +20
// }

// single line of value hai to return keyword hata do , function barcket hata do.
// const add = () => 10 + 30

// console.log(add())


//5


// const foo = (num1, num2 = 20) => {
//     console.log("HELLO WORLD", num1, num2)
// }

// foo(20)


//6
// function add(num1, num2) {
//     return num1 + num2
// }


// console.log(add(30, 40))


//7

//return keyword ek value ko function se wapas dene ke liye use hota hai.

// const calc = (num1, num2) => {
//     return num1 + num2    // Yahan function return karta hai 70 ko
//                            // num1 aur num2 parameters hain, jo arguments ki values hold karte hain
// }

// let result = calc(20, 50)  //calc function call hota hai aur return value (70) result mein store hoti hai
//                            // calc function ko call karte waqt num1 aur num2 arguments diye gaye

// console.log(result, "result")


//this

//console.log(this)  // windows
// object ma normal function ma this ka keyword apna parent uthata hai or aerrow function ma windows uthata hai.

//1

// function foo() {
//     console.log(this)  // windows
// }
// foo()


//2

// const obj = {
//     foo: function () {
//         console.log(this) // parent
//     }
// }

// obj.foo()


//3
// const obj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     fullName: () => {
//         console.log(this)  // windows
//     }
// }

// obj.fullName()


//4
// const obj = {
//     firstName: "Jaffar",
//     lastName: "Aman",
//     fullName: function(){
//         console.log(this)  // parent
//     }
// }

// obj.fullName()  





// Object || Array =>  Destructuring


// object Destructuring ma jo key ho gi wahi variabe (value ki) ban jahe ga. 

//1
// const stdObj = {
//     name: "Mateen",
//     age: 35,
// }

// const { age, name } = stdObj

// console.log(name , age)


//2
// const stdObj = {
//     firstName: "Mateen",
//     lastName: "Gaba",
//     city: "karachi",
//     email:"abc@gmail",
//     age: 35,
// }

// const { firstName, lastName, city,email,age } = stdObj

// console.log(firstName, lastName, city,email,age )



//Array =>  Destructuring
//Array Destructuring array ki jo fist value ho gi who fisrt variable ma save ho gi. isi tarha, dosre =>second, teesri =>third ma. 

//1
// const arr = ["karachi", "lahore"]
// const [city1,city2 ] = arr
// console.log(city1,city2)



//2
// const arr = ["apple", "mango", "oringe", "pinaple" ,"banana"]
// const[frute1,frute2,frute3,frute4,frute5,frute6 ] = arr

// console.log(frute1,frute2,frute3,frute4,frute5,frute6);
