!function(window, document){
	if ( window['cors-name'] )
		return;

	var src = '',
		obj = {},
		toString = obj.toString;
	window['cors-name'] = obj;

	function isFunction(fn) {
		//return typeof fn === "function";
		//ie8 中该方法存在bug，以下两个表达式得到的结果是object
		//typeof alert => ‘object’
		//typeof document.createElement(‘input’).getAttribute => ‘object’
		//详细bug参见：http://www.bokeyy.com/post/differences-between-jquery-isfunction-and-typeof-variable-function.html
		return toString.call(fn) === "[object Function]";
	}

	obj.setCorsUrl = function(url) {
		src = url;
	}
	obj.request = function(callback) {
		var iframe = document.createElement('iframe');
		iframe.style.display = 'none';
		document.body.appendChild(iframe);
		
		iframe.onload = firstload;
		iframe.src = src;
		
		function firstload(){
			iframe.onload = secondload;
			iframe.src='about:blank';//或者是跟当前页面同域的其他url
		}
		
		function secondload(){
			var data = iframe.contentWindow.name;//iframe里面的window.name
			iframe.remove();
			isFunction(callback) && callback(data);
		}
	}
}(window, document);