
//// Simple Call Back Method /////

// function first(){
//     console.log(1)
// }
// function second(){
//     console.log(2)
// }
// function third(){
//     console.log(3)
// }
// first()
// second()
// third()
/////////////////////////////////

////// Asychrous method with setTimeOut //////

// function first(){
//     setTimeout(()=>{
//         console.log(1)
//     })
// }
// function second(){
//     console.log(2)
// }
// function third(){
//     console.log(3)
// }
// first()
// second()
// third()

////// CallBack Method with Asychronous //////

// function first(){
//         console.log(1)
// }
// function second(callback){
//     setTimeout(()=>{
//         console.log(2)
//         callback()
//     },0)
// }
// function third(){
//     console.log(3)
// }
// first()
// second(third)


////// Pyramid of Dom with Callback //////

// function pyramidOfDom(){
//     setTimeout(()=>{
//         console.log(1)
//         setTimeout(()=>{
//             console.log(2)
//             setTimeout(()=>{
//                 console.log(3)
//             },500)
//         },1000)
//     },1500)
// }
// console.log(pyramidOfDom())

////// Pyramid with Dom with Callback //////

// function asychronousRequest(args,callback){
//     if(!args){
//         return callback(new Error('Error is here'))
//     }else{
//         return setTimeout(()=>callback(null,
//             {
//                 body:args + '' + Math.floor(Math.random()*10)
//             }
//         ),500)
//     }
// }
// function callBackHell(){
//     asychronousRequest('First',function first(error, response){
//     if(error){
//         console.log(error)
//         return
//     }
//     console.log(response.body)
//     asychronousRequest('Second',function second(error, response){
//         if(error){
//             console.log(error)
//             return
//         }
//         console.log(response.body)
//         asychronousRequest('Third',function third(error, response){
//             if(error){
//                 console.log(error)
//                 return
//             }
//             console.log(response.body)
//         })
//     })
// })
// }
// callBackHell()

// const promise = new Promise((resolve, reject) => {
//     setTimeout(()=> resolve('We did it!'),3000)
// })
// promise
//   .then((firstResponse) => {
//     // Return a new value for the next then
//     return firstResponse + ' And chaining!'
//   })
//   .then((secondResponse) => {
//     console.log(secondResponse)
//   })

// function getUsers(onSuccess) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         // Handle resolve and reject in the asynchronous API
//         if (onSuccess) {
//           resolve([
//             { id: 1, name: 'Jerry' },
//             { id: 2, name: 'Elaine' },
//             { id: 3, name: 'George' },
//           ])
//         } else {
//           reject('Failed to fetch data!')
//         }
//       }, 1000)
//     })
//   }
//   getUsers(true)
//   .then((response) => {
//     console.log(response)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// fetch('https://api.github.com/users/octocat')
//   .then((response) => {
//     return response.json()
//   })
//   .then((data) => {
//     console.log(data)
//   })
//   .catch((error) => {
//     console.error(error)
//   })

// async function getUser() {
//   return {}
// }
// console.log(getUser())

// getUser().then((response) => console.log(response))

// async function getUser(){
//   const response = await fetch('https://api.github.com/users/octocat')
//   const data = await response.json()
//   console.log(data)
// }
// getUser()

// Handling success and errors with async/await
// async function getUser() {
//   try {
//     // Handle success in try
//     const response = await fetch('https://api.github.com/users/octocat')
//     const data = await response.json()

//     console.log(data)
//   } catch (error) {
//     // Handle error in catch
//     console.error(error)
//   }
// }
// getUser()