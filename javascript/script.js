AOS.init();  
        $(document).ready(function()
        {
        $(".mostrar").hide();
        $(".ocultar").click(function()
        {
        $(this).next(".mostrar").slideToggle(600);
        });
        }); 
        $('.arrow').on('click', function() {
        $(this).toggleClass('active');
        });
        $('.arrow--l-r').on('click', function() {
        $(this).toggleClass('left right');
        });
// function lang(){
 
//     if((navigator.language) === 'pt-BR'){
//       language = 'pt-BR'
//     }else{
//       language = 'en'        
//     }
//     console.log(changeLanguage())
//     changeLanguage();
//   }
//   function changeLanguage(){  
//      var paragraphEn = document.getElementById('paragraphEn')
//      var paragraphPt = document.getElementById('paragraphPt') 
//      if( language === 'pt-BR'){
//        paragraphEn.style.display = 'none',
//        paragraphPt.style.display = 'block'
//      }else{
//        paragraphEn.style.display = 'block',
//        paragraphPt.style.display = 'none'
//      }
//   }   
