document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(this);
  const data = Object.fromEntries(formData.entries());

  fetch('http://localhost:3000/submit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      alert(result.message);
    })
    .catch(error => {
      console.error('Error:', error);
    });
});
