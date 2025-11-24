

class TreeNode2{
    data:string;
    left: TreeNode2 | null;
    right: TreeNode2 | null;

    constructor(data:string){
        this.data = data
        this.left = null
        this.right = null
    }
}


let root =  new TreeNode2('R')
let nodeA = new TreeNode2('A')
let nodeB = new TreeNode2('B')
let nodeC = new TreeNode2('C')
let nodeD = new TreeNode2('D')
let nodeE = new TreeNode2('E')
let nodeF = new TreeNode2('F')
let nodeG = new TreeNode2('G')

root.left = nodeA
root.right = nodeB

nodeA.left = nodeC
nodeA.right = nodeD


nodeB.left = nodeE
nodeB.right = nodeF

nodeF.left = nodeE


console.log("Binary Tree:"+root.left!.right!.data)

