/**
 * Created by ivanoreh on 7/8/16.
 */

function updateTopProducts() {
    XHR.get(url + 'products', function (resp) {
        console.log(resp);
        var lista = document.getElementById("top-products-list");
        var newInnerHTML = "";

        for (var i = 0; i < resp.length && i < 3; ++i) {
            var img = "img/placeholder.png";
            try {
                img = resp[i].slike[0].url;
            } catch (e) {

            }

            var item = '<div class="single-wid-product">' +
                       '<a href="single-product.html?id=' + resp[i]._id + '"><img src="' + img + '" alt="" class="product-thumb"></a>' +
                       '<h2>' + resp[i].ime + '</h2>' +
                       '<div class="product-carousel-price">' +
                    '<ins>' + resp[i].cijena + ' Kn</ins>' +
                    '</div>' +
                       '<a href="https://www.facebook.com/sharer/sharer.php?u=http://ivanorehovec.info/single-product.html?id=' + resp[i]._id + '" class="add-to-cart-link"><i class="fa fa-share-alt"></i> Share </a>' +
                       '<a href="single-product.html?id=' + resp[i]._id + '" class="view-details-link"><i class="fa fa-link"></i> Detalji </a>' +
                       '</div>';

            if (!resp[i].isAdmin)
                newInnerHTML += item;
        }

        lista.innerHTML = newInnerHTML;
    })
}