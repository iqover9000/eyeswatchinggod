$(document).ready(function() {
	
	var $linkSet = $('#likes a');
	var tl;
	
	var createAnimation = function(id) {
		tl = new TimelineMax({paused: true});
		
		tl.add( TweenMax.fromTo($('#' + id + ' .div0'), 0.3, {width: 0}, {width: "100%"}) );
		tl.add( TweenMax.fromTo($('#' + id + ' .div1'), 0.3, {width: 0}, {width: "100%", delay: -0.3}) );
		tl.add( TweenMax.to($('#' + id + ' .div2'), 0.25, {height: "50%"}) );
		tl.add( TweenMax.to($('#' + id + ' .div3'), 0.25, {height: "50%", delay: -0.25}) );
		tl.add( TweenMax.to($('#' + id + ' .div4'), 0.25, {height: "50%", delay: -0.25}) );
		tl.add( TweenMax.to($('#' + id + ' .div5'), 0.25, {height: "50%", delay: -0.25}) );
	};
	
	$linkSet.hover(enter, leave);
	
	function enter() {
		createAnimation($(this).attr('id'));
		tl.play();
	}
	
	function leave() {
		tl.reverse();
	}
	
});