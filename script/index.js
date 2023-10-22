var slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides() {
    // console.log("Nikhil");
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 3 seconds

}





// searchhhhhh

var main1=document.getElementById("product")
var data1;
function fetchdata(){
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
        method: "get",
        headers: myHeaders,
        redirect: "follow",
        
    };
    
    fetch("https://v1.nocodeapi.com/rajeshkumargzb275/google_sheets/JmsNXQGQkkHiKPHJ?tabId=Sheet1", requestOptions)
        .then(response => response.json())
        .then((result) =>{
            console.log(result.data)
            display(result.data)
            data1=result.data
        })
        .catch(error => console.log('error', error));
}


