$(document).ready(function(){
	//신현주 story.html 부분
			function parallaxScrolling () {
				var _storyWrap = $("#storyWrap");
				var pos1 = parseInt(_storyWrap.find(".parallax1").css("top"));
				var pos2 = parseInt(_storyWrap.find(".parallax2").css("top"));
				//console.log(pos1, pos2);

				$(window).on("scroll",function () {
					var scrollY = $(this).scrollTop()*0.5;		//배경사진의 움직이는 속도를 50%로 축소시키기 위해 *0.5 처리
					//console.log(scrollY);

					_storyWrap.find(".fix").each(function (idx) {
						if (idx==0) posY = pos1- scrollY;
						else posY = pos2- scrollY;
						$(this).css({top:posY});
						console.log(idx);
					})
				});
			}
	parallaxScrolling();

	//신현주 store.html부분
		var $frame=$("#frame");
		var $btn=$("#btn");
		var $btnList=$("#btn li");
		var bigImage=$("#big img");
		var total=$btnList.size();

		$(document).on("click","#btn li a",function(){
			var bigArrayList=['가로수길 ','메디슨 애비뉴 ','종샤오 ','콜린스 스트리트',
			'교토','긴자','메이페어','웨스트마운트'];
			var bigStoreLocationList=['서울, South Korea','뉴욕, 미국','타이페이, 대만','멜버른, 호주','교토, 일본','도쿄, 일본','런던, 연합 왕국','몬트리올, 캐나다'];
			var bigHref=$(this).attr("href");
			var bignum=parseInt(bigHref.slice(21,22));
			//console.log(bignum);
			var bigAlt=$(this).text();
	
			bigImage.attr({src:bigHref,alt:bigArrayList[bignum-1]+" 시그니처 매장"}).prev().text(bigAlt);
	
			$("#big .text").find("span").text(bigAlt);
			$("#big .text").find("p").text(bigStoreLocationList[bignum-1]);
			$("#big .introdece").find("span").css("display","none");
			$("#big .introdece").find(".intro_text"+(bignum)).css("display","block");
			
			return false;
		});

		//var _visual = $("#frame #btn");
		$(".prevBtn").on("click", function () {
			if (!$btn.is(":animated")) {	//ul태그가 animate 되지 않을때만 클릭가능
				$btn.prepend($btn.children().last().clone()).css("marginLeft", -232).animate({marginLeft:0}, 200, function () {
					//console.log($(this));
					$(this).children().last().remove();
				});
			}
			return false;
		});

		$(".nextBtn").on("click",function () {
			if (!$btn.is(":animated")) { //ul태그가 animate 되지 않을때만 클릭가능
				$btn.append($btn.children().first().clone()).animate({marginLeft:-232},200,function () {
					//console.log($(this));
					$(this).children().first().remove();
					$(this).css("marginLeft", 0);
				});
			}
			return false;
		});
	//---------------------------------------신현주 끝
	//김민지
	function Effect () {
		var _sbox = $("#skin_box");
		var _sbefore = _sbox.find(".nothover");
		var _shover = _sbox.find(".hover");			

	
		_sbefore.on("mouseenter focus", function () {
			
			$(this).next().fadeIn();

			_shover.on("mouseleave focusout", function () {
				console.log($(this));	
				$(this).stop().fadeOut().prev().find(">img").stop().animate({width:"100%", height:"100%", marginTop:0, marginLeft:0}).next().show();
			});
		});
	}
	Effect ();

	

	function over () {
		var _inbox = $("#in_box");
		var _inbefore = _inbox.find(".in_nothover");
		var _inhover = _inbox.find(".in_hover");			

		_inbefore.on("mouseenter focus", function () {
			
			$(this).next().fadeIn();

			_inhover.on("mouseleave focusout", function () {
				console.log($(this));	//div.after 
				$(this).stop().fadeOut().prev().find(">img").stop().animate({width:"100%", height:"100%", marginTop:0, marginLeft:0}).next().show();
			});
		});
	}

	over();

	function tab () {
		$(".skin_tab > ul > li.on").siblings().children(".tab_btn").siblings().hide();
		$(".skin_tab ul li .tab_btn").on("click", function () {
			$(this).closest(".skin_tab").find("> ul > li.on").removeClass("on").children(".tab_btn").siblings().hide();
			$(this).siblings().show().parent().addClass("on");
		});
	}
	tab();

	var _visual = $("#p_slider ul");
	$("#p_slider #prev").on("click", function () {
		if (!_visual.is(":animated")) {	
			_visual.prepend(_visual.children().last().clone()).css("marginLeft", -220).animate({marginLeft:0}, 200, function () {
				console.log($(this));
				$(this).children().last().remove();
			});
		}
	});

	$("#p_slider #next").on("click",function () {
		if (!_visual.is(":animated")) {
			_visual.append(_visual.children().first().clone()).animate({marginLeft:-220},200,function () {
				console.log($(this));
				$(this).children().first().remove();
				$(this).css("marginLeft", 0);
			});
		}


});

	//p3_effect
		function overEffect () {
		var _pic = $("#pic");
		var _before = _pic.find(".before");
		var _after = _pic.find(".after");
		
		_before.on("mouseenter focus",function  () {
			//1) 초기화 : 마우스를 빠르게 움직이며 생기는 오류 제어
			_after.stop().fadeOut().prev().find(">img").stop().animate({width:"251",height:"280",marginTop:0,marginLeft:0});


			//2) 현재 선택한 것만 활성화->a. before의 img를 fadeTo().
			$(this).next().fadeTo(200, 1);
			$(this).find(">img").stop().animate({width:"+=30",height:"+=30",marginTop:-15,marginLeft:-15});
			console.log($(this));	//a.before
			
			//2) 마우스 진입후에 mouseleave가 가능하므로 진입이벤트 내부에 작성하면 더 우수하다
			_after.on("mouseleave" ,function  () {
			console.log($(this));	//div.after
			$(this).stop().fadeOut().prev().find(">img").stop().animate({width:"251",height:"280",marginTop:0,marginLeft:0}).next().show();
			});			
		});			
	}	
	overEffect ();

});

