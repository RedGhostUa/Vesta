$(function() {
	var left = parseInt($(".left").css("marginTop").replace("px", "")),
		right = parseInt($(".right").css("marginTop").replace("px", ""));

	$(".fa").on("click", function() {
		if ($(this).hasClass("up")) {
			left += 100;
			right += $(window).height();
			$(".left").animate(
				{
					marginTop: "-" + left + "vh"
				},
				800
			);
			$(".right").animate(
				{
					marginTop: right + "px"
				},
				800
			);
			if (left >= ($(".left img").length - 1) * 100) {
				$(".up").fadeOut();
			}
			if (left > 0) {
				$(".down").fadeIn();
			}
		} else {
			left -= 100;
			right -= $(window).height();
			$(".left").animate(
				{
					marginTop: "-" + left + "vh"
				},
				800
			);
			$(".right").animate(
				{
					marginTop: right + "px"
				},
				800
			);
			if (left <= ($(".left img").length - 1) * 100) {
				$(".up").fadeIn();
			}
			if (left <= 0) {
				$(".down").fadeOut();
			}
		}
	});
});