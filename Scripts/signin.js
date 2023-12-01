async function login(event) {
    event.preventDefault();
    try {
      var login_data = {
        username: document.getElementById("login_username").value,
        password: document.getElementById("login_password").value,
      };
  
      login_data = JSON.stringify(login_data);
      console.log(login_data);
    } catch (err) {
      console.log(err);
    }
  
    let log_api = `https://masai-api-mocker.herokuapp.com/auth/login`;
    let response = await fetch(log_api, {
      method: "POST",
      body: login_data,
      headers: {
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();
    console.log(data);
    let username = document.getElementById("login_username").value;
  
    let userLoginName = document.getElementById("userLoginName");
    userLoginName.textContent = `${username}`;
    if (!data.error) {
      getData(username, data.token);
    } else {
      var err = document.querySelector(".erro_div");
      err.style.display = "flex";
      var msg = document.querySelector(".hide_erro_msg");
      msg.addEventListener("click", function () {
        err.style.display = "none";
      });
    }
  }
  
  async function getData(username, token) {
    let data_api = `https://masai-api-mocker.herokuapp.com/user/${username}`;
  
    let response = await fetch(data_api, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
  
    let data = await response.json();
    console.log(data);
    localStorage.setItem("user_data", JSON.stringify(data));
    window.location.href = "index.html";
  }
  