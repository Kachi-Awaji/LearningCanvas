var canvas, context;

canvas = document.getElementById('firstCanvas');

if (canvas && canvas.getContext) {
    context = canvas.getContext('2d');

    context.moveTo(200,0);
    context.lineTo(200,200);
    context.lineTo(0,200);
    context.fill();

    context.moveTo(200,0);
    context.lineTo(200,200);
    context.lineTo(400,200);
    context.fill();

    context.moveTo(0,200);
    context.lineTo(200,200);   
    context.lineTo(200,400);
    context.fill();
}
