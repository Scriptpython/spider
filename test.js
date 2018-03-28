let url = 'http://92.91p25.space/view_video.php?viewkey=ea61970f1b42ce6e6bbf';
let getUrlParam = function (url, param) {
    let query = url.split('=');
    // if(query[0] == param) return query[1];
    console.log(query[1]);
}
getUrlParam(url,'viewKey');