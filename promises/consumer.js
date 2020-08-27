//this is to consume or use or sink a promise

//i can use single or double quotes.  
// ./  single dot: this directory.. it's like my href--where it is.  
//.. go up a directory  

let {isEven} = require('./promise')

let prom1 = isEven(8)

//if the promise resolves then use the "then" function
//f the promise to get the value
//then calls a funciton, that you define, that accepts
//a single parameter. the value of the promise is 
//passed into that parameter

prom1.then((value) =>

{
    console.log(value)
})

let prom2 = isEven(45)

prom2 //if my promise resolves then do line 26-29
.then((value) => //'then' gets teh value from the resolve function call. that what gets called if promise is resolved
{
    console.log(value)
})
//else do 31-33
.catch((err) => {
    console.log(err)
})

//async and await--come in pairs
//await keyword must be used in an async function

async function wait()
{
    let answer = await isEven(42)
    console.log(answer)
}
//calling await in a aynch function (function is called wait().)..unpacks the promise and showing value within it. 
// doesnt return a number, or a string. 
//it returns an object, a promise.  

async function waitError()  //defining the function.. so you define and call or exedute funciton.
{
    try {  
    let answer = await isEven(47)
    console.log(answer)
    }
    catch(error)
    {
        console.log(error)
    }
}
//calling async function
wait()
waitError()
//there's a third built-in function that promises has, called finally.
//let prom3= isEven(15)

//or it can be rewritten as
isEven(15)
.then((resValue) =>

{
console.log(resValue)

})
.catch(err => 
    {
        console.log(err)
    })

    .finally(() => //finally always gets executed. it cleans up what we indicate within the finally function
       //this function is called if promise is resolvd or rejected. It's called last
        {
            console.log("cleanup")
        })
