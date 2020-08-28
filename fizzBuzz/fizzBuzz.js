let fizzBuzz = function (){

 let arr = []

 for (let num=1; arr.length<100; num++) //are the conditional operators of for/if/else statements functions? nope
{     
 if (num % 3 === 0 && num % 5 === 0) 
    { 
        arr.push('FizzBuzz');
    } 
    else if(num % 3 === 0)
    {
        arr.push('Fizz');
    }
    else if(num % 5 === 0)
    {
        arr.push('Buzz');
    }
    else
    {
        arr.push(num); //why isn't num also getting pushed up in fizzBuzz ()?
    }
}   
return arr  //dont i also have to return the value of fizzBuzz function
}

console.log(fizzBuzz())

