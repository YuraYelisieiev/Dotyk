function start(){
    let carousel = document.querySelector('.Slider');
    carouselize(carousel);
}

function carouselize(carousel){
    let productList = carousel.querySelector('.Product_wrapper__list');
    let productListWidth = 0;
    let productListSteps = 0;
    let products = carousel.querySelectorAll('.Slider__product');
    let productAmount = 0;
    let productAmountVisible = 3;
    let carouselPrev = carousel.querySelector('.prev_button');
    let carouselNext = carousel.querySelector('.next_button');
    [].forEach.call(products, function(product){
        productAmount++;
        productListWidth += 150;
        productList.style.width = productListWidth+"px";
    });

    function moveProductList() {
        productList.style.transform = "translateX(-"+150*productListSteps+"px)";
    }

    carouselNext.onclick = function() {
        if(productListSteps < productAmount-productAmountVisible) {
            productListSteps++;
            moveProductList();
        }
    };

    carouselPrev.onclick = function() {
        if(productListSteps > 0) {
            productListSteps--;
            moveProductList();
        }
    };
}
start();