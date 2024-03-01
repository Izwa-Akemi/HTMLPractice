$(function(){
//要素の取得
let text = $("#text-1");
//要素の内容を取得
console.log(text.html());
//要素の内容を変更
text.html("GoodBye");
//色をつける
text.css("color","blue");


//要素の取得
let textClass = $(".text-class");
//内容の取得
console.log(textClass.eq(0).html());
//色をつける
textClass.css("color","red");



//要素の取得
let link = $("#link-1");
//リンクのURLの内容を取得する
console.log(link.attr("href"));

//リンクの書き換え
link.attr("href","https://www.google.com/");
link.attr("target","_blank");

});