/**
    Plugin Name : Dev LightBox
    Plugin Version : 1.0.0
 */


//function to include html popup code

function includePopupHTML(){

    let html='<div id="vis-popup"><span id="close" onclick="closePopUp()"><img id="npop" src="Images/iconmonstr-x-mark-circle-lined-240.png" alt="" height="40px" width="40"></span><img id="leftArrow" src="Images//iconmonstr-arrow-left-circle-thin-240.png" alt=""><img id="rightArrow" src="Images/iconmonstr-arrow-right-circle-thin-240.png" alt=""><img  id="mainPopImage" src="Images/India (1).jpg" alt="" height="700px" width="1300"></div>';

    let popDiv =  document.createElement("div");

    popDiv.innerHTML=html;

    document.body.insertBefore(popDiv,document.body.firstChild)
}

includePopupHTML();


let img;
let current;


//function to init plugin
function imagePopupInit(target){

    //select all images with class target
    img=document.getElementsByClassName(target)
    
    //add event listener on all selected images
    for(var i=0;i<img.length;i++){
        //add pointer
        img[i].style.cursor='pointer';

        //add event listener
        img[i].addEventListener("click",function(){
            document.getElementById('mainPopImage').src=this.src;
            document.getElementById('vis-popup').style.display='block';
            checkArrow();
        })
    }

    includePopupHTML();
    
    //next button
    document.getElementById('rightArrow').addEventListener('click',function(){
        nextImg();
    });

    document.getElementById('leftArrow').addEventListener('click',function(){
        prevImg();
    });
}

//close button

function closePopUp(){
    document.getElementById('mainPopImage').src="";
    document.getElementById('vis-popup').style.display='none';

}

//next image
function nextImg(){
    getCurrentImage();
    current++;
    document.getElementById('mainPopImage').src=img[current].src;
    checkArrow();
}

//prev image
function prevImg(){
    getCurrentImage();
    current--;
    document.getElementById('mainPopImage').src=img[current].src;
    checkArrow();
}

function getCurrentImage(){
    for(var i=0;i<img.length;i++){
        if(img[i].src==document.getElementById("mainPopImage").src){
            current=i;
        }
    }
}

function checkArrow(){
    getCurrentImage();
    if(current=="0"){
        document.getElementById('leftArrow').style.display='none';
    }
    else if(current==img.length -1){
        document.getElementById('rightArrow').style.display='none';
    }
    else{
        document.getElementById('leftArrow').style.display='block';
        document.getElementById('rightArrow').style.display='block';
    }
}