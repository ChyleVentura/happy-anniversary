const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show")
        }else{
            entry.target.classList.remove("show")
        }
    })
}) 

const hiddenElements = document.querySelectorAll('.hidden')

hiddenElements.forEach((el)=> observer.observe(el))


const imagesOne = [
    {path:"imgs/ANNIV PICS/2021/1.jpeg"},
    {path:"imgs/ANNIV PICS/2021/2.jpeg"},
    {path:"imgs/ANNIV PICS/2021/3.jpeg"},
    {path:"imgs/ANNIV PICS/2021/4.jpeg"},
    {path:"imgs/ANNIV PICS/2021/5.jpeg"},
    {path:"imgs/ANNIV PICS/2021/6.jpeg"},
    {path:"imgs/ANNIV PICS/2021/7.jpeg"},
    {path:"imgs/ANNIV PICS/2021/8.jpeg"},
    {path:"imgs/ANNIV PICS/2021/9.jpeg"},
    {path:"imgs/ANNIV PICS/2021/10.jpeg"},
    {path:"imgs/ANNIV PICS/2021/11.jpeg"},
    {path:"imgs/ANNIV PICS/2021/12.jpeg"},
    {path:"imgs/ANNIV PICS/2021/13.jpeg"},
    {path:"imgs/ANNIV PICS/2021/14.jpeg"},
    {path:"imgs/ANNIV PICS/2021/15.jpeg"},
    {path:"imgs/ANNIV PICS/2021/16.jpeg"},
    {path:"imgs/ANNIV PICS/2021/17.jpeg"}
]

const imagesTwo = [
    {path:"imgs/ANNIV PICS/2022/1.jpeg"},
    {path:"imgs/ANNIV PICS/2022/2.jpeg"},
    {path:"imgs/ANNIV PICS/2022/3.jpeg"},
    {path:"imgs/ANNIV PICS/2022/4.jpeg"},
    {path:"imgs/ANNIV PICS/2022/5.jpeg"},
    {path:"imgs/ANNIV PICS/2022/6.jpeg"},
    {path:"imgs/ANNIV PICS/2022/7.jpeg"},
    {path:"imgs/ANNIV PICS/2022/8.jpeg"},
    {path:"imgs/ANNIV PICS/2022/9.jpeg"},
    {path:"imgs/ANNIV PICS/2022/10.jpeg"},
    {path:"imgs/ANNIV PICS/2022/11.jpeg"},
    {path:"imgs/ANNIV PICS/2022/12.jpeg"},
    {path:"imgs/ANNIV PICS/2022/13.jpeg"},
    {path:"imgs/ANNIV PICS/2022/14.jpeg"},
    {path:"imgs/ANNIV PICS/2022/15.jpeg"},
    {path:"imgs/ANNIV PICS/2022/16.jpeg"},
    {path:"imgs/ANNIV PICS/2022/17.jpeg"},
    {path:"imgs/ANNIV PICS/2022/18.jpeg"},
    {path:"imgs/ANNIV PICS/2022/19.jpeg"},
    {path:"imgs/ANNIV PICS/2022/20.jpeg"},
    {path:"imgs/ANNIV PICS/2022/21.jpeg"}
]

const imagesThree = [
    {path:"imgs/ANNIV PICS/2023/0.jpeg"},
    {path:"imgs/ANNIV PICS/2023/1.jpeg"},
    {path:"imgs/ANNIV PICS/2023/2.jpeg"},
    {path:"imgs/ANNIV PICS/2023/3.jpeg"},
    {path:"imgs/ANNIV PICS/2023/4.jpeg"},
    {path:"imgs/ANNIV PICS/2023/5.jpeg"},
    {path:"imgs/ANNIV PICS/2023/6.jpeg"},
    {path:"imgs/ANNIV PICS/2023/7.jpeg"},
    {path:"imgs/ANNIV PICS/2023/8.jpeg"},
    {path:"imgs/ANNIV PICS/2023/9.jpeg"},
    {path:"imgs/ANNIV PICS/2023/10.jpeg"},
    {path:"imgs/ANNIV PICS/2023/11.jpeg"},
    {path:"imgs/ANNIV PICS/2023/12.jpeg"},
    {path:"imgs/ANNIV PICS/2023/13.jpeg"},
    {path:"imgs/ANNIV PICS/2023/14.jpeg"},
    {path:"imgs/ANNIV PICS/2023/15.jpeg"},
    {path:"imgs/ANNIV PICS/2023/16.jpeg"},
    {path:"imgs/ANNIV PICS/2023/17.jpeg"},
    {path:"imgs/ANNIV PICS/2023/18.jpeg"},
    {path:"imgs/ANNIV PICS/2023/19.jpeg"},
    {path:"imgs/ANNIV PICS/2023/20.jpeg"},
    {path:"imgs/ANNIV PICS/2023/21.jpeg"}
]

const imagesFour = [
    {path:"imgs/ANNIV PICS/2024/1.jpeg"},
    {path:"imgs/ANNIV PICS/2024/2.jpeg"},
    {path:"imgs/ANNIV PICS/2024/3.jpeg"},
    {path:"imgs/ANNIV PICS/2024/4.jpeg"},
    {path:"imgs/ANNIV PICS/2024/5.jpeg"},
    {path:"imgs/ANNIV PICS/2024/6.jpeg"},
    {path:"imgs/ANNIV PICS/2024/7.jpeg"},
    {path:"imgs/ANNIV PICS/2024/8.jpeg"},
    {path:"imgs/ANNIV PICS/2024/9.jpeg"},
    {path:"imgs/ANNIV PICS/2024/10.jpeg"},
    {path:"imgs/ANNIV PICS/2024/10.1.jpeg"},
    {path:"imgs/ANNIV PICS/2024/11.jpeg"},
    {path:"imgs/ANNIV PICS/2024/12.jpeg"},
    {path:"imgs/ANNIV PICS/2024/13.jpeg"},
    {path:"imgs/ANNIV PICS/2024/14.jpeg"},
    {path:"imgs/ANNIV PICS/2024/15.jpeg"},
    {path:"imgs/ANNIV PICS/2024/16.jpeg"},
    {path:"imgs/ANNIV PICS/2024/17.jpeg"}
]

const firstBatch = document.querySelector('.images_one')
const secondBatch = document.querySelector('.images_two')
const thirdBatch = document.querySelector('.images_three')
const fourthBatch = document.querySelector('.images_four')

imagesOne.forEach(image => console.log(image.path))

// firstBatch.innerHTML = imagesOne.forEach(image => `<li><img src="${image.path}" alt=""></li>`)

imagesOne.forEach(image => firstBatch.innerHTML +=`<li><img src="${image.path}" alt=""></li>`)
imagesTwo.forEach(image => secondBatch.innerHTML +=`<li><img src="${image.path}" alt=""></li>`)
imagesThree.forEach(image => thirdBatch.innerHTML +=`<li><img src="${image.path}" alt=""></li>`)
imagesFour.forEach(image => fourthBatch.innerHTML +=`<li><img src="${image.path}" alt=""></li>`)