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
