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
]
var pages = [
    {
        title:"所有页面",
        class:6,
        content:()=>{
            var res = "";
            pages.forEach((item,index)=>{
                res += `<div id="P0-wrap">
                <h2><a href="#" onclick="update(${index})">
                <span style="color:${classcolor[item.class]}">[${classname[item.class]}]<span>
                ${item.title}
                </h2></a>
                </div>`;
            })
            return res;
        }
    },
    {
        title:"南湖史",
        class:4,
        content:()=>{

        }
    }
];