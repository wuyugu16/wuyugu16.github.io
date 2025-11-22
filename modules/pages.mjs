export function getPage(x){
    var res="";
    x.forEach(item=>{
        if(item[1])
            res += `<h3>${item[0]}</h3>${item[1]}`;
    });
    return res;
}