$(document).ready(function(){
	/*
		Screen 객체 현재화면의 해상도, 색상 등에 관한 정보를 얻기 위한 내장 객체
		availHeight : 윈도우 인터페이스를 제외한 높이
		availWidth : 윈도우 인터페이스를 제외한 너비
		height : 픽셀 단위로 화면의 높이
		width : 픽셀 단위로 화면의 너비
		pixelDepth : 한 픽셀당 비트수
		colorDepth: 사용가능한 색상 수

	*/
	//var sc_w=screen.availWidth;
	var sc_h=$(window).height();

	function move(){

	$("#sectionWrapper").find(">section").css("height", sc_h);
	$("#content1 .bg").css("height",sc_h);
	//var section2_top=$("#content2").css("top",s_height*1);
	//var section3_top=$("#content3").css("top",s_height*2);
	}
	move();

	function mainVisual () {
		var _mainContent = $("#content1");
		var total = _mainContent.find("#content1 .area .visualBtn li").size();	//슬라이더 총개수

	//ⓐ 메인 비쥬얼 배경 이미지 변경
			_mainContent.children(".bg").first().show().siblings(".bg").hide();		//초기화면에 첫번째 이미지만 보이게 제어
			
			_mainContent.find(".visualBtn li a").on("focus mouseenter",function  () {
				tgNum = $(this).parent().index() + 1;
				tgNum = ".bgtype" + tgNum;
				console.log(tgNum);

				_mainContent.children(tgNum).stop().fadeIn().siblings(".bg").stop().fadeOut();
			});


	}
	mainVisual ();
	

	
			//페이지 전체 resize
		$(window).on("resize", function  () {
			var pageHei = $(this).height();
			var pageWid = $(this).width();

			$("#content3").css({height:pageHei}).children("#area2").css({width:pageWid-700-21});
			//높이값이 낮을 경우 제어문 더 필요함
			if (pageWid>1650) {
				$("#content3 #area2").css({width:900});
			}
			$("#area1").css("height", area1);
		});
		$(window).trigger("resize");

		function test () {


		}
		test();

		//image rolling
		$(document).ready(function (){
		//동작시간이나 easing 추가는 원하는 대로
			function rolling () {
				var _rollingUl = $("#area1 ul");
				/*var pageHei = $(this).height();

					_rollingUl.append(_rollingUl.children().first().clone()).stop().animate({top:-pageHei}, 5200, function () {
						$(this).children().first().remove();
						$(this).css("top", 0);
					});
				*/
				function move () {
					_rollingUl.append(_rollingUl.children().first().clone()).stop().animate({top:-420},2800, function () {
						$(this).children().first().remove();
						$(this).css("top", 0);
					});
				}

				move();
				var roll = setInterval(move, 3000)
				_rollingUl.on({
					mouseenter : function  () {
						clearInterval(roll);
					},
					mouseleave : function  () {
						move();
					}
				});
			}
			rolling();
		});
});