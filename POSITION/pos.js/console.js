//?CLIENTWIDTH/CLIENTHEIGHT WINDOW BROWSER
const html = document.documentElement;
let cltWht = document.documentElement.clientWidth;
let cltHdt = document.documentElement.clientHeight;
console.log(cltWht, cltHdt); //client size
console.log(window.innerWidth, window.innerHeight); //whit scroll size
console.log(html.scrollWidth, html.scrollHeight, html.offsetHeight);
html.offsetHeight; // безпосередньо в консолі дає правильний результат
console.log(html.offsetHeight); // вводить неправильний результат
let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
console.log(scrollHeight);
// document.body.style.overflow = "hidden";noscrlollOFF
document.body.style.overflow = ""; //scrlollON
//?WIDTH/HEIGHT ELEMENT'S
let elCltWdt = document.querySelector("#logoB");
// elCltWdt.style.width = "555px";
console.log(elCltWdt.clientWidth);
console.log(elCltWdt.scrollTop);
console.log(elCltWdt.scrollLeft);
console.log(elCltWdt.scrollWidth); // z paddingamy/marginamy
console.log(elCltWdt.scrollHeight); // z paddingamy/marginamy
console.log(elCltWdt.offsetHeight);
console.log(elCltWdt.offsetHeight);
// elCltWdt.scrollLeft +=50;
// setInterval(function(){
//   console.log(elCltWdt.scrollTop,elCltWdt.scrollLeft,elCltWdt.scrollWidth,elCltWdt.scrollHeight);
// },1000);
// console.log("jj");
// var clgC = 23;
// console.log(clgC);
// console.log(clgC);
// let read = 44;
// console.log(read);
// const readError = "readerrror";
// console.log(readError);

// some = 3.14;
// some = true;
// function showPrimes(n) {
//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i); // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if (n % i == 0) return false;
//   }
//   return true;
// }
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   }
//   // ...
//   return confirm("Родители разрешили?");
// }
// checkAge();

// function sum(...rest) {
//   let sum = 0;
//   for (let arg of rest) sum += arg;
//   return sum;
// }
// let r = sum(1.3, 2.3, 6);
// document.getElementById("dom").innerText = "gggggggg";
//?ANONIMOUS FUNCTION
(function () {
  console.log("text this is anonymFunction");
})(); //callFunction
let anmFnc = (function () {
  console.log("anmFnc");
})();
// let anmFncArrow = () => console.log("anmFncArrow");
// anmFncArrow();
// let anmFncArrow = () => "anmFncArrow =>replace operator 'return'";
// console.log(anmFncArrow());
// let anmFncArrow = () => 2 + 3;
// console.log(anmFncArrow());
let anmFncArrow = () => {
  //somebody expression;let,parameters,arguments...
  return 2 + 5;
};
console.log(anmFncArrow());
let arrFnc = (aRfcA, aRfcB) => aRfcA == aRfcB;
// console.log(arrFnc(1, 2));
console.log(arrFnc(true, false));

// alert(anmFncArrow);?
// setTimeout(function () {
//   console.log("setinterval");
// }, 1000);??????
//?no-name/BEZIMENNA FUNCTION
let nOnameF = function () {
  nOnameF = NaN;
  console.log(typeof nOnameF);
};
nOnameF("t");
let sPaNms = (par, parB, parC) => par + parB + parC;

sPaNms(7, 8, 9);
console.log(sPaNms(1, 2, 3)); //? !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// alert(sPaNms(2, 3, 4));
sPaNms++;
////sPaNms.call(this);
// ?FUNCTION CALLBACK
function ask(question, yep, no) {
  if (confirm(question)) yep();
  else no();
}
function dadada() {
  alert("dddddaaaaa");
}
function nenene() {
  alert("nenenenen");
}
// ask("co movish??",dadada,nenene);
//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM//?DOM
// ?Принцип Батьківство-спадковості/наслідування DOM-елементів дочірні':PARENT-CHILD
// domCollection
// HTMLCollection;
// HTMLAllCollection;

let pointOfEnterElemLink = document;
console.log(pointOfEnterElemLink);
let allCollectionPseudoArr = document.children;
console.log(allCollectionPseudoArr);
console.log(document.children);
console.log(document);
console.log(document.firstChild);
console.log(document.firstElementChild);
console.log(document.lastElementChild);
console.log(document.lastChild);
console.dir(document.lastChild);
document.body.firstChild.nextSibling;
document.body.firstChild.nextElementSibling.attributes;
document.body.firstChild.nextElementSibling.children;
// ?Принцип Батьківство-спадковості/наслідування HTML-елементів дочірні':PARENT-CHILD
let parentChildOne = document.querySelector("body");
// let parentChildOne = document.querySelector("body");
let varOutLink = parentChildOne.children[0];
// let varOutLink = parentChildOne.childNodes[1];
console.log(varOutLink);
let parentChild = document.querySelectorAll(
  //?querySelector('SELECTED ONLY FIRST ELEMENT OF LIST')
  "main.main.center>div.logo>img:last-child" //? .!!!!!!!!!!!!
); //out collection/nodeList,();{;//out link on domElement/TAG}

console.log(parentChild); //out NodeList
{
  for (let ptChld of parentChild) console.log(ptChld);
}
//?DOM/BOM:DOCUMENT OBJECT MODEL ,BROWSER  OBJECT MODEL....
document.firstChild;
let domCollection = document.childNodes;
// document.head.childNodes[7].nodeName
// document.head.childNodes[7].nodeValue
// document.head.childNodes[7].textContent
// document.head.childNodes[7].data
console.log(domCollection[1]);
console.dir(domCollection);
document.documentElement;
// base for FIND ELEMENT (LINK,(NOT COLLECTION))
document.body.firstChild.nextElementSibling.children.textContent;
document.body.firstChild.nextElementSibling.children.outerHTML;
// document.scripts v konci pered body
console.log(window.innerWidth);
console.log(window.innerHeight);
document.head.style.backgroundAttachment = "fixed";
console.log(navigator.userAgent);
console.log(navigator.platform + " @deprecated – Бо застарий");
//?DOM-TREE-(BROWSER) ELEMENTs-NODEs
console.log(document.childNodes);
for (const allChildNodes of document.body.childNodes) {
  console.log(allChildNodes);
}
// for (const allChildNodes in document.body.childNodes) {
//   console.log(allChildNodes);
// }
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);
console.log(document.body.firstChild);
console.log(document.body.lastChild);
console.log(document.body.hasChildNodes());
console.log(document.childNodes.length);
/////document.childNodes[0]=document.childNodes[1]
///console.log(document.body.childNodes[0].children[0]); out HTML-collection less #text
console.log(document.body.childNodes[0].childNodes[0]);
console.log(document.body.childNodes[1].childNodes[1].childNodes[0]);
console.log(
  document.body.childNodes[1].childNodes[3].childNodes[5].childNodes[0]
);
//?(DEV-TOOLS)console.log(document.body.childNodes[2].childNodes[3].childNodes[5].childNodes[0]);
console.log(document.body.childNodes[7]);
console.log(document.children);
console.log(document.body.children[1].children[0].children[0].children[0]);
console.log(document.body.previousElementSibling);
console.log(document.body.previousSibling);
console.log(document.head.firstElementChild);
console.log(document.body.lastElementChild);
console.log(document.body.parentNode);
console.log(document.body.prpElNode);
//ID #id !!!!!!
console.log(main);
console.log(logo);
// console.log(dom);
console.log(loop);
// console.log(form);
// console.log(form2);
// console.log(object.name=Objjject);
//?QUERY-SELECTOR-ALL-GET TO ELEMENT
for (const qSa of document.querySelectorAll("title")) {
  console.log(qSa);
}
for (const qSA of document.querySelectorAll("body")) {
  console.log(qSA);
}
for (let returnsastaticnotlive of document.body.querySelectorAll("div>h1")) {
  console.log(returnsastaticnotlive);
  returnsastaticnotlive.innerHTML = "notLive";
}
let qSB = (document.querySelectorAll("a").innerHTML = "qas");
qSB.innerHTML = "1.4";
let gEt = document.getElementsByTagName("ul");
// let gEt = (document.getElementsByTagName("ul").innerHTML = "ChangeElement");
for (let gE of document.getElementsByTagName("ul")) {
  // gE.innerHTML = "CHANGE-UL";
  console.log(gE);
}
let qsONE = document.querySelector("img");
console.log(qsONE);
// let qsAll = document.querySelectorAll("ul>li");
// console.log(qsAll[2]);
document.querySelector("ul>li+li+li").innerHTML = gEt;
let outSom = "";
for (let i = 0; i < gEt.length; i++) {
  outSom += gEt[i];
}
//?matches/closest-method+qSA/ хуйня короче Непонятнa
// let selectMatches = document.querySelectorAll("ul.list>li.lili");
// let selectMatches = document.querySelectorAll("li");
// let selectMatches = document.querySelectorAll("li.lili")pwdlsa;
let selectMatches = document.querySelectorAll("ul.list>li.lili3");
for (let mtcs of selectMatches) {
  // if (mtcs.matches("li.lili2")) console.log(mtcs);
  console.log(mtcs);
  console.log(selectMatches);
}
// let mtcS = document.querySelectorAll("ul>li.clsli");
// let mtcS = document.querySelectorAll("p.matches");
// let mtcS = document.querySelectorAll("ul>li");
// let mtcS = document.querySelectorAll("div>p");
let mtcS = document.querySelectorAll("div>p.matches");
// //let mtcS = document.querySelectorAll("p.matches>ul");
////let mtcS = document.querySelectorAll("p.matches>ul>li");
////let mtcS = document.querySelectorAll("p.matches>ul");
// for (let linkMtcs of mtcS) console.log(linkMtcs);
for (let linkMtcs of mtcS) {
  if (linkMtcs.matches("p.matches")) console.log(mtcS);
}
let clSt = document.querySelector("h1");
console.log(clSt.closest(".tabb"));
console.log(clSt.closest("div"));
let cord = document.querySelector(".cordinates");
let cordA = cord.getBoundingClientRect();
console.log(cordA);
//?embedded(вкладенність)
let embedded = document.querySelectorAll(".logo");
// let embeddedB = embedded[1].querySelectorAll('#logo');
// console.log(embeddedB);
//?DOM-properties
document.body.constructor.name;
document.body.firstElementChild.constructor.name;
document.body.firstElementChild.nodeName;
document.body.firstChild.nextSibling.nodeName;
document.body.firstChild.nextSibling.constructor.name;
////document.body.firstChild.nextElementSibling.children[1].children[1].children[1].children[0]
//?document.body.firstChild.nextElementSibling.children[1].children[1].children[1].children[0].firstChild
///?document.body.firstChild.nextElementSibling.children[1].children[1].children[1].children[0].childNodes
///?document.body.firstChild.nextElementSibling.children[1].children[1].children[1].children[0].innerHTML='CHAngeTextInnerProperty<hr>innner'
///?document.body.firstChild.nextElementSibling.children[1].children[1].children[1].children[0].innerText=''
//?outerHTML
// let outerH = document.querySelector("li");
let outerH = document.querySelectorAll("li");
console.log(outerH[2]);
let outerHb =
  document.body.firstChild.nextElementSibling.children[1].children[1]
    .children[1].children[2];
// outerHb.innerHTML = "<a>linkOuterHTML</a>";
outerHb.outerHTML =
  "<a>linkOuterHTML,,<b style='font-size: 44px;color:red;'>Хуйня якась, елемент який змінюється в DOM Не написаний в самому файлі(html)А написаний файлі(JS)"; //? Хуйня якась, елемент який змінюється в DOM неактивний на сторінці, не клікається
//?document.querySelector("a");
console.dir(outerHb);
document.documentElement.childNodes[0].firstChild.data;
let dataValue = document.documentElement.childNodes[0].childNodes[9].data;
console.log(dataValue);
let txCon = document.querySelector("#taDom");
txCon.textContent;
console.log(txCon.textContent);
let hiden = document.querySelector(".matches");
hiden.hidden = true;
// setInterval(() => (hiden.hidden = !hiden.hidden), 10000);

// console.dir(document.body);
// console.log(mtcS);
// document.querySelector("li").innerHTML = outSom;
// for (let elem of document.body.children) {
//   elem.innerHTML = "BIMBA-BOMBA";
//   console.log(elem);
// }

// console.log(document.all);
// console.log(document.HTMLAllCollection);
// for (let child of document.childNodes){
//   console.log(child);
// }
//?D.O.M.& EVENTS
let dom = "77777";
// console.log(document.body.textContent); //? не дає ввести чужий скрипт
let DOM = document.getElementsByClassName("identical");
let nodeList = document.querySelectorAll("ul").length;
// let nodListNot = document.querySelector("ul").childNodes;
let nodListNot = document.querySelector("ul").innerHTML; // = "ULLLLL";
let prpElNode = document.getElementById("main").localName;
// let prpElNode = document.getElementById("main").lastElementChild;
console.log(prpElNode.length);
console.log(nodListNot); //.length);

// //console.log(DOM);undefined (reading 'log')

// let qur = document.querySelector('identical');
let qur = document.querySelectorAll("identical").length;
//// console.log(qur); undefined (reading 'log')
let QUR = (document.querySelector("h1").innerHTML = "wwwwwwwwwwwww");
// console.info(QUR);//?undefined (reading 'info')
// console.log(QUR);//?undefined (reading 'log')
// document.getElementsByClassName("identical").style.color = blue;
// document.getElementsByClassName("identical").style.backgroundColor = red;
// document.getElementsByClassName("identical").innerHTML = "dom";
let cls = document.getElementsByClassName("section");
// console.log(cls); // ?показує помилку виводу
const coll = document.querySelector("a");
let calla = (document.getElementById("loop").innerHTML = "WTF");
let callb = document.getElementById("main");
let collCl = document.getElementsByClassName("main"); //out collCl.main.childNodes
let notListlink = (collCl.main.childNodes.innerHTML = "HTML collection");
let lup = document.getElementById("loop");
document.getElementById("loop").style.color = "blue";
////lup = this;
// document.getElementById("loop").title = confirm;
let txtCont = document.querySelector("header");
// txtCont.textContent = "somm<br>MMMMMMMMMM";
// txtCont.innerHTML = "somm<br>MMMM<span style=color:blue;font-size:4em;>   MMMMMM</span>";
let lis = document.getElementsByClassName("list");
for (let i = 0; i < lis; i++) {
  console.log(lis[i].innerHTML);
}
// ? без масиву клас і тег не виводяться
// let lis = document.querySelector("list");
let jj = "text";
// alert(jj);
console.log(jj);
//?HTML COLLECTION querySelectorAll
// document.querySelector('');
let getTag = document.getElementsByTagName("p");
let getClass = document.getElementsByClassName("footer_h");
let getClass1 = document.getElementsByClassName("footer_includes");
let getClass2 = document.getElementsByClassName("footer_k");
let getClass3 = document.getElementsByClassName("footer_l");
getTag.valueOf("jjjjjjj");
getClass[0].innerHTML = "<h1>bingo-bongo</h1>";
// getTag[5].innerHTML = getClass3;
// getTag[5].innerHTML = "<h2>bingo-bongo</h2";
// getTag.length;
getTag.item;
getTag.namedItem;
// let collection = document.getElementsByTagName("*");
// let koll = "";
// for (i = 0; i < collection.length; i++) {
//   // console.log(koll);
//   koll += collection[i].tagName + "<br>";
// }
// let eliID = document.getElementById("main").childNodes;
let eliID = document.getElementById("main");
let eliTag = eliID.getElementsByTagName("q");
document.getElementsByTagName("p");
// document.querySelector("p").innerHTML = koll;
let hColl = document.getElementsByClassName("footer");
for (let i = 0; i < hColl.length; i++) {
  hColl[i].style.fontSize = "25px";
  hColl[i].style.border = "thick solid #40ff00";
  ////hColl[i].style.color = "#07ff60";
  hColl[i].style.backgroundColor = "#7ff";
}
const OBJET = {
  keyFirst: "John",
  secondKey: "Dou",
  treKey: 123,
  inFcKey: "someFcValue",
  finKey: function () {
    // return this.inFcKey + " thisValue is<br> not variable" + this.keyFirst;
    return this;
  },
};
document.getElementById("thiS").innerHTML = "UPPPPERRRR";
document.getElementById("thiS").style.color = "#f9f";
document.getElementById("thiS").innerHTML = OBJET.finKey();
document.querySelector("q").style.fontSize = "45px";
function checkForm(ell) {
  // return OBJET;
  // let fname = (document.getElementById("fname").innerHTML = "hhhhhhhhhh");
  let fname = document.getElementById("fname").value;
  // let fname = (document.getElementById("fname").style.fontSize = "55px");
  console.log(fname);
}
function outForm() {
  let outFo = document.getElementById("sname").value;
  // let outFo = (document.getElementById("sname").style.fontSize = "77px");
  console.log(outFo);
}
// const name = input("hhhhh");
// print(f`hello {name}`);
function decl() {}
let assignExpression = function () {
  alert("function=!expression+=1");
};
console.log(assignExpression);
// alert(assignExpression);
function eXp() {
  alert("expr");
}
// alert(eXp);
// eXp();
let copyAsig = eXp;
console.log(copyAsig);
// alert(copyAsig);
// callFcDc("Cal for declaration");
// function callFcDc(parametrVar) {
//   console.log(`text + ${parametrVar}`);
// }
////callFcDc("Assign ");
let callFcDc = function (parametrVar) {
  console.log(`text + ${parametrVar}`);
};
// callFcDc("Assign ");
document.getElementById("bold").style.border = "10px solid #11ff";
let szhet = 0;
function bold(txis) {
  // document.write("ffffff");
  document.getElementById("bold").style.border = "10px solid";
  szhet++;
  txis.innerHTML = szhet;
  console.log(szhet);
  // return 4;
}
function onClk() {
  // let pop = document.getElementsByTagName("p").length;
  let pop = document.getElementsByTagName("p");
  for (i = 0; i < 2; i++) {
    console.log(+i);
    console.log(pop);
    // console.log(i);
    // console.log(pop[9]);
    pop[9].innerHTML = "blue";
  }
  // console.log('move');
  // document.write("DOCUMENT WRITE");
  //// document.write();
}
let counter = 0.3;
document.getElementById("up").onclick = function (This) {
  // document.getElementById("up").style.color = "red";
  // let counter = 0;
  counter++;
  // this.innerHTML = counter;
  ////This.innerHTML = this + counter;
  ////This.innerHTML.style.color = "red";
  // console.log("OK ONCLICK");
  // console.log(This);
  // console.log(this);
};
function hash(ar, par) {
  counter++;
  ar.innerHTML = "teXxXxXxXxXt" + counter;
  ar.style.color = par; //color (for/by way of) parametr
  ar.style.fontSize = "77px"; //style sample
  ar.style.cssText = "background:green;border:11px solid;";
  ar.style.color = "#1f3f22";
  ////ar.getElementById("dom").length = atribute;
  //// console.log(atribute);
  ar.onclick;
  console.log(ar.onclick);
  console.log(ar.value++);
  console.log(event.currentTarget.tagName);
}
function onMous(oM) {
  console.log(oM.value);
}
let ipt = 14;
function foInpt(ipt) {
  if (ipt.value < 2) {
    alert("OK");
  } else {
    console.log("NEOK");
  }
  console.log(ipt.value);
  ////console.log(ipt.length);
}
//EVENT focus //?addEventListener(метод який видає, за допомогою якого можна процепити багато подій на 1 елемент)
//?element.addEventListener('type:onclick...etc', listener/handler:function(), options:once,capture,passive(true/false))
function onBlur() {
  // alert("??????WORK EVENT LISTENER");
  console.log("DomContentloaded");
}
onBlur();
document.addEventListener("DOMContentLoaded", function () {
  console.log(`${logo}*${logoD}*${rating__star_star1}`);
  console.log("?????Dom3budovano????,DOMContentLoaded/event???");
});
document.addEventListener("DOMContentLoaded", onBlur);
// let onFcs = document.forms.form2.children[14];
// let onFcs = document.forms.form2.taDom;
let onFcs = document.forms.form2[8];
onFcs.onfocus = function () {
  console.log("working.focus");
};
let onBlr = document.forms.form2[8];
onBlr.onblur = function () {
  console.log("focus off");
};
onFcs.addEventListener("focusin", function () {
  console.log("focusin works");
});
let foc = document.forms.form2.ei;
foc.focus(); // В деяких браузерах не працюють та при alertах
cardId.onfocus = function () {
  console.log("div FOCUS Onnnnnnnn");
};
cardId.tabIndex = 1;
let whoElFocus = document.activeElement;

//?FORM LISTENER/READING;EVENTS-BROWSER("on-click/on-event'html,js.dom'...") ABO zareestruvwaty Yak addEventListener(METHOD's) v rezymi OCHIKUWANNYA!!!;JavaScript Event Handlers(code function(template) e.t.c.)
let bTnn = document.querySelector(".btn");
// bTnn.onclick = btnn;
// btnn(event);
function btnn() {
  alert(this.tagName);
}
console.log(document.forms);
let readForm = document.forms[0];
let frm2 = document.forms[1].children[2];
console.log(readForm.elements);
let fEl = readForm.elements[2];
console.dir(fEl);
console.log(readForm[2]);
console.log(document.forms[0][9]);
const listForm = document.forms;
let oBject = document.Objjject;
////let docIdEl = document.sname;
console.log(sname);
let allElForms = document.forms;
let eForm = allElForms[1].children[0].children[1].children[0];
let eFormA = document.forms.form2;
let eFormB = eFormA.elements[0];
// let eForm = allElForms[1].children[0].children[1].children[0].style;
// let eForm = allElForms[1].children[0].children[1].children[0].tagName;
// let eForm = allElForms[1].children[0].children[1].children[0].type;
// let eForm = allElForms[1].children[0].children[1].children[0].attributes;
console.log(eForm);
console.log(eFormB);
console.dir(eFormB);
//values
console.log(form2.NAME[0]);
console.dir(form2.NAME[0]);
console.log(form2.NAME[0].parentNode);
console.log(form2.NAME[0].value);
console.log(form2[2].checked);
console.log(taDom.value);
let parentChildrIdName = form2.selctA; //?перед форм забув написати документ DOCUMENT!!!!!!!!!
console.log(parentChildrIdName); //undefined
console.dir(parentChildrIdName); //undefined
let parentChildrIdId = form2.selct;
console.log(parentChildrIdId); //undefined
let fID = document.forms.form2.slct;
console.log(fID);
let fName = document.forms.form2.slctA;
console.dir(fID);
console.log(fName.options);
console.log(fName.value);
console.log(fName.selectedIndex);
fName.options[2].selected = true;
fName.selectedIndex[3];
// let linkForm = sname.attributes;
let linkForm = sname.nextElementSibling;
//?change
// form2.children[0].children[0].nextElementSibling.children[0].onchecked
// form2.children[0].children[0].nextElementSibling.children[0].checked
// form2.children[0].children[0].nextElementSibling.children[0].onchange
let onChange = allElForms;
// let inpName2 = onChange[1].NAME[1];
let inpName2 = allElForms[1].NAME[1];
console.log(inpName2);
// listForm.addEventListener('type', listener, options)
function reFormValue(event) {
  event.preventDefault(HTMLDOMEventMethods);
  // .addEventListener('type', listener, options)
}
document.getElementById("fname").addEventListener("input", funcListener);
function funcListener() {
  document.getElementById("form2").innerHTML = "listenerWork";
  // console.log(funcListener);
  console.log("somebodyTex out addListener");
}
let evHandler = document.getElementById("iphone11");
evHandler.onclick = () => {
  console.log("checked");
};
evHandler.addEventListener("click", () => {
  console.log("LIstener");
});
//?CREATE ELEMENT/INSERT-ELEMENT
const createHTML = document.createElement("div");
//// document.getElementById("main").append(createHTML);

// console.dir(createHTML);
let crtNwCn = (createHTML.className = "New_Class-Name");
createHTML.innerHTML =
  "CCCCCCreate Видно курва тільки в дом дереві (DOM TREE),<BR> код не написаний в самому документі HTML<br>";
createHTML.style.textShadow = "3px 2px 4px #00ff55";
createHTML.style.fontSize = "44px";
document.head.append(createHTML);
document.body.prepend(createHTML); //?insert element
let cRtEl = document.querySelectorAll("section");
for (let kurva of cRtEl) console.log(kurva);
let cRtEla = document.createElement("b");
cRtEla.innerHTML = "<p>yob twoyu Mat</p>";
let toolsNodeList = cRtEl;
let toolsCollec = cRtEl[0].children;
let toolsLink = cRtEl[0].children[1];
let crtTn = document.createTextNode(
  "нахуя Ця дроч? Мені простіше написати/додати новий тег в HTML файлі<br> А це для того щоб її було видно тільки в браузері цю дроч!!!!! "
);
///// let insAjasT = document.querySelector("section");
let insAjasT = document.querySelector("a");
insAjasT.insertAdjacentText(
  "beforeend",
  "AnachronicMethod(insertAdjacentText) nu i plus <hr>zastarilo AnachronicMethod tekst"
);
insAjasT.insertAdjacentHTML(
  "afterend",
  "<hr>AnachronicMethod(insertAdjacentText) nu i plus jakiys tekst"
);
let remove = document.querySelector("section");
// remove.removeChild(remove.firstElementChild);
// console.log(insAjasT.children,firstChild,firstElementChild,childNodes,etc..);
// document.body.children[1].children[2].children[0].prepend(cRtEla);
document.body.children[1].children[2].prepend(cRtEla);
document.body.children[1].children[2].before(crtTn);
//?
// let crt = document.getElementById("crtList");
// crt.before("textLiBEFORE");
// crt.replaceWith(document.createElement("h1"), "replace");
// const cretTxNode = document.createTextNode("CreateTextNode");
// createHTML.appendChild(cretTxNode);
// let globalID = document.getElementById("iphone111-global");
// console.log(globalID);
////window[iphone111 - global].innerHeight11;
crtList.before("replaceDomTag");
let rpllDomEL = document.createElement("a");
rpllDomEL.innerHTML = "TEXTFOR REPLACE";
olDomReplace.prepend(rpllDomEL);
//?preventDefault
// event.preventDefault;passive=true;
