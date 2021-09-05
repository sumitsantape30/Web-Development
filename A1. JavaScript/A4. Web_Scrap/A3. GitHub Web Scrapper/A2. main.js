let url = "https://github.com/topics";
const request = require('request');
const cheerio = require("cheerio");
const getReposPageHtml = require("./reposPage");
request(url, cb);

function cb(error, response, html){
    if(error){
        console.log(error);
    } else if(response.status == 404){
        console.log("Page not found!");
    } else{
        getTopicLinks(html);
        // console.log(html);
    }
}

function getTopicLinks(html){
    let $ = cheerio.load(html);
    let linkElemArr = $(".d-flex.no-underline.flex-column.flex-justify-center");
    for(let i = 0; i < linkElemArr.length; i++){
        let href = $(linkElemArr[i]).attr("href");
        // console.log(href);
        let topic = href.split("/").pop();
        let fullLink = `https://github.com/${href}`;
        getReposPageHtml(fullLink, topic);
    }
}
