---
date: 2026-02-27
category: fun
tag:
  - 解密
---


# undefined

## 题目背景

从前，C和X快乐的生活着，直到...

## 题目描述

> 病人C疑似有精神类疾病，需住院两个月进行治疗\
>“他在哪”\
>“不要在讨论那个没有意义的人了，吃药！”\
>“我问，他在哪，听见了吗！在████年██月█日失踪的人！”\
>“那个人根本不存在！吃药”\
>...\
>“今天的药格外的苦，为什么呢？”
>
> ——病人C在████年██月█日失踪，正好是其口中丈夫失踪的那一天？
> 
> ——等会，有C这个人吗？

## 输入格式

没有什么可输入的，毕竟██早就迷失在混乱的时空当中

## 输出格式

或者说？

## 说明/提示

1. 所有信息，包括算法标签都十分甚至九分地重要
2. 猜猜为什么是SPJ
3. 剧情并不十分重要
4. 不要什么也不输出，会全 **`WA`**

$\color{WHITE} 5. 尝试输出587385 $
## 评测模拟
<input id="usr-in" type="text">
<div id="detail"></div>


<script setup>
import $ from "jquery"
let quitf = (x, y) => {
	document.getElementById("detail").innerHTML = "";
	y.forEach((item, index) => {
		document.getElementById("detail").innerHTML += `<p>#${index + 1} ${
			x[index]
		}，评测信息：${item}</p>`;
	});
};
let WA = "<b style='color:#E74C3C'>WA</b>";
let UKE = "<b style='color:#0E1D69'>UKE</b>";
let AC = "<b style='color:#52C41A'>AC</b>";
let L = x => Array(8).fill(x);
let _wa = L(WA);
let _ok = L(AC);
let _fail = L(UKE);
let Rn = n =>
	[...Array(8)].map((_, i) => (((n & 0xff) >> (7 - i)) & 1 ? UKE : WA));
$(function(){
	document.getElementById("usr-in").addEventListener("input", event => {
        let U = document.getElementById("usr-in").value;
        if(U=="587385")quitf(Rn(65),[
            "所以我又能干什么呢？",
            "他们都说X不存在",
            "像是在我生日那一天...",
            "被抹去了",
            "他是那么真实，",
            "我还记得他尝尝念叨这3840129和陌上8开",
            "说是对他有重大意义",
            "具体什么意义，他也忘了"
        ]);
        else if(U=="65")quitf(Rn(50),[
            "int main(){",
            "unsigned char T[256]={0},j=65,k=72;",
            "//65和72是███的关键，通过他们计算出秘钥",
            "for(int i=0;i<256;i++)T[i]=i;",
            "for(int i=0;i<256;i++){",
            "swap(T[j],T[i]);j=T[k];",
            "swap(T[T[i]^k],T[j^i]);k=T[i]^j;",
            "}return 0;}//answer is T[72]<<8 | $$$"
        ]);
        else if(U=="50")quitf(_wa,L("人们发现$=16.66666666[精度丢失]"));
        else if(U=="72")quitf(Rn(50),[
            "我们全家一致认为，accoders是史上最好的网站！",
            "第一个亿万年过去了，我忘记了颜色",
            "第二个亿万年过去了，我忘记了光亮",
            "第三个亿万年过去了，我忘记了声音",
            "我的生日是3/15 5/16 10/2 12/31 10/15 4/2中的一个？我曾这么写过",
            "第五个亿万年过去了，我忘记了名字",
            "第六个亿万年过去了，我早已忘记一切",
            "第七个亿万年过去了，一切都是█，全同粒子是真的！"
        ]);
        else if(U=="33074")quitf(_wa,[
            "5a+G56CB5YiG5Li65Lik6",
            "YOo5YiG44CC56ys5LiA5",
            "q615piv5oiR5pyA5Zac5q",
            "yi572R56uZ55qESVDv",
            "vIznrKzkuozpg6jliIb",
            "mmK/lpLHouKrnmoTml6Xmn",
            "J/mnIjku73nmoTpmYzkuI",
            "rilojilojpgIblhYM="
        ]);
        else if(U=="4793291310")quitf(_ok,[
            "我在各个时间线跳跃",
            "知道稳定停在X上",
            "我遇见了小时候的自己",
            "后来的后来，我忘却了一切。",
            "我现在是个医生，今天来了个奇怪的人",
            "一直在说她那不存在的丈夫",
            "我问那个不存在的人是谁",
            "她说，X"
        ]);
        else if(U=="3840129")quitf(_wa,[
            "从实验",
            "无法传", 
            "多信息",
            "[中断]",
            "祝安康",
            "时空乱",
            "信医生",
            "[中断]"
        ]);
        else quitf(_fail,L("Unknow Error"));
	});
});

</script>
