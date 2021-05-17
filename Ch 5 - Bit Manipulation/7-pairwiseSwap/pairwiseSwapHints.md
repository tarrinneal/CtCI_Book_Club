Swapping each pair means moving the even bits to the left and the odd bits to the right.
Can you break this problem into parts?

Can you create a number that represents just the even bits? Then can you shift the even
bits over by one?

The value 1010 in binary is 10 in decimal or OxA in hex. What will a sequence of 101010 ...
be in hex? That is, how do you represent an alternating sequence of 1 s and Os with 1 s in
the odd places? How do you do this for the reverse (1 s in the even spots)?

Try masks 0xaaaaaaaa and 0x55555555 to select the even and odd bits. Then try
shifting the even and odd bits around to create the right number.
