document.addEventListener("DOMContentLoaded", () => {


    //= components/


    const tl1 = gsap.timeline();

    tl1.to('.main-titleContainer__runningLine ul', { x: '100%', duration: 9, repeat: -1, ease: "none", })

    const tl2 = gsap.timeline();

    tl2.fromTo('.main-titleContainer h1', { opacity: 0, duration: 1, delay: 0.5}, {opacity: 1, duration: 1, delay: 0.5})
    
    const tl3 = gsap.timeline();

    tl3.fromTo('.main-titleContainer h2', { opacity: 0, duration: 1, delay: 1.3}, {opacity: 1, duration: 1, delay: 1.3})

    const myTags = [
        'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать', 'Заказать',
    ];


    let sphereContent = document.querySelectorAll('.main-design__sphereContent')
    sphereContent.forEach(e => {
        let tagCloud = TagCloud(e, myTags, {
            radius: 300,
            maxSpeed: 'fast',
            initSpeed: 'fast',
            direction: 135,
            keep: true
        });
    })

    let mainDesignItems = document.querySelectorAll('.design-sphere .tagcloud--item')
    let orderDesignForm = document.querySelector('.orderDesignForm')
    let orderForm = document.querySelectorAll('.orderForm')
    let cross = document.querySelectorAll('.orderForm__crossContainer')
    let orderDevelopItems = document.querySelectorAll('.main-develop .tagcloud--item')
    let orderDevelopForm = document.querySelector('.orderDevelopForm')
    let orderSeoItems = document.querySelectorAll('.seo-sphere .tagcloud--item')
    let orderSeoForm = document.querySelector('.orderSeoForm')
    
    mainDesignItems.forEach(e => {
        e.addEventListener('click', el => {
            orderDesignForm.classList.add('orderFormActive')
        })
    })

    orderDevelopItems.forEach(e => {
        e.addEventListener('click', el => {
            orderDevelopForm.classList.add('orderFormActive')
        })
    })

    orderSeoItems.forEach(e => {
        e.addEventListener('click', el => {
            orderSeoForm.classList.add('orderFormActive')
        })
    })

    cross.forEach(e => {
        e.addEventListener('click', el => {
            orderForm.forEach(elem => {
                elem.classList.remove('orderFormActive')
            })
        })
    })


    



})



