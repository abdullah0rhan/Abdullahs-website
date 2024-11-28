
 const content = {
    EN: {
        name: 'Abdullah Orhan ',
        subtitle: '!',
        //description: ""
    },
    AR: {
        name: 'عبد الله أورهان',
        subtitle: '!',
       // description: ""
    }
};

const languageToggle = document.getElementById('languageToggle');
const body = document.body;
let currentLanguage = 'EN';

languageToggle.addEventListener('click', function() {
    currentLanguage = currentLanguage === 'EN' ? 'AR' : 'EN';
    const element = document.getElementById('name');
    if (element && content[currentLanguage]['name']) {
        element.style.opacity = 0;
        setTimeout(() => {
            element.textContent = content[currentLanguage]['name'];
            element.style.opacity = 1;
        }, 300);
    }
   
    languageToggle.textContent = currentLanguage === 'EN' ? 'AR' : 'EN';
    
    body.classList.toggle('rtl', currentLanguage === 'AR');
});


languageToggle.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
        this.click();
    }
});