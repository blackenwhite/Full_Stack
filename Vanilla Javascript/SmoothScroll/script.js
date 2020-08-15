function SmoothScroll(target,duration){
    var target=document.querySelector(target);
    // console.log(target);
    var targetPosition=target.getBoundingClientRect().top;
    //console.log(targetPosition);
    var startPosition=window.pageYOffset;
    var distance=targetPosition-startPosition;

    var startTime=null;

    function animation(currentTime){
        if(startTime===null) startTime=currentTime;
        var timeElapsed=currentTime-startTime;
        var run=Math.easeInQuad(timeElapsed,startPosition,distance,duration);
        window.scrollTo(0,run);
        if(timeElapsed<duration) requestAnimationFrame(animation);
    }

    Math.easeInQuad = function (t, b, c, d) {
        t /= d;
        return c*t*t + b;
    };
    
    requestAnimationFrame(animation);

}



//SmoothScroll('.section2',1000);
var section1=document.querySelector('.section1');

section1.addEventListener('click',function(){
    SmoothScroll('.section2',2000);
});