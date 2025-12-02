import {pages,_class} from "./pages.mjs";
console.log(pages);
export function update(x){
    var text = pages[x][0];
    let tst = _class[x.substring(0,x.indexOf("."))];
    document.getElementById("crazy-wrap").innerHTML = 
        `<h2>
            <span style="color:${tst[1]}">[${tst[0]}]</span>${pages[x][1]}
        </h2><hr/>`+text
        .replace(/\[\[(.*?)\]\]\((.*?)\)/g,(_FF,g1,g2)=>{
            return `<a onclick="update(\"${g1}\")">${g2}</a>`;
        })
        .replace(/\[\[(.*?)\]\]/g,(_FF,g1)=>{
            console.log(g1);
            return `<a onclick="update(\"${g1}\")">${pages[g1][1]}</a>`;
        });
    document.title = pages[x][1];
    document.getElementById("vr-code").innerHTML = x;
}
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
window.setInterval(function() {
    var temp0=document.getElementsByClassName("err");
    for(let i=0;i<temp0.length;i++){
        temp0[i].innerHTML = btoa((Math.random()*1000000).toString(36)).slice(1,5);
    }
},30)
window.onload = ()=>{
    update("System.index");
    document.getElementById("vr-button").addEventListener("click",async ()=>{
        document.getElementById("vr-button").value = "一";
        await delay(250);
        document.getElementById("vr-button").value += "二";
        await delay(250);
        document.getElementById("vr-button").value += "三";
        await delay(250);
        document.getElementById("vr-button").value += "跳";
        try{update(document.getElementById("vr-input").value);}
        catch(e){
            document.getElementById("vr-button").value = "文章未找到！";
            await delay(800);
            document.getElementById("vr-button").value = "启动！";
            return ;
        }
        await delay(300);
        document.getElementById("vr-button").value = "跳";
        await delay(250);
        document.getElementById("vr-button").value += "进";
        await delay(250);
        document.getElementById("vr-button").value += "染";
        await delay(800);
        document.getElementById("vr-button").value += "缸";
        await delay(800);
        document.getElementById("vr-button").value = "启动！";
    })
};
if (typeof window !== 'undefined') {
    window.update = update;
}