$(function () {
    // イベント（submit）された場合に関数が走る
    $('.js-formArea').on('submit', function (event) {
        // 自己ページにリダイレクトしてしまうので、submitをpreventDefaultで止めている
        event.preventDefault();
        $.ajax({
            type: 'post',
            // 送信先は相対パスで（同列なのでそのままで）
            url: 'ajax_json.php',
            // サーバーに送信する内容
            dataType:'json',
            data: {
                // 中身（value）を取る時は、js-get-val-とつけておくとわかりやすい
                name: $('.js-get-val-name').val(),
                age: $('.js-get-val-age').val()
            }
        // .doneはAjax通信が終わったら、行う処理。dataにはサーバーから帰ってきた情報が入ってる.
        }).done(function (data, status) {
            console.log(data);
            console.log(status);
            // ajaxの場合、一気に書き換えるのではなく、個別に処理が必要
            var name = data.name;
            var age = data.age;
            // .textでテキスト形式で渡す。仮にhtmlで渡してもAjaxデータの場合はテキストになってしまうため無意味
            $('js-set-name').text(name);
            $('js-set-age').text(age);
            // #ajaxAreaの中身の書き換え
            // $('.js-set-ajaxArea').html(data);
        });
    });
});Ω