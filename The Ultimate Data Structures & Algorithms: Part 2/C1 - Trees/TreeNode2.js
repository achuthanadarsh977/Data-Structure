var TreeNode2 = /** @class */ (function () {
    function TreeNode2(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode2;
}());
var root = new TreeNode2('R');
var nodeA = new TreeNode2('A');
var nodeB = new TreeNode2('B');
var nodeC = new TreeNode2('C');
var nodeD = new TreeNode2('D');
var nodeE = new TreeNode2('E');
var nodeF = new TreeNode2('F');
var nodeG = new TreeNode2('G');
root.left = nodeA;
root.right = nodeB;
nodeA.left = nodeC;
nodeA.right = nodeD;
nodeB.left = nodeE;
nodeB.right = nodeF;
nodeF.left = nodeE;
console.log("Binary Tree:" + root.left.right.data);
