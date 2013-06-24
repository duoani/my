/**
 * 键盘事件管理
 */
define(function(require, exports, module ){
	var doc = document;
    /**
     * 按键与ascii码对应表
     */
    var keyCodeMap = {
        ESCAPE : 27, // ESC键
        RETURN : 13, // 回车键
        TAB : 9, // TAB键
        CAPITAL : 20, // Caps Lock键
        SHIFT : 16, // Shift键
        CONTROL : 17, // Ctrl键
        MENU : 18, // Alt键
        SPACE : 32, // 空格键
        BACK : 8, // 退格键
        LWIN : 91, // 左徽标键
        RWIN : 92, // 右徽标键
        K_APPS : 93, // 鼠标右键快捷键

        INSERT : 45, // Insert键
        HOME : 36, // Home键
        PRIOR : 33, // Page Up
        NEXT : 34, // Page Down
        END : 35, // End键
        DELETE : 46, // Delete键
        LEFT : 37, // 方向键(←)
        UP : 38, // 方向键(↑)
        RIGHT : 39, // 方向键(→)
        DOWN : 40, // 方向键(↓)

        F1 : 112, // F1键
        F2 : 113, // F2键
        F3 : 114, // F3键
        F4 : 115, // F4键
        F5 : 116, // F5键
        F6 : 117, // F6键
        F7 : 118, // F7键
        F8 : 119, // F8键
        F9 : 120, // F9键
        F10 : 121, // F10键
        F11 : 122, // F11键
        F12 : 123, // F12键

        NUMLOCK : 144, // Num Lock键
        NUMPAD0 : 96, // 小键盘0
        NUMPAD1 : 97, // 小键盘1
        NUMPAD2 : 98, // 小键盘2
        NUMPAD3 : 99, // 小键盘3
        NUMPAD4 : 100, // 小键盘4
        NUMPAD5 : 101, // 小键盘5
        NUMPAD6 : 102, // 小键盘6
        NUMPAD7 : 103, // 小键盘7
        NUMPAD8 : 104, // 小键盘8
        NUMPAD9 : 105, // 小键盘9
        DECIMAL : 110, // 小键盘.
        MULTIPLY : 106, // 小键盘*
        PLUS : 107, // 小键盘+
        SUBTRACT : 109, // 小键盘-
        DIVIDE : 111, // 小键盘/
        PAUSE : 19, // Pause Break键
        SCROLL : 145, // Scroll Lock键

        A : 65, // A键
        B : 66, // B键
        C : 67, // C键
        D : 68, // D键
        E : 69, // E键
        F : 70, // F键
        G : 71, // G键
        H : 72, // H键
        I : 73, // I键
        J : 74, // J键
        K : 75, // K键
        L : 76, // L键
        M : 77, // M键
        N : 78, // N键
        O : 79, // O键
        P : 80, // P键
        Q : 81, // Q键
        R : 82, // R键
        S : 83, // S键
        T : 84, // T键
        U : 85, // U键
        V : 86, // V键
        W : 87, // W键
        X : 88, // X键
        Y : 89, // Y键
        Z : 90, // Z键

        0 : 48, // 0键
        1 : 49, // 1键
        2 : 50, // 2键
        3 : 51, // 3键
        4 : 52, // 4键
        5 : 53, // 5键
        6 : 54, // 6键
        7 : 55, // 7键
        8 : 56, // 8键
        9 : 57 // 9键
    }
    /**
     * 按键状态表
     */
    var __keyDownMap = {};

    /**
     * 添加按键事件监听
     */
    var on = function() {
        doc.onkeydown = function(e) {
            var e = e || event, code = e.keyCode || e.which;
            __keyDownMap[code] = true;
        }

        doc.onkeyup = function(e) {
            var e = e || event, code = e.keyCode || e.which;
            __keyDownMap[code] = false;
        }
    };
	exports.on = on;
	
    /**
     * 移除按键事件监听
     */
    var off = function() {
        doc.onkeydown = null;
        doc.onkeyup = null;
    };
	exports.off = off;
	
    /**
     * 检查某个按键是否被按下
     * @param {String} key
     */
    var check = function(key) {
        var code = keyCodeMap[key];
        return !!__keyDownMap[code];
    };
	exports.check = check;
});
