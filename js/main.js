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
	
	function cntHeight(){
		$(window).on("resize", function  () {
			var pageHei = $(this).height();
			var pageWid = $(this).width();

			//각 section 높이값 창크기에 변화가 있을때 제어
			$("#sectionWrapper > section").css("height", pageHei);
			$("#content1 .bg").css("height",pageHei);

			//if (pageWid>1650) {
			//	$("#content3 #area2").css({width:900});
			//}else {
				$("#content3 #area2").css({width:pageWid-955});
			//}

			//content2 세로 정렬
			if (pageHei>814) {
				var content2Area =parseInt($("#content2 .area").css("height"));
				var margint=(pageHei-content2Area)/2;
				var marArs=Math.abs(margint);
				$("#content2 .area").css("marginTop",marArs)
					//console.log(pageHei);
					//console.log(marArs);
			}
		});
		$(window).trigger("resize");//초기화 부터 이벤트 강제 적용 하기
	}
	cntHeight();

	// 신현주 a링크 스무스 하게 이동 스크립트(해결) 
	$("#gnb .navigation li a").on("click",function(){
		var targetContentIndex=$(this).parent().index();
		var toContent=$("#gnb .navigation li").eq(targetContentIndex).find(">a");
		var target=$(this).attr("href");
		//console.log(target);
		var posY=$(target).offset().top;
		//console.log(posY);
		$("html, body").animate({scrollTop:posY},"slow");
			return false;
	});
/*	

	var toContent2=$("#gnb .navigation li").eq(0).find(">a");
    var toContent3=$("#gnb .navigation li").eq(3).find(">a");
	toContent2.on("click",function(){
		console.log("고"+targetContentIndex);
				var target=$(this).attr("href");
				console.log(target);
	
				var posY=$(target).offset().top;

			$("html, body").animate({scrollTop:posY},"slow");
			return false;
	});


	toContent3.on("click",function(){
		
		console.log("고 스토리 ");
				var target=$(this).attr("href");
				console.log(target);
	
				var posY=$(target).offset().top;

			$("html, body").animate({scrollTop:posY},"slow");
			return false;
	});
*/

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
	
	//image rolling

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