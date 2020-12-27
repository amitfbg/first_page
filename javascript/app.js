let newButton=document.getElementById("Main_Right_Header_Right");
let newButtonClickedSection=document.getElementById("newButtonClickedBox");
//for new Button
newButton.addEventListener('toggle',
function(e){
    newButtonClickedSection.style.display='block';
}
);


//for hiding the popup box
window.addEventListener('click',
function(e){
if(newButton.contains(e.target)  || newButtonClickedSection.contains(e.target)){
    newButtonClickedSection.style.display='block';
}
else if(devLogo.contains(e.target)  || document.querySelector('.popup').contains(e.target)){
    document.querySelector('.popup-container').style.display='flex';
}
else if(activeUser.contains(e.target) || document.querySelector('.user_content').contains(e.target)){
    document.querySelector('.user_content').style.display='block';
}
else{
    newButtonClickedSection.style.display='none';
    document.querySelector('.user_content').style.display='none';
    document.querySelector('.popup-container').style.display='none';
}
}
)



//for selecting tab
let tabActive=document.getElementsByClassName("Main_Right_Contribution_Box");
for(let i=0;i<tabActive.length;i++){
tabActive[i].addEventListener('click',
function(e){
        let isActive=document.querySelector(".AllDocuments");
        if(isActive){
            isActive.classList.remove("AllDocuments");
        }
        tabActive[i].classList.add("AllDocuments");
    }
)};


//for selecting navigation
let widgetTab=document.getElementsByClassName("Main_Left_Box");
for(let i=0;i<widgetTab.length;i++){
widgetTab[i].addEventListener('click',
function(e){
        let isActive=document.querySelector(".Contributions");
        if(isActive){
            isActive.classList.remove("Contributions");
        }
        widgetTab[i].classList.add("Contributions");
    }
)};

//for selecting Main Right Nav box

let navTab=document.getElementsByClassName("Main_Right_Nav_Box");
for(let i=0;i<navTab.length;i++){
navTab[i].addEventListener('click',
function(e){
        let isActive=document.querySelector(".Documents");
        if(isActive){
            isActive.classList.remove("Documents");
        }
        navTab[i].classList.add("Documents");
    }
)};

//for selecting box inside the popup

let popupNavTab=document.getElementsByClassName("newButtonClickedBox_Box_TextBox");
for(let i=0;i<popupNavTab.length;i++){
popupNavTab[i].addEventListener('click',
function(e){
        let isActive=document.querySelector(".BlogPostChild");
        if(isActive){
            isActive.classList.remove("BlogPostChild");
            isActive.parentNode.classList.remove("BlogPostParent");
        }
        popupNavTab[i].classList.add("BlogPostChild");
        popupNavTab[i].parentNode.classList.add("BlogPostParent");
    }
)};




//Main left button on click enlarge
let enlargeBtn=document.getElementById('Main_Left_Button');
enlargeBtn.addEventListener('click',
function (){
    let en=document.querySelector('.Main_Left_Large');
    en.style.display='flex';
    // en2.style.display='none';
}
)
let enlargeBtnClose=document.getElementById('Main_Left_Large_Button');
enlargeBtnClose.addEventListener('click',
function (){
    let en=document.querySelector('.Main_Left_Large');
    en.style.display='none';
    // en2.style.display='none';
}
)

//user content which is log out
let activeUser=document.querySelector('.Navigation_Top_Right_Group');

activeUser.addEventListener('click',
function(){
    let isActive=document.querySelector('.user_content');
    isActive.style.display='block';
}
);

//for popup box once clicked devcentre
let devLogo=document.querySelector(".Navigation_Top_Left_logo");
devLogo.addEventListener('click',
function (){
    let isActiveParent=document.querySelector('.popup-container');
    // let isActiveChild=document.querySelector('.popup');
    isActiveParent.style.display='flex';
}
);

let closePopupContainerBtn=document.querySelector(".close-popup-container");
closePopupContainerBtn.addEventListener('click',
function (){
    document.querySelector('.popup-container').style.display='none';
}
);
