(function start() {
    let carousel = document.querySelector('.Slider');
    carouselize(carousel);
})();

function carouselize(carousel) {
    let productList = carousel.querySelector('.Product_wrapper__list');
    let productListWidth = 0;
    let products = carousel.querySelectorAll('.Slider__product');
    let productAmount = 0;
    let to_show = 5;
    let carouselPrev = carousel.querySelector('.prev_button');
    let carouselNext = carousel.querySelector('.next_button');
    let direction = -1;
    [].forEach.call(products, function (product) {
        productAmount++;
        if (product.className === "Product_wrapper_available") {
            productListWidth += 150;
            productList.style.width = productListWidth + "px";
        }
    });

    function show_first_elements() {
        for (let i = 0; i < productList.children.length; i++) {
            if (i < to_show) {
                productList.children[i].className = "Product_wrapper_available"
            } else {
                productList.children[i].className = "Product_wrapper_hidden"
            }
        }
    }

    carousel.addEventListener('transitionend', function () {
        if (direction === -1) {
            productList.firstElementChild.className = 'Product_wrapper_hidden';
            productList.appendChild(productList.firstElementChild);
        } else if (direction === 1) {
            productList.lastElementChild.className = 'Product_wrapper_hidden';
            productList.prepend(productList.lastElementChild);
        }
        show_first_elements();
        productList.style.transition = 'none';
        productList.style.transform = "translateX(0)";
        setTimeout(function () {
            productList.style.transition = 'all 0.5s';
        });
    });

    carouselNext.addEventListener('click', function () {
        direction = -1;
        productList.style.transform = "translateX(-20%)";
    });


    carouselPrev.addEventListener('click', function () {
        direction = 1;
        productList.style.transform = "translateX(20%)";
    })
}