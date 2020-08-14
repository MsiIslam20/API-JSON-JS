// const user = {
//     id: 3,
//     name: "saidul Islam"
// };

// const jsonConvert = JSON.stringify(user);
// console.log(jsonConvert);   // {"id":3,"name":"saidul Islam"}

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => displayUsers(json))
  .catch(error => console.log(error))

  function displayUsers(users){
    console.log(users);
    
      const name = users.map(username => username.name);
      const email = users.map(username => username.email);
      let ul = document.getElementById("display_data");
      let ulEmail = document.getElementById("display_email");

    //   const id = users.map(username => username.id);
    //   const email = users.map(username => username.email);
    //   console.log(name , id , email);
    displayData(name, ul);
    displayData(email, ulEmail);

    function displayData(userName, listParent){
      for (let i = 0; i < userName.length; i++) {
        const element = userName[i];
        const li = document.createElement("li");
        li.innerText = element;
        listParent.appendChild(li);
        
      }
    }
      
  }


  //Status Code All:
  // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
  // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes