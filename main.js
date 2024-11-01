// Fetch and display posts from JSON
fetch('posts.json')
    .then(response => response.json())
    .then(data => {
        const postContainer = document.getElementById('postContainer');
        data.forEach(post => {
            const postDiv = document.createElement('div');
            postDiv.classList.add('post');

            const date = document.createElement('p');
            date.classList.add('post-date');
            date.textContent = post.date;

            const content = document.createElement('p');
            content.textContent = post.content;

            if (post.image) {
                const img = document.createElement('img');
                img.src = post.image;
                img.alt = post.content;
                postDiv.appendChild(img);
            }

            const like = document.createElement('span');
            like.classList.add('like');
            like.textContent = '👍';

            postDiv.appendChild(date);
            postDiv.appendChild(content);
            postDiv.appendChild(like);
            postContainer.appendChild(postDiv);
        });
    })
    .catch(error => console.error('Error loading posts:', error));


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
