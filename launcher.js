class Chain {
    constructor(bodyA , pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rope = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.rope);
    }

    fly(){
        this.rope.bodyA =null;
    }

    display(){
        if(this.rope.bodyA){
            var pointA = this.rope.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(6);
           // write stroke() to set the color to red
            stroke(64,224,208)
           // Write line() to draw a line from pointA to pointB
            line(pointA.x,pointA.y, pointB.x,pointB.y);
        }
    }
    
}