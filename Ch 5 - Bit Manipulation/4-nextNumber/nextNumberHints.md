Get Next: Start with a brute force solution for each.

Get Next: Picture a binary number-something with a bunch of 1 s and Os spread out
throughout the number. Suppose you flip a 1 to a O and a O to a 1. In what case will the
number get bigger? In what case will it get smaller?

Get Next: If you flip a 1 to a O and a Oto a 1, it will get bigger if the 0-> 1 bit is more significant than the 1->0 bit. How can you use this to create the next biggest number (with the
same number of 1 s)?

Get Next: Can you flip a Oto a 1 to create the next biggest number?

Get Next: Flipping a Oto a 1 will create a bigger number. The farther right the index is
the smaller the bigger number is. If we have a number like 1001, we want to flip the
rightmost O (to create 1011 ). But if we have a number like 1010, we should not flip the
rightmost 1.

Get Next: We should flip the rightmost non-trailing 0. The number 1010 would become 1110. Once we've done that, we need to flip a 1 to a Oto make the number as small
as possible, but bigger than the original number (1010). What do we do? How can we
shrink the number?

Get Next: We can shrink the number by moving all the 1 s to the right of the flipped bit
as far right as possible (removing a 1 in the process).

Get Previous: Once you've solved Get Next, try to invert the logic for Get Previous.
