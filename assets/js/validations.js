function validatedCredentials() {
    var receiveEmail = document.getElementsByName("email");
    var receivePassword = document.getElementByName("clave");


    if (receiveEmail.text() == "" || receivePassword.text() == "") {

        alert("Los campos estan vacios ")
    } else {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
        });
    }



}

function notify() {
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
    });
}

notify();

validatedCredentials();