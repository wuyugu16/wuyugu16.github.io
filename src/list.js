var pagesList = {
    object : {type: "html", label: [], kind: "system", title: "Obejct"},
    test : {type: "text", label: [], kind: "system", title:"111"},
    test2 : {type: "html", label: ["test0"], kind: "tool", title:"111"},
    test3 : {type: "markdown", label: ["test0","test1"], kind: "passages", title:"111"},
    test4 : {type: "text", label: ["test1"], kind: "game", title:"111"}
};
var labels = {};
Object.keys(pagesList).forEach(item=>{
    pagesList[item].label.forEach(item2=>{
        if(!labels[item2])labels[item2] = [];
        labels[item2].push(item);
    })
});
console.log(labels);
Object.keys(labels).forEach(item=>{
    pagesList[`label_${item}`] = {
        type: "markdown",
        label: [],
        kind: "label"
    };
});
function get(p,info){
    if(info.kind == "label"){
        let content = `### 含有标签 \`${p.substring(6)}\` 的页面：\n`;
        labels[p.substring(6)].forEach(item=>{
            content += `[${pagesList[item].title}](-${item})  \n`;
        })
        return Promise.resolve(content);
    }
    var filename = `./pages/${p}.${{html:"html",markdown:"md",text:"txt"}[info.type]}`;
    return fetch(filename).then(data=>data.text());
}