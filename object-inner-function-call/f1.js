*code:*
--------------
var value = 5;

var add = function (a, b){
	return a+b;
};

myObj = {};
myObj.double = function (){
	this.value = 3;
	var that = this;
	var helper = function(){
		that.value = add(that.value, that.value);
	}
	helper();
	console.log(this.value);
}


*call:*
-------------
myObj.double();
//result
6
//value === 5



*note:*
------------
有问题的function是helper, 其中this是指向全局变量value的