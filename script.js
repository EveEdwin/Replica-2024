// Master GSAP Timeline with everything starting at the same time
let masterTl = gsap.timeline({
    defaults: { duration: 1.2, ease: "power2.out" }
});

// Animate the left navigation bar sliding in from the left
masterTl.from(".left-nav", {
    x: -300,           // Slide in from 300px left
    opacity: 0,        // Fade in from 0 opacity
    duration: 1.5,     // Custom duration for the left-nav
    ease: "power3.out" // Smooth easing
}, 0); // Start at 0, same time as other animations

// Animate the logo's appearance with a scale and rotation effect
masterTl.from(".section1 img:first-child", {
    opacity: 0,      // Fade in
    scale: 0.5,      // Start from half size
    rotation: 360,   // Full rotation for a dynamic effect
    duration: 1.2,   // Custom duration
    ease: "back.out(1.7)" // Back easing for a bouncing effect
}, 0); // Start at 0

// Animate the second logo image with a subtle slide and fade in
masterTl.from(".section1 img:last-child", {
    opacity: 0,      // Fade in
    x: -50,          // Slide in from left by 50px
    duration: 1,     // Smooth transition
    ease: "power2.out"
}, 0); // Start at 0

// Animate the search bar: slide in from the left with a slight bounce
masterTl.from(".search-bar", {
    x: -100,         // Slide in from 100px left
    opacity: 0,      // Fade in from 0 opacity
    scale: 0.8,      // Start at 80% size and scale up
    duration: 1.2,   // Custom duration for the search bar
    ease: "back.out(1.7)" // Back easing for a smooth bounce
}, 0); // Start at 0

// Animate the individual icons (heart, message, add photo)
masterTl.from(".nav-icons .icon", {
    y: -30,          // Slide in from 30px above
    opacity: 0,      // Fade in
    stagger: 0.2,    // Delay between each icon
    duration: 0.8,   // Speed up the icon animation
    ease: "power2.out" // Smooth easing for the icons
}, 0); // Start at 0

// Animate the Add Photo button with a scaling effect
masterTl.from(".add-photo-btn", {
    scale: 0.5,      // Start smaller and scale up
    opacity: 0,      // Fade in
    duration: 0.9,   // Smooth transition
    ease: "elastic.out(1, 0.75)" // Elastic bounce for a playful effect
}, 0); // Start at 0

// Animate the navigation menu with stagger
masterTl.from(".nav-menu", {
    x: -200,       // Slide in from 200px left
    opacity: 0,    // Fade in from 0 opacity
    stagger: 0.1,  // Delay between items
    duration: 1    // Custom duration for this animation
}, 0); // Start at 0

// Animate all .post1 and .post2 images to load at the same time
masterTl.from(".post1 img", {
    opacity: 0,           // Fade in from 0 opacity
    scale: 0.8,           // Start smaller and scale up
    y: 50, 
    delay: 0.6,    
    stagger:0.1,           // Start 50px below and move up
    ease: "power4.out"    // Smooth easing effect
}, 0); // Start all at the same time (0 delay)
masterTl.from(".post2 img", {
    opacity: 0,           // Fade in from 0 opacity
    scale: 0.8,           // Start smaller and scale up
    y: 50, 
    delay: 0.6,      
    stagger:0.1,               // Start 50px below and move up
    ease: "power4.out"    // Smooth easing effect
}, 1); // Start all at the same time (0 delay)


// Stories Section Animation (Also starts at the same time)
masterTl.from(".stories h1", {
    opacity: 0,        // Fade in from 0 opacity
    y: -30,            // Slide down into view
    duration: 0.8,     // Duration for heading animation
    ease: "power3.out" // Smooth easing effect
}, 0); // Start at 0

// Animate the story images with a staggered effect
masterTl.from(".stories-container img", {
    opacity: 0,         // Fade in from 0 opacity
    scale: 0.8,         // Start smaller and scale up
    y: 50,              // Start 50px below and move up
    stagger: 0.2,       // Delay between each image
    duration: 1,        // Duration for each image animation
    ease: "power2.out"  // Smooth easing for the images
}, 0); // Start at 0

// Adding hover effect with GSAP for smoother interaction
gsap.utils.toArray(".stories-container img").forEach((img) => {
    img.addEventListener("mouseenter", () => {
        gsap.to(img, {
            scale: 1.1,                    // Scale up on hover
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Add shadow on hover
            duration: 0.3,                 // Speed for hover effect
            ease: "power2.out"             // Smooth easing
        });
    });

    img.addEventListener("mouseleave", () => {
        gsap.to(img, {
            scale: 1,                      // Reset scale on mouse leave
            boxShadow: "none",             // Remove shadow
            duration: 0.3,                 // Speed for the reset
            ease: "power2.out"             // Smooth easing
        });
    });
});
