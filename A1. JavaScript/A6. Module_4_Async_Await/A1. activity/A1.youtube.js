//We are doing this activity usig Async, Await

//we have to find the following this,

// a. Name of Playlist,view
// b. Total No of videos : 792
// c. actual No of videos :783
// d. Total length of playlist : 12 hours, 9 minutes, 12 seconds
// At 1.25x : 9 hours, 43 minutes, 21 seconds
// At 1.50x : 8 hours, 6 minutes, 8 seconds
// At 1.75x : 6 hours, 56 minutes, 41 seconds
// At 2.00x : 6 hours, 4 minutes, 36 seconds
// Average length of video : 29 minutes, 10 seconds

// e. console.table=>  of video number,name,time


// Current Task : name of playlist ,views,total videos,

const puppeteer= require("puppeteer");
let page;

(async function fn() {
    let browser = await puppeteer.launch({
        headless: false, defaultViewport: null,
        args: ["--start-maximized"],
    })
    page = await browser.newPage();
    await page.goto("https://www.youtube.com/playlist?list=PLzkuLC6Yvumv_Rd5apfPRWEcjf9b1JRnq"); 
    //itne code se youtube open hojayegaa

    await page.waitForSelector('h1[id="title"]');
    // first element 
    let element = await page.$('h1[id="title"]'); // $ means querySelector
    let value = await page.evaluate(function (element) { // jo andar function pass kr rhe hai usko alag function banake bas yaha woh function call bhi kr skte ho (Open pdf notes)
        return element.textContent;
    }, element);

    console.log("Title: ", value) ; //playlist ka nam print hojayega isse

    //yeh all occurences ko leke ata hai array ke form mai
    let someList = await page.$$(".style-scope.ytd-playlist-sidebar-primary-info-renderer");
    value = await page.evaluate(function (element) { return element.textContent }, someList[5]);

    console.log("videos: ", value)
    
    //now, no of views of playlist
    let videos = value.split(" ")[0].trim();
    value = await page.evaluate(
        function (element) { return element.textContent }, someList[6]);
    console.log("views", value)

    //now list of first 100 videos in table form, video number, name, time

    let loopcount = Math.floor(videos / 100);  //700 videos hai to spinner pe 7 bar click kiya to sare videos load hojayenge  

    for (let i = 0; i < loopcount; i++) {
        // load start
        await page.click(".circle.style-scope.tp-yt-paper-spinner"); // yeh spinner click karke wait karega aur uss point tak pohchayega hume
        //pehle 100 videos already aayi hui thi fir first click ke bad aur 100 videos aagyi. 
       
        // load finish
        await waitTillHTMLRendered(page); //isse hum wait krte hai ki sari videos aajaye
        console.log("loaded the new videos");
    } //itna karliya means aapne pura page load karliya
    
    //sabhi videos ko load karne ke bad sare videos ke name/title
    let videoNameElementList = await page.$$("a[id='video-title']"); //yahase title ki list mil gyi
    console.log("videoNameElementList", videoNameElementList.length);
   
    //last video
    let lastVideo = videoNameElementList[videoNameElementList.length - 1]; //last video pe gye
    // last video ko view mai leke aaye
    await page.evaluate(function (elem) {
        elem.scrollIntoView();
    }, lastVideo);

    //sari videos ki time ki list
    let timeList = await page.$$("span[id='text']"); //isse time ki list mil gyi
    console.log(timeList.length);
  
    let videosArr = [];
    for (let i = 0; i < timeList.length; i++) { //time wale pe or videos wale pe loop mar skte ho no compulsion
        //fir ek ek karke pass kiye aur unke nam aur time ek array mai dala aur fir array print kiya
        let timeNTitleObj = await page.evaluate(getTimeAndTitle, timeList[i], videoNameElementList[i]);  
        videosArr.push(timeNTitleObj);
    }
    console.table(videosArr);

})();

function getTimeAndTitle(element1, element2) {
    return {
        time: element1.textContent.trim(), //trim bhi karlo coz hume bas time chahiye uske ajubajuwala kachra nhi chahiye
        title: element2.textContent.trim()
    }
}

//yeh function har kuch time ke bad yeh check krte rehta hai ki content load hua ya nhi hua 
const waitTillHTMLRendered = async (page, timeout = 10000) => {
    const checkDurationMsecs = 1000;
    const maxChecks = timeout / checkDurationMsecs;
    let lastHTMLSize = 0;
    let checkCounts = 1; //count check karte hai
    let countStableSizeIterations = 0;
    const minStableSizeIterations = 3;
    while (checkCounts++ <= maxChecks) { //agar yeh count 
        // html
        let html = await page.content();
        let currentHTMLSize = html.length;
        // body part
        console.log('last: ', lastHTMLSize, ' <> curr: ', currentHTMLSize);
        if (lastHTMLSize != 0 && currentHTMLSize == lastHTMLSize)
            countStableSizeIterations++;
        else
            countStableSizeIterations = 0; //reset the counter

        if (countStableSizeIterations >= minStableSizeIterations) {
            console.log("Page rendered fully..");
            break;
        }
        lastHTMLSize = currentHTMLSize;
        await page.waitFor(checkDurationMsecs);
    }
};
