// Logical operators
/*
// Positive number means true and vice-versa
console.log("Logical AND operator");
console.log(5 && 10);
console.log(10 && 5);
console.log(true && 10);
console.log(false && 10);
console.log(true && false);
console.log(false && true);
console.log();

/* The AND operator will check the first condition if true moves to next condition else terminates it. Positive number means true. if both the condition are true we get the latest or second condition*/

/*
console.log("Logical OR operator");
console.log(5 || 10);
console.log(true || 10);
console.log(10 || true);
console.log(false || 10);
console.log(true || false);
console.log(false || true || 10);//here we get true in 2nd condition hence we will not see the 3rd condition
console.log();
/* The OR operator will check if the first condition is true then we simply move on with it, only if it is false we then move on to the next condition to find a condition that passes to print it. Where-ever we find this positive/true condition we print and simply exit the condition */

//Relational Operator

/*
a=5     //type:number
b='5'   //type:String
console.log("Output (==) using :",a==b); //check only its content
console.log("Output (===) using :",a===b); //check both type and content

/*  We can implement "===" using "&&"
        if(typeof(a)==typeof(b) && a==b)
    Hence we can say both '==' and '===' use "&&" indirectly
*/

//Bitwise Operator

a=70
b=35
console.log(a&b);
console.log(a^b);
console.log(~1);
console.log(a>>4);
console.log(a<<4);
console.log(8<<1);
console.log(1>>1);
console.log(159>>2);