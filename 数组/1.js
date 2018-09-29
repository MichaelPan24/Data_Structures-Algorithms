//创建数组的方法
var arr1 = [1,3,3,1];
var arr2 = new Array(5)//创建具有5个元素的数组
var arr3 = new Array(1,2,3,3)//创建数组实例并且其中的元素为1,2,3,3

var str = "asadgn nglo asbou";
var arr4 = str.split(" ");

//数组方法 indexOf获取数组中相应元素的索引
function getIndex(arr,val){
    for(var i=0; i<arr.length; i++){
        if(arr.indexOf(val)!=-1){
            return true;
        }else{
            return false;
        }
    }
}

//concat 连接多个数组,结果返回新的数组
var newArr = arr1.concat(arr2);

/**
 * forEach方法,对数组中每一个元素进行操作,
 *注意:如果不对原数组的元素的引用进行操作是无法改变数组元素的,除非数组中的元素存在引用类型(坑)
 *参数说明:val当前数组元素的引用,key当前数组元素的索引(可选),arr当前数组(可选)   
 */
let i=0
arr1.forEach((val,key,arr)=>{
    arr[key] += i;
    i++
})
console.log(arr1)//[1,4,5,4]

