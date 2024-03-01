$(function () {

    const BASE_TEXT1 = "直近1つ目";
    const BASE_TEXT2 = "直近2つ目";

    let firstText = '';
    let secondText = '';

    //テキストを表示させるメソッドの作成
    function printText(setFirstText) {
        //2つのめの値を1つ目の値で上書きする
        secondText = firstText;
        //1つ目のテキストの内容を最新の状態にする
        firstText = setFirstText;
        //直近1つ目
        $(".one").html(BASE_TEXT1 + firstText);
        $(".two").html(BASE_TEXT2 + secondText);
    }
    //リンゴを押下した場合
    $("#btn1").on("click",()=>{
        printText("リンゴ");
    });

    $("#btn2").on("click",()=>{
        printText("バナナ");
    });

    $("#btn3").on("click",()=>{
        printText("ミカン");
    });


});