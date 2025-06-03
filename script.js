function filterPosts(category) {
    const posts = document.querySelectorAll('.post');
  
    posts.forEach(post => {
      if (category === 'all') {
        post.style.display = 'block';
      } else {
        post.style.display = post.classList.contains(category) ? 'block' : 'none';
      }
    });
  }
  