
var cheerio = require('cheerio');
var request = require('request');



request.get('http://www.express.com/clothing/Men/New+Arrivals/cat/cat120009', function(err, response, body){
    if (err) return next(err);
    var $ = cheerio.load(body);
	var items = [];
	$('div.cat-thu-product').each(function(index, productElement) {
	  var product = {
	    id: $('div.cat-thu-p-cont', productElement).attr('id'),
	    name: $('li.cat-thu-name a', productElement).text().trim(),
	    price: $('ul li strong', productElement).text(),
	    image: $('.cat-thu-p-ima', productElement).attr('src'),
	    colors: []
	  };
	  // Adding colors array
	  $('.cat-cat-more-colors div img', productElement).each(function(index, colorElement) {
	    product.colors.push({name: $(colorElement).attr('alt'), imageUrl: $(colorElement).attr('src')});
	  });

	  items.push(product);
	});

	console.log(items);
});



/*exports.getScraping = function(req, res, next) {
  request.get('https://news.ycombinator.com/', function(err, response, body){
    if (err) return next(err);
    var $ = cheerio.load(body);
    var links = [];
    $(".title a[href^='http'], a[href^='https']").each(function() {
      var url = this.attr('href');
      links.push(url);
    });

    console.log(url);
  });
};*/