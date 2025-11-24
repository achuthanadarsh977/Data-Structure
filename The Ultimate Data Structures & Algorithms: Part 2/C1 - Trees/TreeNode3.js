var TreeNode3 = /** @class */ (function () {
    function TreeNode3(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
    return TreeNode3;
}());
var root = new TreeNode3('R');
var nodeA = new TreeNode3('A');
var nodeB = new TreeNode3('B');
var nodeC = new TreeNode3('C');
var nodeD = new TreeNode3('D');
var nodeE = new TreeNode3('E');
var nodeF = new TreeNode3('F');
var nodeG = new TreeNode3('G');
root.left = nodeA;
root.right = nodeB;
nodeA.left = nodeC;
nodeA.right = nodeD;
nodeD.left = nodeE;
nodeD.right = nodeF;
nodeF.left = nodeG;
function preorder(root) {
    if (!root)
        return;
    process.stdout.write(root.data + "");
    preorder(root.left);
    preorder(root.right);
}
function inorder(root) {
    if (!root)
        return;
    inorder(root.left);
    process.stdout.write(root.data + "");
    inorder(root.right);
}
function postorder(root) {
    if (!root)
        return;
    postorder(root.left);
    postorder(root.right);
    process.stdout.write(root.data + "");
}
console.log("Preorder Traversal");
preorder(root);
console.log("\nPostorder Traversal");
postorder(root);
console.log("\nInorder Traversal");
inorder(root);
