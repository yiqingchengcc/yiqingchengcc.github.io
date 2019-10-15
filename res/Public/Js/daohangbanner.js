$(function(){
		  /*����ƹ������Ұ�ť��ʾ*/
$(".pictab").hover(function(){
	$(this).find(".prev,.next").fadeTo("show",0.1);
},function(){
	$(this).find(".prev,.next").hide();
})
/*����ƹ�ĳ����ť ������ʾ*/
$(".prev,.next").hover(function(){
	$(this).fadeTo("show",0.7);
},function(){
	$(this).fadeTo("show",0.1);
})
	$(".pictab").slide({ titCell:".num ul" , mainCell:".pictabul" , effect:"fold", autoPlay:true, delayTime:100 , autoPage:true });
})
