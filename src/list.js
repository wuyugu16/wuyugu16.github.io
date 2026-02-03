var pagesList = {
    index : {type: "markdown", label: [], kind: "system", title: "首页"},
    Hide : {type: "markdown", label: [], kind: "system", title: "Hide", hide:1},
    while : {type: "html", label: [], kind: "fun", title: "死循环"},
    md2html : {type: "html", label: [], kind: "tool", title: "Markdown 转 html"},
    object : {type: "html", label: ["解密"], kind: "fun", title: "解密 - Obejct"},
    undefined : {type: "html", label: ["解密"], kind: "fun", title: "解密 - Undefined"},
    jm_null : {type: "html", label: ["解密"], kind: "fun", title: "解密 - NULL"},
    berzhuan : {type: "markdown", label: ["小六遗产"], kind: "article", title: "《班长转》合集", hide:1},
    L6person : {type: "markdown", label: ["小六遗产"], kind: "article", title: "小六人员名单", hide:1},
    funDic : {type: "html", label: [], kind: "article", title: "梗词典", hide:1},
    humanfat : {type: "markdown", label: ["小六遗产"], kind: "article", title: "人类发言", hide:1},
    omegamaker : {type: "html", label: [], kind: "tool", title: "?阶生成器"},
    omegalinker : {type: "html", label: [], kind: "tool", title: "Prss生成器"},
    aiarticle1 : {type: "markdown", label: [], kind: "article", title: "炸裂文章（ai）", hide:1},
    website : {type: "html", label: [], kind: "tool", title: "网址们"}
};

var kinds = {
    system : ["#aaa","系统"],
    tool   : ["#4dd","工具"],
    fun    : ["#d4d","有趣"],
    label  : ["#dd4","标签"],
    article: ["#e55","文章"]
}
var getKind = k=>`<span style="color:${kinds[k][0]}">[${kinds[k][1]}]</span>`
function getTitle(p){
    var info = pagesList[p];
    return `<b>${getKind(info.kind)} ${info.title}</b>`;
}
Object.keys(kinds).forEach(item=>{
    pagesList[`kind_${item}`] = {
        type: "markdown",
        label: ["类别中心页"],
        kind: "system",
        title: `${kinds[item][1]}中心页`
    };
});

var labels = {};
Object.keys(pagesList).forEach(item=>{
    pagesList[item].label.forEach(item2=>{
        if(!labels[item2])labels[item2] = [];
        labels[item2].push(item);
    })
});
Object.keys(labels).forEach(item=>{
    pagesList[`label_${item}`] = {
        type: "markdown",
        label: [],
        kind: "label",
        title: `标签 \`${item}\` 中心页`
    };
});

function get(p,info){
    if(p == "Hide"){
        let content = `### 所有页面\n`;
        Object.keys(pagesList).forEach(item=>{
            let info = pagesList[item];
            content += `[${info.title}](${item})  \n`;
        })
        return Promise.resolve(content);
    }
    if(info.kind == "label"){
        let content = `### 含有标签 \`${p.substring(6)}\` 的页面：\n`;
        labels[p.substring(6)].forEach(item=>{
            if(!pagesList[item].hide)
                content += `[${pagesList[item].title}](${item})  \n`;
        })
        return Promise.resolve(content);
    }
    if(p.startsWith("kind_")){
        let kp = p.substring(5);
        let content = `### 被分类为 ${getKind(kp)} 的页面：\n`;
        Object.keys(pagesList).forEach(item=>{
            let info = pagesList[item];
            if((!info.hide) && info.kind == kp)
                content += `[${info.title}](${item})  \n`;
        })
        return Promise.resolve(content);
    }
    var filename = `./pages/${p}.${{html:"html",markdown:"md",text:"txt"}[info.type]}`;
    return fetch(filename).then(data=>data.text());
}