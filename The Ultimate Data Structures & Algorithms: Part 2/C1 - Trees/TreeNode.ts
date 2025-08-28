class TreeNode {
    value: number;
    children: TreeNode[] = [];

    constructor(value: number) {
        this.value = value;
    }
}

class Tree {
    root: TreeNode | null = null;

    constructor(value: number) {
        this.root = new TreeNode(value);
    }

    addChild(parentValue: number, childValue: number): void {
        const parent = this.find(this.root, parentValue);
        if (parent) {
            parent.children.push(new TreeNode(childValue));
        }
    }

    private find(node: TreeNode | null, value: number): TreeNode | null {
        if (!node) return null;
        if (node.value === value) return node;

        for (let child of node.children) {
            let found = this.find(child, value);
            if (found) return found;
        }

        return null;
    }

    traverse(node: TreeNode | null = this.root): void {
        if (!node) return;
        console.log(node.value);
        for (let child of node.children) {
            this.traverse(child);
        }
    }
}
