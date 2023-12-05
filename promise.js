// let myPromise = new Promise(function(resolve, reject) {
//   setTimeout(function() {
//     resolve();
//   }, 1000);
// });

// myPromise
//   .then(function() {
//     return 99;
//   })
//   .then(function(number) {
//     console.log(number);
//   });


let randonNumberPromise = new Promise((resolve,reject) =>{
  setTimeout(() =>{
    let randomvalue = Math.random()
    if(randomvalue > 0.5){
      resolve(randomvalue)
      
    }
    else if(randomvalue < 0.5){
      reject(randomvalue)
      
    }
  },1000)

})

randonNumberPromise.then((number) =>{
  console.log("success",number)
})
.catch((number) =>{
  console.log("fail",number)
})
.finally((number) =>{
 console.log("complete")
})