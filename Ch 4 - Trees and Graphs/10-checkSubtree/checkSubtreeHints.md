If T2 is a subtree of Tl, how will its in-order traversal compare to Tl's? What about its
pre-order and post-order traversal?

The in-order traversals won't tell us much. After all, every binary search tree with the
same values (regardless of structure) will have the same in-order traversal. This is what
in-order traversal means: contents are in-order. (And if it won't work in the specific case
of a binary search tree, then it certainly won't work for a general binary tree.) The preorder traversal, however, is much more indicative.

You may have concluded that if T2. preorderTraversal () is a substring of
Tl. preorderTraversal (), then T2 is a subtree of Tl. This is almost true, except
that the trees could have duplicate values. Suppose Tl and T2 have all duplicate values
but different structures. The pre-order traversals will look the same even though T2 is
not a subtree of Tl. How can you handle situations like this?

Although the problem seems like it stems from duplicate values, it's really deeper than
that. The issue is that the pre-order traversal is the same only because there are null
nodes that we skipped over (because they're null). Consider inserting a placeholder
value into the pre-order traversal string whenever you reach a null node. Register the
null node as a "real" node so that you can distinguish between the different structures.

Alternatively, we can handle this problem recursively. Given a specific node within Tl,
can we check to see if its subtree matches T2?
