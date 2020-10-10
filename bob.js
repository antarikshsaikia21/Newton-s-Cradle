class Bob {
 
constructor(x,y,width,height){
  
  this.body=Bodies.circle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
     fill("purple");
    var pos = this.body.position
    ellipseMode(CENTER);
    ellipse(100,330,50,50);
    ellipse(150,330,50,50);
    ellipse(200,330,50,50);
    ellipse(250,330,50,50);
    ellipse(300,330,50,50);
    
  }
   
}