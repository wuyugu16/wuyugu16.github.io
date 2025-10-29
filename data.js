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
function getPara(c,x){
    var res="";
    if(c.length){
        res+="<fieldset class='P-fieldset'><legend>简介</legend>";
        c.forEach(item=>{
            res += `<b>${item[0]}</b>:${item[1]}<br/>`;
        })
        res += "</fieldset>";
    }
    x.forEach(item=>{
        res += `<h3>${item[0]}</h3>${item[1]}`;
    });
    return res;
}
var pages = [
    {title:"首页", //done
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
            return `作者能找到的所有的与班级有关的资料，包括策划案，ppt，以及[刘星]的百梗集。在<a href="./libs.zip">这里</a>下载`;
        }
    },
    {title:"陈柏旭",
        class:5,
        content:()=>{
            return getPara([
                ["姓名","陈柏旭"],
                ["学号","38"],
                ["生日","[占位符]"]
            ],[
                ["介绍","陈柏旭是一名在七年级来到十八班的学生，体弱多病（？），在七下时期受[企鹅]影响，变得黄色（"],
                ["外号","[卷柏],[小白柏],[小白ber旭],[陈摆臂],[陈伯旭],[陈ber旭],[侧柏],[松柏],[红日升在东方]"],
                ["相关梗","无"],
                ["相关页面","无"]
            ])
        }
    },
    {title:"卷柏",
        class:0,
        content:()=>{
            return getPara([],[
                ["介绍","卷柏指代真核域植物界蕨类植物门石松纲卷柏目卷柏科卷柏属（Selaginella）的植物，拥有66个种（剑叶卷柏，藤卷柏，瓦氏卷柏，细瘦卷柏，鞘舌卷柏，翠云草，毛枝卷柏，西藏卷柏，卷柏，旱生卷柏，中华卷柏，西伯利亚卷柏，泰国卷柏，红枝卷柏，鹿角卷柏，海南卷柏，高雄卷柏，疏叶卷柏，垫状卷柏，二歧卷柏，毛枝攀援卷柏，拟伏地卷柏，地卷柏，黑顶卷柏，拟双沟卷柏，平卷柏，微齿钝叶卷柏，钱叶卷柏，伏地卷柏，单子卷柏（毛叶卷柏，单子卷柏（原亚种）），江南卷柏，长叶卷柏，狭叶卷柏，耳基卷柏，膜叶卷柏，松穗卷柏，细叶卷柏，缅甸卷柏，小翠云，贵州卷柏，睫毛卷柏，兖州卷柏，印度卷柏，异穗卷柏，小卷柏，攀缘卷柏，粗茎卷柏，疏松卷柏，镰叶卷柏，深绿卷柏（粗叶卷柏，糙叶卷柏，深绿卷柏（原亚种）），薄叶卷柏，拟大叶卷柏，蔓出卷柏（澜沧卷柏，蔓出卷柏（原亚种）），长芒卷柏，缘毛卷柏，块茎卷柏，秦氏卷柏，毛边卷柏，布朗卷柏，小笠原卷柏，大叶卷柏，双沟卷柏，二形卷柏，钝叶卷柏，白边卷柏，白毛卷柏）。因为名字里带柏却不是柏而被[梁爽](生物老师)反复强调。\n后来，神人发现[陈柏旭]的名字里也有“柏”，于是便把他和卷柏联系起来。刚开始[陈柏旭]坚决否认此观点，并自称松柏&侧柏。在七下时期，他便对卷柏一词脱敏了。现在卷柏几乎是最常用的称呼之一。"]
            ])
        }
    }
];