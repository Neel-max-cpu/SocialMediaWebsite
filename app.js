
// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

// MESSAGES - from the left box================
const messagesNotification = document.querySelector('#messages-notifications');
// MESSAGES - from the right box
const messages = document.querySelector('.messages');
// get all the individual message
const message = messages.querySelectorAll('.message');
// get the message search box
const messageSearch = document.querySelector('#messages-search');


// THEME=============================
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// root element from the css file
var root = document.querySelector(':root');



// =============================SIDE BAR=========================================
// =========== remove the active class ===========

const changeActiveItem = ()=>{
    menuItems.forEach(item =>{
        item.classList.remove('active');
    })
}


// NOTIFICATION POP UP
menuItems.forEach(item=>{
    item.addEventListener('click', ()=>{
        // WHEN THIS CLICKED all the items are remove and one that is clicked will stay
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notification-popup').style.display = 'none';
        }
        else{
            document.querySelector('.notification-popup').style.display = 'block';
            
            // hide the notification count---- #is id and .is class
            document.querySelector('#notifications .notification-count').style.display = 'none';
        }
    })
});


// menuItems.forEach(item=>{
//     item.addEventListener('click', ()=>{
//         if(item.id=='explore')
//     })
// })


// =============================END OF SIDE BAR =========================================



// ============================== MESSAGES ======================================

//search chats
const searchMessage = () =>{
    // change the value to lower case
    const val = messageSearch.value.toLowerCase();
    
    // console.log(val);
    message.forEach(chat =>{
        
        // take the name of 'all' the user from message and make it to lower case
        let name = chat.querySelector('h5').textContent.toLowerCase();
        
        // there is a match ---
        if(name.indexOf(val) != -1){
            chat.style.display = 'flex';
        }
        else{
            // not match if -1
            chat.style.display = 'none';
        }
        
    })
}


//filter the search text
messageSearch.addEventListener('keyup', searchMessage);



//highlight messages card when message menu items is clicked
messagesNotification.addEventListener('click', ()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    
    //  hide the notificatin count after clicking---
    document.querySelector('#messages-notifications .notification-count').style.display = 'none';
    
    // after 2000ms(2sec the box shadow will disappear)
    setTimeout(()=>{
        messages.style.boxShadow = 'none';
    }, 2000)
})

// ============================== END OF MESSAGES ======================================


// ============================== THEME/DISPLAY CUSTOMIZATION ======================================

// open the model
const openThemeModal = () =>{
    // intitially it was grid, then we made it to none
    themeModal.style.display = 'grid';
}

// close - if we click outside
const closeThemeModal = (e) =>{
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

// closing the model
themeModal.addEventListener('click', closeThemeModal);

//  opening the model
theme.addEventListener('click', openThemeModal);



// =========================FONTS=============================

// WE USED "rem" FOR  ALL OUR FONT SIZES, THAT'S WHY WE ARE ABLE TO CHANGE ALL OUR FONT SIZES AT ONCE
// JUST BY CHANGING THAT OF OUR HTML ELMENT


// remove active class from font size selectors
const removeSizeSelector = () =>{
    fontSizes.forEach(size =>{
        size.classList.remove('active');
    })
}

fontSizes.forEach(size =>{
    
    size.addEventListener('click', () =>{
        
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        
        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            
            // for 10px it won't change
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '5.4rem');
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('----sticky-top-left', '5.4rem');
            root.style.setProperty('----sticky-top-right', '-7rem');
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('----sticky-top-left', '-2rem');
            root.style.setProperty('----sticky-top-right', '-17rem');
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('----sticky-top-left', '-5em');
            root.style.setProperty('----sticky-top-right', '-25rem');
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('----sticky-top-left', '-12rem');
            root.style.setProperty('----sticky-top-right', '-35rem');
        }
        
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})

// ========================= ENDS OF FONTS =============================



// ========================= CHANGING PRIMARY COLOR =============================

// remove active class from color palatte selectors
const removeActiveColor = () =>{
    colorPalette.forEach(color =>{
        color.classList.remove('active');
    })
}

colorPalette.forEach(color =>{
    color.addEventListener('click', ()=>{
        let primary;
        
        removeActiveColor();
        
        if(color.classList.contains('color-1')){
            primaryHue = 252;
            // color.classList.add('active');
        }
        else if(color.classList.contains('color-2')){
            primaryHue = 52;
            // color.classList.add('active');
        }
        else if(color.classList.contains('color-3')){
            primaryHue = 322;
            // color.classList.add('active');
        }
        else if(color.classList.contains('color-4')){
            primaryHue = 152;
            // color.classList.add('active');
        }
        else if(color.classList.contains('color-5')){
            primaryHue = 2;
            // color.classList.add('active');
        }
        color.classList.add('active');
        
        
        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})
// ========================= END OF PRIMARY COLOR =============================



// ========================= BACKGROUND COLORS =============================
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;


//  change background color
const changeBG = () =>{
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
    
    //  for box shadow explore
    root.style.setProperty('--one', oneColor);
    root.style.setProperty('--two', twoColor);
    root.style.setProperty('--three', threeColor);
    // root.style.setProperty('--four', fourColor);
}


Bg1.addEventListener('click', ()=>{
    // add active class
    Bg1.classList.add('active');
    
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    
    // since it will stay the same no need to call the function just reload the page
    // changeBG();

    window.location.reload();

});


Bg2.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // explore--rgba(241, 163, 163, 0.75)
    oneColor = '241';
    twoColor = '163';
    threeColor = '163';
    // fourColor = '0.75';



    // add active class
    Bg2.classList.add('active');
    
    // remove active class from the others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBG();

});

Bg3.addEventListener('click', ()=>{
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    exploreColor = 'rgba(241, 163, 163, 0.75)';

    // explore--rgba(241, 163, 163, 0.75)
    oneColor = '241';
    twoColor = '163';
    threeColor = '163';
    // fourColor = '0.75';

    // add active class
    Bg3.classList.add('active');
    
    // remove active class from the others
    Bg2.classList.remove('active');
    Bg1.classList.remove('active');
    changeBG();

})