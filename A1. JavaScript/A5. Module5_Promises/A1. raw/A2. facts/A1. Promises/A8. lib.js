function analyzedata(product, cb) {
    setTimeout(function () {
        // kdjdhvbjdhvbbv
        // dfdvjdfbvjhdf
        cb();
        cb();
        cb();
    }, 2000);
}//upar wale ko comment krdena

//instead of analyzedata, humara pas promisifiedAnalyzedata function hai, promisified function mai yeh khas bat hoti hai ki apko bas data pass karna hota hai callback then mai pass hota hai 
function promisifiedAnalyzedata(product) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            // kdjdhvbjdhvbbv
            // dfdvjdfbvjhdf
            resolve();
            resolve();
            reject();
        }, 2000);
    })
}
module.exports = {
    analyzedata: analyzedata,
    promisifiedAnalyzedata: promisifiedAnalyzedata
};

