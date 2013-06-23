define(function( require, exports, module ){
	/**
	* @private
	*/
	var __loadScript = function(url, callback) {
		var script = document.createElement('script');
		if(script.readyState) {
			script.onreadystatechange = function() {
				if(script.readyState == 'loaded' || script.readyState == 'complete') {
					callback.call();
				}
			}
		} else {
			script.onload = callback;
		}
		script.type = 'text/javascript';
		script.src = url;
		document.getElementsByTagName('head')[0].appendChild(script);
	};
	/**
	* 加载脚本资源
	* @param {Array} urls
	* @param {Function} statechange
	*/
	var load = function(urls, statechange, __index) {
		__index = __index || 0;
		if(urls[__index]) {
			__loadScript(urls[__index], function() {
				load(urls, statechange, __index + 1);
			});
			statechange(__index, urls.length);
		}
	};
	exports.load = load;
	
});
