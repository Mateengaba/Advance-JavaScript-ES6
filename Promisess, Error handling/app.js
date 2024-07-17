

//ES5

//1......

// const myWada = new Promise((resolve, reject) => {
//     const batfaki = false
//     if (batfaki) {
//         // resolve("hanimoon pa jahen ga"); 1st way

//         resolve({
//             mission: "successfully",
//             msg: "Hunza trip done"
//         })

//     } else {
//         reject("app mamu ban gahe");
//     }

// })  //  Promise ka bad  than catch lage ga.

// myWada.then((resolve) => {
//     console.log("resolve", resolve);

// }).catch((error) => {
//     console.log("error", error);
// })


//2..........

// const myPromisess = new Promise((resolve, reject) => {
    
//     const error = true

// if (error) {
//     resolve({
//         mission: "successfully",
//         userName: "mateen",
//         email : "mateen@gmail.com"
//     })
    
// } else {
//     reject("demag to sahi hai")
// }

// })

// myPromisess.then((user)=>{
//     console.log(user);
//     return user.userName
// }).then((userName)=>{
//     console.log("userName", userName);
// })
// .catch((error)=>{
// console.log(error);
// })




//3......
// fetch ek promise return karta hai.


// const fetchDataThen = () => {
//     fetch("https://fakestoreapi.com/products")

//  // .then(response => response.json()) promise ko handle karta hai aur response ko JSON format mein parse karta hai. 
// //response variable mein ek promise store hota hai jo resolve hoga JSON data ke saath.

// .then(response => response.json()) 
 
//         .then(response => {
//         console.log(response);
        
//         })
//         .catch(error => {
//             console.error("Error:", error);
//         });

// };

// fetchDataThen();




//ES6

//1...........



// const fetchData = async () => {
//     try {
//         const response = await fetch("https://fakestoreapi.com/products");
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log("error", error);
//     }
// }

// fetchData();


//2........

// const dataFetch = async () => {

// const parent = document.getElementById("parent")

//     try {

//         const response = await  fetch("https://fakestoreapi.com/products")
//         const data = await response.json();
//         let products = data.map((value)=>{
// parent.innerHTML += `<div class="col-lg-3">
// <div class="card" style="width: 100%;">
//       <img src=${value.image} style="width: 100%; height: 300px;"  class="card-img-top" alt="...">
//       <div class="card-body">
//        <h5 class="card-title"> ${value.title.slice(0, 15)} </h5>
//           <p class="card-text"> ${value.description.slice(0, 50)} </p>
//           <a href="#" class="btn btn-primary">Go somewhere</a>
//       </div>
//   </div>
// </div>`


// console.log(value);

//         })
//       //  console.log(data);
       
   
   
// } catch (error) {

//     console.log("error", error);
// }

// }

// dataFetch()

//*************/
// same code write, try/catch (async/await) and .then.catch,


// try/catch....

// const myUser = async ()=>{

//     try {
//         const response = await fetch("https://api.escuelajs.co/api/v1/users")
//         console.log(response);
//         const userData = await response.json()
//         console.log(userData);

//     } catch (error) {
//         console.log(error);
//     }

// }

// myUser()



//.then.catch....

fetch("https://api.escuelajs.co/api/v1/users").then((response)=>{ // ya fetch ka then hai
    return response.json()

})

.then((data)=>{
})

.catch((error)=>{
console.log(error);
})