What is currying function in js ?

Currying is a functional programming technique where a function with multiple arguments is transformed into a series of functions, each taking a single argument.

Instead of taking all arguments at once, the curried function takes the first argument, returns a new function that takes the next argument, and so on until all arguments are provided. The final function then returns the result.

In simpler terms, currying breaks down a function that takes multiple parameters into a chain of functions that each take one parameter.

Why is currying usefull in js ?

It helps us to create a higher-order function
It reduces the chances of error in our function by dividing it into multiple smaller functions that can handle one responsibility.
It is very useful in building modular and reusable code
It helps us to avoid passing the same variable multiple times
It makes the code more readable