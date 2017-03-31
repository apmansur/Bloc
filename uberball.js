function findBall(scale, ball_count) {
  var arrBalls=[];
  
   
  for (var i=0; i<ball_count; i++){
    arrBalls.push(i);
  }
  
  while (arrBalls.length>1){
    var third = Math.ceil(arrBalls.length/3);
    var a = arrBalls.slice(0,third);
    var b = arrBalls.slice(third, third * 2);
    var c=  arrBalls.slice(a.length + b.length, arrBalls.length);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    var result = scale.getWeight(a,b);
    if (result == -1) arrBalls = a;
    else if(result == 1) arrBalls = b;
    else arrBalls = c;
  }
  return arrBalls[0];
}
