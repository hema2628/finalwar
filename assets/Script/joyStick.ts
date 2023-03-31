// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import waterDrop from './waterDrop';

const { ccclass, property } = cc._decorator;

@ccclass
export default class joyStick extends cc.Component {
    @property({ type: cc.Node })
    joyStick: cc.Node = null;
    @property({ type: cc.Vec2 })
    direction = cc.Vec2.ZERO;
    // direction: cc.Vec2 = cc.Vec2.ZERO;

    onTouchStart(event: cc.Event.EventTouch): void {
        this.onTouchMove(event);
    }

    onTouchMove(event: cc.Event.EventTouch): void {
        const touchPos = this.joyStick.convertToNodeSpaceAR(event.getLocation());
        const radius = this.joyStick.width / 2;

        //计算触摸点与锚点的距离
        const dist: number = touchPos.mag();

        //若触摸点超出范围，则将触摸点限制在范围内
        if (dist > radius) {
            touchPos.normalizeSelf().mulSelf(radius);
        }

        // 根据触摸点位置计算输入方向
        this.direction.x = touchPos.x / radius;
        this.direction.y = touchPos.y / radius;
    }

    private onTouchEnd(event: cc.Event.EventTouch) {
        // 重置输入方向
        this.direction = cc.Vec2.ZERO;
    }
    protected onLoad(): void {
        this.joyStick.on(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this), this);
        this.joyStick.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this), this);
        this.joyStick.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), this);
        this.joyStick.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd.bind(this), this);
    }
    onDestroy() {
        this.joyStick.off(cc.Node.EventType.TOUCH_START, this.onTouchStart.bind(this), this);
        this.joyStick.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove.bind(this), this);
        this.joyStick.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd.bind(this), this);
        this.joyStick.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd.bind(this), this);
    }
}
