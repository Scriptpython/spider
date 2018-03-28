//https://blog.csdn.net/qq_28666081/article/details/52118168'
let superagent = require('superagent');
let cheerio = require('cheerio');
let fs = require('fs');
let url = '92.91p25.space/index.php';
let savePath = '保存文件路径'
let cookies = null;
let headers = {
    "Cache-Control": "max-age=0",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8",
    "Referer": "92.91p25.space/index.php",
    "Accept-Encoding": "gzip, deflate, sdch",
    "Accept-Language": "zh-CN,zh;q=0.8",
    "Cookie": cookies // 在外面定义一个 cookies 变量存放自己的 cookies
};
superagent
    .get(url)
    .end(function (err, res) {
        let $ = cheerio.load(res.text);
        let hrefs = []
        $('#tab-featured').find('a').each(function () {
            hrefs.push($(this).attr('href'));
        });
        let noRepeat = new Set(hrefs);
        hrefs = Array.from(noRepeat);
        let viewKey = [];
        for (var i in hrefs) {
            if (getUrlParam(hrefs[i], 'viewkey')) {
                viewKey.push(getUrlParam(hrefs[i], 'viewkey'))
            }
        }
        console.log(viewKey);
    })

// 获取视频 url
let getVideoUrl = function () {

}

// 下载视频
let downloadVideo = function () {

}
let getUrlParam = function (url, param) {
    let query = url.split('?');
    let pair = query[1];
    pair = query[1].split('=');
    if (pair[0] == param) return pair[1]
    return null;
}