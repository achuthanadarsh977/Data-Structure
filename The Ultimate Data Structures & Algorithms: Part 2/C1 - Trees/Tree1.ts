

class Tree1{
    public data: number;
    public left: Tree1 | null
    public right: Tree1 | null

    constructor(data:number){
        this.data = data
        this.left = null
        this.right = null
    }
}


class BinarySearch{
    public head: Tree1 | null

    constructor(head?:Tree1){
        this.head = head || null
    }

    public insert(node:Tree1 | null = this.head,value:number):Tree1{
        if(node === null){
            const root =  new Tree1(value)
            return root

        }

        else{
            if(value < node.data){
                node.left = this.insert(node.left,value)
            }

            else{
                node.right = this.insert(node.right,value)
            }
            return node
        }


        }

        public inorder(node:Tree1 | null =this.head, result:number[] = []):number[]{
            if(node !== null){
                this.inorder(node.left, result);
            result.push(node.data);
            this.inorder(node.right, result);
            }
            
            return result
            
        }


        public postorder(node:Tree1 | null=this.head,result:number[] = []):number[]{
            if(node !== null){
                this.postorder(node.left,result)
                this.postorder(node.right,result)
                result.push(node.data)
            }

            return result
        }

        public preorder(node:Tree1 | null=this.head,result:number[] = []):number[]{
            if(node !== null){
                result.push(node.data)
                this.preorder(node.left,result)
                this.preorder(node.right,result)
            }

            return result
        }

         public static isSameTree(p: Tree1 | null, q: Tree1 | null): boolean {
           if (p === null && q === null) return true;
           if (p === null || q === null) return false;
           if (p.data !== q.data) return false;

        return (
            BinarySearch.isSameTree(p.left, q.left) &&
            BinarySearch.isSameTree(p.right, q.right)
        );
    }
    
}

const rootNode = new Tree1(45)

rootNode.left = new Tree1(56)
rootNode.right = new Tree1(37)


const binary = new BinarySearch(rootNode)



binary.insert(binary.head,30)
binary.insert(binary.head,20)
binary.insert(binary.head,25)
binary.insert(binary.head,15)
console.log("Inorder:"+binary.inorder())
console.log("Preorder:"+binary.preorder())
console.log("PostOrder:"+binary.postorder())

