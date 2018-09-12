//定义node节点类
function Node(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
    this.show = show;
 }
 
 function show() {
    return this.data;
 }
 
 //定义二叉树类
 function BST() {
     //初始化根节点为null
    this.root = null;
    this.insert = insert;
    //中序遍历
    this.inOrder = inOrder;
    //先序遍历
    this.preOrder = preOrder;
    //后序遍历
    this.postOrder = postOrder;
    //得到最小值
    this.getmin = getmin;
    //得到最大值
    this.getmax = getmax;
    //查找节点
    this.find = find;
    //移除数据
    this.remove = remove;
    //移除节点
    this.removeNode = removeNode;
    //查询最小值
    this.getSmallest = getSmallest;
 }
 /**
  * 
  * @param data 待插入的数据
  * 首先判断如果当前待插入树的根节点为null,则设树根节点为data 
  * 否则准备遍历二叉树
  * 首先设置当前节点为根节点,如果待插入数据小于当前节点数据,
  * 则设置新的当前节点为原当前节点的左节点,如果新的当前节点为null,则将数据插入到原当前节点的左边退出循环,
  * 对于右节点同理
  */
 function insert(data) {
    var n = new Node(data, null, null);
    if (this.root == null) {
       this.root = n;
    }
    else {
       var current = this.root;
       var parent;
       while (true) {
          parent = current;
          if (data < current.data) {
             current = current.left;
             if (current == null) {
                parent.left = n;
                break;
             }
          }
          else {
             current = current.right;
             if (current == null) {
                parent.right = n;
                break;
             }
          }
       }
    }
 }
 
 function inOrder(node) {
    if (!(node == null)) {
       inOrder(node.left);
       console.log(node.show() + " ");
       inOrder(node.right);
    }
 }
 
 function preOrder(node) {
    if (!(node == null)) {
       console.log(node.show() + " ");
       preOrder(node.left);
       preOrder(node.right);
    }
 }
 
 function postOrder(node) {
    if (!(node == null)) {
       postOrder(node.left);
       postOrder(node.right);
       console.log(node.show() + " ");
    }
 }
 
 function getmin() {
    var current = this.root;
    console.log("debug: " + current.data);
    while (!(current.left == null)) {
       current = current.left;
    }
    return current.data;
 }
 
 function getmax() {
    var current = this.root;
    while (!(current.right == null)) {
       current = current.right;
    }
    return current.data;
 }
 
 function find(data) {
    var current = this.root;
    while (current.data != data) {
       if (data < current.data) {
          current = current.left;
       }
       else {
          current = current.right;
       }
       if (current == null) {
          return null;
       }
    }
    console.log(current);
 }
 
 function getSmallest(node) {
    if (node.left == null) {
       return node;
    }
    else {
       return getSmallest(node.left);
    }
 }
 
 function remove(data) {
    root = removeNode(this.root, data);
 }
 
 function removeNode(node, data) {
    if (node == null) {
       return null;
    }
    if (data == node.data) {
       // node has no children
       if (node.left == null && node.right == null) {
          return null;
       }
       // node has no left child
       if (node.left == null) {
          return node.right;
       }
       // node has no right child
       if (node.right == null) {
          return node.left;
       }
       // node has two children
       var tempNode = getSmallest(node.right);
       node.data = tempNode.data;
       node.right = removeNode(node.right, tempNode.data);
       return node;
    }
    else if (data < node.data) {
       node.left = removeNode(node.left, data);
       return node;
    }
    else {
       node.right = removeNode(node.right, data);
       return node;
    }
 }

//测试用例
var bst =new BST();
bst.insert(11)
bst.insert(14)
bst.insert(61)
bst.insert(17)
bst.insert(51)
bst.insert(12);

inOrder(bst.root);
console.log("\n")
preOrder(bst.root);
console.log("\n")
postOrder(bst.root);

console.log(a);
var a =10;
var a = function(){
    console.log(3)
}
function a(){
    console.log(2)
}
a();
a();

/**
 * 总结:中序遍历遵循左根右,前序遍历遵循根左右,后序遍历遵循左右根
 * 当确定了二叉树的中序遍历以及其中任何一种遍历时,即可唯一确定此二叉树;
 * 判断方法:
 * 由后续(先序)遍历即可确定二叉树的根节点,然后转而看中序遍历中根节点的位置依次来确定左右子树;
 * 依次重复上述方法来确定根节点位置以及其左右子树,来得出最终二叉树
 */
