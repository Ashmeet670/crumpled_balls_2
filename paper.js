class Paper {
    constructor(x,y) {
        var properties = {
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x , y , 20 , properties);
        World.add(world,this.body) 
    }
    display()   {
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        ellipseMode(CENTER);
        ellipse(0,0,40,40);
        pop();
    }
}