AOS.init();
$(document).ready(function(){
	$(".mostrar").hide();
	$(".ocultar").click(function(){
		$(this).next(".mostrar").slideToggle(600);
	});
}); 
$('.arrow').on('click', function() {
	$(this).toggleClass('active');
});
$('.arrow--l-r').on('click', function() {
	$(this).toggleClass('left right');
});

var slidesIncentivadores = 1;
showIncentivadores(slidesIncentivadores);

function plusIncentivadores(n){
  showIncentivadores(slidesIncentivadores += n);
}

function showIncentivadores(n){
  var i;
  var x = document.getElementsByClassName("contEncouraging-container");
  if (n > x.length) {slidesIncentivadores = 1}
  if (n < 1 ) {slidesIncentivadores = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slidesIncentivadores-1].style.display = "flex";
};

var slidesProjects = 1;
showProjects(slidesProjects);

function plusProjects(n){
  showProjects(slidesProjects += n);
}

function showProjects(n){
  var i;
  var x = document.getElementsByClassName("contProject-container");
  if (n > x.length) {slidesProjects = 1}
  if (n < 1 ) {slidesProjects = x.length};
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slidesProjects-1].style.display = "flex";
};

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
