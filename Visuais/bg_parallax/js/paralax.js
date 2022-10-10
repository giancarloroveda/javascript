(function(){
    window.addEventListener('scroll', positionImage)

    const dataParalaxContainer = [...document.querySelectorAll('[data-paralax]')]

    function isGettingOut(c){
        return c.getBoundingClientRect().top <= 0
    }

    function newPosition(c){
        let velocity = c.getAttribute('data-p-velocity')
        return c.getBoundingClientRect().top * velocity * -1
    }

    function positionImage(){
        dataParalaxContainer.forEach(function(c){
            const originalPositionX = getComputedStyle(c).backgroundPositionX
            const originalPositionY = getComputedStyle(c).backgroundPositionY

            c.style.backgroundPosition = `${originalPositionX} 0px`

            if(isGettingOut(c)){
                c.style.backgroundPosition = `${originalPositionX} ${newPosition(c)}px`
            }
        })
    }

    positionImage()
})()