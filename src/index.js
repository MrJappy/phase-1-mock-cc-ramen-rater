// write your code here
fetch('http://localhost:3000/ramens')
.then(res => res.json())
.then(data => {
    data.forEach(nood => {
        renderStuff(nood)
    })
})

let menu = document.querySelector('#ramen-menu')
function renderStuff(nood){
    let img = document.createElement('img')
    // let div = document.createElement('div')
    img.src = nood.image 
    // div.append(img)   
    menu.append(img)
    img.addEventListener('click', () => { 
        showMeNoods(nood)
    })
}

let noodName = document.querySelector('.name')
let restaurant = document.querySelector('.restaurant')
let noodImage = document.querySelector('.detail-image')
let comment = document.querySelector('#comment-display')
let rating = document.querySelector('#rating-display')
function showMeNoods(singleNood){
    // console.log('success')
    // console.log(singleNood)
    noodName.textContent = singleNood.name
    noodImage.src = singleNood.image
    restaurant.textContent = singleNood.restaurant
    comment.textContent = singleNood.comment
    rating.textContent = singleNood.rating

}

let form = document.querySelector('#new-ramen')

form.addEventListener('submit', e => {
    e.preventDefault()

    let newName = document.querySelector('#new-name').value
    let newRestaurant = document.querySelector('#new-restaurant').value
    let newImage = document.querySelector('#new-image').value
    let newRating = document.querySelector('#new-rating').value
    let newComment = document.querySelector('#new-comment').value

    let newNood = {
        name: newName,
        restaurant: newRestaurant,
        image: newImage,
        rating: newRating,
        comment: newComment
    }

    renderStuff(newNood)


})


//   STRETCH DELIVERABLES