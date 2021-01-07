class Slingshot{
    constructor(bodyA, pointB){
        console.log(bodyA)
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.bodyA = bodyA
        this.sling = Constraint.create(options);
       World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body
    }

    display(){
        
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(5);
            stroke(color(48,22,8))
            line(pointA.x, pointA.y, pointB.x, pointB.y);
    
        }
    }
    
}