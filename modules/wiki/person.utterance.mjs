import { personList } from "./person.basic.mjs";
const Utterance = [
    {belong:"01",name:"..."},
    {belong:"01",name:"..."}
];
export var personUtterance = {};
Object.keys(personList).forEach((item)=>{
    personUtterance[item] = [];
})
Utterance.forEach(item=>{
    personUtterance[item.belong].push(item.name);
})