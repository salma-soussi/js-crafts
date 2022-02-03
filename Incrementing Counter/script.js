const counters = document.querySelectorAll(".counter")

counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {

        // we use the "+" to convert a String to Number 
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        // how much do we want to increment c by? 
        // all numbers are going to take the same amount of time to reach the maximum value.
        const increment =target / 250
        if(c < target){
            // Math.ceil() is used to round up (c + increment)  to the next largest integer
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter,1)
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
})