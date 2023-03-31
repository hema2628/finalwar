"use strict";
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