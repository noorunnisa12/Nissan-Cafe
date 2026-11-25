// Velvet Cafe Website

console.log("Welcome to Nissan Cafe!");
function closeWelcome() {
    document.getElementById("welcomePopup").style.display = "none";
}

function orderNow(name, price) {
    const product = {
        name: name,
        price: price
    };

    localStorage.setItem("selectedProduct", JSON.stringify(product));

    window.location.href = "order.html";
}
