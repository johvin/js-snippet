*提取数字整数部分：*

Number.prototype.integer = function() {
	return Math[ this < 0 ? 'ceil' : 'floor'](this);
}


*string trim function：*
String.prototype.trim = function(){
	return this.replace(/^\S+\s|$/g, '');
}

*html字符实体转换到对应字符：*
String.prototype.deentitify = (function(){
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
	};
	return function(){
		return this.replace(/&([^&;]+);/g, function(a,b){
			console.log(a,b);
			return typeof entity[b] === 'string' ? entity[b] : a;
		});
	};
}());

*默记法缓存计算结果：*

var memoizer = function(memo, func){
	var shell = function(n) {
		var ret = memo[n];
		if ( typeof ret !== 'number' ) {
			ret = func(shell, n);
			memo[n] = ret;
		}
		return ret;
	};
	return shell;
}

call:

var fib = memoizer({0:0, 1:1}, function(shell, n){
	return shell(n-1)+shell(n-2);
});

var fib2 = memoizer([1,1], function(shell, n){
	return n*shell(n-1);
});