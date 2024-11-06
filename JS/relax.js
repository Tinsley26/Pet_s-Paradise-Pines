document.addEventListener('DOMContentLoaded', function() {

	const circleblue= document.querySelector('.circleblue')
	const circleRed = document.querySelector('.circleRed')
	const circleGreen  = document.querySelector('.circleGreen')
	
	// gsap.to(circleblue, {
		// duration: 2,
		// x: 1400,
		// delay: 3,
		// repeat: -3,
		// yoyo: true,
	// })

	const blueSquare = document.querySelector('.blueSquare')
	gsap.to(blueSquare, {
		duration: 3.7,
		x: 600,
		rotation: 360,
		opacity: 0.9,
		ease: 'power1.out',
		delay: 1,
		repeat: -1,
        yoyo: true,
	})

    
    

    

});





































