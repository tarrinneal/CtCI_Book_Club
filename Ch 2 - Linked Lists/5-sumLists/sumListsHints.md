Of course, you could convert the linked lists to integers, compute the sum, and then convert it back to a new linked list. If you did this in an interview, your interviewer would likely accept the answer, and then see if you could do this without converting it to a number and back.

Try recursion. Suppose you have two lists, A = 1->5->9 (representing 951) and B 2-> 3->6-> 7 (representing 7632), and a function that operates on the remainder of the lists (5->9 and 3->6->7). Could you use this to create the sum method? What is the relationship between sum(l->5->9, 2->3->6->7) and sum(5->9, 3->6->7)?

Make sure you have considered linked lists that are not the same length.

Does your algorithm work on linked lists like 9->7->8 and 6->8->5? Double check that.

For the follow-up question: The issue is that when the linked lists aren't the same length, the head of one linked list might represent the 1 OOO's place while the other represents the 1 O's place. What if you made them the same length? Is there a way to modify the linked list to do that, without changing the value it represents?
