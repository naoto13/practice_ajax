<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Ajax sample</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- js-formAreaと頭にjsをつけて可読性を高める -->
    <form method="post" action="" class="formArea js-formArea">
        <div id="ajaxArea" class="js-set-ajaxArea">
            <p>ここだけが入れ替わります</p>
        </div>
        <p><?php echo date('Y/M/d H:i:s'); ?></p>
        名前
        <input type="text" name="name" class="inputText js-get-val-name" autocomplete="off">
        年齢
        <input type="number" name="age" class="inputText inputText--s js-get-val-age" autocomplete="off">

        <input type="submit" value="送信" class="btn">
    </form>

    <!-- jQuery -->
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>
    <script src="app.js"></script>
</body>
</html>