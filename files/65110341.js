import http from "k6/http";
import { parseHTML } from "k6/html";

export default function() {
    const res = http.get("https://top-tuning.ru/"); 
    const doc = parseHTML(res.body); 
    const pageTitle = doc.find('head title').text(); 
    const langAttr = doc.find('html').attr('lang');
    doc.find("img").toArray().forEach(function (idx) {
        console.log(idx.attr("src"));
    });
}
