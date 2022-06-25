// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.

const imgs = [
    'images/img1.jpg',
    'images/img2.jpg',
    'images/img3.jpg'
]

const container = document.getElementById('container')

function renderImages() {
    let teamImages = ''
    for (let i = 0; i < imgs.length; i++) {
        teamImages += `<img alt='Employee in the company' class="team-img" src='${imgs[i]}'>`
    }
    container.innerHTML = teamImages
}

renderImages()