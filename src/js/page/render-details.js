
var swiper = new Swiper('.swiper-container');
$(function() {
	var page = {
		renderInit: function() {
			this.render_nav_tab();
			this.render_zzc();
		},
		render_nav_tab: function() {
			$('.datails_nav_tab').click(function() {
				$(this).addClass('active').siblings().removeClass('active');
			})
		},
		render_zzc: function() {
			$('.datails_footer_cart_span').click(function() {
				$('.datails_zhe').show();
			});
			$('.datails_xiaban_goods_right_jia_ico').click(function() {
				$('.datails_zhe').hide();
			});
		}
	}
	page.renderInit();
})