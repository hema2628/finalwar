
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/finalWar.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvZmluYWxXYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFLNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUFnRUM7UUE5REcsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBYyxJQUFJLENBQUM7UUFFaEIsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFDaEMsa0JBQVksR0FBYSxJQUFJLENBQUM7O0lBdUQxQyxDQUFDO0lBcERHLGlDQUFjLEdBQWQ7UUFDSSxJQUFNLE1BQU0sR0FBa0IsRUFBRSxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzNDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ2hDO1FBQ0QsT0FBTyxNQUFNLENBQUM7SUFDbEIsQ0FBQztJQUVELGlDQUFjLEdBQWQ7UUFDSSxJQUFNLE1BQU0sR0FBa0IsRUFBRSxDQUFDO1FBQ2pDLElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNuQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFF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RSxDQUFDO1FBQy9HLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ2pELENBQUM7SUE3REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzhDQUNPO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7MkNBQ0k7SUFOUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBZ0U1QjtJQUFELGVBQUM7Q0FoRUQsQUFnRUMsQ0FoRXFDLEVBQUUsQ0FBQyxTQUFTLEdBZ0VqRDtrQkFoRW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbmltcG9ydCB3YXRlckRyb3AgZnJvbSAnLi93YXRlckRyb3AnO1xuaW1wb3J0IGpveVN0aWNrIGZyb20gJy4vam95U3RpY2snO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZmluYWxXYXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIHdhdGVyRHJvcDogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgam95U3RpY2s6IGNjLk5vZGUgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgY3JhZnQ6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgICBwcml2YXRlIHdhdGVyRHJvcENvbXA6IHdhdGVyRHJvcCA9IG51bGw7XG4gICAgcHJpdmF0ZSBqb3lTdGlja0NvbXA6IGpveVN0aWNrID0gbnVsbDtcbiAgICB3ZEFuZ2xlOiBudW1iZXI7XG5cbiAgICBjYXJmdFBvc3Rpb25zWCgpOiBBcnJheTxudW1iZXI+IHtcbiAgICAgICAgY29uc3QgYXJyYXlYOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgICAgIGNvbnN0IHVuaXRYID0gKHRoaXMubm9kZS53aWR0aCAtIDEwMCkgLyAxMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJheVgucHVzaCh1bml0WCAqIGkgLSA0MDApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheVg7XG4gICAgfVxuXG4gICAgY2FyZnRQb3N0aW9uc1koKTogQXJyYXk8bnVtYmVyPiB7XG4gICAgICAgIGNvbnN0IGFycmF5WTogQXJyYXk8bnVtYmVyPiA9IFtdO1xuICAgICAgICBjb25zdCB1bml0WSA9IHRoaXMubm9kZS5oZWlnaHQgLyA4O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgYXJyYXlZLnB1c2godW5pdFkgKiBpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyYXlZO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMud2F0ZXJEcm9wQ29tcCA9IHRoaXMud2F0ZXJEcm9wLmdldENvbXBvbmVudCgnd2F0ZXJEcm9wJykgYXMgd2F0ZXJEcm9wO1xuICAgICAgICB0aGlzLmpveVN0aWNrQ29tcCA9IHRoaXMuam95U3RpY2suZ2V0Q29tcG9uZW50KCdqb3lTdGljaycpIGFzIGpveVN0aWNrO1xuXG4gICAgICAgIHRoaXMuY2FyZnRQb3N0aW9uc1goKTtcblxuICAgICAgICBmb3IgKGNvbnN0IHB4IG9mIHRoaXMuY2FyZnRQb3N0aW9uc1goKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBweSBvZiB0aGlzLmNhcmZ0UG9zdGlvbnNZKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0aGVDcmFmdCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuY3JhZnQpO1xuICAgICAgICAgICAgICAgIHRoaXMubm9kZS5hZGRDaGlsZCh0aGVDcmFmdCk7XG4gICAgICAgICAgICAgICAgdGhlQ3JhZnQuc2V0UG9zaXRpb24obmV3IGNjLlZlYzIocHgsIHB5KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy53YXRlckRyb3BDb21wLm1vdmUodGhpcy5qb3lTdGlja0NvbXAuZGlyZWN0aW9uLngsIHRoaXMuam95U3RpY2tDb21wLmRpcmVjdGlvbi55KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coTWF0aC5hdGFuMih0aGlzLmpveVN0aWNrQ29tcC5kaXJlY3Rpb24ueSwgdGhpcy5qb3lTdGlja0NvbXAuZGlyZWN0aW9uLngpKTtcblxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy53YXRlckRyb3BDb21wLm5vZGUueCkgPiB0aGlzLm5vZGUud2lkdGggLyAyKSB7XG4gICAgICAgICAgICB0aGlzLndhdGVyRHJvcENvbXAubm9kZS54ID1cbiAgICAgICAgICAgICAgICAoTWF0aC5hYnModGhpcy53YXRlckRyb3BDb21wLm5vZGUueCkgKiAodGhpcy5ub2RlLndpZHRoIC0gMTApKSAvIDIgLyB0aGlzLndhdGVyRHJvcENvbXAubm9kZS54O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKE1hdGguYWJzKHRoaXMud2F0ZXJEcm9wQ29tcC5ub2RlLnkpID4gdGhpcy5ub2RlLmhlaWdodCAvIDIpIHtcbiAgICAgICAgICAgIHRoaXMud2F0ZXJEcm9wQ29tcC5ub2RlLnkgPVxuICAgICAgICAgICAgICAgIChNYXRoLmFicyh0aGlzLndhdGVyRHJvcENvbXAubm9kZS55KSAqICh0aGlzLm5vZGUuaGVpZ2h0IC0gMTApKSAvIDIgLyB0aGlzLndhdGVyRHJvcENvbXAubm9kZS55O1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy53YXRlckRyb3BDb21wLm5vZGUueCArPSB0aGlzLmpveVN0aWNrQ29tcC5kaXJlY3Rpb24ueDtcbiAgICAgICAgdGhpcy53YXRlckRyb3BDb21wLm5vZGUueSArPSB0aGlzLmpveVN0aWNrQ29tcC5kaXJlY3Rpb24ueTtcbiAgICAgICAgdGhpcy53ZEFuZ2xlID0gKE1hdGguYXRhbjIodGhpcy5qb3lTdGlja0NvbXAuZGlyZWN0aW9uLnksIHRoaXMuam95U3RpY2tDb21wLmRpcmVjdGlvbi54KSAqIDE4MCkgLyBNYXRoLlBJICsgOTA7XG4gICAgICAgIHRoaXMud2F0ZXJEcm9wQ29tcC5ub2RlLmFuZ2xlID0gdGhpcy53ZEFuZ2xlO1xuICAgIH1cbn1cbiJdfQ==