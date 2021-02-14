class Box {
    constructor(x, y, w, h) {
      var options = {
        isStatic:true,
        //density:10.0, 
        //restitution:0.5,

      }
      this.body = Bodies.rectangle(x, y, w, h, options);
      this.width = w;
      this.height = h;
      
      World.add(world, this.body);
    }
     display(){
     var pos =this.body.position;
      rectMode(CENTER);
      fill("red");
      rect(pos.x, pos.y,this.width, this.height)
      
    }
    }