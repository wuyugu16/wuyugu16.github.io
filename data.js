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
    var res="<fieldset class='P-fieldset'><legend>简介</legend>";
    c.forEach(item=>{
        res += `<b>${item[0]}</b>:${item[1]}<br/>`;
    })
    res += "</fieldset>";
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
            return `作者能找到的所有的与班级有关的资料，包括策划案，ppt，以及刘星的百梗集。在<a href="./libs.zip">这里</a>下载`;
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
    }
];