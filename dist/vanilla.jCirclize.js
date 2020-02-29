function circlize(e, options){
    let defaults = {
        radius: 100,
        percentage: 50,
        usePercentage: true,
        background: "rgba(20,20,20,0.5)",
        foreground: "#1a1a1a",
        stroke: 20,
        duration: 1000,
        min: 100,
        max: 100
    };
    let opts = Object.assign({}, defaults, options);
    let perc, box, x, y, html, context, cnv, ctn, speed, counter=1;
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
    let timerId = setInterval(function() {
        counter++;
        if(opts.usePercentage){
            cnv[2].innerHTML = counter + "%";
            context.beginPath();
            context.arc(x, y, opts.radius, (2-(counter/100)*2)*Math.PI, 2*Math.PI);
            context.fillStyle = "transparent";
            context.fill();
            context.strokeStyle = opts.foreground;
            context.lineWidth = opts.stroke;
            context.stroke();
        }else{
            cnv[2].innerHTML = (counter * 10)/10 + "/" + (opts.max * 10)/10;
            context.beginPath();
            context.arc(x, y, opts.radius, (2-(counter/opts.max)*2)*Math.PI, 2*Math.PI);
            context.fillStyle = "transparent";
            context.fill();
            context.strokeStyle = opts.foreground;
            context.lineWidth = opts.stroke;
            context.stroke();
        }
        if (counter === perc){
            clearInterval(timerId);
        }
    },speed);
    ctn = cnv[1].getContext("2d");
	ctn.beginPath();
	ctn.arc(x, y, opts.radius, 0*Math.PI, 2*Math.PI);
	ctn.fillStyle = "transparent";
	ctn.fill();
	ctn.strokeStyle = opts.background;
	ctn.lineWidth = opts.stroke;
	ctn.stroke();
}