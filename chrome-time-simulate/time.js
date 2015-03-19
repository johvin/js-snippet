//simulate chrome console.time and console.timeEnd function
var scope = {};
(function(scope){
	var tobj = {};
	var time = function (t){
		if ( t !== undefined ) {
			tobj[t] = new Date();
		}
	};
	var timeEnd = function(t){
		if (t !== undefined && tobj[t] !== undefined) {
			var ts = new Date().getTime() - tobj[t].getTime();
			console.log("%c%s: %fms", "color:blue", t, ts);
			delete tobj[t];
		}
	};
	scope.time = time;
	scope.timeEnd = timeEnd;
	scope.traversal = function(){
		for(var k in tobj) {
			console.log("key: %s, value: %s", k, tobj[k]);
		}
	}
})(scope);