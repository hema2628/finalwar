
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/waterDrop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvd2F0ZXJEcm9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsd0VBQXdFO0FBQ3hFLG1CQUFtQjtBQUNuQixrRkFBa0Y7QUFDbEYsOEJBQThCO0FBQzlCLGtGQUFrRjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVFLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDLGlDQUE0QjtBQUc1QjtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQWNDO1FBWkcsV0FBSyxHQUFHLENBQUMsQ0FBQztRQUNWLHFCQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLHFCQUFlLEdBQUcsQ0FBQyxDQUFDOztJQVV4QixDQUFDO0lBUkcsMEJBQU0sR0FBTjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO0lBQ3JELENBQUM7SUFFRCxvQ0FBZ0IsR0FBaEIsVUFBaUIsS0FBeUI7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNuQixLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztJQUN6QyxDQUFDO0lBWEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDOzRDQUNyQjtJQUZPLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FjN0I7SUFBRCxnQkFBQztDQWRELEFBY0MsQ0Fkc0MsRUFBRSxDQUFDLFNBQVMsR0FjbEQ7a0JBZG9CLFNBQVM7QUFnQjlCLDRDQUE0QztBQUM1QyxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLElBQUk7QUFFSix1Q0FBdUM7QUFDdkMsNENBQTRDO0FBQzVDLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0MsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vIExlYXJuIEF0dHJpYnV0ZTpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5pbXBvcnQgY3JhZnQgZnJvbSAnLi9jYXJmdCc7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB3YXRlckRyb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eSh7IHR5cGU6IGNjLkludGVnZXIgfSlcbiAgICBzcGVlZCA9IDA7XG4gICAgd2F0ZXJEcm9wU3BlZWRYID0gMDtcbiAgICB3YXRlckRyb3BTcGVlZFkgPSAwO1xuXG4gICAgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgb25Db2xsaXNpb25FbnRlcihvdGhlcjogY2MuSUNvbGxpc2lvbkV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKG90aGVyKTtcbiAgICAgICAgb3RoZXIubm9kZS5nZXRDb21wb25lbnQoY3JhZnQpLmRpZSgpO1xuICAgIH1cbn1cblxuLy8gcHVibGljIG1vdmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbi8vICAgICB0aGlzLndhdGVyRHJvcFNwZWVkWCA9IHg7XG4vLyAgICAgdGhpcy53YXRlckRyb3BTcGVlZFkgPSB5O1xuLy8gfVxuXG4vLyBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbi8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLndhdGVyRHJvcFNwZWVkWCk7XG4vLyAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy53YXRlckRyb3BTcGVlZFggKiA1O1xuLy8gICAgIHRoaXMubm9kZS55ICs9IHRoaXMud2F0ZXJEcm9wU3BlZWRZICogNTtcbi8vIH1cbiJdfQ==