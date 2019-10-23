var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
// ctx.fillRect(10, 10, 150, 150);
// ctx.fillStyle = 'rgb(0, 255, 255, 0.5)';
// ctx.fillRect(70, 70, 150, 150);

function pointy_hex_corner(x0, y0, i, size) {
    var rad = Math.PI/180*(60*i-30);
    return [x0 + size*Math.cos(rad), y0 + size*Math.sin(rad)];
}

function draw_hexagon(x0, y0, size) {
    var p;
    p = pointy_hex_corner(x0, y0, 0, 10);
    ctx.moveTo(p[0], p[1]);
    ctx.beginPath();
    for (let i = 0; i<6; i++) {
        p = pointy_hex_corner(x0, y0, i+1, size);
        ctx.lineTo(p[0], p[1]);
    }
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
}

function draw_field(x0, y0, size) {
    for (let i = 0; i<10; i++) {
        for (let j = 0; j<10; j++) {
            draw_hexagon(x0+(i+(j%2)/2)*Math.sqrt(3)*size, y0+j*3/2*size, size);
        }
    }
}


ctx.strokeStyle = 'rgb(0, 0, 180)';
ctx.fillStyle = 'rgb(0, 255, 170)';
draw_field(50, 50, 30);
