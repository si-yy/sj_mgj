
$(function() {
	var page = {
		shopInit: function() {
			this.checkAll();
			this.GetCount();
			this.CheckParent();
			this.Checksub();
		},
		checkAll: function() {
			//全选
			$("#check-all").click(function() {
				if(this.checked) {
					$(":checkbox").prop("checked", true);
					page.GetCount();
				} else {
					$(":checkbox").prop("checked", false);
					$(".total-num").text(0);
					$(".totalPrices i").text("0.00");
				}
			})
		},
		GetCount: function() {
			var cont = 0;
			var num = 0;
			$(".shop-checkbox").each(function() {
				if($(this).prop("checked") == true) {
					var goodsNum = $(this).parent().next().children(".cartgood").find(".num").text();
					for(var i = 0; i < $(this).length; i++) {
						cont += parseFloat($(this).attr("data") * goodsNum);
						num += 1;
					}
				}
			});
			$(".totalPrices i").text((cont).toFixed(2));
			$(".total-num").text(num);
		},
		CheckParent: function() {
			//父级选中
			$(".shop-checkbox").click(function() {
				var goodPrice = $(this).parent().next().children(".cartgood").find(".money").text(); //单价
				var goodsNum = $(this).parent().next().children(".cartgood").find(".num").text(); //数量
				var totalPrice = $(".totalPrices>i").text(); //总价格
				var price = Number(goodPrice * goodsNum).toFixed(2); //单品总价
				if(this.checked) {
					$(this).val(price);
					$(".totalPrices>i").text(Number(totalPrice) + Number(price));
					$(this).parent().next().children().find(":checkbox").prop("checked", true);
				} else {
					$(this).val(goodPrice);
					$("#check-all").prop("checked", false); //取消全选
					$(".totalPrices>i").text(parseFloat(totalPrice) - Number(price));
					$(this).parent().next().children().find(":checkbox").prop("checked", false);
				}
			})
		},
		Checksub: function() {
			//子级选中
			$(".g-all").click(function() {
				var goodPrice = $(this).parents().children(".cartgood").find(".money").text(); //单价
				var goodsNum = $(this).parents().children(".cartgood").find(".num").text(); //数量
				var totalPrice = $(".totalPrices>i").text(); //总价格
				var price = Number(goodPrice * goodsNum).toFixed(2); //单品总价
				if(this.checked) {
					$(this).val(goodPrice);
					$(".totalPrices>i").text(Number(totalPrice) + Number(price));
					$(this).parents().children(".main-shop-head").find(":checkbox").prop("checked", true);
				} else {
					$(this).val(goodPrice);
					$("#check-all").prop("checked", false); //取消全选
					$(".totalPrices>i").text(Number(totalPrice) - Number(price));
					$(this).parents().children(".main-shop-head").find(":checkbox").prop("checked", false);
				}
			})
		}
	}
	page.shopInit();
})