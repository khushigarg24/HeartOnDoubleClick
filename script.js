const image = document.querySelector(".container"),
    heartIcon = document.querySelector(".heart");

image.addEventListener('dblclick', (e) => {
    // calculating the position x and y of dbl click event */
    let xValue = e.clientX - e.target.offsetLeft;
    let yValue = e.clientY - e.target.offsetTop;

    // console.log(xValue,yValue)  check karne ke loye positions */
    //  set the positio of heart according to x aND Y VALUES */
    heartIcon.style.left = `${xValue}px`;
    heartIcon.style.top = `${yValue}px`;


    heartIcon.classList.add("active");

    //remove active class after 1 sec
    setTimeout(() => {
        heartIcon.classList.remove("active");
    }, 1000);
})
