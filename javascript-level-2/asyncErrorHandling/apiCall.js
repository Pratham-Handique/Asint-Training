async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    //const response = await fetch("https://jsonplaceholder.typicode.com/post"); // to check for the error message

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); // parse JSON
    console.log(data); // log the data to the console
  } catch (error) {
    console.error("Error fetching posts:", error.message);
  }
}

fetchPosts();
