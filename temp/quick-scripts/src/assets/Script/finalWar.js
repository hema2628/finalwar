"use strict";
cc._RF.push(module, '58a229ZsEBNm7FvF6VvPAK8', 'finalWar');
// Script/finalWar.ts

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
var finalWar = /** @class */ (function (_super) {
    __extends(finalWar, _super);
    function finalWar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.waterDrop = null;
        _this.joyStick = null;
        _this.craft = null;
        _this.waterDropComp = null;
        _this.joyStickComp = null;
        return _this;
    }
    finalWar.prototype.carftPostionsX = function () {
        var arrayX = [];
        var unitX = (this.node.width - 100) / 10;
        for (var i = 0; i < 10; i++) {
            arrayX.push(unitX * i - 400);
        }
        return arrayX;
    };
    finalWar.prototype.carftPostionsY = function () {
        var arrayY = [];
        var unitY = this.node.height / 8;
        for (var i = 0; i < 4; i++) {
            arrayY.push(unitY * i);
        }
        return arrayY;
    };
    finalWar.prototype.onLoad = function () {
        this.waterDropComp = this.waterDrop.getComponent('waterDrop');
        this.joyStickComp = this.joyStick.getComponent('joyStick');
        this.carftPostionsX();
        for (var _i = 0, _a = this.carftPostionsX(); _i < _a.length; _i++) {
            var px = _a[_i];
            for (var _b = 0, _c = this.carftPostionsY(); _b < _c.length; _b++) {
                var py = _c[_b];
                var theCraft = cc.instantiate(this.craft);
                this.node.addChild(theCraft);
                theCraft.setPosition(new cc.Vec2(px, py));
            }
        }
    };
    finalWar.prototype.update = function (dt) {
        // this.waterDropComp.move(this.joyStickComp.direction.x, this.joyStickComp.direction.y);
        // console.log(Math.atan2(this.joyStickComp.direction.y, this.joyStickComp.direction.x));
        if (Math.abs(this.waterDropComp.node.x) > this.node.width / 2) {
            this.waterDropComp.node.x =
                (Math.abs(this.waterDropComp.node.x) * (this.node.width - 10)) / 2 / this.waterDropComp.node.x;
        }
        if (Math.abs(this.waterDropComp.node.y) > this.node.height / 2) {
            this.waterDropComp.node.y =
                (Math.abs(this.waterDropComp.node.y) * (this.node.height - 10)) / 2 / this.waterDropComp.node.y;
        }
        this.waterDropComp.node.x += this.joyStickComp.direction.x;
        this.waterDropComp.node.y += this.joyStickComp.direction.y;
        this.wdAngle = (Math.atan2(this.joyStickComp.direction.y, this.joyStickComp.direction.x) * 180) / Math.PI + 90;
        this.waterDropComp.node.angle = this.wdAngle;
    };
    __decorate([
        property(cc.Node)
    ], finalWar.prototype, "waterDrop", void 0);
    __decorate([
        property(cc.Node)
    ], finalWar.prototype, "joyStick", void 0);
    __decorate([
        property(cc.Prefab)
    ], finalWar.prototype, "craft", void 0);
    finalWar = __decorate([
        ccclass
    ], finalWar);
    return finalWar;
}(cc.Component));
exports.default = finalWar;

cc._RF.pop();