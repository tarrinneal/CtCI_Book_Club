Reverse engineer this, starting from the outermost layer to the innermost layer

What does it mean if A & B == 0?

If A & B == 0, then it means that A and B never have a 1 at the same spot. Apply this
to the equation in the problem.

If ( n & ( n -1)) == 0, then this means that n and n - 1 never have a 1 in the same
spot. Why would that happen?

What is the relationship between how n looks and how n - 1 looks? Walk through a
binary subtraction.

When you do a binary subtraction, you flip the rightmost Os to a 1, stopping when you
get to a 1 (which is also flipped). Everything (all the 1 s and Os) on the left will stay put.

Picture n and n -1. To subtract 1 from n, you flipped the rightmost 1 to a O and all the Os
on its right to 1 s. If n & n -1 == 0, then there are no 1 s to the left of the first 1. What
does that mean about n?

We know that n must have only one 1 if n & ( n -1) == 0. What sorts of numbers have
only one 1?
