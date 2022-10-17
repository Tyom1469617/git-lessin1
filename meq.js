x=7
y=5
c=0

c=x
x=y
y=c

console.log(x)
console.log(y)




































(function(){
    document.onscroll=function(){


    var s=document.body.scrollTop
    document.querySelector('.a1').innerHTML=s	

    


    var lier=document.querySelectorAll('.nav')
    if (s>0&&s<1000) {
    	lier[0].classList.add('active')
    	lier[1].classList.remove('active')
    	lier[2].classList.remove('active')
    }

    else if (s>1000&&s<2000){
    	lier[1].classList.add('active')
    	lier[0].classList.remove('active')
    	lier[2].classList.remove('active')

    }
    else if (s>2000&&s<3000){
    	lier[2].classList.add('active')
    	lier[0].classList.remove('active')
    	lier[1].classList.remove('active')

    }





    if (s>500&&s<1500) {
    	document.querySelector('.a3').style.animation='kku 1s forwards'
    }else{
    	document.querySelector('.a3').style.animation='kkuh 1s forwards'
    }

     
    if (s>500&&s<1500) {
    	document.querySelector('.a4').style.animation='kk 1s forwards'
    }else{
    	document.querySelector('.a4').style.animation='kkt 1s forwards'
    }





    }
})()



(function(){

     document.onscroll=function(){

        var i=document.body.scrollTop

       if(i>100){
        document.querySelector('.dzax').style.animation="ara 2s forwards"
        document.querySelector('.aj').style.animation="ara1 3s forwards"
       }



     }


})()
