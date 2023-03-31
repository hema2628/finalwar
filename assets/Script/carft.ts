// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class craft extends cc.Component {
    @property(cc.Label)
    label: cc.Label = null;

    // update (dt) {}
    public die(): void {
        cc.loader.loadRes('boom', cc.SpriteFrame, (err, res) => {
            this.getComponent(cc.Sprite).spriteFrame = res;
        });
        // this.node.destroy();
        setTimeout(() => {
            this.node.destroy();
        }, 600);
    }
}
