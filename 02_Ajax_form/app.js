$(function(){
    // inputに入力されるたびに、DBにメアドがあるかを調べている（非同期）
    $('.js-keyup-valid-email').on('keyup',function (e) {
        //コールバック関数内ではthisはajax関数自体になってしまうため、
        //ajax関数内でイベントのthisを使いたいなら変数に保持しておく
        // ここでのthisはjQueryオブジェクトのフォーム（js-keyup-valid-email）だが
        var $that = $(this);

        //ajaxの実行
        $.ajax({
            type: 'post',
            url: 'ajax.php',
            //ここは必ず指定すること。指定しないとエラー＋返却値を文字列と認識してしまう
            dataType:'json',
            data: {
                // $thisは入力フォーム（js-keyup-valid-email）をさす
                email: $(this).val()
            }
        //ajaxの通信が終わったとき
        // .doneでもいいが、jQuery的に少し古い表現。.thenを使おう
        }).then(function(data, status) {
            console.log(data);

            if(data){
                // フォームにメッセージをセットし、背景色の変更
                //jsで直接色を変更するより、クラスの付け外しで色を変更した方が処理が早い
                if(data.errorFlg){
                    $('.js-set-msg-email').addClass('is-error');
                    $('.js-set-msg-email').removeClass('is-success');
                    // ここでのthisはthen(ajax)をさすことになるので、thatに挿入して使用
                    $that.addClass('is-error');
                    $that.removeClass('is-success');
                }else{
                    $('.js-set-msg-email').addClass('is-success');
                    $('.js-set-msg-email').removeClass('is-error');
                    $that.addClass('is-success');
                    $that.removeClass('is-error');
                }
                $('.js-set-msg-email').text(data.msg);
            }
        });
    });
});