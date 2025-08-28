// ---------- Example 1: Reverse String ----------
class ReverseString {
    static reverse(input: string): string {
        if (input == null) throw new Error("Invalid argument");

        const stack: string[] = [];
        for (let ch of input) stack.push(ch);

        let reversed = "";
        while (stack.length > 0) {
            reversed += stack.pop();
        }

        return reversed;
    }
}

// ---------- Example 2: Balanced Parentheses ----------
class BalancedExpression {
    private static leftBrackets = ["(", "<", "[", "{"];
    private static rightBrackets = [")", ">", "]", "}"];

    static isBalanced(input: string): boolean {
        const stack: string[] = [];

        for (let ch of input) {
            if (this.leftBrackets.includes(ch)) {
                stack.push(ch);
            } else if (this.rightBrackets.includes(ch)) {
                if (stack.length === 0) return false;
                const top = stack.pop()!;
                if (!this.bracketsMatch(top, ch)) return false;
            }
        }
        return stack.length === 0;
    }

    private static bracketsMatch(left: string, right: string): boolean {
        return (
            this.leftBrackets.indexOf(left) ===
            this.rightBrackets.indexOf(right)
        );
    }
}

// ---------- Example 3: Custom Stack Implementation ----------
class CustomStack {
    private items: number[] = new Array(5);
    private count: number = 0;

    push(item: number): void {
        if (this.count === this.items.length) throw new Error("Stack overflow");
        this.items[this.count++] = item;
    }

    pop(): number {
        if (this.count === 0) throw new Error("Stack underflow");
        return this.items[--this.count];
    }

    peek(): number {
        if (this.count === 0) throw new Error("Stack is empty");
        return this.items[this.count - 1];
    }

    isEmpty(): boolean {
        return this.count === 0;
    }

    isFull(): boolean {
        return this.count === this.items.length;
    }

    toString(): string {
        return JSON.stringify(this.items.slice(0, this.count));
    }
}

// ---------- Example 4: Demo ----------
function main(): void {
    // 1. Reverse a string
    console.log("Reversed 'mosh':", ReverseString.reverse("mosh"));

    // 2. Balanced parentheses
    console.log("Is '(1+2)' balanced?", BalancedExpression.isBalanced("(1+2)"));
    console.log(
        "Is '((1+2)' balanced?",
        BalancedExpression.isBalanced("((1+2)")
    );

    // 3. Custom stack
    const customStack = new CustomStack();
    customStack.push(10);
    customStack.push(20);
    customStack.push(30);
    console.log("CustomStack:", customStack.toString());
    customStack.pop();
    console.log("CustomStack after pop:", customStack.toString());

    // 4. Built-in Stack using Array
    const stack: number[] = [];
    stack.push(10);
    stack.push(20);
    stack.push(30);
    console.log("Built-in Stack:", stack);
    stack.pop();
    console.log("Built-in Stack after pop:", stack);
}

main();
