
$(function() {
	var page = {
		fashionInit: function() {
			this.fashionShow();
			this.fashionTab();
		},
		fashionShow: function() {
			$(".fashion-main").eq(0).show();
		},
		fashionTab: function() {
			$(".colligate-tab").on("click", ".tab", function() {
				$(this).addClass("active").siblings().removeClass("active");
				$(".fashion-main").eq($(this).index()).show().siblings(".fashion-main").hide();
			})
		}
	}
	page.fashionInit();
})