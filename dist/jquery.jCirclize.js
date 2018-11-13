(function( $ ){
	$.fn.circlize = function(options) {
		var defaults = {
			radius: 100,
			perc: 50,
			background: "rgba(20,20,20,0.5)",
			foreground: "#1a1a1a",
			stroke: 20,
			duration: 1000
		};
		var opts = $.extend(true ,{}, defaults, options );
		return this.each(function() {
			var angle, box, x, y, html, context, cnv, ctn, counter=0;
			box = (Math.PI*(opts.radius));
			x = box/2;
			y = box/2;
			html = "<canvas class=\"circle lol\" width="+box+" height="+box+"></canvas>" + 
						"<canvas class=\"circle sad\" width="+box+" height="+box+"></canvas>" +
						"<div class=\"percentage\">"+ opts.perc +"</div>";
			$(this).append(html);
			$(this).addClass("canvasized");
			cnv = $(this).children(".circle");
			context = $(cnv)[0].getContext("2d");
			context.translate(0, box);
			context.rotate(-Math.PI / 2);
			jQuery({ counter: 0 }).animate({ counter: $(".percentage").text()}, {
				duration: opts.duration,
				easing: "swing",
				step: function () {
				  $(".percentage").text(Math.ceil(this.counter) + "%");
				  context.beginPath();
				  context.arc(x, y, opts.radius, (2-(Math.ceil(this.counter)/100)*2)*Math.PI, 2*Math.PI);
				  context.fillStyle = "transparent";
				  context.fill();
				  context.strokeStyle = opts.foreground;
				  context.lineWidth = opts.stroke;
				  context.stroke();
				}
			  });
			ctn = $(cnv)[1].getContext("2d");
			ctn.beginPath();
			ctn.arc(x, y, opts.radius, 0*Math.PI, 2*Math.PI);
			ctn.fillStyle = "transparent";
			ctn.fill();
			ctn.strokeStyle = opts.background;
			ctn.lineWidth = opts.stroke;
			ctn.stroke();
		});
	};
})( jQuery );
