// Fetch and display posts from JSONbin
// Task 3: For the Json there has been used a https://jsonbin.io (https://api.jsonbin.io/v3/b) with a public api key 67268106ad19ca34f8c2f3f0
// Task 4: Same as the task 5, but instead of fetching the json, we parse it locally, so
// fetch(`posts.json`)
//  ... remaining
// 1 little additional comment is that data.record is added since the fethed/parsed info creates a name for the json shich is a record
// Task 5: 
fetch('https://api.jsonbin.io/v3/b/67268106ad19ca34f8c2f3f0') // makes a GET request from jsonbin.io
    .then(response => response.json()) // converts to json object (the name for the json is initalized as record)
    .then(data => { //Then process response
        const postContainer = document.getElementById('postContainer'); // gets the post container
        // Access `data.record` because JSONbin nests user data under "record"
        data.record.forEach(post => { //record here is the json itself that comes from response
            // Tactics: create a div, put there a date, author, content and an image as a paragraph
            const postDiv = document.createElement('div'); //create a html div
            postDiv.classList.add('post'); //add the class post

            const date = document.createElement('p');
            date.classList.add('post-date');
            date.textContent = post.date;
            //replace the date with the parsed json date

            const content = document.createElement('p');
            content.textContent = post.content;
            //same thing with the content

            //Giving some "life" to the posts 🤗
            let emojis = [`😀`,`😃`,`😅`,`😊`,`😎`,`🤩`,`🤗`,`😱`,`✌️`,`👊`,`👍`]

            const like = document.createElement('p');
            like.classList.add('like');
            like.textContent = emojis[
                Math.floor(
                    Math.random() * emojis.length
                )
            ];
            
            postDiv.appendChild(date);
            if (post.image) postDiv.appendChild(appendImage(post)); //If the image attribute is not null
            postDiv.appendChild(content);
            postDiv.appendChild(like);
            postContainer.appendChild(postDiv);
        });
    })
    .catch(error => console.error('Error loading posts:', error));

function appendImage(post){
    //basically, then create an image and append it
    const img = document.createElement('img');
    img.classList.add('poster-image')
    img.src = post.image;
    img.alt = post.content;
    return img;
}

// Toggle the dropdown menu visibility
document.querySelector('.profile-link').addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    const dropdown = document.getElementById('profileDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
});

// Close the dropdown menu if clicked outside
document.addEventListener('click', (e) => {
    const dropdown = document.getElementById('profileDropdown');
    const profileLink = document.querySelector('.profile-link');
    
    if (!profileLink.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});
