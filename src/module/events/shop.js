import render from '../Render';

function getId(id) {
    return document.getElementById(id);
}


export default function (core) {
    core.hero.disabled();
    var price = 10 * core.shopTime * (core.shopTime-1) + 20;
    var priceBlock = getId('price-block');
    var hpBtn = getId('hp-btn');
    var attackBtn = getId('attack-btn');
    var defenseBtn = getId('defense-btn');
    var hpNum = core.shopTime * 100;
    var attackNum = 2 * core.maps[core.mapIndex].area;
    var defenseNum = 4 * core.maps[core.mapIndex].area;

    priceBlock.innerHTML = `花费${price}金币您可以：`;
    hpBtn.innerHTML = `增加${hpNum}点生命`;
    attackBtn.innerHTML = `增加${attackNum}点攻击`;
    defenseBtn.innerHTML = `增加${defenseNum}点防御`;

    var buy = function () {
        core.shopTime++;
        core.hero.money -= price;
        price = 10 * core.shopTime * (core.shopTime-1) + 20;
        hpNum = core.shopTime*100;
        priceBlock.innerHTML = `花费${price}金币您可以：`;
        hpBtn.innerHTML = `增加${hpNum}点生命`;
        render.renderStatus(core);
    }

    hpBtn.onclick = function () {
        if( core.hero.money >= price ) {
            core.hero.hp += hpNum;
            buy();
        }
    }
    attackBtn.onclick = function () {
        if( core.hero.money >= price ) {
            core.hero.attack += attackNum;
            buy();
        }
    }
    defenseBtn.onclick = function () {
        if( core.hero.money >= price ) {
            core.hero.defense += defenseNum;
            buy();
        }
    }

    var closeBtn = getId('close-shop');
    closeBtn.onclick = function () {
        getId('shop').style.visibility = 'hidden';
        core.hero.init(core);
    }

    getId('shop').style.visibility = 'visible';
}