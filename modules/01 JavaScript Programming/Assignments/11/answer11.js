
/*1 - 1. Create a while loop that iterates up to 50 while logging "boom" at multiples of 7*/
var i = 7;
while (i < 51) {
    if (i % 7 === 0) {
        console.log("boom");
    }
    i++;
}

/*2 - 2. Create a while that iterates up to 100 while logging "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5*/
var i = 3;

while(i < 101){

    if(i % 3 === 0){
        console.log("fizz");
    }

    if(i % 5 === 0){
        console.log("buzz");
    }

    if((i % 3 === 0) && (i % 5 === 0)){
        console.log("fizzbuzz");
    }
    
    i++;
}
