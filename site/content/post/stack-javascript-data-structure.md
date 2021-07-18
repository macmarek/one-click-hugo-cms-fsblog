---
title: Stack JavaScript data structure
date: 2021-07-18T09:20:19.892Z
description: This post describes stack data structure and shows how can it be
  implemented in JavaScript. It's part of a bigger series about data structure
  and algorithms in JavaScript.
---
## Stack data structure definition

Stack is data structure that represents collection of elements, with two operations:

1. **Push**, which adds an element to the collection,
2. **Pop**, which removes the most recently added element that was not yet removed.

You can visualise a stack data structure as a stack of plates in the kitchen, where you can only add (push) or remove (pop) a plate on the top.

[plates image here]

Stack is also known as **LIFO (last in, first out)** collection. This means that last item that is added to stack (push) is the first one that will be removed (pop).

Picture below shows a sample sequence of push and pop operations on a stack.

[gif showing push pop]

## Where stack can be used?

Stack data structure is widely used in programming. It is used in multiple algorithms, UI components, complilers to name a few.
One of the best known application of stack is a mechanism known as **call stack**. It stores information about active subroutines of a computer program.

In JavaScript, call stack stores information about which function is currently executed and what functions are called inside this function etc.

In order to learn more about the call stack in JavaScript, check out this blog post.

[link to post about call stack]

## Stack overflow 

If you put too much stuff on a call stack (call to many functions, for example in a recursive algorithm), you can get the very famous **stack overflow** error. It gave a name to one of the most popular website among software developers - [stackoverflow.com](https://stackoverflow.com/).

## Sample implementation

JavaScript does not have built-in implemantation of Stack (unlike many other programming languages)
There are multiple ways to implements a stack. The most basic implemantation is bases on array.

### Array-based implementation
```
class Stack {
    items = [];
    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop();
    }
}

const stack = new Stack();

stack.push("apple");
stack.push("banana");
stack.push("orange");

console.log(stack.pop()); //orange
console.log(stack.pop()); //banana
console.log(stack.pop()); //apple
```


## Useful links and credits

- https://en.wikipedia.org/wiki/Stack_(abstract_data_type)#Applications_of_stacks

- https://developer.mozilla.org/en-US/docs/Glossary/Call_stack


