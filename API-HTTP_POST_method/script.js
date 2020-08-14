
document.getElementById("submit").addEventListener("click", function(){
    const title = document.getElementById("title").value;
    const bodyContent = document.getElementById("bodyContent").value;

    const post = {
        title: title,
        body: bodyContent
    };
    postToServer(post)
})

function postToServer(post){
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(post),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  })
  .then(response => response.json())
  .then(json => console.log(json))
}