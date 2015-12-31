
function main() {


var ring = torus();
var ringLine1 = cylinder({r: 1, h: 3, round: true})
    .rotateX(90)
    .translate([0,7,0]);

var upperA = cylinder({r: 1, h: 13, round: true
}).rotateX(90);
var upperB = upperA;

var lowerA =  cylinder({r: 1, h: 20, round: true
}).rotateX(90);  

var lowerB = lowerA 
    
   return [
    ring,
    ringLine1,
    upperA.rotateZ(25).translate([-6,19,0]),
    upperB.rotateZ(-25).translate([6,19,0]),
    lowerA.rotateZ(-17).translate([0,38,0]),
    lowerB.rotateZ(17).translate([0,38,0])
   ];
}