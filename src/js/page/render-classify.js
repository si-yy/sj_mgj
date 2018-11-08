
$(function() {
	var page = {
		classInit: function() {
			this.classScroll();
			this.LeftTab();
			this.RightTab();
		},
		classScroll: function() {
			var $window=$("#classify").parent().parent(),
			$mainScroll = $('#mainScroll'),
			$mainScrollBox = $('#mainScrollBox');
			$window.scroll(function() {
				var window_top = $window.scrollTop();
				var div_top = $mainScrollBox.offset().top;
				if(window_top > div_top) {
					$mainScroll.addClass('stick');
					$mainScrollBox.height($mainScroll.height());
					$mainScroll.children().children("li").width("25%");
				} else {
					$mainScroll.removeClass('stick');
					$mainScrollBox.height(0);
					$mainScroll.children().children("li").width("33.33%");
				}
			});
		},
		LeftTab: function() {
			//左侧导航栏
			var $LeftScrollTab = $(".main-left-scroll .tab");
			var $mainRightScroll = $(".main-right-scroll");
			$mainRightScroll.eq(0).show();
			$LeftScrollTab.on("click", function() {
				$(this).addClass("active").siblings("li").removeClass("active");
				$mainRightScroll.eq($(this).index()).show().siblings(".main-right-scroll").hide();
			})
		},
		RightTab: function() {
			var $shopTab = $("#mainScroll .shop-tab .tab");
			var $rightShopTab = $(".right-shop-tab");
			$rightShopTab.eq(0).show();
			$shopTab.on("click", function() {
				$(this).addClass("active").siblings("li").removeClass("active");
				$rightShopTab.eq($(this).index()).show().siblings(".right-shop-tab").hide();
			})
		}
	}
	page.classInit();
})