If you traversed the tree using an in-order traversal and the elements were truly in
the right order, does this indicate that the tree is actually in order? What happens for
duplicate elements? If duplicate elements are allowed, they must be on a specific side
(usually the left).

To be a binary search tree, it's not sufficient that the left. value <= current.
value < right. value for each node. Every node on the left must be less than the
current node, which must be less than all the nodes on the right.

If every node on the left must be less than or equal to the current node, then this is really
the same thing as saying that the biggest node on the left must be less than or equal to
the current node.

Rather than validating the current node's value against left Tree. max and
rightTree. min, can we flip around the logic? Validate the left tree's nodes to ensure
that they are smaller than current. value.

Think about the checkBST function as a recursive function that ensures each node is
within an allowable (min, max) range. At first, this range is infinite. When we traverse
to the left, the min is negative infinity and the max is root. value. Can you implement
this recursive function and properly adjust these ranges as you traverse the tree?
