(function () {
    "use strict"

    function getDateSpan(){
        const spanText = document.querySelector('h1 span').textContent.trim()
        
        
        const arr = spanText.split(' ')
        
        const date = arr[0]
        const hour = arr[1]

        const arrDate = date.split('/')
        const arrHour = hour.split('H')

        const actualDate = new Date(arrDate[2], parseInt(arrDate[1]) - 1, arrDate[0], arrHour[0], arrHour[1])

        return actualDate
    }


    const ONE_SECOND = 1000
    const ONE_MINUTE = 1000 * 60
    const ONE_HOUR = 1000 * 60 * 60
    const ONE_DAY = 1000 * 24 * 60 * 60

    const p = document.createElement('p')
    document.querySelector('.hero-content').appendChild(p)


    function reloadDate(){
        const spanDate = getDateSpan()
        
        let left = (spanDate.getTime()) - (new Date().getTime())
        
        
        let daysLeft = parseInt(left / ONE_DAY)
        left = left - daysLeft * ONE_DAY

        
        let hoursLeft = parseInt(left / ONE_HOUR)
        left = left - hoursLeft * ONE_HOUR

        
        let minutesLeft = parseInt(left / ONE_MINUTE)
        left = left - minutesLeft * ONE_MINUTE

        
        let secondsLeft = parseInt(left / ONE_SECOND)
        
        p.textContent = `Contagem regressiva: ${daysLeft} dias, ${hoursLeft} horas, ${minutesLeft} minutos, ${secondsLeft} segundos.`
        
    }




    reloadDate()
    setInterval(reloadDate, 1000)

    
})()