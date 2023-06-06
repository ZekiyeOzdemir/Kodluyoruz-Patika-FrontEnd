let listItems = document.querySelectorAll("li");
for (let i = 0; i < listItems.length; i++) {  //li'lere close button'u ekliyoruz
    let closeButton = document.createElement("span");
    closeButton.className = "close";
    closeButton.innerHTML = "&times"; //&times, carpi isaretini temsil ediyor burada
    listItems[i].appendChild(closeButton);
}

let closeButtons = document.querySelectorAll(".close");
for (let i = 0; i < closeButtons.length; i++) {  //close buttonlara event listener ekliyoruz
    closeButtons[i].addEventListener('click', function () {
        let listItem = this.parentElement;
        listItem.remove();
    });
}

for (let i = 0; i < listItems.length; i++) { //tik ozelligi
    listItems[i].addEventListener('click', function () {
        listItems[i].classList.toggle('checked'); // toggle() fonksiyonu bir DOM ögesine sinif eklemek veya çikarmak icin kullanilir, classList ile beraber kullanilir
    }, false);
}


function newElement() {
    let inputDOM = document.querySelector("#task").value;
    let ulDOM = document.querySelector("#list");

    if (inputDOM.trim() !== "") {
        let liDOM = document.createElement("li");
        liDOM.innerHTML = inputDOM;


        let closeButton = document.createElement("span"); //olusan yeni li elementlerine de carpi isaretleri ekliyoruz
        closeButton.className = "close";
        closeButton.innerHTML = "&times";
        liDOM.appendChild(closeButton);
        ulDOM.appendChild(liDOM);

        closeButton.addEventListener("click", function () { //olusan yeni li elementinin close buttonuna da islev ekliyoruz
            liDOM.style.display = "none";
        });

        liDOM.addEventListener('click', function () { //olusan yeni li elementine de tik olayinin eklenmesi
            liDOM.classList.toggle('checked'); 
        }, false);


        let successToast = document.querySelector("#successToast"); //toast mesajini gosterme 
        successToast.classList.remove("hide");
        successToast.classList.add("show");

        document.querySelectorAll('[data-dismiss = "toast"]').forEach(function (button) { //toast mesajindaki kapatma dugmesinin calismasini saglayan fonksiyon 
            button.addEventListener('click', function () {
                let toast = this.closest(".toast");
                toast.classList.remove("show");
                toast.classList.add("hide");
            })
        });

        setTimeout(function () {  //toast mesajinin belli bir sure sonra kaybolmasini sagliyor
            successToast.classList.remove("show");
            successToast.classList.add("hide");
        }, 4000);
        document.querySelector("#task").value = "";
    }
    else {
        let errorToast = document.querySelector("#errorToast"); //error toast mesaji
        errorToast.classList.remove("hide");
        errorToast.classList.add("show");

        setTimeout(function () { //error toast mesajinin belli bir sure sonra kaybolmasini sagliyor
            errorToast.classList.remove("show");
            errorToast.classList.add("hide");
        }, 4000);
    }
}



