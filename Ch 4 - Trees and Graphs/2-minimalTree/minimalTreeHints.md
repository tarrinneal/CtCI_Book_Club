A minimal binary tree has about the same number of nodes on the left of each node as
on the right. Let's focus on just the root for now. How would you ensure that about the
same number of nodes are on the left of the root as on the right?

You could implement this by finding the "ideal" next element to add and repeatedly
calling insertValue. This will be a bit inefficient, as you would have to repeatedly
traverse the tree. Try recursion instead. Can you divide this problem into subproblems?

Imagine we had a createMinimal Tree method that returns a minimal tree for a
given array (but for some strange reason doesn't operate on the root of the tree). Could
you use this to operate on the root of the tree? Could you write the base case for the
function? Great! Then that's basically the entire function.
