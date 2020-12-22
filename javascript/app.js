let newButton=document.getElementById("Main_Right_Header_Right");
let newButtonClickedSection=document.getElementById("newButtonClickedBox");
newButton.addEventListener('click',
    function(){
        console.log("hello");
        newButtonClickedSection.style.display='block';
    }
);

// document.addEventListener('click',
// function(){
//     if(newButtonClickedSection.style.display=='block'){
//         newButtonClickedSection.style.display='none';
//     }
// }
// );