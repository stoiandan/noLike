const LIKE_BUTTON_CLASS = " _6a-y _3l2t  _18vj";


document.onscroll = function(){
        const likeButtons = document.getElementsByClassName(LIKE_BUTTON_CLASS)
    
        for (const button of likeButtons) {
           button.parentNode.removeChild(button);
        }    
}   