let btnLoad = document.getElementById("btnLoad")
const main = document.getElementById("products.html")
const URLMain = "https://api.escuelajs.co/api/v1/products"

btnLoad.addEventListener("click", function(event){
    event.preventDefault();
    console.log("BtnLoad presionado")
    fetch(URLMain, options)
    .then((response) => {   
        response.json().then((res) => {
            console.log(res)
            createCards(res);
        });
    })
    .catch((err) => {
        main.insertAdjacentHTML("beforeend",
            `<div class="alert alert-danger" role="alert">
                ${err.message}
            </div>`);
    });
});

function createCards(products) {
    main.innerHTML = "";
    products.forEach((res,index) => {
        const modalID = `${index}`;

        main.insertAdjacentHTML(9)
    })
}