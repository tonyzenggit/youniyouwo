//请团队注意，元素名请采用小驼峰命名法。
(function($) { //启动时加载，由于Drupal的$已被占用，使用jQuery需使用jQuery。
    (function($) {
        jQuery(function() { //使用jQuery必须加这个。
            //版权提示。
            console.log("游你由我BoardGame桌游社区 by 曾能轩、丁晗、白羽、梁鑫宇 ");
            //便于开发，增加按钮，一键隐藏/显示管理菜单及管理tab。
            $body = $("body");
            if($body.hasClass("admin-menu")){
                var oneKeyBtn = "<button class='oneKeyAdmin'>Hide</button>";
                $body.append(oneKeyBtn);
                var flag=0; //标记状态
                var adminTab=$(".tabs--primary.nav.nav-tabs");
                var oneKeyAdmin=$(".oneKeyAdmin");
                var oneKeyAdminHtml = oneKeyAdmin.html();
                oneKeyAdmin.on("click",function(){ //需append后才能绑定元素，因为如果放在之前，元素并不能选择到。
                    //console.log("test");
                    if(flag==0){
                        adminTab.css("display","none");
                        oneKeyAdmin.css("background","#2196F3").html("Show"); //链式操作,Jquery的便利性即在此。
                        flag=1;
                    }
                    else{
                        adminTab.css("display","block");
                        oneKeyAdmin.css("background","#F44336").html(oneKeyAdminHtml); //来储存原值再应用，增强程序可用性
                        flag=0;
                    }
                })
            }

        });
    })(jQuery);
})(jQuery);
