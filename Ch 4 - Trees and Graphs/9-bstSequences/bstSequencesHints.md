What is the very first value that must be in each array?

The root is the very first value that must be in every array. What can you say about the
order of the values in the left subtree as compared to the values in the right subtree? Do
the left subtree values need to be inserted before the right subtree?

The relationship between the left subtree values and the right subtree values is, essentially, anything. The left subtree values could be inserted before the right subtree, or the
reverse (right values before left), or any other ordering.

Break this down into subproblems. Use recursion. If you had all possible sequences for
the left subtree and the right subtree, how could you create all possible sequences for
the entire tree?
