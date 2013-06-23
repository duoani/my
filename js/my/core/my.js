//百度模块化
var lxb = lxb || {instance: 0};
lxb.instance++;

/**
 * 模块化方案1
 * 
 * 1. define阶段就运行module, define阶段检测依赖定义
 * 2. 缺：define依赖顺序，依赖方需定义在被依赖方之后
 */
//;(function(context) {
//    var cache = {};
//    context.define = function(id, module) {
//        var exports = cache[id];
//        if (!exports) {
//            exports = cache[id] = {}
//        }
//        module.call(null, exports)
//    };
//    context.require = function(id) {
//        if (typeof id == "string") {
//            if (!cache[id]) {
//                throw "no module: " + id
//            } else {
//                return cache[id]
//            }
//        } else {
//            id.call(null, cache)
//        }
//    }
//})(this);


/**
 * 模块化方案2
 * 
 * 1. require阶段才运行module
 * 2. 优：define不依赖顺序，依赖方不需定义在被依赖方之后
 * 3. 优: 带循环引用检测功能
 */
;(function (context) {
    var loader = {}, exports = {};
    context.startModule = function (id) {
        require(id).start();
    };
    context.define = function (id, module) {
        loader[id] = module;
    };
	
    context.require = function (id) {
        if (exports[id] && exports[id].__init__) {
            return exports[id];
        } else {
			return load(id);
        }
    };
	
	var loading = {}, uid = 1, queue = [];
    function load(id){
		//Circular check
		if( loading[id] ){
			var ref = [];
			queue.push(id);
			for( var i=0, last=queue.length-1; i<last; i++ ){
				ref[i] = '\n' + (i+1) + ': ' + queue[i] + '->' + queue[i+1];
			}
			
			throw "Circular Reference Error in: " + id + ", detail:" + ref.join(',');
		}
		loading[id] = uid ++;
		queue.push(id);
		
		var c = exports[id] = {__init__:0};
		loader[id](c);
		c.__init__ == 1;
		
		delete loading[id];
		queue.pop();
		
		return c;
    }
})(this);

