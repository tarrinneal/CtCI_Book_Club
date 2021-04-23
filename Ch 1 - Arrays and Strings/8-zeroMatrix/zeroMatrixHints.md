If you just cleared the rows and columns as you found Os, you'd likely wind up clearing the whole matrix. Try finding the cells with zeros first before making any changes to the matrix.

Can you use O(N) additional space instead of O(N2)? What information do you really need from the list of cells that are zero?

You probably need some data storage to maintain a list of the rows and columns that need to be zeroed. Can you reduce the additional space usage to 0(1) by using the matrix itself for data storage?
