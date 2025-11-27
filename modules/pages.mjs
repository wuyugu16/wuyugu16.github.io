import * as basic from "./basic.mjs"
import * as connect from "./connect.mjs"

export function getPage(title,x){
    var res="";
    x.forEach(item=>{
        if(item[1])
            res += `<h3>${item[0]}</h3>${item[1]}`;
    });
    return [res,title];
}

export var pages = {};

var Pwr = H=>H.map(x=>`[${x}]`).join(",")

Object.keys(basic.funList).forEach(item=>{
    var before = connect.funConnections.filter(x=>x[1]==item)
        .concat(connect.Utterance.filter(x=>x[1]==item))
        .concat(connect.NickName.filter(x=>x[1]==item));
    var after = connect.funConnections.filter(x=>x[0]==item);
    pages[item] = getPage(basic.funList[item],
        basic.funIntroduction[item].concat([
            ["来源",Pwr(before)],
            ["引申",Pwr(after)]
        ])
    )

})

Object.keys(basic.articleList).forEach(item=>{
    pages[item] = [basic.articleIntroduction[item],basic.articleList[item]]
})

Object.keys(basic.personList).forEach(item=>{
    var utt = connect.Utterance.filter(x=>x[0]==item);
    var nck = connect.NickName.filter(x=>x[0]==item);
    var after = connect.funConnections.filter(x=>x[0]==item);
    pages[item] = getPage(basic.personList[item],[
        ["简介",basic.personIntroduction[item]],
        ["外号",Pwr(nck)],
        ["语录",Pwr(utt)],
        ["关于",Pwr(after)]
    ])
})
