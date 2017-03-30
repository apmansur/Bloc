function findBall(scales, ball_count) {
  var arrBalls=[];
  var remainder=arrBalls.length%3;
  var third = Math.round(arrBalls.length/3);
   
  for (var i=0; i<ball_count; i++){
    arrBalls.push(i);
  }
  while (arrBalls.length>2){
    if (remainder === 0){
      var A= arrBalls.slice(0,third);
      var B= arrBalls.slice(third,(third*2));
      var C= arrBalls.slice((third*2), arrBalls.length);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
      var scale= getWeight(A,B);
        switch(scale){
          case 1:
            arrBalls=B;
            break;
          case 0:
            arrBalls=C;
            break;
          case -1:
            arrBalls=A;
          break;
          default:
           return "something went wrong";
        }
    }
    if (arrBalls.length=2 ){
      var A =arrBalls[0];
      var B= arrBalls[1];
      var scale= getWeight(A,B);
      switch(scale){
          case 1:
            arrBalls=B;
            break;
          case -1:
            arrBalls=A;
          break;
          default:
           return "something went wrong 2";   
    }
  
  return arrBalls[0];
}