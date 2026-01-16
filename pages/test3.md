

```cpp lines=5-5 line-numbers
#include<bits/stdc++.h>
using namespace std;

int main(){
  ios :: sync_with_stdio(false);    // 注意！！！Attention!!!
  int a, b;
  cin >> a >> b;
  cout << a + b << endl;
  return 0;
}
```

::cute-table

|测试点|$n$       |$m$       |特殊性质|
|:-:|:--------:|:--------:|:--:|
|1  |$\le 10$  |$\le 10$  |无   |
|2  |^         |^         |无   |
|3  |^         |^         |无   |
|4  |$\le 3\times 10^5$|^         |无   |
|5  |^         |^         |无   |
|6  |^         |$\le 3\times 10^5$|无   |
|7  |^         |^         |无   |
|8  |^         |^         |无   |
|9  |^         |^         |无   |
|10 |^         |^         |无   |

：：

## 更像 Tuack 的表格

::cute-table{tuack}

| 测试点编号 | $n, m \leq$ | $k \leq$ | 特殊性质 |
| :-: | :-: | :-: | :-: |
| $1, 2$ | $6$ | $6$ | C |
| $3 \sim 5$ | $10^3$ | $10^3$ | ^ |
| $6 \sim 8$ | $5 \times 10^4$ | $10^2$ | 无 |
| $9, 10$ | $10^5$ | $10^5$ | AB |
| $11, 12$ | ^ | ^ | A |
| $13 \sim 15$ | ^ | ^ | C |
| $16 \sim 18$ | ^ | ^ | 无 |
| $19, 20$ | $3 \times 10^5$ | $2.5 \times 10^5$ | ^ |


## 排版


:::align{center}


![](https://cdn.luogu.com.cn/upload/usericon/1.png)


## 我是居中

:::

:::align{right}


### 我是右居中

:::

## CF 风格 epigraph

:::epigraph[——otto]
大家好啊，我是说的道理，今天来点大家想看的东西。
:::

## 折叠框

::::info[我是标题]
大家好啊，我是说的道理，今天来点大家想看的东西。
::::

::::info[我是默认展开的折叠框]{open}
使用 `{open}` 使折叠框默认展开。
::::

::::::warning[我是警告]

:::::warning[不要]

::::warning[滥用]

:::warning[嵌套]
不然会被 chen_zhe 封号！！！！！
:::
::::
:::::
::::::

::::success[$\displaystyle\sum_{i = 1}^n \sum_{j = 1}^n \gcd(i, j)$]
数学公式也是可以出现在标题上的。
::::


