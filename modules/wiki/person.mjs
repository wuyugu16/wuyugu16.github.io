import { personList } from "./person.basic.mjs";
import { personIntroduction } from "./person.introduction.mjs";
import { personNickname } from "./person.nickname.mjs";
import { personUtterance } from "./person.utterance.mjs";
import { getPage } from "../pages.mjs";
export var personPages = {};
Object.keys(personList).forEach((item)=>{
    var utt = personUtterance[item].map(x=>`[${x}]`).join(",");
    var nck = personNickname[item].map(x=>`[${x}]`).join(",");
    personPages["Person."+item] = {
        content : getPage([
            ["简介",personIntroduction[item]],
            ["语录",utt],
            ["外号",nck],
            ["相关梗",""],
            ["相关页面",""]
        ]),
        title : personList[item],
        class : 5
    };
})