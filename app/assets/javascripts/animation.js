$(document).ready(function() {
	
	// canvas vars
	var bg = document.getElementById('arc');
	var ctx = ctx = bg.getContext('2d');
	var circ = Math.PI * (10/6);
	
	// DOM vars
	var img = $('header img');
	var $name = $(".name");
	var $nav = $('nav');
	var $about = $('#about');
	var $body = $('body');
	var $header = $('header');
	
	// TimelineMax vars
	var tlConfig = {
		delay: 4
	};
	var tl = new TimelineMax(tlConfig);
	
	ctx.beginPath();
	ctx.strokeStyle = '#29B6F6';
	ctx.lineCap = 'round';
	ctx.closePath();
	ctx.fill();
	ctx.lineWidth = 15.0;
	
	// imd = ctx.getImageData(0, 0, 240, 240);
	
	var draw = function(current) {
	    // ctx.putImageData(imd, 0, 0);
	    ctx.beginPath();
	    ctx.arc(250, 250, 150, (1/6) * Math.PI, ((circ) * current) + ((1/6) * Math.PI), false);
	    ctx.stroke();
	};
	
	var myFx = new Fx({
	    duration: 3000,
	    transition: 'quart:inOut',
	    onStep: function(step){
	        draw(step / 100);
	    }
	});
	
	myFx.set = function(now){
	    var ret = Fx.prototype.set.call(this, now);
	    this.fireEvent('step', now);
	    return ret;
	};
	
	setTimeout(function (){
	  myFx.start(0, 100);
	}, 1000);
	
	tl.fromTo(img, 1, {autoAlpha: 0}, {autoAlpha: 1});
	
	tl.to(bg, 2, {x: '-= 205px', rotation: 360, ease: Back.easeInOut})
		.to(img, 2, {x: '-= 205px', rotation: 360, delay: -2, ease: Back.easeInOut});
	
	$name.html( $name.html().replace(/./g, "<span>$&</span>").replace(/\s/g, "&nbsp;"));
	tl.staggerFromTo( $name.find("span"), 0.2, {autoAlpha:0}, {autoAlpha:1}, 0.1);
	
	tl.to($nav, 1, {top: 0, ease: Bounce.easeOut});
	tl.fromTo($header, 1, {background: 'rgba(51, 51, 51, 1.0)'}, {background: 'rgba(51, 51, 51, 0.9)'});
	
	tl.set($body, {overflow: 'auto'});
	tl.set($header, {position: 'relative', delay: 1});
	
})