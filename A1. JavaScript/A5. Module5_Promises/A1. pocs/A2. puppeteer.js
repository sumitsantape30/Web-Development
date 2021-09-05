//puppeteer ek npm ka module hai jo browser ko control krta hai, chromium browser 
//chromium browser ke andar 2 parts hote hai, UI and dev tools. so yeh puppeteer script ke thorugh iss chromium browser ko control krta hai, woh sare kam kr skta hai jo humans dev tools mai kr skta hai

// npm i puppeteer;
let puppeteer = require("puppeteer");

//puppeteer.launch({headless: false}); //itne se browser open hojata hai 

/* 
//by default headless false hota hai
let browserStartPromise = puppeteer.launch({}); //yeh promise dega browser open hone ka
browserStartPromise.then(function () {
        console.log("Browser opened");
}) */

// headless means browser dikhega nhi, sare kam hojayenge but browser dikhega nhi
// creates headless browser
let browserStartPromise = puppeteer.launch({ //yeh promise dega browser open hone ka
    // visible 
    headless: false, // headless se browser visible rahega
    // type 1sec 
    //slowMo: 1000,
    defaultViewport: null,
    // browser setting 
    args: ["--start-maximized", "--disable-notifications"]
});

/*
browserStartPromise.then(function (browserObj) {
            console.log("Browser opened");
            let browserTabOpenPromise = browserObj.newPage(); //yeh function browser ke andar ek naya tab khol dega
            browserTabOpenPromise.then(function(page)){
             console.log("new tab opened");
        })
    })
    // yahatk code se chrome open hoga aur new blank tab open hoga

    //agar muje ek ke bad ek serially kam karna hai to then ke andar then aise kr skte hai, same code for above operation
    // koi banda promise deta hai use return karo aur fir uska jo consumer hai ki jab woh resolve hojayega to woh uske niche likhenge
    browserStartPromise.then(function (browserObj) {
        console.log("Browser opened");
        // new tab 
        let browserTabOpenPromise = browserObj.newPage(); 
        return browserTabOpenPromise;
    }).then(function (page) {
        console.log("new tab opened ")
        let gPageOpenPromise = newTab.goto("https://www.google.com/");
        return gPageOpenPromise;
    }).then(function () {
        console.log("Google home page opened");
    });
 */

let page, browser, rTab;
browserStartPromise.then(function (browserObj) {
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
    }).then(function () {
        console.log("Google home page opened");
        // keyboard se -> data entry karne keliye
        let waitforTypingPromise = page.type("input[title='Search']", "pepcoding");
        return waitforTypingPromise;
    }).then(function () {
        // keyboard se-> specific keys press karne kam ayega
        let enterWillBeDonePromise = page.keyboard.press('Enter', { delay: 100 });
        return enterWillBeDonePromise;
    }).then(function () { 
        // next page 
        //wait for element to be visible on the page-> whenver you go to a new page 
        console.log("wait for element to be visible");
        let waitForElementPromise = page.waitForSelector(".LC20lb.DKV0Md", { visible: true });//jabtak yeh element visible na ho aap wait karoge
        return waitForElementPromise;
    }).then(function () {
        
        // mouse function 
        let elemClickPromise = page.click(".LC20lb.DKV0Md");
        return elemClickPromise;
    }).then(function () {

        // 30 seconds 
        let waitForModalPromise = page.waitForSelector("#lp_modal_close", { visible: true }); //jabtak woh poster visible na ho aap wait karoge
        return waitForModalPromise;
    }).then(function () {

        let clickModal = page.click("#lp_modal_close", { delay: 100 });// uspe click karwa diya
        return clickModal;
    }).then(function () {
        // page element -> cheerio 
         //page.$$ function ke andar selector pass karenge to yeh elements ka array lakee dega 
        let allLisPromise = page.$$(".site-nav-li"); // resources open karna hai hume 
        return allLisPromise;

    }).then(function (allElem) {

        let elementWillBeclickedPromise = allElem[6].click({ delay: 100 }); // sabhi elements the usme 6th element pe click karenge
        return elementWillBeclickedPromise; 
    }).then(function () { // resources page is on next tab and next tab will take some time to open 
        
        let future2secondAfter = Date.now() + 2000;
        while (Date.now() < future2secondAfter) {
        }
        let listofOpenedTabsPromise = browser.pages(); // jo open tab hai uska promise hai yeh
        return listofOpenedTabsPromise;
    }).then(function (array) {

        rTab = array[array.length - 1]; //rTab upar initialise kiye usme dal rhe hai
        let waitforLevel1Promise = rTab.waitForSelector('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]', { visible: true });
        return waitforLevel1Promise;
    }).then(function () {

        let clickLevel1Promise = rTab.click('h2[title="Data Structures and Algorithms in Java [Level 1 - Foundation]"]');
        return clickLevel1Promise;
    }).then(function () {

        console.log("level 1 will be opened");
    })

//=== Yeh wala createpromises padhne ke bad dekhna==================================

// upar jo 2 seperate functions likhe hai wait and click uske jagah hum yeh ek function bhi likh skte hai
// user defined promise based function -> it will return  
// a promise that will be 
// resolved when the user has waited for element to appear as well as we have clicked on it
function waitAndClick(selector, cPage) { //currentPage bhi pass karenge 
    return new Promise(function (resolve, reject) {
        let waitForModalPromise = cPage.waitForSelector(selector, { visible: true }); 
        waitForModalPromise
            .then(function () {
                let clickModal =
                    cPage.click(selector, { delay: 100 });
                return clickModal;
            }).then(function () {
                resolve();
            }).catch(function (err) {
                reject(err)
            })
    }
    )
}
// promise -> banner is present or not  -> the code will run 
function handleIfNotPresent(selector, cPage) {
    return new Promise(function (resolve, reject) {
        // wait clickModal
        let waitAndClickPromise = waitAndClick(selector, cPage);
            //chale tabhi thik hai nhi chale tab bhi thik hai dono isme hum resolve call krd denge
        waitAndClickPromise.then(function () {
            resolve();
        })
        waitAndClickPromise.catch(function (err) {
            resolve();
        })
    })
}


    // browser.pages -> array of all the open tabs

    // .then(function (array) {
    //     rTab = array[array.length - 1];
    //     let urlPromise = rTab.url();
    //     return urlPromise
    // }).then(function (url) {
    //     console.log(url)
    // })

