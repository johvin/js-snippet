*code:*
------------

var value = 5;

var add = function (a, b){
	return a+b;
};

myObj = {};
myObj.double = function (){
	this.value = 3;
	var helper = function(){
		this.value = add(this.value, this.value);
	}
	helper();
	console.log(this.value);
}


*call:*
-----------
myObj.double();
//result
3
//value === 10

*note:*
------------
有问题的function是helper, 其中this是指向全局变量value的,
this到对象的绑定发生在调用的时候。