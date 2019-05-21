<?php

if(!empty($_POST)){
    // phpの関数でjson_encodeを使用して、ブラウザ側からjson形式で値を返している
    // 普通に返そうとすると1行で帰ってきてしまうため、配列の形に治すためにencodeは必要
    echo json_encode(array('name'=> $_POST['name'], 'age'=>$_POST['age']));
}