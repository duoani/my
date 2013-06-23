define( function(require, exports, module ){
	var emptyArr = [],
		emptyObj = {},
		toString = emptyObj.toString,
		hasOwnProperty = emptyObj.hasOwnProperty,
		slice = emptyArr.slice;
	
	exports.fn = new Function();
	/**
     * 通过原型实现的类继承
     * @param {Function} childClass
     * @param {Function} parentClass
     */
    function inherit(childClass, parentClass) {
        var Constructor = new Function();
        Constructor.prototype = parentClass.prototype;
        childClass.prototype = new Constructor();
        childClass.prototype.constructor = childClass;
        childClass.superclass = parentClass.prototype;

        if(childClass.prototype.constructor == Object.prototype.constructor) {
            childClass.prototype.constructor = parentClass;
        }
    }
	exports.inherit = inherit;
	
	/**
	 * 对象扩展属性
	 * @param {Object} obj
	 * @param {Object} newProperties
	 * @param {Object} obj 扩展后的原对象
	 */
	function extend(obj, newProperties) {
        var key;

        for(key in newProperties) {
            if(newProperties.hasOwnProperty(key)) {
                obj[key] = newProperties[key];
            }
        }

        return obj;
    };
	exports.extend = extend;
	
	/**
     * 函数委托, 参数在委托时已确定，不能在完成委托后对方法进行传参数<br>
     * e.g.<br>
     * function fn(txt){ console.log(txt); } 			//<br>
     * var fn2 = delegate(fn, window, "hello world!");	//参数在委托时就传入 <br>
     * fn2(); // ==> "hello world!"
     * @param {Function} func
     * @param {Object} scope
     * @return {Function}
     * 
     */
	function delegate(func, scope) {
        scope = scope || window;

        if(arguments.length > 2) {
            var args = Array.prototype.slice.call(arguments, 2);

            return function() {
                return func.apply(scope, args);
            }
        } else {
            return function() {
                return func.call(scope);
            }
        }
    }
	exports.delegate = delegate;
	
	/**
	 * 绑定方法的上下文，在绑定后再传参数
	 * e.g.<br>
     * function fn(txt){ console.log(txt); }		//<br>
     * var fn2 = bind(fn, window);					// <br>
     * fn2("hello world!"); // ==> "hello world!"	//参数在运行时才传入
	 * @param {Object} func
	 * @param {Object} scope
	 */
	function bind(func, scope) {
        return function() {
            return func.apply(scope, arguments);
        }
    };
	exports.bind = bind;
	
	/**
	 * 订阅/分发 observer
	 * 
	 * 订阅
	 * @param message {String} 主题
	 * @param callback {Function} 订阅者回调方法
	 * dispatch(message, callback);
	 * 
	 * 分发
	 * @param message {String} 主题
	 * @param params {Array} 参数列表
	 * @param message {Object|undefined} 上下文
	 * dispatch(message, params, context);
	 */
	var dispatch = function () {
		var map = {}, send, incept, ret;
		send = function (processId, args, scope) {
			var processItems;
			if (processItems = map[processId]) {
				for(var i=0, len=processItems.length; i<len; i++){
					processItems[i].apply(scope, args);
				}
			}
		};
		//Subscribing
		incept = function (processId, fn) {
			var m;
			if (!(m = map[processId])) {
				map[processId] = [fn]
			} else {
				m.push(fn)
			}
		};
		//Publishing
		ret = function (processId, arg2, scope) {
			if (typeof (arg2) === "undefined") {
				arg2 = []
			}
			//Publishing
			if (arg2 instanceof Array) {
				send.apply(this, arguments)
			} else {
				//Subscribing
				if (typeof (arg2) === "function") {
					incept.apply(this, arguments)
				}
			}
		};
		/**
		 * unsubscribe
		 * @param processId <String>: theme
		 * @param fn <Function>: Subscriber to be remove. If not set, clear all in processId
		 */
		ret.remove = function (processId, fn) {
			var m, i;
			if( (m = map[processId]) ){
				if( ~ (i = m.indexOf(fn)) ){
					m.splice(i, 1)
				}else{
					map[processId] = [];
				}
			}
		};
		return ret;
	}();
	
	/**
	 * 是否为方法
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isFunction( obj ){
		return toString.call(obj) === '[object Function]';
	};
	exports.isFunction = isFunction;
	
	/**
	 * 是否为数组
	 * @param {Object} obj
	 * @return {Boolean}
	 */
	function isArray( obj ){
		return toString.call(obj) === '[object Array]';
	};
	exports.isArray = isArray;
	
	/**
	 * 遍历数组
	 * @param {Array} arr
	 * @param {Function} fn
	 */
	var forEach = emptyArr.forEach ?
		function(arr, fn) {
			arr.forEach(fn)
		} :
		function(arr, fn) {
			for (var i = 0, len = arr.length; i < len; i++) {
				fn(arr[i], i, arr)
			}
		};
	exports.forEach = forEach;
	
	/**
	 * 获取对象的键
	 * @param {Object} obj
	 * @return {Array}
	 */
	var keys = Object.keys || function(obj) {
		var ret = [];
		
		for (var p in obj) {
			if (hasOwn(obj, p)) {
				ret.push(p)
			}
		}
		
		return ret;
	};
	exports.keys = keys;
	
	/**
	 * 数组去重复
	 * @param {Array} arr
	 * @return {Array} 去重后的新数组
	 */
	function unique(arr) {
		var obj = {};
		
		forEach(arr, function(item) {
			obj[item] = 1
		})
		
		return keys(obj);
	}
	exports.unique = unique;
});