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
function getPara(x){
    var res="";
    x.forEach(item=>{
        res += `<h3>${item[0]}</h3>${item[1]}`
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
    }
    /*{title:"程媛", //done
        class:5,
        content:()=>{
            return getPara([
                ["简介","十七班班主任"],
                ["外号","[程主席],[cy]"],
                ["语录","[再来一遍],[两遍]"],
                ["人物关系","父亲——[卞策]"]
            ])
        }
    },
    {title:"cy", //done
        class:0,
        content:()=>{
            return getPara([
                ["真实来历","在2025运动会期间，因为年级团体操占用了间操中午和晚自习，同学们十分生气。与此同时，兄弟班团体操因为[时间紧任务重]，不得不占用下午的课。但是因为[程yuan]实在不太靠谱，导致请的老师跟[SWD]一样，令人气愤无比。又因为[程yuan]总是画[再来一遍]，最后[两遍]的大饼，于是在2025年9月16日下午，同学们趁晚上时间大骂[程yuan],并起名代号[cy]，<del>把她骂的裤衩子都崩飞了</del>"],
                ["来历","[程yuan]的第二人格，详见[南湖史]"]
            ])
        }
    },
    {title:"再来一遍", //done
        class:0,
        content:()=>{
            return getPara([
                ["背景","见[cy]"],
                ["来源","[cy]在2025年运动会期间的逆天猎奇的语录之一"],
            ])
        }
    },
    {title:"祁乌芒",
        class:5,
        content:()=>{
            return getPara([
                ["来历","一只南极来的企鹅妖，化名祁赫然来到十八班"]
            ])
        }
    },
    {title:"南湖史",
        class:4,
        content:()=>{
            return getPara([
                ["前言","话说在长春，有一片玉米地，吸收了天地之精（华），成为一处修行圣地。这里灵气充足，[埋藏浅易开采品质优](417丰富，埋藏浅，易开采，品质优)，令入向往。"]
            ]);
        }
    },
    {title:"ber传 ep1",
        class:4,
        content:()=>{
            return `
<p>班长，原名<b>「[berber]」</b> 。属于稀有人种。故事发生在一个阴森的雨天，班长正坐在窗前，就着昏暗的灯光，百无聊赖的望着窗外什么都看不见的夜。手中的[冰美式]也慢慢的被喝没了。忽然，他注意到<i>《扭腰客时报》</i>上那些早就习惯的标题：</p>
<ul>
    <li>《论：炒蒜薹究竟应该加[冰美式]还是[berber]》 <sub>By <b><code class='err'></code></b></sub></li>
    <li>《究竟几拳能打爆[DCW]》 <sub>By [☆]</sub></li>
</ul>
<p>忽然，几个大字引起了他的注意：</p>
<ul>
    <li>《[班长下台]》 <sub>By 不愿意透露姓名的[动点]</sub></li>
</ul>
<p>哦？这成功引起了他的兴趣。于是，他拿起他的大刀......削了一个苹果然后，他披上楼下超市五毛一个的不环保的环保黑色塑料袋，悄悄地出了门.....</p>
<p>天，愈发的黑了。门铃不合时宜的响了。</p>
<p><b>[Q]<sub>UEEN</sub></b>：你是哪位？</p>
<p><b>B</b>：社区，楼下住户反应你家在进行核聚变试验，请开门接受调查。</p>
<p>厚重的木门就这样被推开了。</p>
<p>当[Q]看清他之后，不禁高呼：布什 戈门？</p>
<p>然后，他就再没了一句话。利落的一刀已经左肩进，右肋出。「B」是个经验丰富的杀手，他十分清楚地知道，杀人要偿命，只有这样才能让血流淌的更快。</p>
<p>倒在血泊中的[Q]被血和雨所覆盖，再也没了生气。<p/>
<p>那晚的雨下的愈发的大，而且这场雨竟然在第二天就毫无征兆的停了。<p/>
<p>回到家的B把桌子上的苹果吃了，又翘起了二郎腿。他心中总觉得有什么事没干，算了已经报仇了，又能怎样呢？[P]回到家，看着一副人间惨剧，痛哭着说：“我会找到你的！”</p>
<a onclick="update()">To be continued.</a>`;
        }
    }*/
];