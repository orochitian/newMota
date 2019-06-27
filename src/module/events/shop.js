import tools from "../tools";

function getId(id) {
    return document.getElementById(id);
}


export default function (core) {
    core.hero.disabled();
    getId('shop').style.display = 'block';
    getId('shop').innerHTML = '';
    var price = 10 * core.shopTime * (core.shopTime-1) + 20;

    var inner = document.createElement('div');
    inner.id = 'event-inner';
    var priceBlock = document.createElement('div');
    priceBlock.id = 'price-block';
    priceBlock.innerHTML = `花费${price}金币您可以：`;
    var itemBlock = document.createElement('div');
    itemBlock.id = 'item-block';
    inner.appendChild(priceBlock);
    inner.appendChild(itemBlock);

    var hpBtn = document.createElement('button');
    var attackBtn = document.createElement('button');
    var defenseBtn = document.createElement('button');
    var hpNum = core.shopTime * 100;
    var attackNum = 2 * core.map.area;
    var defenseNum = 4 * core.map.area;
    hpBtn.innerHTML = `增加${hpNum}点生命`;
    attackBtn.innerHTML = `增加${attackNum}点攻击`;
    defenseBtn.innerHTML = `增加${defenseNum}点防御`;
    itemBlock.appendChild(hpBtn);
    itemBlock.appendChild(attackBtn);
    itemBlock.appendChild(defenseBtn);

    var buy = function () {
        core.shopTime++;
        core.hero.money -= price;
        price = 10 * core.shopTime * (core.shopTime-1) + 20;
        hpNum = core.shopTime*100;
        priceBlock.innerHTML = `花费${price}金币您可以：`;
        hpBtn.innerHTML = `增加${hpNum}点生命`;
        tools.domRender(core.hero, core.mapIndex);
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


    var closeBlock = document.createElement('div');
    closeBlock.id = 'event-close-block';
    var closeBtn = document.createElement('button');
    closeBtn.innerText = '离开商店';
    closeBtn.id = 'event-close';
    closeBtn.onclick = function () {
        getId('event').style.opacity = 0;
        core.hero.init();
    }
    closeBlock.appendChild(closeBtn);
    getId('event').appendChild(inner);
    getId('event').appendChild(closeBlock);
}