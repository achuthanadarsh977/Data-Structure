var TreeNode = /** @class */ (function () {
    function TreeNode(value) {
        this.children = [];
        this.value = value;
    }
    return TreeNode;
}());
var Tree = /** @class */ (function () {
    function Tree(value) {
        this.root = null;
        this.root = new TreeNode(value);
    }
    Tree.prototype.addChild = function (parentValue, childValue) {
        var parent = this.find(this.root, parentValue);
        if (parent) {
            parent.children.push(new TreeNode(childValue));
        }
    };
    Tree.prototype.find = function (node, value) {
        if (!node)
            return null;
        if (node.value === value)
            return node;
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            var found = this.find(child, value);
            if (found)
                return found;
        }
        return null;
    };
    Tree.prototype.traverse = function (node) {
        if (node === void 0) { node = this.root; }
        if (!node)
            return;
        console.log(node.value);
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            this.traverse(child);
        }
    };
    return Tree;
}());
var tree1 = new Tree(12);
tree1.addChild(12, 13);
tree1.addChild(13, 14);
tree1.addChild(14, 15);
tree1.traverse();
