import * as basic from "./basic.mjs"
import * as connect from "./connect.mjs"

export function getPage(title,x){
	return [basic.getText(x),title];
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

Object.keys(basic.privateList).forEach(item=>{
    pages[item] = [basic.privateIntroduction[item],basic.privateList[item]]
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
});

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export var _class = {
    "Fun":["梗","#111199"],
    "Article":["文章","#882288"],
    "Person":["人物","#228888"],
    "System":["系统","#666677"],
    "Private":["个人","#991111"]
};
(()=>{
    let res = `<div style="
        display: flex;
        flex-wrap: wrap;
    ">`;
    let keys = Object.keys(pages).filter((item)=>item.indexOf("Private.")!=0);
    for(let i=0;i<20;i++){
        res += `<div class="lt-box able-click">`;
        let tpk = keys[Math.floor(Math.random()*keys.length)];
        let tst = _class[tpk.substring(0,tpk.indexOf("."))];
        res += `<h4 style="margin:4px"><span style="color:${tst[1]}">[${tst[0]}]</span>${pages[tpk][1]}</h4>`;
        console.log(pages[tpk][0],tpk)
        res += `<code>${escapeHTML(pages[tpk][0].substring(0,Math.min(50,pages[tpk][0].length)))}...</code>`
        res += "</div>";
    };
    res += "</div>"
    console.log(res);
    pages["System.index"] = [res,"首页"];
})();

/*{title:"首页", //done
        class:6,
        content:()=>{
            var res = "";
            const get = (sclass,sname)=>{
                res += `<fieldset class="P0-fieldset"><legend>${sname}</legend>`;
                Array
                    .from({length: pages.length}, (_, i) => i)
                    .filter(item=>pages[item].class==sclass)
                    .sort((a,b)=>Math.random()-0.5)
                    .slice(0,5)
                    .forEach(item=>{
                        res += `<a onclick="update(${item})">${pages[item].title}</a><br/>`
                    });
                res += "</fieldset>";
            };
            get(0,"梗");
            get(4,"文章");
            get(5,"入物");
            return res;
        }
    },
    {title:"wiki中心页", //done
        class:6,
        content:()=>{
            var res = "<fieldset><legend>梗</legend>";
            Array
                .from({length:pages.length},(_,i)=>i)
                .filter(item=>pages[item].class==0)
                .sort((a,b)=>pages[a].title>pages[b].title)
                .forEach(item=>{
                    res += `<a onclick="update(${item})">${pages[item].title}</a>`;
                });
            res += "</fieldset>";
            return res;
        }
    },
    {title:"文章中心页", //done
        class:6,
        content:()=>{
            var res = "<fieldset><legend>文章</legend>";
            Array
                .from({length:pages.length},(_,i)=>i)
                .filter(item=>pages[item].class==4)
                .sort((a,b)=>pages[a].title>pages[b].title)
                .forEach(item=>{
                    res += `<a onclick="update(${item})">${pages[item].title}</a>`;
                });
            res += "</fieldset>";
            return res;
        }
    },
    {title:"libs",
        class:6,
        content:()=>{
            return `作者能找到的所有的与班级有关的资料，包括策划案，ppt，以及刘星的百梗集。在<a href="./libs.zip">这里</a>下载`;
        }
    } */