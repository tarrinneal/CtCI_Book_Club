First try the naive approach. Can you set a particular "pixel"?

When you're drawing a long line, you'll have entire bytes that will become a sequence of
1 s. Can you set this all at once?

What about the start and end of the line? Do you need to set those pixels individually,
or can you set them all at once?

Does your code handle the case when xl and x2 are in the same byte?
