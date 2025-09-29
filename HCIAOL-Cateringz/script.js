function validationForm(){
    let name = document.getElementById("name-data").value
    let email = document.getElementById("email-data").value
    let password = document.getElementById("password-data").value
    let confirm = document.getElementById("conf-password-data").value
    let dob = document.getElementById("dob-data").value
    let checkbox = document.getElementById("agreement").checked


    let name_check = false
    let email_check = false
    let password_check = false
    let confirm_check = false
    let dob_check = false
    let checkbox_check = false


    if(name.length < 5){
        document.getElementById("error-name").innerHTML = "Name must be more than 5 characters"
    } else {
        document.getElementById("error-name").innerHTML = ""
        name_check = true
    }

    // email must ends with @gmail.com
    if(!email.endsWith("@gmail.com")){
        document.getElementById("error-email").innerHTML = "Email must ends with @gmail.com"
    } else {
        document.getElementById("error-email").innerHTML = ""
        email_check = true
    }

    // password must be alphanumeric
    // console.log(password)
    if(!alphanumeric(password)){
        document.getElementById("error-password").innerHTML = "Password must be alphanumeric"
    } else {
        document.getElementById("error-password").innerHTML = ""
        password_check = true
    }

    if(confirm != password){
        document.getElementById("error-conf-password").innerHTML = "Confirm Password must be the same as the password"
    }else{
        document.getElementById("error-conf-password").innerHTML = ""
        confirm_check = true
    }



    // dob < dari tanggal sekarang

    if (!dob) { // Check if date is empty
         document.getElementById("error-dob").innerHTML = "Date of Birth must be filled";
    }
    else if(new Date(dob) > new Date){
        document.getElementById("error-dob").innerHTML = "Date of Birth must not exceed the current date"
    }else{
        document.getElementById("error-dob").innerHTML = ""
        dob_check = true
    }

    // validate checkbox

    if(!checkbox){
        alert("You must agree the EULA")
    } else{
        checkbox_check = true
        // validasi apakah semua data sudah terisi atau belum

        if(name_check == true && email_check == true && password_check == true 
        && confirm_check == true && dob_check == true && checkbox_check == true){
            alert("You have successfully created your account")
            thankyoupage();
        } else {
            alert("You must filled out all of the datas")
        }
    }
}


function alphanumeric(password){
    let isAlpha = false
    let isNumeric = false
    // isNaN = is not a number
    for(let i = 0; i<password.length ; i++){
        if(isNaN(password[i]) == true){
            isAlpha = true
        } else {
            isNumeric = true
        }
    }


    // validasi untuk memastikan adanya alphabet dan numerik

    if(isAlpha == true && isNumeric == true){
        return true
    } else {
        return false
    }
}

function homepage(){
    window.location.href = "homepage.html";
}

function products(){
    window.location.href = "Products.html";
}

function nextpage(){
    window.location.href = "thankyou.html";
}

function registpage(){
    window.location.href = "form.html";
}

function thankyoupage(){
    window.location.href = "thankyou.html";
}

var firstIndex = 0;

document.addEventListener('DOMContentLoaded', function() {
  const imageItems = document.querySelectorAll('.image-item');

  if (imageItems.length > 0) {
    let currentIndex = 0;
    function showNextImage() {
      imageItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % imageItems.length;
      imageItems[currentIndex].classList.add('active');
    }

    imageItems[0].classList.add('active');
    setInterval(showNextImage, 3000);
  }

});

function toggleDescription(link) {
        const container = link.parentNode.parentNode;
        const shortDesc = container.querySelector('.short-desc');
        const fullDesc = container.querySelector('.full-desc');

        if (shortDesc.style.display === 'none') {
            shortDesc.style.display = 'block';
            fullDesc.style.display = 'none';
            link.textContent = 'View Details';
        } else {
            shortDesc.style.display = 'none';
            fullDesc.style.display = 'block';
            link.textContent = 'Hide Details';
        }
    }



    const cardContainer = document.querySelector('.card-container');
    const scrollContainer = document.querySelector('.scroll-container');
    const cards = cardContainer.children;
  
    cardContainer.style.width = `${cards.length * 100}%`;
  

    scrollContainer.addEventListener('scroll', () => {

      const scrollPosition = scrollContainer.scrollLeft;
  

      const revealIndex = Math.floor(scrollPosition / 100);
  

      cards.forEach((card, index) => {
        if (index === revealIndex) {
          card.classList.add('revealed');
        } else {
          card.classList.remove('revealed');
        }
      });
    });
