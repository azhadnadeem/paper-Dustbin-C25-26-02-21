class Paper {
    constructor(x,y) {
        var options={
            isStatic:false,
            density:0.2,
            friction:0.5,
            restitution:0.5,
            
        }
        this.body=Bodies.rectangle(x,y,50,50,options);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("paper.png")
        World.add(world,this.body);
    }
    display(){
       
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
      
        strokeWeight(3);
        fill(255,0,255);
       
        imageMode(CENTER)
        image(this.image,0,0,this.width,this.height);
        pop();
    }

}