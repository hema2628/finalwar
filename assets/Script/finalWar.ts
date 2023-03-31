// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;
import waterDrop from './waterDrop';
import joyStick from './joyStick';

@ccclass
export default class finalWar extends cc.Component {
    @property(cc.Node)
    waterDrop: cc.Node = null;
    @property(cc.Node)
    joyStick: cc.Node = null;
    @property(cc.Prefab)
    craft: cc.Prefab = null;

    private waterDropComp: waterDrop = null;
    private joyStickComp: joyStick = null;
    wdAngle: number;

    carftPostionsX(): Array<number> {
        const arrayX: Array<number> = [];
        const unitX = (this.node.width - 100) / 10;
        for (let i = 0; i < 10; i++) {
            arrayX.push(unitX * i - 400);
        }
        return arrayX;
    }

    carftPostionsY(): Array<number> {
        const arrayY: Array<number> = [];
        const unitY = this.node.height / 8;
        for (let i = 0; i < 4; i++) {
            arrayY.push(unitY * i);
        }
        return arrayY;
    }

    protected onLoad(): void {
        this.waterDropComp = this.waterDrop.getComponent('waterDrop') as waterDrop;
        this.joyStickComp = this.joyStick.getComponent('joyStick') as joyStick;

        this.carftPostionsX();

        for (const px of this.carftPostionsX()) {
            for (const py of this.carftPostionsY()) {
                const theCraft = cc.instantiate(this.craft);
                this.node.addChild(theCraft);
                theCraft.setPosition(new cc.Vec2(px, py));
            }
        }
    }

    protected update(dt: number): void {
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
    }
}
