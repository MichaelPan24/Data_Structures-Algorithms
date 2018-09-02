//定义node节点类

function Node(data,left,right){
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
}

//展示数据
function show(){
    return this.data;
}

//定义BST(二叉树类)
function BST(){
    this.root = null;
    this.insert = insert;//插入节点方法
    this.inorder = order;//中序遍历
}

//定义二叉查找树中插入数据方法
function insert(data){
    var n = new Node(data,null,null);
    if(this.root == null){
        this.root = n;
    }else{
        var current = this.root;
        var parent;
        while(true){
            parent = current;
            if(data < current.data){
                current = current.left;
                if(current == null){
                    parent.left = n;
                    break;
                }
            }else{
                current = current.right;
                if(current == null){
                    parent.right = n;
                    break;
                }
            }
        }
    }
}

