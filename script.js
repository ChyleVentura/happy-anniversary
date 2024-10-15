const imagesOne = [
    {path:"imgs/ANNIV PICS/2021/1.webp"},
    {path:"imgs/ANNIV PICS/2021/2.webp"},
    {path:"imgs/ANNIV PICS/2021/3.webp"},
    {path:"imgs/ANNIV PICS/2021/4.webp"},
    {path:"imgs/ANNIV PICS/2021/5.webp"},
    {path:"imgs/ANNIV PICS/2021/6.webp"},
    {path:"imgs/ANNIV PICS/2021/7.webp"},
    {path:"imgs/ANNIV PICS/2021/8.webp"},
    {path:"imgs/ANNIV PICS/2021/9.webp"},
    {path:"imgs/ANNIV PICS/2021/10.webp"},
    {path:"imgs/ANNIV PICS/2021/11.webp"},
    {path:"imgs/ANNIV PICS/2021/12.webp"},
    {path:"imgs/ANNIV PICS/2021/13.webp"},
    {path:"imgs/ANNIV PICS/2021/14.webp"},
    {path:"imgs/ANNIV PICS/2021/15.webp"},
    {path:"imgs/ANNIV PICS/2021/16.webp"},
    {path:"imgs/ANNIV PICS/2021/17.webp"}
]

const imagesTwo = [
    {path:"imgs/ANNIV PICS/2022/1.webp"},
    {path:"imgs/ANNIV PICS/2022/2.webp"},
    {path:"imgs/ANNIV PICS/2022/3.webp"},
    {path:"imgs/ANNIV PICS/2022/4.webp"},
    {path:"imgs/ANNIV PICS/2022/5.webp"},
    {path:"imgs/ANNIV PICS/2022/6.webp"},
    {path:"imgs/ANNIV PICS/2022/7.webp"},
    {path:"imgs/ANNIV PICS/2022/8.webp"},
    {path:"imgs/ANNIV PICS/2022/9.webp"},
    {path:"imgs/ANNIV PICS/2022/10.webp"},
    {path:"imgs/ANNIV PICS/2022/11.webp"},
    {path:"imgs/ANNIV PICS/2022/12.webp"},
    {path:"imgs/ANNIV PICS/2022/13.webp"},
    {path:"imgs/ANNIV PICS/2022/14.webp"},
    {path:"imgs/ANNIV PICS/2022/15.webp"},
    {path:"imgs/ANNIV PICS/2022/16.webp"},
    {path:"imgs/ANNIV PICS/2022/17.webp"},
    {path:"imgs/ANNIV PICS/2022/18.webp"},
    {path:"imgs/ANNIV PICS/2022/19.webp"},
    {path:"imgs/ANNIV PICS/2022/20.webp"},
    {path:"imgs/ANNIV PICS/2022/21.webp"}
]

const imagesThree = [
    {path:"imgs/ANNIV PICS/2023/0.webp"},
    {path:"imgs/ANNIV PICS/2023/1.webp"},
    {path:"imgs/ANNIV PICS/2023/2.webp"},
    {path:"imgs/ANNIV PICS/2023/3.webp"},
    {path:"imgs/ANNIV PICS/2023/4.webp"},
    {path:"imgs/ANNIV PICS/2023/5.webp"},
    {path:"imgs/ANNIV PICS/2023/6.webp"},
    {path:"imgs/ANNIV PICS/2023/7.webp"},
    {path:"imgs/ANNIV PICS/2023/8.webp"},
    {path:"imgs/ANNIV PICS/2023/9.webp"},
    {path:"imgs/ANNIV PICS/2023/10.webp"},
    {path:"imgs/ANNIV PICS/2023/11.webp"},
    {path:"imgs/ANNIV PICS/2023/12.webp"},
    {path:"imgs/ANNIV PICS/2023/13.webp"},
    {path:"imgs/ANNIV PICS/2023/14.webp"},
    {path:"imgs/ANNIV PICS/2023/15.webp"},
    {path:"imgs/ANNIV PICS/2023/16.webp"},
    {path:"imgs/ANNIV PICS/2023/17.webp"},
    {path:"imgs/ANNIV PICS/2023/18.webp"},
    {path:"imgs/ANNIV PICS/2023/19.webp"},
    {path:"imgs/ANNIV PICS/2023/20.webp"},
    {path:"imgs/ANNIV PICS/2023/21.webp"}
]

const imagesFour = [
    {path:"imgs/ANNIV PICS/2024/1.webp"},
    {path:"imgs/ANNIV PICS/2024/2.webp"},
    {path:"imgs/ANNIV PICS/2024/3.webp"},
    {path:"imgs/ANNIV PICS/2024/4.webp"},
    {path:"imgs/ANNIV PICS/2024/5.webp"},
    {path:"imgs/ANNIV PICS/2024/6.webp"},
    {path:"imgs/ANNIV PICS/2024/7.webp"},
    {path:"imgs/ANNIV PICS/2024/8.webp"},
    {path:"imgs/ANNIV PICS/2024/9.webp"},
    {path:"imgs/ANNIV PICS/2024/10.webp"},
    {path:"imgs/ANNIV PICS/2024/10.1.webp"},
    {path:"imgs/ANNIV PICS/2024/11.webp"},
    {path:"imgs/ANNIV PICS/2024/12.webp"},
    {path:"imgs/ANNIV PICS/2024/13.webp"},
    {path:"imgs/ANNIV PICS/2024/14.webp"},
    {path:"imgs/ANNIV PICS/2024/15.webp"},
    {path:"imgs/ANNIV PICS/2024/16.webp"},
    {path:"imgs/ANNIV PICS/2024/17.webp"}
]

const firstBatch = document.querySelector('.images_one')
const secondBatch = document.querySelector('.images_two')
const thirdBatch = document.querySelector('.images_three')
const fourthBatch = document.querySelector('.images_four')
const btnDinner = document.querySelector('.btn-dinner')
const correctAnswers = ['C','B','A','B','B','A','B','B','B','A']
const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result')
const openBtn = document.querySelector('.open-btn')
const envelope = document.querySelector('.envelope')
const namePlate = document.querySelector(".name-plate")

// firstBatch.innerHTML = imagesOne.forEach(image => `<li><img src="${image.path}" alt=""></li>`)

imagesOne.forEach(image => firstBatch.innerHTML +=`<li><img class="hidden-scale" src="${image.path}" alt=""></li>`)
imagesTwo.forEach(image => secondBatch.innerHTML +=`<li><img class="hidden-scale" src="${image.path}" alt=""></li>`)
imagesThree.forEach(image => thirdBatch.innerHTML +=`<li><img class="hidden-scale" src="${image.path}" alt=""></li>`)
imagesFour.forEach(image => fourthBatch.innerHTML +=`<li><img class="hidden-scale" src="${image.path}" alt=""></li>`)

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

const scaleObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if (entry.isIntersecting){
            entry.target.classList.add("show-scale")
        }else{
            entry.target.classList.remove("show-scale")
        }
    })
}) 

const hiddenElements = document.querySelectorAll('.hidden')
const hiddenScaleElements = document.querySelectorAll('.hidden-scale')

hiddenElements.forEach((el)=> observer.observe(el))
hiddenScaleElements.forEach((el)=> scaleObserver.observe(el))


// quiz-section

form.addEventListener('submit', e=>{
    e.preventDefault();

    let score = 0;
    const userAnswers = [form.q1.value,
        form.q2.value,
        form.q3.value,
        form.q4.value,
        form.q5.value,
        form.q6.value,
        form.q7.value,
        form.q8.value,
        form.q9.value,
        form.q10.value];

    // check answers
    userAnswers.forEach((answer, index)=>{
        if(answer === correctAnswers[index]){
            score += (100/correctAnswers.length);
        }
    })

    scrollTo(0,5950);
    result.classList.remove('d-none');

    let output = 0;
    const timer = setInterval( ()=>{
        result.querySelector('span').textContent = `${Math.floor(output)}%`;

        if(output === Math.floor(score)){
            clearInterval(timer);
        }else{
            output++;
        }
    },30);

    
    
    
    
})

openBtn.addEventListener('click', e=>{
    envelope.classList.add('slide-out')
})

btnDinner.addEventListener('click', e=>{
    scrollTo(0,0)
    namePlate.textContent = "You can now open the gift!"
    namePlate.classList.add('appear')
    namePlate.nextElementSibling.textContent=""
    namePlate.nextElementSibling.nextElementSibling.textContent=""
})