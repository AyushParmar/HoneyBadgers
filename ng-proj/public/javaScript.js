   function showhide() {
    var element = document.getElementById("disp_toggler");
    var element2 = document.getElementById("disp_toggler2");    
    element.classList.toggle("disp_tog");
    element2.classList.toggle("disp_tog");
    var readmore = document.getElementById("readmore");
    if(readmore.innerHTML==='READ MORE'){
      readmore.innerHTML = 'READ LESS';
      var arrow = document.getElementById("arrow");
      arrow.classList.add("arrowup");
    }else{
       readmore.innerHTML = 'READ MORE';
       var arrow = document.getElementById("arrow");
       arrow.classList.remove("arrowup");
    }
 }
 function showhide11() {
   var element = document.getElementById("disp_toggler10");    
   element.classList.toggle("disp_tog");
   var readmoremob = document.getElementById("readmoremob");
   if(readmoremob.innerHTML==='READ MORE'){
      readmoremob.innerHTML='READ LESS';
      var arrow2 = document.getElementById("arrow2");
      arrow2.classList.add("arrowup");
   }else{
      readmoremob.innerHTML = 'READ MORE';
      var arrow2 = document.getElementById("arrow2");
      arrow2.classList.remove("arrowup");
   }

}

 function showhide3(){
    var element3 = document.getElementById("disp_tog3");
    element3.classList.toggle("disp_tog")
    var plus =document.getElementById("faqex3");
    if(plus.innerHTML==='+'){
       plus.innerHTML='-';
    }else{
       plus.innerHTML='+';
    }
 }

 function showhide4(){
    var element4 = document.getElementById("disp_tog4");
    element4.classList.toggle("disp_tog");
    var plus =document.getElementById("faqex4");
    if(plus.innerHTML==='+'){
       plus.innerHTML='-';
    }else{
       plus.innerHTML='+';
    }
 }
 function showhide5(){
    var element5 = document.getElementById("disp_tog5");
    element5.classList.toggle("disp_tog");
    var plus =document.getElementById("faqex5");
    if(plus.innerHTML==='+'){
       plus.innerHTML='-';
    }else{
       plus.innerHTML='+';
    }
 }
 function showhide6(){
    var element6 = document.getElementById("disp_tog6");
    element6.classList.toggle("disp_tog");
    var plus =document.getElementById("faqex6");
    if(plus.innerHTML==='+'){
       plus.innerHTML='-';
    }else{
       plus.innerHTML='+';
    }
 }
 function showhide8(){
   var element6 = document.getElementById("disp_tog8");
   element6.classList.toggle("disp_tog");
   var plus =document.getElementById("faqex8");
    if(plus.innerHTML==='+'){
       plus.innerHTML='-';
    }else{
       plus.innerHTML='+';
    }
}
function showhide9(){
   var element6 = document.getElementById("disp_tog9");
   element6.classList.toggle("disp_tog");
   var plus =document.getElementById("faqex9");
    if(plus.innerHTML==='+'){
       plus.innerHTML='-';
    }else{
       plus.innerHTML='+';
    }
}
function comingsoon(){
   Swal.fire({imageUrl: 'image/badgerflatcolor2.png',
                        background: 'rgba(0, 0, 0, 0.87)',
                        imageWidth: 200,
                        imageHeight: 200, 
                        title: 'We will open soon!',
                        })
}



 $(window).on('load resize scroll', function() {
    $('.bg-static').each(function() {
      var windowTop = $(window).scrollTop();
      var elementTop = $(this).offset().top;
      var bottomPosition = (windowTop*1.5) - (1.1*elementTop);
        $(this)
          .find('.bg-move')
          .css({ bottom: bottomPosition });
    });
  });
  $(document).ready(function () {
   var video = document.getElementById("tm-welcome-video");

   video.onloadeddata = function() {
       $('#tm-video-text-overlay').removeClass('d-none');
       $('#tm-video-loader').addClass('d-none');

       $('#rotate').rotaterator({
           fadeSpeed: 1000,
           pauseSpeed: 300
       });
   }
});

$(document).ready(function () {
   var video = document.getElementById("tm-welcome-video-01");

   video.onloadeddata = function() {
       $('#tm-video-text-overlay').removeClass('d-none');
       $('#tm-video-loader').addClass('d-none');

       $('#rotate').rotaterator({
           fadeSpeed: 1000,
           pauseSpeed: 300
       });
   }
});

function fnBrowserDetect(){
                 
   let userAgent = navigator.userAgent;
   let browserName;
   var classlistcont = document.getElementById("tm-welcome-video-01").classList;
   var classlistcont2 = document.getElementById("safari-browser").classList;
   

   if(window.innerWidth < 640){
      document.getElementById("jumpto").href = "#honeybadgerscare1";
      document.getElementById("gallerylink").href = "#gallery2";
   } else if(window.innerWidth > 640 && window.innerWidth < 1008){
      document.getElementById("jumpto").href = "#honeybadgerscare";
   } else{
      document.getElementById("jumpto").href = "#honeybadgerscare2";
   }


   if(userAgent.match(/firefox|fxios/i)){
       browserName = "firefox";
     }else if(userAgent.match(/chrome|chromium|crios/i)){
       browserName = "chrome";
     }  else if(userAgent.match(/safari/i)){
       browserName = "safari";
       classlistcont.add("hide-101");
       classlistcont.remove("show-101");
       classlistcont2.add("show-101");
       classlistcont2.remove("hide-101");
     }else if(userAgent.match(/opr\//i)){
       browserName = "opera";
     } else if(userAgent.match(/edg/i)){
       browserName = "edge";
     }else{
       browserName="No browser detection";
     }
   
    console.log(browserName);
   
 }
 function playbutton() {
   var mediaPlayer = document.getElementById('audio_play');
   if (mediaPlayer.paused) {
       mediaPlayer.play(); 
       $('.pause-btn').show();
       $('.play-btn').hide();
   } else {
       mediaPlayer.pause(); 
       $('.play-btn').show();
       $('.pause-btn').hide();
   }
}

 function ownership(){
   Swal.fire({imageUrl: 'image/key-dynamic-premium.png',
               background: 'rgba(0, 0, 0, 0.87)',
               imageWidth: 70,
               imageHeight: 70, 
               title: 'Ownersihp',
               text: 'We pride ourselves on the uniqueness of our artwork and wish to share this with our community. You absolutely and unconditionally own all rights over the artwork of every Honey Badgers NFT that you own. Want to create a tshirt, coffee mug, a derivative work, a verified twitter PFP or just post it all over the internet? You are not only allowed but encouraged to do it!',
               
            })
 }
 function orgart(){
   Swal.fire({imageUrl: 'image/paint-kit-dynamic-premium.png',
               background: 'rgba(0, 0, 0, 0.87)',
               imageWidth: 70,
               imageHeight: 70, 
               title: 'Original Art',
               text: 'Each unique piece of art is generated from a selection 221 handcrafted elements spanning accross 13 categories, including complex hand positions. Your piece of artwork is unique and has been meticulously created to ensure that it does not infringe on any form of trademark, copyright or brand identity.',
               
            })
 }
 function listing(){
   Swal.fire({imageUrl: 'image/sheild-dynamic-premium.png',
               background: 'rgba(0, 0, 0, 0.87)',
               imageWidth: 70,
               imageHeight: 70, 
               title: 'Listing',
               text: 'NF Honeybadgers will verify on Opensea and list on Rarity Tools, making their presence felt on the world above.'               
            })
 }
 function security(){
   Swal.fire({imageUrl: 'image/locker-dynamic-premium.png',
               background: 'rgba(0, 0, 0, 0.87)',
               imageWidth: 70,
               imageHeight: 70, 
               title: 'Security',
               text: 'Your NFT’s uniqueness is guaranteed and the sanctity, safety and security of your NFT’s original metadata and your unique high resolution image is our foremost responsibility. We have programmed our smart contract in the most robust way to ensure that we are prepared for all possible contingencies. We have the systems in place to ensure that the metadata of minted NFTs is revealed within an expedient timeframe post sale in a way that is secure, and and at the same time prevents the metadata of unminted NFTs from being revealed to avoid malicious trait snipers.',
               
            })
 }
 function fairdis(){
   Swal.fire({imageUrl: 'image/chart-dynamic-premium.png',
               background: 'rgba(0, 0, 0, 0.87)',
               imageWidth: 70,
               imageHeight: 70, 
               title: 'Fair Pricing',
               text: 'We believe in growing our collection’s floor price together as a community after our launch, not before - as well as to give the floor price plenty of room to grow up into! It is for this reason that our NFTs are modestly priced at only 0.05 ETH (+ gas) per NFT in our Public sale, and only 0.04 ETH (+ gas) per NFT in our limited pre-sale of only 500 NFTs exclusively reserved for our most loyal and engaged community members (join the whitelist before spots run out!).',
               
            })
 }
 function anatomy(){
   Swal.fire({
      imageUrl: 'image/Figma banner original.png',
      imageHeight: 600,
      background: '#000000',
      width: 2500,
      imageAlt: 'A tall image',
      confirmButtonText:
    '<i class="fa fa-thumbs-up"></i> Great!'
    })
 }


