import { personList } from "./person.basic.mjs";
const NickName = [
    {belong:"01",name:"..."},
    {belong:"01",name:"..."}
];
export var personNickname = {};
Object.keys(personList).forEach((item)=>{
    personNickname[item] = [];
});
NickName.forEach(item=>{
    personNickname[item.belong].push(item.name);
});