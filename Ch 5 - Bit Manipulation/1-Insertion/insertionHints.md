Break this into parts. Focus first on clearing the appropriate bits.

To clear the bits, create a "bit mask"that looks like a series of 1 s, then Os, then 1 s.

It's easy to create a bit mask of Os at the beginning or �nd. But how do you create a bit
mask with a bunch of zeroes in the middle? Do it the easy way: Create a bit mask for the
left side and then another one for the right side. Then you can merge those.
