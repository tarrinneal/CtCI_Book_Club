Try simplifying the problem. What if the path had to start at the root?

Don't forget that paths could overlap. For example, if you're looking for the sum 6, the
paths 1-> 3->2 and 1-> 3->2->4->-6->2 are both valid.

If each path had to start at the root, we could traverse all possible paths starting from
the root. We can track the sum as we go, incrementing totalPaths each time we
find a path with our target sum. Now, how do we extend this to paths that can start
anywhere? Remember: Just get a brute-force algorithm done. You can optimize later.

To extend this to paths that start anywhere, we can just repeat this process for all nodes.

If you've designed the algorithm as described thus far, you'll have an O(N log N)
algorithm in a balanced tree. This is because there are N nodes, each of which is at depth
O(log N) at worst. A node is touched once for each node above it. Therefore, the N
nodes will be touched O ( log N) time. There is an optimization that will give us an
O(N) algorithm.

What work is duplicated in the current brute-force algorithm?

Consider each path that starts from the root (there are N such paths) as an array. What
our brute-force algorithm is really doing is taking each array and finding all contiguous
subsequences that have a particular sum. We're doing this by computing all subarrays
and their sums. It might be useful to just focus on this little subproblem. Given an array,
how would you find all contiguous subsequences with a particular sum? Again, think
about the duplicated work in the brute-force algorithm.

We are looking for subarrays with sum targetSum. Observe that we can track in
constant time the value of runningSumi
, where this is the sum from element O through
element i. For a subarray of element i through element j to have sum targetSum,
runningSumi
-i + targetSum must equal runningSumj (try drawing a picture of
an array or a number line). Given that we can track the runningSum as we go, how can
we quickly look up the number of indices i where the previous equation is true?

Try using a hash table that maps from a runningSum value to he number of elements
with this runningSum.

Once you've solidified the algorithm to find all contiguous subarrays in an array with a
given sum, try to apply this to a tree. Remember that as you're traversing and modifying
the hash table, you may need to "reverse the damage" to the hash table as you traverse
back up.
