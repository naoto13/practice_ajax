$(function () {
    // イベント（submit）された場合に関数が走る
    $('.js-formArea').on('submit', function (event) {
        // 自己ページにリダイレクトしてしまうので、submitをpreventDefaultで止めている
        event.preventDefault();

        $.ajax({
            type: 'post',
            // 送信先は相対パスで（同列なのでそのままで）
            url: 'ajax_sample.php',
            // サーバーに送信する内容
            data: {
                // 中身（value）を取る時は、js-get-val-とつけておくとわかりやすい
                name: $('.js-get-val-name').val(),
                age: $('.js-get-val-age').val()
            }
        // .doneはAjax通信が終わったら、行う処理。dataにはサーバーから帰ってきた情報が入ってる.
        }).done(function (data, status) {
            console.log(data);
            console.log(status);
            // #ajaxAreaの中身の書き換え
            $('.js-set-ajaxArea').html(data);
        });
    });
});