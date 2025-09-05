var Tree1 = /** @class */ (function () {
    function Tree1(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return Tree1;
}());
var BinarySearch = /** @class */ (function () {
    function BinarySearch(head) {
        this.head = head || null;
    }
    BinarySearch.prototype.insert = function (node, value) {
        if (node === void 0) { node = this.head; }
        if (node === null) {
            var root = new Tree1(value);
            return root;
        }
        else {
            if (value < node.data) {
                node.left = this.insert(node.left, value);
            }
            else {
                node.right = this.insert(node.right, value);
            }
            return node;
        }
    };
    BinarySearch.prototype.inorder = function (node, result) {
        if (node === void 0) { node = this.head; }
        if (result === void 0) { result = []; }
        if (node !== null) {
            this.inorder(node.left, result);
            result.push(node.data);
            this.inorder(node.right, result);
        }
        return result;
    };
    BinarySearch.prototype.postorder = function (node, result) {
        if (node === void 0) { node = this.head; }
        if (result === void 0) { result = []; }
        if (node !== null) {
            this.postorder(node.left, result);
            this.postorder(node.right, result);
            result.push(node.data);
        }
        return result;
    };
    BinarySearch.prototype.preorder = function (node, result) {
        if (node === void 0) { node = this.head; }
        if (result === void 0) { result = []; }
        if (node !== null) {
            result.push(node.data);
            this.preorder(node.left, result);
            this.preorder(node.right, result);
        }
        return result;
    };
    return BinarySearch;
}());
var rootNode = new Tree1(45);
rootNode.left = new Tree1(56);
rootNode.right = new Tree1(37);
var binary = new BinarySearch(rootNode);
binary.insert(binary.head, 30);
binary.insert(binary.head, 20);
binary.insert(binary.head, 25);
binary.insert(binary.head, 15);
console.log("Inorder:" + binary.inorder());
console.log("Preorder:" + binary.preorder());
console.log("PostOrder:" + binary.postorder());
