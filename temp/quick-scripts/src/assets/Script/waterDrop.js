"use strict";
cc._RF.push(module, '1d5ffD9NdVMkYhWcjxmPUtk', 'waterDrop');
// Script/waterDrop.ts

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
var carft_1 = require("./carft");
var waterDrop = /** @class */ (function (_super) {
    __extends(waterDrop, _super);
    function waterDrop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.speed = 0;
        _this.waterDropSpeedX = 0;
        _this.waterDropSpeedY = 0;
        return _this;
    }
    waterDrop.prototype.onLoad = function () {
        cc.director.getCollisionManager().enabled = true;
    };
    waterDrop.prototype.onCollisionEnter = function (other) {
        console.log(other);
        other.node.getComponent(carft_1.default).die();
    };
    __decorate([
        property({ type: cc.Integer })
    ], waterDrop.prototype, "speed", void 0);
    waterDrop = __decorate([
        ccclass
    ], waterDrop);
    return waterDrop;
}(cc.Component));
exports.default = waterDrop;
// public move(x: number, y: number): void {
//     this.waterDropSpeedX = x;
//     this.waterDropSpeedY = y;
// }
// protected update(dt: number): void {
//     // console.log(this.waterDropSpeedX);
//     this.node.x += this.waterDropSpeedX * 5;
//     this.node.y += this.waterDropSpeedY * 5;
// }

cc._RF.pop();