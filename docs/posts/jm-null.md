---
date: 2026-02-27
category: fun
tag:
  - 解密
---


# NULL

## 题目背景

C在得知了wuyugu把自己编成题目后，来某个城市追杀wuyugu

## 题目描述

C联合他的朋友——小A同学（名字忘了）来到（116.36°E，37.43°N），在wuyugu小区门前看见一个垂杨柳。C把它拔出来，可没想到着柳树竟是E变得。E施展法术，C十分惊慌，~上道跑了个200~于是留下一个香蕉皮走了  
话说若干年后，C射下一个太阳，做成烤猪排，吃了一口，唇齿留香。E大怒，把C骂的细胞都质壁分离了。  
C不知道，wuyugu其实根本不在家，（未完待续）

## 输入格式

可恶的C

## 输出格式

哈哈哈

## 说明/提示

1. 本题难度极高，~只为折磨人~，保证你的心态
[](输出Alice所在的城市——██市)

## 评测模拟
<input id="usr-in" type="text">
<div id="detail"></div>


<script setup>
import { onMounted } from 'vue';
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
onMounted(() => {
	document.getElementById("usr-in").addEventListener("input", event => {
		let U = document.getElementById("usr-in").value;
		if (U == "德州市" || U == "德州")
			quitf(Rn(126), [
				"Hello 6",
				"3猜猜哪个",
				"1是duide?",
				"5",
				"7",
				"8输入A的朋友！",
				"2",
				"4",
			]);
		else if (U == "Candy")
			quitf(_wa, [
				"哈哈哈",
				"你在期待什么",
				"Never gonna give you up!",
				"不要看了",
				"这道题没有剧情",
				"只有三个栅栏",
				"Tki84_2hes9do@ey53ho@",
				"Twlibeoeoiarnhodlesrdrlps@erwldty,kleo@",
			]);
		else if (U == "86")
			quitf(
				_fail,
				L("Name:True0~9 Error:(r,c) is swap!longest path length")
			);
		else if (
			U.startsWith("True") &&
			U.length == 5 &&
			"0123456789".includes(U[4])
		) {
			let r = +U[4];
			let maze =
				"######### " +
				"#   #   # " +
				"### ### # " +
				"#     # # " +
				"# ##### # " +
				"#       # " +
				"######### " +
				"##########";
			quitf(
				Array.from({length: 8}, (_, index) =>
					maze[index * 8 + r] == " " ? WA : UKE
				),
				L("Try 189d_2ur")
			);
		} else if (U == "6845721")
			quitf(_wa, [
				"哈哈哈，加油，只剩一点点了",
				"我相信你还获得了另一个数",
				"0D87FBCB22B5F8B076A8（恭喜！）",
				"22CE143E0D0BE02892D9",
				"如果有的话",
				"逆元，启动！",
				"([]+![])[+[]+!![]]([]+[][[]])[+[]",
				"+!![]]（加上那个X进制的东西 x!=10）",
			]);
		else if (U == "21")
			quitf(_wa, [
				"这个世界的数学不对劲",
				"逆元必须加上???????！",
				"g(looq",
				"哈哈哈哈哈哈，你会成功的！",
				"哈哈哈哈哈哈[异常]",
				"wrong Answer",
				"WrOng Answer",
				"Wrong AnsWer <原题中，你的个测试点得分分别为：1,9,1,9,8,1,0,0>",
			]);
		else if (U == "4793291310")
			quitf(Rn(137), [
				'D+"muRXgAa.0tG%@LY#|CG_VBYe6B', //11000001
				'D+"muRXg[,G1ro,@LY#|CG_VC*~bAG', //11110000
				'|D!fl/Ey"=Bju$*1zYH<p/A', //00011101
				"ja+fK:*HwS", //01101001
				"Do you love diff? diff=1,same=0",
				"加上这个数字",
				"瞪大眼！（我去，这么快！）",
				"Nothing[base=11]",
			]);
		else if (U == "A000055")
			quitf(_wa, [
				"输入/Life%%d/获得小研究(0-9) ",
				"  have col.I like green(bushi",
				"(144,156,77) #603148 (140,0.843,0.549) ",
				"友善爱国爱国诚信富强诚信自由诚信民主富强友善",
				"爱国平等友善平等友善爱国敬业法治诚信自由平等",
				"爱国诚信平等友善自由友善平等诚信自由自由友善",
				"平等爱国爱国友善自由公正自由公正公正公正公正",
				"公正自由富强诚信富强mashangjiuOK了",
			]);
		else if (U == "#603148dffd")
			quitf(_fail, L("秘钥114 is what?I don't know"));
		else if (U == "an13a")
			quitf(
				_fail,
				L(
					"秘文114 i（Tip:无视！）psdhhtbkwfbczwjooaushgrinkofccwgzoaaiko"
				)
			);
		else if (U == "hahahathisismingwensoyouaresogoodhahaha")
			quitf(_wa, L("在原根后加上555574757766，题目马上END"));
		else if (
			U.startsWith("Life") &&
			U.length == 5 &&
			"0123456789".includes(U[4])
		) {
			let r = +U[4];
			let maze =
				"### ######" +
				"# ## #   #" +
				"### # # # " +
				"   #  # ##" +
				"# ## ## # " +
				"#   # #   " +
				"###  ## ##" +
				"# #### # #";
			quitf(
				Array.from({length: 8}, (_, index) =>
					maze[index * 10 + r] == " " ? WA : UKE
				),
				L("剩下几-1005个细胞？")
			);
		} else if (U == "11--<=?6") quitf(_fail, L("Loop0:Gap3"));
		else if (U == "3783998") quitf(_fail, L("Loop1:__mop"));
		else if (U == "189d_2ur58934dh_oo2")
			quitf(_fail, L("Loop2:G[64]_last"));
		else if (U == "1015") quitf(_fail, L("Loop3:Wood*1"));
		else if (U == "Gap3__mopG[64]_lastWood*1")
			quitf(_ok, L("ACACACACACACAC"));
		else quitf(Rn(211), L("没什么重要的"));
	});
});

</script>
