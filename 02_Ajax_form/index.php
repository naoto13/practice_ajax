<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>DropDown Menu</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- js-formAreaと頭にjsをつけて可読性を高める -->
    <form method="post" action="" class="formArea">
        <div class="formItem">
            <p>email</p>
            <input type="email" name="email" class="inputText js-keyup-valid-email" autocomplete="off">
            <span class="msgArea js-set-msg-email"></span>
        </div>

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