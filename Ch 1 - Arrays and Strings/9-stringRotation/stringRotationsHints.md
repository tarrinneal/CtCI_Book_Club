If a string is a rotation of another, then it's a rotation at a particular point. For example, a rotation of waterbottle at character 3 means cutting waterbottle at character 3 and putting the right half (erbottle) before the left half (wat).

We are essentially asking if there's a way of splitting the first string into two parts, x and y, such that the first string is xy and the second string is yx. For example, x = wat and y = erbottle. The first string is xy = waterbottle. The second string is yx = erbottlewat.

Think about the earlier hint. Then think about what happens when you concatenate erbottlewat to itself. You get erbottlewaterbottlewat.
