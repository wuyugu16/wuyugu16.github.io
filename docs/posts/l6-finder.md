---
date: 2026-2-28
category: passage
hide: true
---

# 关键词检测 / jcjc

<textarea cols="50" rows="15" id="usr-input"></textarea><br/>
<input type="radio" name="r1" id="i1" checked><label for="i1">流行</label>
<input type="radio" name="r1" id="i2"><label for="i2">老师</label>
<input type="radio" name="r1" id="i3"><label for="i3">同学</label>
<input type="radio" name="r1" id="i4"><label for="i4">猎奇</label>
<div id='ans'></div>

<script setup>
import cnchar from 'cnchar';
import $ from 'jquery';
var ans = [];
var key = [
    ["jc","swd","gb","lsq","cy","bk","sff","bc"],
    ["jc","gb","jxy","ls","ds","ltt","sff","zyt","zx",/**/"wzl","bk","bc","lzj","pd","ll"],
    ["srq","wyh","gjy","zzh","tby","zrx","wzh","zjm","lsq","fsx","fbf","cyy","wyq","lts","rh","wjx","qhr","mzs","yxb","lz","hcx","syx","jzh","wxr","sws","dcw","wy","cby","jkr","lqy","zyf","zsj","axy","wym","cy","hym","syf","cbx","zxh","zjw","yac","zjy","djn","wwh","zjh","zsh","xxy","zwc","qxl","chr",/**/"yjk","lsx","xzq","zky","bsq"],
    ["jb","jy","sm"]
];
function findAll(str, subStr) {
    const positions = [];
    let pos = str.indexOf(subStr);
    while (pos !== -1) {
        positions.push(pos);
        pos = str.indexOf(subStr, pos+1); // 从下一个字符开始继续查找（避免重叠）
    }
    return positions;
}
function uniqueBy(arr, keyFn) {
  const map = new Map();
  return arr.filter((item) => {
    const key = keyFn(item);
    if (!map.has(key)) {
      map.set(key, true);
      return true;
    }
    return false;
  });
}
$(function(){
    var x = (event)=>{
        let rr = document.getElementById("usr-input").value;
        let r = cnchar.spell(rr,'first','low').toLowerCase();
        console.log(r);
        let w = 1;
        for(let i=1;i<=4;i++){
            if(document.getElementById(`i`+i).checked)w=i;
        };
		document.getElementById("ans").innerHTML="";
        key[w-1].forEach((item,index)=>{
            let v = findAll(r,item);
			v = uniqueBy(v,item2=>rr.substring(item2,item2+item.length));
			document.getElementById("ans").innerHTML += "<p>";
            v.forEach((item2)=>{
                document.getElementById("ans").innerHTML += 
                    `${rr.substring(item2,item2+item.length)} `;
            });
			document.getElementById("ans").innerHTML += ((v.length)?`：${item+(w==3?(index+1):"")}`:"")+`</p>`;
        });
    };
    document.getElementById("usr-input").addEventListener("input",x);
    $('input[type=radio][name=r1]').on("change",x);
});
</script>