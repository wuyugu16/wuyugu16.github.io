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
    "工具",
    "系统"
];
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
            //get(5,"工具");
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
        title:"再来一遍",
        class:0,
        content:()=>{

        }
    },
    {
        title:"南湖史",
        class:4,
        content:()=>{
            return "测测测测";
        }
    }
];