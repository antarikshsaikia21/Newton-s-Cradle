class Rope{

    constructor(body1,body2,offsetX,offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
var option={
    bodyA:body1,
    bodyB:body2,
    pointB:{x:this.offsetX,y:this.offsetY}
}
this.rope=Constraint.create(option)
World.add(world,this.rope);
    }
display(){
    var pointA = this.rope.bodyA.position;
    var pointB = this.rope.bodyB.position;
    strokeWeight(4);
    line(pointA.x-600,pointA.y,pointB.x+80,pointB.y); 
    line(pointA.x-400,pointA.y,pointB.x+280,pointB.y); 
    line(pointA.x-500,pointA.y,pointB.x+180,pointB.y); 
    line(pointA.x-550,pointA.y,pointB.x+130,pointB.y); 
    line(pointA.x-450,pointA.y,pointB.x+230,pointB.y); 
}


}