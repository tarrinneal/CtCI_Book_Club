Start with a brute force solution. Can you try all possibilities?

Flipping a O to a 1 can merge two sequences of 1 s-but only if the two sequences are
separated by only one 0.

Each sequence can be lengthened by merging it with an adjacent sequence (if any) or
just flipping the immediate neighboring zero. You just need to find the best choice.

Try to do it in linear time, a single pass, and 0(1) space.
