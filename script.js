var urlToBeSent = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + key;

var key = 'ceHHXGMHV55CbEwPFJp87wjLlG9xKnTn';
// var query = 

$.ajax({
    url: urlToBeSent,
    method: 'GET'
}).then(function(response){
    console.log(response);
});