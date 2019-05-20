<?php

if(!empty($_POST)){
    echo "<h1>名前は{$_POST['name']}で、年齢は{$_POST['age']}です。</h1>";
}

//echo json_encode(array("word1"=>$word1,"word2"=>$word2));//JSON形式で返す場合