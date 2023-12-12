$(function(){
	// body
		$("body").addClass("wrap");
	// navマウスオーバー
		$('#nav a img').not("[class='current']").hover(function() {
			$(this).animate({
				opacity: '0'
			}, 200, 'linear');
			},function(){
			$(this).animate({
				opacity: '1',
			}, 200, 'linear');
		});
	// マウスオーバー
		var postfix = '_ov';
		$('.img_ov a img').not('[src*="'+ postfix +'."]').each(function() {
			var img = $(this);
			var src = img.attr('src');
			var src_on = src.substr(0, src.lastIndexOf('.'))
			+ postfix
			+ src.substring(src.lastIndexOf('.'));
			$('<img>').attr('src', src_on);
			img.hover(function() {
			img.attr('src', src_on);
			}, function() {
			img.attr('src', src);
			});
		});
	// ページトップ
		$(".pagetop a").click(function(){
      		var speed = 300;// ミリ秒
     		var href= $(this).attr("href");
     		var target = $(href == "#" || href == "" ? 'html' : href);
     		var position = target.offset().top;
      		$($.browser.safari ? 'body' : 'html').animate({scrollTop:position}, speed, 'swing');
     		return false;
		})
	// 外部ページブランク
		$("a[href^='http://']").not("a[href*='" + location.hostname + "']").attr("target","_blank");
		$("a[href^='https://']").not("a[href*='" + location.hostname + "']").attr("target","_blank");
		$("a[href$='.pdf']").attr("target","_blank");
	// table 偶数行色づけ	
		$(".table_border tr:even").addClass("table_border_even");

});

function startMailer(mail,host){
var mailto = "mailto:" + mail + "@" + host;
location.href= mailto;
}
//<a href="javascript:startMailer('xxxx','xxxx');">こちらをクリックしてください。</a>