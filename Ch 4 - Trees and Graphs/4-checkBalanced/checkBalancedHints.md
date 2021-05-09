Think about the definition of a balanced tree. Can you check that condition for a single
node? Can you check it for every node?

If you've developed a brute force solution, be careful about its runtime. If you are
computing the height of the subtrees for each node, you could have a pretty inefficient
algorithm.

What if you could modify the binary tree node class to allow a node to store the height
of its subtree?

You don't need to modify the binary tree class to store the height of the subtree. Can
your recursive function compute the height of each subtree while also checking if a
node is balanced?Try having the function return multiple values.

Actually, you can just have a single checkHeight function that does both the height
computation and the balance check. An integer return value can be used to indicate
both.
