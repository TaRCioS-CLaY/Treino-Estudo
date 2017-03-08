var canvas = document.getElementById("mycanvas");
var ctx = canvas.getContext("2d");
var Width =  canvas.width;
var Height = canvas.height;
var teclas = {};

var player = {
    x: Width/2 - 75 ,
    y: Height - 50 ,
    largura: 150 ,
    altura: 25 ,
    speed: 15,
    dirx: 0 
};

var bola = {
    x: Width/2 - 25 ,
    y:  Height - 200,
    largura:  25,
    altura:  25,
    dirx: 1 ,
    diry: 1  ,
    speed: 1.0005
};
/*
var blocos = {
    x:  ,
    y:  ,
    largura:  ,
    altura:  ,

};
*/
// 65 e 37 sao a esquerda
//68 e 39 sao a direita
document.addEventListener("keydown", function(e) {
    teclas[e.keyCode] = true;
},false);

document.addEventListener("keyup", function(e) {
    delete teclas[e.keyCode];
},false);

function moveP() {
    if(65 in teclas && player.x>0){
        player.x -= player.speed;
    }else if(68 in teclas && player.x + player.largura < Width){
        player.x += player.speed;
    }
    if(37 in teclas && player.x>0){
        player.x -= player.speed;
    }else if(39 in teclas && player.x + player.largura < Width){
        player.x += player.speed;
    }
    
}

function moveB() {
    //Movimento horizontal
    if(bola.x<=0){
        bola.dirx = 1 ;
    }else if(bola.x + bola.largura>=Width) {
        bola.dirx = -1;
    }

    //Movimento vertical

    if( bola.y<=0){
        bola.diry = 1;
    } else if(bola.y + bola.altura  >= player.y && bola.x >= player.x && bola.x <= player.x + player.largura ){
        bola.diry = -1;
    }

    bola.x += (bola.speed * bola.dirx);
    bola.y += (bola.speed * bola.diry);
}



 function desenha(){
     ctx.clearRect(0,0,Width,Height);
     moveP();
     moveB();
    ctx.fillStyle = "white";
    ctx.fillRect(player.x ,player.y ,player.largura ,player.altura);
    ctx.fillRect(bola.x,bola.y, bola.largura, bola.altura);
    setTimeout(desenha, 10);
 }

 desenha();

 
