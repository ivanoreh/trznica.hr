/**
 * Created by ivanoreh on 7/8/16.
 */

function updateProducts(){
    XHR.get(url + 'products', function(resp){
        console.log(resp);
        var lista = document.getElementById("product-list");
        var newInnerHTML = "";

        for(var i = 0; i < resp.length && i < 8; ++i){
            var img = "img/placeholder.png";
            try{
                img = resp[i].slike[0].url;
            }catch(e){

            }

            var item = ' <div class="single-product col-md-3 col-sm-6">' +
                '<div class="product-f-image">' +
                '<img src="' + img +'" alt="" class="product-img">' +
                '<div class="product-hover">' +
                '<a href="https://www.facebook.com/sharer/sharer.php?u=http://ivanorehovec.info/single-product.html?id='+ resp[i]._id  + '" class="add-to-cart-link"><i class="fa fa-share-alt"></i> Share </a>' +
                '<a href="single-product.html?id='+ resp[i]._id  + '" class="view-details-link"><i class="fa fa-link"></i> Detalji </a>'+
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
        $('.owl-carousel').owlCarousel();
        $('.product-carousel').owlCarousel({
            loop:true,
            nav:true,
            margin:20,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:5,
                }
            }
        });

        $('.related-products-carousel').owlCarousel({
            loop:true,
            nav:true,
            margin:20,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:2,
                },
                1000:{
                    items:2,
                },
                1200:{
                    items:3,
                }
            }
        });

        $('.brand-list').owlCarousel({
            loop:true,
            nav:true,
            margin:20,
            responsiveClass:true,
            responsive:{
                0:{
                    items:1,
                },
                600:{
                    items:3,
                },
                1000:{
                    items:4,
                }
            }
        });
    })
}