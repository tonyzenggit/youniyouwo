<?php

function youniyouwo_preprocess_page(&$variables, $hook)
{
    //添加owl幻灯片的css
    drupal_add_css(path_to_theme() . '/css/owl.carousel.css', array('group' => CSS_THEME,));
    drupal_add_css(path_to_theme() . '/css/owl.theme.css', array('group' => CSS_THEME,));
    // 用以制造page--custom_content_type.tpl.php页面来覆写原content_type
    if (isset($variables['node']->type)) {
        $variables['theme_hook_suggestions'][] =  'page__' .  $variables['node']->type;
    }
}