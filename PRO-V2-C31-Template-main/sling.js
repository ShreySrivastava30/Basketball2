class Sling{
    constructor(bodyA,pointB){
        this.pointB = pointB
      var options = {
          bodyA:bodyA,
          pointB:pointB,
          stiffness:0.04,
          length:10
      }

      this.sling = Constraint.create(options)
      World.add(world,this.sling)
    }

    display(){
push()
line(this.sling.bodyA.position.x,this.sling.bodyA.position.y,this.pointB.x,this.pointB.y)
pop()
    }
}