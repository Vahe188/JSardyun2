let x = 1
let y = 6
let z = x + y
console.log(z);


let age = 15
if(age < 18){
    console.log("You are a child");
}
else if(age >= 18 && age < 63){
    console.log("You are a adult");
}
else{
    console.log("You are retired");
}


let array = [1, 2, 3, 4, 5]
array.forEach((element) =>{
    console.log(element);
})


function randomNumber(){
    let num = Math.floor(Math.random() * 10)
    console.log(num);
    
}
randomNumber()

let a = 1
let b = 1

console.log(a == b);
console.log(a === b);


try{
    if(4 < 7){
        console.log("magic");
    }else{
        throw new Error("Four can't be smaller then your number")
    }
    
}catch(error){
    console.error(error.message);
}



fetch('https://dummyjson.com/products')
  .then((response) => {
    return response.json()
  })
  .then((data) => {
    console.log(data)
  })

history.back()