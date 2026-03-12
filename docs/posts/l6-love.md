---
date: 2026-2-27
category: passage
hide: true
---
# 无意义表格
<style>

    .rhead {
        margin: -2px 0px;
        font-size: 9px;
    }
    .chead {
        margin: 0px 0.12px;
        font-size: 9px;
    }
    .info-bar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
      padding: 0 4px;
      color: #1f2328;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 0.2px;
    }

    .info-bar span:first-child {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .badge {
      background: #e6edf3;
      padding: 4px 10px;
      border-radius: 30px;
      font-size: 13px;
      font-weight: 500;
      color: #1f2328;
    }
    .heatmap {
      display: inline-flex;
      flex-direction: column;
      gap: 2px;
      background: transparent;
      border-radius: 12px;
      max-width: 100%;
      padding: 4px 0;
    }
    .row {
      display: flex;
      flex-direction: row;
      gap: 2px;
      flex-wrap: nowrap;
    }
    .cell {
      flex: 0 0 auto;
      width: 10px;
      height: 10px;
      border-radius: 3px;
    }

    .cell:hover {
      transform: scale(2);
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
      z-index: 5;
    }

    .legend {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 16px;
      margin-top: 20px;
      padding-right: 8px;
      font-size: 12px;
      color: #57606a;
    }

    .legend-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .legend-swatch {
      width: 14px;
      height: 14px;
      border-radius: 4px;
      background-color: currentColor;
    }

    .legend-swatch.level0 { background-color: #ebedf0; }
    .legend-swatch.level1 { background-color: #9be9a8; }
    .legend-swatch.level2 { background-color: #40c463; }
    .legend-swatch.level3 { background-color: #30a14e; }
</style>

<div id="app">
    <div class="heatmap">
    <div class="row">
        <p style="margin-right:7px;"></p>
        <span class="chead"
            v-for="(val, colIdx) in Array.from({length:50})" 
            v-html="(colIdx+1+'').padStart(2,'0')">
        </span>
    </div>
    <div v-for="(row, rowIdx) in grid" :key="rowIdx" class="row">
        <p class="rhead" v-html="(rowIdx+1+'').padStart(2,'0')"></p>
        <div v-for="(val, colIdx) in row" :key="colIdx" class="cell"
            :style="{ backgroundColor: getColor(val) }"
            :title="val?
                `${(rowIdx+1+'').padStart(2,'0')}2${(colIdx+1+'').padStart(2,'0')}`
            :``">
        </div>
    </div>
    </div>
    <div class="legend">
        <div class="legend-item"><span class="legend-swatch level0"></span>毫无关系</div>
        <div class="legend-item"><span class="legend-swatch level1"></span>硬扯</div>
        <div class="legend-item"><span class="legend-swatch level2"></span>还有点道理</div>
        <div class="legend-item"><span class="legend-swatch level3"></span>较为流行</div>
    </div>
</div>

<script setup>
var grid = [];
for(let i=0;i<50;i++){
    grid.push(Array(50).fill(0));
}
const add = function(r,c,h){
    grid[r-1][c-1]=Math.max(h,grid[r-1][c-1]);
};
add(18,39,3);
add(23,4,3);
add(19,42,3);
add(34,30,3);
add(39,29,3);
add(6,48,3);
add(8,48,3);
add(9,30,3);
add(14,12,3);
add(20,33,3);
add(29,30,3);
//add(*2,*8,3);
//add(*5,*9,3);

add(7,3,2);
add(19,5,2);
add(9,4,2);
add(16,11,2);
add(14,19,2);
add(19,14,2);
add(17,41,2);
add(19,27,2);
add(19,25,2);
add(19,21,2);
add(28,50,2);
add(19,22,2);
add(45,27,3);
add(45,21,2);

for(let i=1;i<=50;i++){
    add(i,i,3);
    add(i,48,1);//08 2 48 = 0(nobody) 82 48
}
add(39,4,1);//yundonghui guangbo 392 417
add(1,2,1);
add(2,1,1);
add(3,4,1);
add(4,3,1);
add(16,7,1);
add(17,8,1);
add(10,50,1);
add(13,28,1);
add(28,13,1);
add(15,43,1);
add(43,15,1);
add(40,31,1);
//cheng fa kou jue(?)
add(37,11,1);
add(46,14,1);
add(38,14,1);
add(39,17,1);
add(47,18,1);
add(9,21,1);
add(21,9,1);
[1,2,3,4,12,13,21,22,25,27,30,31,32,35,37,39,40,41,42,43,46,47,48]
.forEach(item=>{
    add(19,item,1)
})

var x = [18,34,23,19,45,29]
x.forEach(i1=>{
    x.forEach(i2=>{
        add(i1,i2,2);
    })
})

add(18,29,2);
add(45,27,3);
add(19,22,2);

add(19,16,1);
add(19,29,2);
add(18,29,2);
add(18,34,2);
add(23,18,2);
add(16,18,1);
add(19,10,2);
add(19,45,3)
//————18 & me

add(23,28,1);
add(23,45,2);
add(23,19,2);
add(23,18,2);
add(23,15,2);
add(23,34,2);
add(23,29,2);
add(23,31,2);

add(29,28,2);
add(29,28,2);
add(29,28,2);
add(29,28,2);
add(29,28,2);
add(29,28,2);
add(29,28,2);
add(29,28,2);

const getColor = (value) => {
    switch (value) {
        case 0: return '#ebedf0'; // 最浅
        case 1: return '#9be9a8'; // 浅绿
        case 2: return '#40c463'; // 中绿
        case 3: return '#30a14e'; // 深绿
        default: return '#ebedf0';
    }
};
</script>