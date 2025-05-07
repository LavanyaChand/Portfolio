//template_2qc9yld //templateID
//service_unhmtf6 : service ID
//bzI7RHOXrxr_DaHyi : public key

let isModalOpen = false;
let contrastToggle = false;
const scaleFactor = 1/20;

function moveBackground(event){
    const shapes = document.querySelectorAll(".shape");
    const x =event.clientX * scaleFactor;
    const y =event.clientY * scaleFactor;

    for (let i=0; i<shapes.length; ++i){

        const isOdd = i % 2 !== 0;
        const oddInteger = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * oddInteger}px, ${y * oddInteger}px) rotate(${x * oddInteger * 10}deg)`;
    }

}

function contact(event){
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible"; //Here space in the string is important
    emailjs
        .sendForm(
            "service_unhmtf6",
            "template_2qc9yld",
            event.target,
            "bzI7RHOXrxr_DaHyi"
    ).then(()=>{
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
    })
    .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
            "The email service is temporarily unavailable. Please contact me directly on lavanyachand113@gmail.com"
        );
    });
}

function toggleModal(){
    if (isModalOpen)
    {   
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}

function toggleContrast(){
    contrastToggle = !contrastToggle;
    if(contrastToggle){
        document.body.classList += " dark-theme";
    }

    else{
        document.body.classList.remove("dark-theme");
    }
}