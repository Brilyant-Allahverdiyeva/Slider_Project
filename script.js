var models = [
    {
        name : 'Ford',
        image : 'img/ford.jpg',
        link : 'http://www.arabalar.com.tr/ford/puma/2020/1-0-style-at'
    },
    {
        name : 'Honda',
        image : 'img/honda.jpg',
        link : 'http://www.arabalar.com.tr/honda/civic/2020/1-6-elegance-eco-cvt'
    },
    {
        name : 'Hyundai',
        image : 'img/hyundai.jpg',
        link : 'http://www.arabalar.com.tr/hyundai/i20/2020/yeni-1-0-style-plus-dct'
    },
    {
        name : 'Mercedes',
        image : 'img/mercedes.jpg',
        link : 'http://www.arabalar.com.tr/mercedes/c-serisi/2020/c200-d-1-6-exclusive'
    },
    {
        name : 'Volkswagen',
        image : 'img/volkswagen.jpg',
        link : 'http://www.arabalar.com.tr/volkswagen/polo/2020/1-0-tsi-comfortline-dsg'
    }
];

var index = 2;
var slidecount=models.length;
var interval;

var settings={
    duration:'1000',
    random:true
}

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
    console.log(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
   index++;
   showSlide(index);
   console.log(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
})

function init(settings){
 
    var prev;
  interval=setInterval(function(){

      if(settings.random){
       do{
         index=Math.floor(Math.random()*slidecount);
       }while(index==prev)
       prev=index;
      }
      else{
        if(slidecount==index+1){
            index=-1;
        }
        showSlide(index);
        index++;
      }
      showSlide(index);

    },settings.duration)
}

function showSlide(i){

    index=i;

    if(i<0){
       index=slidecount-1;
    }

    if(i>= slidecount){
        index=0;
    }

document.querySelector('.card-title').textContent=models[index].name;
document.querySelector('.card-img-top').setAttribute('src',models[index].image);
document.querySelector('.card-link').setAttribute('href',models[index].link);
}

