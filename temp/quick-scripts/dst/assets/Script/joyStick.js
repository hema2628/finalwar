
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/joyStick.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd2efaaAY/pC47Bw2C1yAJLI', 'joyStick');
// Script/joyStick.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var joyStick = /** @class */ (function (_super) {
    __extends(joyStick, _super);
    function joyStick() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.joyStick = null;
        _this.direction = cc.Vec2.ZERO;
        return _this;
    }
    // direction: cc.Vec2 = cc.Vec2.ZERO;
    joyStick.prototype.onTouchStart = function (event) {
        this.onTouchMove(event);
    };
    joyStick.prototype.onTouchMove = function (event) {
        var touchPos = this.joyStick.convertToNodeSpaceAR(event.getLocation());
        var radius = this.joyStick.width / 2;
        //计算触摸点与锚点的距离
        var dist = touchPos.mag();
        //若触摸点超出范围，则将触摸点限制在范围内
        if (dist > radius) {
            touchPos.normalizeSelf().mulSelf(radius);
        }
        // 根据触摸点位置计算输入方向
        this.direction.x = touchPos.x / radius;
        this.direction.y = touchPos.y / radius;
    };
    joyStick.prototype.onTouchEnd = function (event) {
        // 重置输入方向
        this.direction = cc.Vec2.ZERO;
    };
    joyStick.prototype.onLoad = function () {
        this.joyStick.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this), this);
        this.joyStick.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this), this);
        this.joyStick.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), this);
        this.joyStick.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd.bind(this), this);
    };
    joyStick.prototype.onDestroy = function () {
        this.joyStick.off(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this), this);
        this.joyStick.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this), this);
        this.joyStick.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), this);
        this.joyStick.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd.bind(this), this);
    };
    __decorate([
        property({ type: cc.Node })
    ], joyStick.prototype, "joyStick", void 0);
    __decorate([
        property({ type: cc.Vec2 })
    ], joyStick.prototype, "direction", void 0);
    joyStick = __decorate([
        ccclass
    ], joyStick);
    return joyStick;
}(cc.Component));
exports.default = joyStick;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvam95U3RpY2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE0Q0M7UUExQ0csY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixlQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7O0lBd0M3QixDQUFDO0lBdkNHLHFDQUFxQztJQUVyQywrQkFBWSxHQUFaLFVBQWEsS0FBMEI7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEtBQTBCO1FBQ2xDLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUM7UUFDekUsSUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBRXZDLGFBQWE7UUFDYixJQUFNLElBQUksR0FBVyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFcEMsc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxHQUFHLE1BQU0sRUFBRTtZQUNmLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDNUM7UUFFRCxnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDdkMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUM7SUFDM0MsQ0FBQztJQUVPLDZCQUFVLEdBQWxCLFVBQW1CLEtBQTBCO1FBQ3pDLFNBQVM7UUFDVCxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ2xDLENBQUM7SUFDUyx5QkFBTSxHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0QsNEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQzs4Q0FDSDtJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLENBQUM7K0NBQ0g7SUFKUixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNEM1QjtJQUFELGVBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3FDLEVBQUUsQ0FBQyxTQUFTLEdBNENqRDtrQkE1Q29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHdhdGVyRHJvcCBmcm9tICcuL3dhdGVyRHJvcCc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqb3lTdGljayBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHsgdHlwZTogY2MuTm9kZSB9KVxuICAgIGpveVN0aWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoeyB0eXBlOiBjYy5WZWMyIH0pXG4gICAgZGlyZWN0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgIC8vIGRpcmVjdGlvbjogY2MuVmVjMiA9IGNjLlZlYzIuWkVSTztcblxuICAgIG9uVG91Y2hTdGFydChldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICB0aGlzLm9uVG91Y2hNb3ZlKGV2ZW50KTtcbiAgICB9XG5cbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCk6IHZvaWQge1xuICAgICAgICBjb25zdCB0b3VjaFBvcyA9IHRoaXMuam95U3RpY2suY29udmVydFRvTm9kZVNwYWNlQVIoZXZlbnQuZ2V0TG9jYXRpb24oKSk7XG4gICAgICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMuam95U3RpY2sud2lkdGggLyAyO1xuXG4gICAgICAgIC8v6K6h566X6Kem5pG454K55LiO6ZSa54K555qE6Led56a7XG4gICAgICAgIGNvbnN0IGRpc3Q6IG51bWJlciA9IHRvdWNoUG9zLm1hZygpO1xuXG4gICAgICAgIC8v6Iul6Kem5pG454K56LaF5Ye66IyD5Zu077yM5YiZ5bCG6Kem5pG454K56ZmQ5Yi25Zyo6IyD5Zu05YaFXG4gICAgICAgIGlmIChkaXN0ID4gcmFkaXVzKSB7XG4gICAgICAgICAgICB0b3VjaFBvcy5ub3JtYWxpemVTZWxmKCkubXVsU2VsZihyYWRpdXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8g5qC55o2u6Kem5pG454K55L2N572u6K6h566X6L6T5YWl5pa55ZCRXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uLnggPSB0b3VjaFBvcy54IC8gcmFkaXVzO1xuICAgICAgICB0aGlzLmRpcmVjdGlvbi55ID0gdG91Y2hQb3MueSAvIHJhZGl1cztcbiAgICB9XG5cbiAgICBwcml2YXRlIG9uVG91Y2hFbmQoZXZlbnQ6IGNjLkV2ZW50LkV2ZW50VG91Y2gpIHtcbiAgICAgICAgLy8g6YeN572u6L6T5YWl5pa55ZCRXG4gICAgICAgIHRoaXMuZGlyZWN0aW9uID0gY2MuVmVjMi5aRVJPO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmpveVN0aWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLmpveVN0aWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyksIHRoaXMpO1xuICAgICAgICB0aGlzLmpveVN0aWNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyksIHRoaXMpO1xuICAgIH1cbiAgICBvbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuam95U3RpY2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydC5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZS5iaW5kKHRoaXMpLCB0aGlzKTtcbiAgICAgICAgdGhpcy5qb3lTdGljay5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQuYmluZCh0aGlzKSwgdGhpcyk7XG4gICAgICAgIHRoaXMuam95U3RpY2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLmJpbmQodGhpcyksIHRoaXMpO1xuICAgIH1cbn1cbiJdfQ==