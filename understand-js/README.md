# Javascript: Understanding the Weird Parts
**Instructor:** Anthony Alicea  
**Platform:** Udemy  
**Date Started:** 09/30/2018  
**Site:**  N/A

## Execution Context & Lexical Environments - Section 02
### **Conceptual Asides**
**Syntax Parsers:** A program that reads your code and determines what it does and if its grammar is valid. - *Your code isn't magic. Someone else wrote a program (compilers or interpreters) to translate it for the computer. Your code is not what is actually being given to the computer, but a translation of it. So along the translation process, the syntax parser can have your code do something else.*  

**Lexical Environment:** Where something sits physically in the code you write. - *A lexical environment exists in programming languages in which **where** you write something is important. You may have a variable inside a function, so the variable sits lexically inside the function.*

**Execution Context:** A wrapper to help manage the code that is running. There are lots of lexical environments. - *Which one is currently running is managed via execution contexts. It can contain things beyond what you've written in your code.*

**Objects in JS:** A collection of name/value pairs

**Global in JS:** Not inside a function

**Hoisting:** Before your code begins to be executed line by line, the Javascript engine has already set aside memory space for the variables and functions that you've created, so when the code is in the Execution Phase, it can access them. - *Keep in mind that functions are set aside in their entirety, while variables are set up with a placeholder value of undefined.*

**Single Threaded:** One command at a time. - *Maybe not when under the hood of the browser*

**Synchronous:** One at a time. - *And in order...*

**Invocation:** Running a Function. - *In Javascript, by using parenthesis ()*

**Variable Environment:** Where the variables live. - *And how they relate to each other in memory*



### **The Global Context**
Whenver code is run in JS, it is run inside an execution context. When the JS engine is parsing through our code, it is running each section in an execution context.  The base execution context is the global execution context, and it has a couple of special things that come along for the ride. When we say global, we are talking about things that are accessible everywhere to everything in our code. The global execution context creates two things for us, a global **object** and a variable called **'this'**.

To illustrate the global object and variable, we can link an empty javascript file on an html page.  If we open up the Chrome Dev tools console, you can see that there is a **'this'** variable and a **'window'** object available, even though we did not have any code whatsoever.

If we now include the following script tag, the variable and function will be global. If we go to the Chrome dev tools console, we will see that the variable and function are appended to the global 'window'.
```javascript
var a = 'Hello World';

function b() {}
```

When your Javscript code is executed, an execution context is created. At the base level, when you're not inside a function, you have a global object that the javascript engine creates for you as part of that execution context. If you're running code inside a browser, that Global Object is the window object. You'd get a special variable called 'this', and in the browser and global level, 'this' is the same as the window object. You also get a link to the outer environment, where at the global context, it is null, but inside a function, would give you access to any outer contexts.

### **Execution Context: Creation and Hoisting**
Below is a phenomenon that happens in javascript, that people find surprising and perhaps a bit confusing.
```javascript
var a = 'Hello World';

function b() {
  console.log('function b called.');
}

b();
console.log(a);
```
You may expect the following output.
```
> function b called.
> Hello World
```
And you would be correct.   

How about if you changed the code to be like this? Notice that you are calling on the function and variable, before they have even been declared or instantiated.
```javascript
b();
console.log(a);

var a = 'Hello World';

function b() {
  console.log('function b called.');
}
```
In most programming languages, you would expect an error because they typically execute their code one line at a time, and because we haven't declared or instantiated a or b, you would get an error. However, look at the output we get:
```
> function b called.
> undefined
```
This phenomenon is called **Hoisting**.

To better understand this, we need to understand how the execution context is created, and it is actually in two phases: Creation Phase and Execution Phase.

### **Execution Context: Creation Phase**  
In the Creation Phase, the Global object is setup in memory (only in the global context), the 'this' variable is setup in memory for every context and the outer environment link is created. Lastly as the parser runs through your code and begins to setup what you have written for translation, it recognizes where you've created variables and where you've created functions. So it sets up the memory space for the variables and functions and this setup is called Hoisting. **All 'Hoisting' really means is that before your code begins to be executed line by line, the Javascript engine has already set aside memory space for the variables and functions that you've created, so when the code is in the Execution Phase, it can access them. However, as you saw, functions are set aside in their entirety, while variables are set up with a placeholder value of undefined.**

**Undefined**  
`undefined` and not defined are not actually the same thing. `undefined` is actually a special value that JavaScript has internally, and it is a value meaning that the variable hasn't been set.
```javascript
var a;
console.log(a);
// OUTPUT
// > undefined
```
```javascript
console.log(a);
// OUTPUT
// > Uncaught ReferenceError: a is not defined
```

However, it is not a good practice to set a variable to a value of `undefined` (although it is valid javascript) and should be instead left to a value set strictly by the javascript engine.  Setting things to undefined yourself, could make debugging much harder than if you leave it to just the javascript engine.

### **Execution Context: Execution Phase**  
With the global object, the 'this' variable, the outer environment link, and your functions and variables all set up and in memory, the javascript engine is now ready to run the code you've written line by line. 

### **Execution Stack**
Here is an example of execution stacks and variable environments. 
```javascript
function b() {
    var x = 3;
    console.log('function b() x:', x);
}

function a() {
    var x = 2;
    b();
    console.log('function a() x:', x);
}

var x = 1;
console.log('global x:', x);
a();
console.log('global x:', x);

// OUTPUT
// > global x: 1
// > function b() x: 3
// > function a() x: 2
// > global x: 1
```
