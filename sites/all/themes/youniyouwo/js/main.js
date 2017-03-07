//请团队注意，元素名请采用小驼峰命名法。
(function ($) { //启动时加载，由于Drupal的$已被占用，使用jQuery需使用jQuery。
    jQuery(function () { //使用jQuery必须加这个。
        //******************这里开始，往下看******************
        //!!!Function(版权提示)
        console.log("游你由我BoardGame桌游社区 by 曾能轩、丁晗、白羽、梁鑫宇 ");
        //!!!Function(便于开发，增加按钮，一键隐藏/显示管理菜单及管理tab)
        var $body = $("body");
        if ($body.hasClass("admin-menu")) {
            var oneKeyBtn = "<button class='oneKeyAdmin'>Hide</button>";
            $body.append(oneKeyBtn);
            var flag = 0; //标记状态
            var adminTab = $(".tabs--primary.nav.nav-tabs");
            var oneKeyAdmin = $(".oneKeyAdmin");
            var oneKeyAdminHtml = oneKeyAdmin.html();
            oneKeyAdmin.on("click", function () { //需append后才能绑定元素，因为如果放在之前，元素并不能选择到。
                //console.log("test");
                if (flag == 0) {
                    adminTab.css("display", "none");
                    oneKeyAdmin.css("background", "#2196F3").html("Show"); //链式操作,Jquery的便利性即在此。
                    flag = 1;
                }
                else {
                    adminTab.css("display", "block");
                    oneKeyAdmin.css("background", "#F44336").html(oneKeyAdminHtml); //来储存原值再应用，增强程序可用性
                    flag = 0;
                }
            })
        }
        //!!!Function(tooltip加在这里)
        $(".field-name-field-catalog").attr({"title": "游戏分类", "data-toggle": "tooltip"});
        $(".field-name-field-renshu").attr({"title": "游戏人数", "data-toggle": "tooltip"});
        $(".field-name-field-shichang").attr({"title": "游戏时长", "data-toggle": "tooltip"});
        $(".field-name-field-age").attr({"title": "适合的年龄", "data-toggle": "tooltip"});
        $(".attribute-widgets select").attr({
            "title": "简装版：桌游本体。  过塑版：桌游本体+牌过塑，加强保护！  礼盒版：桌游本体+牌过塑+礼盒，收藏必备！",
            "data-toggle": "tooltip"
        });
        $("[data-toggle='tooltip']").tooltip(); //启动tooltip必须
        //!!!Function(针对Boostrap Accordion，自动开启第一个 Collapse)
        //jQuery('#collapse0').addClass('in'); //用这个不行，是强硬加的in，不能和icon连动，用下面的toggle方法会更好。
        $('#collapse0').collapse('toggle');
        //!!!Function(添加icon特效)
        function toggleIcon(e) {
            $(e.target)
                .prev('.panel-heading')
                .find(".more-less")
                .toggleClass('glyphicon-plus glyphicon-minus');
        }

        $('.panel-group').on('hidden.bs.collapse', toggleIcon).on('shown.bs.collapse', toggleIcon);
        //!!!Function(给有二级菜单的一级菜单增加hover效果，这里用JS比用CSS的:hover好，因为Bootstrap的Nav用open类来控制二级菜单的display)
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { //较好的简洁代码判断非移动端
            var navExpanded = $("li.expanded.dropdown");
            navExpanded.hover(function () {
                navExpanded.addClass("open");
            }, function () {
                navExpanded.removeClass("open");
            });
        }


        //******************这里结束，往上面看******************
    });
})(jQuery);
