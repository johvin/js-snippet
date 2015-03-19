//test the time function
(function(){
	var arr = [], len = 1000000;
	for(var i = 0; i< len; i++) {
		arr.push[i];
	}
	scope.time('for');
	for(var i = 0, j; i< len; i++) {
		arr[i]++;
	}
	scope.timeEnd('for');

	scope.time('for-in');
	for(var i in arr) {
		arr[i]++;
	}
	scope.timeEnd('for-in');

	scope.time('forEach');
	arr.forEach(function(elem, i){
		arr[i]++;
	});
	scope.timeEnd('forEach');

})();
