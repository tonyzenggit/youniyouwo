<?php
?><!DOCTYPE html>
<html<?php print $html_attributes;?><?php print $rdf_namespaces;?>>
<head>
    <link rel="profile" href="<?php print $grddl_profile; ?>" />
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php print $head; ?>
    <title><?php print $head_title; ?></title>
    <meta name="description" content="游你由我BoardGame——可能是天津最专业的桌游社区。进口桌游，原装正版。桌游活动，桌游比赛，等你来！">
    <meta name="keywords" content="游你由我,天津桌游,天财桌游,桌游社区,boardgame,桌游">
    <?php print $styles; ?>
    <?php print $scripts; ?>
    <!-- BaiduTongJi -->
    <script>
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?9b403beb35dce25751ed0cfcd6db1def";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();
    </script>
</head>
<body<?php print $body_attributes; ?>>
<?php print $page_top; ?>
<?php print $page; ?>
<?php print $page_bottom; ?>
</body>
</html>
