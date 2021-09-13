let puppeteer= require("puppeteer");

let openBrowserPromise= puppeteer.launch({
    headless: false,
    defaultviewport: null,
    args: ["--start-maximized", "--disable-notifications"]
});
let page;
openBrowserPromise.then( function(browserObj){
    console.log("Browser opened");
    // new tab 
    browser = browserObj
    let browserTabOpenPromise = browserObj.newPage(); 
    return browserTabOpenPromise;
}).then(function (newTab) {
    page = newTab;
    console.log("new tab opened ")
    let gPageOpenPromise = newTab.goto("https://www.google.com/");
    return gPageOpenPromise;
}).then( function(){
    let elementWaitPromise= page.waitForSelector("input[type='text']", {visible: true});
    return elementWaitPromise;
}).then(function () {
    let typeinSearch= page.type("input[type='text']","Pepcoding");
    return typeinSearch;
}).then( function(){
    let pressEnterprom= page.keyboard.press("Enter");
    return pressEnterprom;
}).then( function(){
    let waitforEleprom= page.waitForSelector("h3.LC20lb.DKV0Md", {visible: true});
    return waitforEleprom;
}).then( function(){
    let clickonLink= page.click("h3.LC20lb.DKV0Md");
    return clickonLink;
 })
