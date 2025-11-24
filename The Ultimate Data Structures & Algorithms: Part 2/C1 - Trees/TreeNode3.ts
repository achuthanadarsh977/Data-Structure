
class TreeNode3{

    data:string;
    left:TreeNode3 | null;
    right:TreeNode3 | null;

    constructor(data:string){
        this.data = data
        this.left = null
        this.right = null
    }
}

const root = new TreeNode3('R')
const nodeA = new TreeNode3('A')
const nodeB = new TreeNode3('B')
const nodeC = new TreeNode3('C')
const nodeD = new TreeNode3('D')
const nodeE = new TreeNode3('E')
const nodeF = new TreeNode3('F')
const nodeG = new TreeNode3('G')


root.left = nodeA
root.right = nodeB

nodeA.left = nodeC
nodeA.right = nodeD

nodeD.left = nodeE
nodeD.right = nodeF

nodeF.left = nodeG


function preorder(root: TreeNode3 | null){
    if(!root) return
    process.stdout.write(root.data)
    preorder(root.left)
    preorder(root.right)
}



function postorder(root: TreeNode3 | null){
    if(!root) return
    preorder(root.left)
    preorder(root.right)
    process.stdout.write(root.data)
}




function inorder(root: TreeNode3 | null){
    if(!root) return
    preorder(root.left)
    process.stdout.write(root.data)
    preorder(root.right)
}







