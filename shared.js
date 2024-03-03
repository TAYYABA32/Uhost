var backdrop = document.querySelector(".backdrop");
var modal=document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative")
var selectPlanBuuton = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
var ctaButton = document.querySelector(".main-nav__item--cta");
for (var i=0; i < selectPlanBuuton.length;i++)
{
    selectPlanBuuton[i].addEventListener('click',function(){
        //  modal.style.display='block';
        //  backdrop.style.display='block';
        // modal.className = 'open';overwrite the complete code
        modal.classList.add('open');
        backdrop.style.display = "block";
        setTimeout(function() {
            backdrop.classList.add('open');
        },10);
        
        

    });
}
backdrop.addEventListener('click',function(){
    // mobileNav.style.display="none";
    mobileNav.classList.remove('open');
    closeModel();
});

if  (modalNoButton) {
    modalNoButton.addEventListener('click',closeModel);

}

function closeModel(){
 
    if(modal)
    {
        modal.classList.remove("open")
    }
    backdrop.classList.remove ("open");
    setTimeout(function() {
        backdrop.style.display="none";
    },200);
     
}
    

toggleButton.addEventListener('click',()=>{
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    mobileNav.classList.add('open');
    backdrop.style.display ='block';
    setTimeout(function() {
        backdrop.classList.add('open');
    },10);
    
});

ctaButton.addEventListener('animationstart',function(event){
    console.log('Animation started',event);
})

ctaButton.addEventListener('animationend',function(event){
    console.log('Animation ended',event);
})
ctaButton.addEventListener('animationiteration',function(event){
    console.log('Animation iteration',event);
})