var backdrop = document.querySelector(".backdrop");
var modal=document.querySelector('.modal');
var modalNoButton = document.querySelector(".modal__action--negative")
var selectPlanBuuton = document.querySelectorAll('.plan button')
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');
for (var i=0; i < selectPlanBuuton.length;i++)
{
    selectPlanBuuton[i].addEventListener('click',function(){
        //  modal.style.display='block';
        //  backdrop.style.display='block';
        // modal.className = 'open';overwrite the complete code
        modal.classList.add('open');
        backdrop.classList.add('open');

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
    // backdrop.style.display="none";
    // modal.style.display="none";
    if(modal)
    {
        modal.classList.remove("open")
    }
     backdrop/classList.remove("open");
}
    

toggleButton.addEventListener('click',()=>{
    // mobileNav.style.display='block';
    // backdrop.style.display='block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
});