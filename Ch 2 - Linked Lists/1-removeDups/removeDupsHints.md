Have you tried a hash table? You should be able to do this in a single pass of the linked list.

Without extra space, you'll need O(N2) time. Try using two pointers, where the second one searches ahead of the first one.
