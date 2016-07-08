/**
 * Created by ivanoreh on 7/8/16.
 */

function updateProducts(){
    XHR.get(url + 'products', function(resp){
        console.log(resp);
        var lista = document.getElementById("product-list");
        var newInnerHTML = "";

        for(var i = 0; i < resp.length; ++i){
            var img = "img/placeholder.png";
            try{
                img = resp[i].slike[0].url;
            }catch(e){

            }

            var item = ' <div class="single-product">' +
                '<div class="product-f-image">' +
                '<img src="' + img +'" alt="">' +
                '<div class="product-hover">' +
                '<a href="#" class="add-to-cart-link"><i class="fa fa-share-alt"></i> Share </a>' +
                '<a href="single-product.html" class="view-details-link"><i class="fa fa-link"></i> Detalji </a>'+
                '</div>'+
                '</div>'+

                '<h2>' + resp[i].ime +  '</h2>' +
                '<div class="product-carousel-price">'+
                    '<ins>' + resp[i].cijena +' Kn</ins>' +
                '</div>'+
                '</div>';

            newInnerHTML += item;
        }

        lista.innerHTML = newInnerHTML;
        $("#owl-example").owlCarousel();
    })
}