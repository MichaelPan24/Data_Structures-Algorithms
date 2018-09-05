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
       putstr(node.show() + " ");
       inOrder(node.right);
    }
 }
 
 function preOrder(node) {
    if (!(node == null)) {
       putstr(node.show() + " ");
       preOrder(node.left);
       preOrder(node.right);
    }
 }
 
 function postOrder(node) {
    if (!(node == null)) {
       postOrder(node.left);
       postOrder(node.right);
       putstr(node.show() + " ");
    }
 }
 
 function getmin() {
    var current = this.root;
    print("debug: " + current.data);
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
    return current;
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

