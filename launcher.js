class Launcher{
	constructor(bodyA,pointB)
	{
		var options={
			length :10,
            stiffness :0.05,
            bodyA :bodyA,
            pointB :pointB
			}
	
		this.pointB = pointB;
        this.bodyA = bodyA;
		this.laun=Constraint.create( options)
		World.add(world, this.laun);
	}
   
    fly(){
        this.laun.bodyA = null;
    }

    attach(bodyA){
    this.laun.bodyA = bodyA
    }

	display()	{
        if(this.laun.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
 }
}
