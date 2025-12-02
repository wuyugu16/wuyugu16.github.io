export const funConnections = [
    ["swd","suoweide"]
];

export const Utterance = [
    ["01","swd"],
    ["01","swd"]
];

export const NickName = [
    ["01","swd"],
    ["01","swd"]
];

funConnections.forEach(item=>{
    item[0] = "Fun."+item[0];
    item[1] = "Fun."+item[1];
});
Utterance.forEach(item=>{
    item[0] = "Person."+item[0];
    item[1] = "Fun."+item[1];
});
NickName.forEach(item=>{
    item[0] = "Person."+item[0];
    item[1] = "Fun."+item[1];
});