/**
 * DOM操作
 */
define(function( require, exports, module ){

	/**
	 * 根据id获取元素
	 * @param {String} id
	 */
	var get = function(id) {
	    return document.getElementById(id);
	};
	exports.get = get;
	
	/**
	 * 获取元素的CSS样式值
	 * @param {DOM Object} element
	 * @param {String} name
	 */
	var getStyleValue = function(element, name) {
	    if(element.currentStyle) {
	        return element.currentStyle[name];
	    } else {
	        var style = document.defaultView.getComputedStyle(element, null);
	        return style[name];
	    }
	};
	exports.getStyleValue = getStyleValue;
	
	/**
	 * 隐藏元素
	 * @param {DOM Object} element
	 */
	var hide = function(element) {
	    element.style.display = 'none';
	};
	exports.hide = hide;
	
	/**
	 * 显示元素
	 * @param {DOM Object} element
	 */
	var show = function(element) {
	    element.style.display = 'block';
	};
	exports.show = show;
	
	/**
	 * 删除元素
	 * @param {DOM Object} element
	 */
	var remove = function(element) {
	    element.parentNode.removeChild(element);
	};
	exports.remove = remove;
	
	/**
	 * 检查元素是否具有某个class样式
	 * @param {DOM Object} element
	 * @param {String} className
	 */
	var hasClass = function(element, className) {
	    var names = element.className.split(/\s+/);
	    for(var i = 0; i < names.length; i++) {
	        if(names[i] == className) {
	            return true;
	        }
	    }
	    return false;
	};
	exports.hasClass = hasClass;
	
	/**
	 * 为元素添加class样式
	 * @param {DOM Object} element
	 * @param {String} className
	 */
	var addClass = function(element, className) {
	    if(!hasClass(element, className)) {
	        element.className += ' ' + className;
	    }
	};
	exports.addClass = addClass;
	
	/**
	 * 从元素上移除class样式
	 * @param {DOM Object} element
	 * @param {String} className
	 */
	var removeClass = function(element, className) {
	    if(hasClass(element, className)) {
	        var names = element.className.split(/\s+/), newClassName = [];
	        for(var i = 0; i < names.length; i++) {
	            if(names[i] != className) {
	                newClassName.push(names[i]);
	            }
	        }
	        element.className = newClassName.join(' ');
	    }
	};
	exports.removeClass = removeClass;

});
