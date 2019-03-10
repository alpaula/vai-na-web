function lang(){
  if((navigator.language) === 'pt-BR'){
    language = 'pt-BR'
  }else{
    language = 'en'        
  }
  changeLanguage();
}

function changeLanguage(){
  var home__titleEnglish = document.getElementById('home__title-english');
  var riMobEnglish = document.getElementById('4riMob-english');
  var contactMobEnglish = document.getElementById('contactMob-english');
  var langMobEnglish = document.getElementById('langMob-english');
  var riEnglish = document.getElementById('4ri-english');
  var contactEnglish = document.getElementById('contact-english');
  var langEnglish = document.getElementById('lang-english');
  
  var home__titlePortuguese = document.getElementById('home__title-portuguese');
  var riMobPortuguese = document.getElementById('4riMob-portuguese');
  var contactMobPortuguese = document.getElementById('contactMob-portuguese');
  var langMobPortuguese = document.getElementById('langMob-portuguese');
  var riPortuguese = document.getElementById('4ri-portuguese');
  var contactPortuguese = document.getElementById('contact-portuguese');
  var langPortuguese = document.getElementById('lang-portuguese');

  if( language === 'pt-BR'){
    home__titleEnglish.style.display = 'none',
    home__titlePortuguese.style.display = 'block'
    riMobEnglish.style.display = 'none',
    riMobPortuguese.style.display = 'block'
    contactMobEnglish.style.display = 'none',
    contactMobPortuguese.style.display = 'block'
    langMobEnglish.style.display = 'none',
    langMobPortuguese.style.display = 'block'
    riEnglish.style.display = 'none',
    riPortuguese.style.display = 'block'
    contactEnglish.style.display = 'none',
    contactPortuguese.style.display = 'block'
    langEnglish.style.display = 'none',
    langPortuguese.style.display = 'block'
  }else{
    home__titleEnglish.style.display = 'block',
    home__titlePortuguese.style.display = 'none'
    riMobEnglish.style.display = 'block',
    riMobPortuguese.style.display = 'none'
    contactMobEnglish.style.display = 'block',
    contactMobPortuguese.style.display = 'none'
    langMobEnglish.style.display = 'block',
    langMobPortuguese.style.display = 'none'
    riEnglish.style.display = 'block',
    riPortuguese.style.display = 'none'
    contactEnglish.style.display = 'block',
    contactPortuguese.style.display = 'none'
    langEnglish.style.display = 'block',
    langPortuguese.style.display = 'none'
  }
}

function changeLanguageClick(){
  if(language === 'pt-BR'){
    language = 'en'
  }else{
    language = 'pt-BR'        
  }
  changeLanguage();
  closeMenu()
}