function circlize(e, options){
    var defaults = {
        radius: 100,
        percentage: 50,
        usePercentage: true,
        useAnimations: true,
        useGradient: true,
        background: "rgba(20,20,20,0.5)",
        foreground: "#1a1a1a",
        stroke: 20,
        duration: 1000,
        min: 100,
        max: 100,
        gradientColors: ["#f0f0f0", "red", "#f0f0f0"]
    };
    var opts = Object.assign({}, defaults, options);
    var perc, box, x, y, html, context, cnv, ctn, speed, counter=1, fore, gradient;
    box = (Math.PI*(opts.radius));
    x = box/2;
    y = box/2;
    speed = 1000/60;
    if(opts.usePercentage){
        perc = opts.percentage;
    }else{
         perc = opts.min;
    }
    html = "<canvas class=\"circle\" width="+box+" height="+box+"></canvas>" + 
            "<canvas class=\"circle\" width="+box+" height="+box+"></canvas>" +
            "<div class=\"percentage\">"+ perc +"</div>";
    e.innerHTML = html;
    e.classList.add("canvasized");
    cnv = e.childNodes;
    context = cnv[0].getContext("2d");
    context.translate(0, box);
    context.rotate(-Math.PI / 2);
    if(opts.useGradient){
        gradient = context.createLinearGradient(0,0,opts.radius*Math.PI,0);
        gradient.addColorStop(0, opts.gradientColors[0]);
        gradient.addColorStop(0.5, opts.gradientColors[1]);
        gradient.addColorStop(1, opts.gradientColors[2]);
        fore = gradient;
    }else{
        fore = opts.foreground;
    }
    if(opts.useAnimations){
        var timerId = setInterval(function() {
            counter++;
            if(opts.usePercentage){
                cnv[2].innerHTML = counter + "%";
                context.beginPath();
                context.arc(x, y, opts.radius, (2-(counter/100)*2)*Math.PI, 2*Math.PI);
                context.fillStyle = "transparent";
                context.fill();
                context.strokeStyle = fore;
                context.lineWidth = opts.stroke;
                context.stroke();
            }else{
                cnv[2].innerHTML = (counter * 10)/10 + "/" + (opts.max * 10)/10;
                context.beginPath();
                context.arc(x, y, opts.radius, (2-(counter/opts.max)*2)*Math.PI, 2*Math.PI);
                context.fillStyle = "transparent";
                context.fill();
                context.strokeStyle = fore;
                context.lineWidth = opts.stroke;
                context.stroke();
            }
            if (counter === perc){
                clearInterval(timerId);
            }
        },speed);
    }else{
        if(opts.usePercentage){
            cnv[2].innerHTML = opts.percentage + "%";
            context.beginPath();
            context.arc(x, y, opts.radius, (2-(opts.percentage/100)*2)*Math.PI, 2*Math.PI);
            context.fillStyle = "transparent";
            context.fill();
            context.strokeStyle = fore;
            context.lineWidth = opts.stroke;
            context.stroke();
        }else{
            cnv[2].innerHTML = (opts.min * 10)/10 + "/" + (opts.max * 10)/10;
            context.beginPath();
            context.arc(x, y, opts.radius, (2-(opts.min/opts.max)*2)*Math.PI, 2*Math.PI);
            context.fillStyle = "transparent";
            context.fill();
            context.strokeStyle = fore;
            context.lineWidth = opts.stroke;
            context.stroke();
        }
    }
    ctn = cnv[1].getContext("2d");
	ctn.beginPath();
	ctn.arc(x, y, opts.radius, 0*Math.PI, 2*Math.PI);
	ctn.fillStyle = "transparent";
	ctn.fill();
	ctn.strokeStyle = opts.background;
	ctn.lineWidth = opts.stroke;
	ctn.stroke();
}
