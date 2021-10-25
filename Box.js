class Box {
    //os argumentos padroes para as informacoes funcionarem
    constructor(x, y, width, height){
        var options = {
            'restitution': 1.0,
            'friction':0.3,
            'density':1.0
        }
//para criar o formato do corpo (retangulo)
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
//add o corpo dentro de um mundo
        World.add(world, this.body);
    }
//add tudo na tela
    display(){
        //para pegar a posicao do corpo
        var pos =this.body.position;
        //para pegar o angulo do corpo
        var angle = this.body.angle;
        //capturar a nova configuracao (translacao e rotacao)
        push();
        //um movimento de um corpo e outro
        translate(pos.x, pos.y);
        //o percurco de um corpo de seu proprio eixo
        rotate(angle);
        //posicionar os corpos no centro
        rectMode(CENTER);
        //preenchimento do contorno do rect
        fill(255);
        //exibe a posicao x e y e altura e largura
        rect( 0, 0, this.width, this.height);
        //reverte para configuracao anterior
        pop();
    }
}