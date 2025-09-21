var classcolor = [
    "#111199",
    "#119911",
    "#991111",
    "#888822",
    "#882288",
    "#228888",
    "#666666"
];
var classname = [
    "梗",
    "",
    "",
    "",
    "文章",
    "入物",
    "系统"
];
function getPara(x){
    var res="";
    x.forEach(item=>{
        res += `<h3>${item[0]}</h3>${item[1].replace(/\[(.*?)\]/g,(FF,g1)=>{
            var arr = Array
                .from({length:pages.length},(_,i)=>i)
                .filter(item=>pages[item].title==g1);
            return `<a ${arr.length==1?`class="censored"`:""} onclick="update(${arr[0]})">${g1}</a>`;
        })}`
    });
    return res;
}
var pages = [
    {
        title:"首页",
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
    {
        title:"wiki中心页",
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
    {
        title:"程yuan",
        class:5,
        content:()=>{
            return getPara([
                ["简介","十七班班主任，详见[南湖史]"],
                ["外号","[程主席],[cy]"],
                ["语录","[再来一遍],[两遍]"],
                ["人物关系","父亲——[卞策]"]
            ])
        }
    },
    {
        title:"cy",
        class:0,
        content:()=>{

        }
    },
    {
        title:"再来一遍",
        class:0,
        content:()=>{
            return getPara([
                ["背景","见[cy]"],
                ["来源","[cy]在2025年运动会期间的逆天猎奇的语录之一"],
            ])
        }
    },
    {
        title:"南湖史",
        class:4,
        content:()=>{
            return "";
        }
    }
];