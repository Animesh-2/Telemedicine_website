async function register(event) {
    try {
      event.preventDefault();
      var register_data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        username: document.getElementById("username").value,
        password: document.getElementById("password").value,
        mobile: document.getElementById("mobile").value,
        description: document.getElementById("description").value,
      };
  
      checkvalidtion(register_data);
      register_data = JSON.stringify(register_data);
      console.log("register_data", register_data);
    } catch (err) {
      console.log(err);
    }
  
    let reg_api = `https://masai-api-mocker.herokuapp.com/auth/register`;
    let response = await fetch(reg_api, {
      method: "POST",
      body: register_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    let data = await response.json();
    console.log("data", data);
    if (!data.error) {
      window.location.href = "signIn.html";
    } else {
      var err = document.querySelector(".erro_div");
      var err_msg = document.querySelector(".erro_div > p");
      err_msg.innerHTML =
        "User already exists &nbsp;<small>(Try with anthor one)</small>";
      err.style.display = "flex";
      var msg = document.querySelector(".hide_erro_msg");
      msg.addEventListener("click", function () {
        err.style.display = "none";
      });
    }
  }
  
  function checkvalidtion(register_data) {
    if (
      register_data.name == "" ||
      register_data.email == "" ||
      register_data.username == "" ||
      register_data.password == "" ||
      register_data.mobile == "" ||
      register_data.description == ""
    ) {
      var err = document.querySelector(".erro_div");
      var err_msg = document.querySelector(".erro_div > p");
      err_msg.innerHTML = "Please fill all empty fields";
      err.style.display = "flex";
      var msg = document.querySelector(".hide_erro_msg");
      msg.addEventListener("click", function () {
        err.style.display = "none";
      });
    }
  }
  