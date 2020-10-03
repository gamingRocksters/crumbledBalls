class Ball{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0.3,
            friction:0.5,
            density:1.5
        }
        this.body = Bodies.circle(x,y,r,options);
        this.r = r;
        World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        fill("violet");
        rectMode(CENTER);
        circle(pos.x,pos.y,this.r);
    }
}