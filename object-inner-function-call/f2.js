*code:*
--------------

var value = 5;

var add = function (a, b){
	return a+b;
};

myObj = {};
myObj.double = function (){
	this.value = 3;
	this.helper = function(){
		this.value = add(this.value, this.value);
	}
	this.helper();
	console.log(this.value);
}


*call:*
-------------------
myObj.double();
//result
6
//value === 5

*note:*
---------------
function helper内部的this指向myObj
与helper.call(this)效果一致