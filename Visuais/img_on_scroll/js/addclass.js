(function(){

    document.body.classList.remove('no-js')

    window.addEventListener('scroll', adicionaImagem)

    

    function isElementIntoView(el){
        return (el.getBoundingClientRect().top > 0 && el.getBoundingClientRect().bottom < innerHeight) || (el.getBoundingClientRect().top < 0 && el.getBoundingClientRect().bottom > 0)
    }

    function adicionaImagem(c){
        

        let imagensScroll = [...document.querySelectorAll('[data-addclass-on-scroll]')]
        
        if(imagensScroll.length === 0){
            console.log('tarefa finalizada')
            window.removeEventListener('scroll', adicionaImagem)
            return
        }

        imagensScroll.forEach(function(img){
            let delay = img.getAttribute('data-addclass-on-scroll-delay') || 0
            let classShow = img.getAttribute('data-addclass-on-scroll')
            
            if(isElementIntoView(img)){
                setTimeout(function(){
                    img.classList.add(classShow)
                    img.removeAttribute('data-addclass-on-scroll-delay')
                    img.removeAttribute('data-addclass-on-scroll')
                }, delay)
            }
        })
    }
    adicionaImagem()
})()