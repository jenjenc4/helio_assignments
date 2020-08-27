//function checks to see if a number is even.  
//this function returns a promise


function isEven(number)
{   //number is in scope even though we are in a diff function
    let prom = new Promise ((resolve, reject) =>  //this function has only 1 job--call it resolve or reject
    //parameters have two functions: resolve function and reject function
    {

        if (number % 2==0) //ck if number is even by using modulas oprator
        {
            resolve(`The number ${number} is even`) //that's where we're calling or executing the resolve function
        }
        else 
        {
            reject(`The number ${number} is odd`)
        }
    })
    return prom //returning an obj always going to have a method called then, and a method called catch.
}

module.exports.isEven = isEven  //export is an obj in module obj..we're adding property called is even
//and assigned to function is Even