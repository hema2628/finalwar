// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

import craft from './carft';

@ccclass
export default class waterDrop extends cc.Component {
    @property({ type: cc.Integer })
    speed = 0;
    waterDropSpeedX = 0;
    waterDropSpeedY = 0;

    onLoad(): void {
        cc.director.getCollisionManager().enabled = true;
    }

    onCollisionEnter(other: cc.ICollisionEvent): void {
        console.log(other);
        other.node.getComponent(craft).die();
    }
}

// public move(x: number, y: number): void {
//     this.waterDropSpeedX = x;
//     this.waterDropSpeedY = y;
// }

// protected update(dt: number): void {
//     // console.log(this.waterDropSpeedX);
//     this.node.x += this.waterDropSpeedX * 5;
//     this.node.y += this.waterDropSpeedY * 5;
// }
