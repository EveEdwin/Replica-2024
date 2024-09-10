
let masterTl = gsap.timeline({
    defaults: { duration: 1.2, ease: "power2.out" }
});

masterTl.from(".left-nav", {
    x: -300,           
    opacity: 0,        
    duration: 1.5,    
    ease: "power3.out" 
}, 0); 

masterTl.from(".section1 img:first-child", {
    opacity: 0,      
    scale: 0.5,      
    rotation: 360,   
    duration: 1.2,  
    ease: "back.out(1.7)" 
}, 0); 


masterTl.from(".section1 img:last-child", {
    opacity: 0,     
    x: -50,          
    duration: 1,    
    ease: "power2.out"
}, 0); 

masterTl.from(".search-bar", {
    x: -100,         
    opacity: 0,     
    scale: 0.8,      
    duration: 1.2,  
    ease: "back.out(1.7)" 
}, 0); 


masterTl.from(".nav-icons .icon", {
    y: -30,         
    opacity: 0,     
    stagger: 0.2,    
    duration: 0.8,   
    ease: "power2.out" 
}, 0); 


masterTl.from(".add-photo-btn", {
    scale: 0.5,      
    opacity: 0,      
    duration: 0.9,   
    ease: "elastic.out(1, 0.75)" 
}, 0); 


masterTl.from(".nav-menu", {
    x: -200,      
    opacity: 0,    
    stagger: 0.1,  
    duration: 1    
}, 0); 


masterTl.from(".post1 img", {
    opacity: 0,           
    scale: 0.8,           
    y: 50, 
    delay: 0.6,    
    stagger:0.1,           
    ease: "power4.out"    
}, 0); 
masterTl.from(".post2 img", {
    opacity: 0,           
    scale: 0.8,          
    y: 50, 
    delay: 0.6,      
    stagger:0.1,              
    ease: "power4.out"    
}, 1); 

masterTl.from(".stories h1", {
    opacity: 0,        
    y: -30,            
    duration: 0.8,     
    ease: "power3.out" 
}, 0); 


masterTl.from(".stories-container img", {
    opacity: 0,         
    scale: 0.8,         
    y: 50,              
    stagger: 0.2,      
    duration: 1,       
    ease: "power2.out" 
}, 0); 


gsap.utils.toArray(".stories-container img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
        gsap.to(img, {
            scale: 1.1,                   
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
            duration: 0.3,                 
            ease: "power2.out"             
        });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, {
            scale: 1,                      
            boxShadow: "none",             
            duration: 0.3,                
            ease: "power2.out"           
        });
    });
});

const favoriteIcons = document.querySelectorAll('.add-favorite');

favoriteIcons.forEach((favoriteIcon) => {
    favoriteIcon.addEventListener('click', function() {
        const currentSrc = favoriteIcon.src;

        if (currentSrc.includes("Logo%207.svg")) { // Check if current src is Logo 7
            favoriteIcon.src = "Assets/Logo 10.svg";
        } else {
            favoriteIcon.src = "Assets/Logo 7.svg";
        }
    });
});
