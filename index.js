var buttonVeg = $('.vegetablesbutton');
var message = $('.message');

var vegetables = ["carrot", "spinach", "kale", "bell pepper","celery","tomato","bok choy","lettuce","asparagus","mushrooms","corn"];

buttonVeg.on("click", vegetablesNew);

  function vegetablesNew (){

    var random = Math.random() * vegetables.length;
    var floor = Math.floor(random);
    message.text(vegetables[floor]);
}

var buttonFruit = $('.fruitsbutton');
var message = $('.message');

var fruits = ["plums", "peaches", "watermelon", "grapes","pineapple","blueberry","raspberry","blackberry","cherry","strawberry","apple"];

buttonFruit.on("click", fruitsNew);

  function fruitsNew (){

    var random = Math.random() * fruits.length;
    var floor = Math.floor(random);
    message.text(fruits[floor]);
}

var buttonJunk = $('.junkbutton');
var message = $('.message');

var junk = ["caramel", "lollipops", "chips", "chocolate","popcorn","icecream","gelato","sorbet","custard","pudding","cakes"];

buttonJunk.on("click", junkNew);

  function junkNew (){

    var random = Math.random() * junk.length;
    var floor = Math.floor(random);
    message.text(junk[floor]);
}
