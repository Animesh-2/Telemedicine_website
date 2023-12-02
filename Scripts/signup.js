// 
  
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
  