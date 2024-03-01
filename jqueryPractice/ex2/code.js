$(function () {

    //<ol>の取得
    let list = $("#list");
    //新しい<a>要素を追加
    let newLink = $("<a>");
    //作成したaタグの中に文字を挿入
    newLink.html("developer.mozilla.org");
    //リストの末尾に追加
    list.append(newLink);

    //新しい<li>を作成
    let item = $("<li>");
    list.append(item);
    item.append(newLink);

    //新しい
    let test = $("<p>");
    test.html("And more");
    list.after(test);

    //要素を削除
    //list.remove();

    //要素の中を空にする
    list.empty();

    //onClick
    //  $("#button1").click(()=>{
    //     console.log("ボタン1");
    //  });

    //  $("#button1").click(()=>{
    //     console.log("ボタン2");
    //  });

    //addEvent
    $("#button1").on("click", () => {
        //console.log("ボタン1");
        $("#text").css("color","red");
    });
    $("#button1").on("click", () => {
        console.log("ボタン2");
    });
});