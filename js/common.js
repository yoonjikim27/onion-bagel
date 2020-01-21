$(document).ready(function(){
	/// 전체메뉴 여닫기
	$("#box #allmenu .util_open").on("click",function  () {
		var _util = $("#util");

		$(this).hide().next().show().next().show().stop().animate({width:400});

		//닫기 버튼은 누른 경우
		$(this).next().on("click", function () {
			$(this).hide().prev().show().siblings("#util").stop().animate({width:0},function () {
				$(this).hide();
			});
		});		
	});

	//네비게이션
	function gnb_on () {
		var $gnb=$("#gnb>ul");
		var activeNav=$("body").attr("id").split("_");		//nav_0_0, nav_2_5
		console.log(activeNav);	//["nav","2","5"]
		var dep1=activeNav[1]-1;		//1
		var dep2=activeNav[2]-1;		//4
		//console.log("depth1? "+dep1+" , depth2? "+dep2);
		
		$gnb.find("> li > ul").hide();	//depth2의 ul 태그는 자동으로 숨기고 시작

		//1)depth1 <a>에 마우스 진입:mouseenter, focus
		$gnb.find(">li>a").on("mouseenter focus",function  () {
			//초기화
			$gnb.find(">li.on").removeClass("on").children("ul").hide();
			//현재설정
			$(this).next().show().parent().addClass("on");

			//depth2 ul 가로 너비 지정 추가
			var subLen = $(this).next().children().size();
			if ($(this).next().attr("class") == "dep2_type") $(this).next().css("width", 120);
			else $(this).next().css("width", subLen*120);
		});

		//2)nav에서 마우스 떠나기:mouseleave
		$gnb.on("mouseleave",function  () {
			//초기화
			$gnb.find(">li.on").removeClass("on").children("ul").hide();

			//현재페이지활성화:dep1, dep2변수 사용
			if (dep1>=0) {		//index를 제외한 서브페이지만 동작
				//dep1제어=>.on
				$gnb.children().eq(dep1).addClass("on");

				//현재페이지활성화 : 뎁스2의 ul을 보여지지 않게 하려면
				if (dep2>=0) {	//depth2 ul이 존재한다면
					$gnb.children().eq(dep1).children("ul").show().children().eq(dep2).addClass("on");
				}
			}
		});

		$gnb.mouseleave();

		//3)blur: shift탭을 눌러서 gnb에서 포커스가 나가던지, 탭을 눌러 gnb에서 포커스가 나가던지, 
		$("#gnb a:first , #gnb a:last").on("blur",function  () {
			setTimeout(function  () {
				if ( !$("#gnb a").is(":focus") ) {
					$gnb.mouseleave();
				}
			}, 10);
		});
	}

	gnb_on();
});