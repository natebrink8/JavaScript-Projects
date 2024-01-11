function validateForm() {
    let x = document.forms["nbForm"]["Email"].value;
    if (x == "") {
      alert("Please enter your Email address.");
      return false;
    }
  }
