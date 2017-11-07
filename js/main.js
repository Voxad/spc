
document.addEventListener('DOMContentLoaded',drawboard,false);
function drawboard(){
    // your code here.


var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var lineWidth = 5;
var cols = 50;
var rows = 50;
var tiles = [];

for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= cols; j++) {
        // Draw rect
        ctx.beginPath();
				ctx.lineWidth="1";
				ctx.strokeStyle="red";
        var x = i*10;
        var y = j*10;
				ctx.rect(x,y,10,10); 
        ctx.stroke();
				
        
        // push circle info as objects:
        tiles.push({
            id: '['+i+','+j+']',    // some ID
            x: x,
            y: y,
        });
      
    }
      
}



canvas.onclick = function(e) {
x = e.offsetX
y = e.offsetY
while (tile = tiles[i++]){
if (x > tile.x && x < tile.x+10 && y > tile.y && y < tile.y+10){
alert(tile.id);
}
}
}

}
