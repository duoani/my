define(function( require, exports, module ){

    /**
     * @private
     */
    var __loadList = {};
    /**
     * @private
     */
    var __loadImage = function(item, callback) {
        var image = new Image();
        image.onload = function() {
            __loadList[item.id] = image;
            callback();
        }
        image.src = item.src;
    };
    /**
     * 加载图片资源
     * @param {Array} images @format {id: '', src: ''}
     * @param {Function} statechange @param {Number} index
     */
    var load = function(images, statechange, __index) {
		__index = __index || 0;
        if(images[__index]) {
            __loadImage(images[__index], function() {
                load(images, statechange, __index + 1);
            });
	        statechange(__index, images.length);
        }
    };
	exports.load = load;
	
    /**
     * 获取已加载的Image对象
     * @param {String} id
     */
    var get = function(id) {
        return this.__loadList[id];
    };
	exports.get = get;
});
