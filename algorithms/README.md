# Algorithms and Data Structures Masterclass

## Big-O Notation
Imagine we have multiple implementations of the same function. How can we determine which one is the "best"? This is what Big-O sets out to answer. It's important to have a precise vocabulary to talk about how our code performs. It is useful for discussing trade-offs between different approaches.

### The Problem with Time (in terms of speed)
- Different machines will record different times.
- The _same_ machine will record different times.
- For fast algorithms, speed measurements may not be precise enough.

### So if not time, then what?
Rather than counting _seconds_, which are so variable... let's count the _number_ of simple operations the computer has to perform!

### What is Logarithm?
It is the inverse of exponentiation.
> Log2(8) = 3 -----> 2^3 = 8   
> LogBASE(VALUE) = EXPONENT -----> BASE^EXPONENT = VALUE

The logarithm of a number roughly measures the number of times you can divide that number by its base, before you get a value that's less than or equal to one.

For example:  
**Log2(8)**
- 8 / 2
- 4 / 2
- 2 / 2
- 1  

Log2(8) = 3

Another Example:  
**Log2(25)**
- 25 / 2
- 12.5 / 2
- 6.25 / 2
- 3.125 / 2
- 1.5625 / 2
- 0.78125  

Log2(25) = Somewhere between 4 and 5.  
*It's actually about 4.64

