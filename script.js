var urlToBeSent = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=' + key;

var key = 'ceHHXGMHV55CbEwPFJp87wjLlG9xKnTn';
// var query = 
console.log('test');
$.ajax({
    url: urlToBeSent,
    method: 'GET'
}).then(function(response){
    console.log(response);
});

$(".btn").click(function(){
    var searchTopic=$("#searchInput").val();
    var numRecords=$("#numberRecords").val();
    var beginYear=$("#startYear").val();
    var lastYear=$("#endYear").val();
});