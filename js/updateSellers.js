/**
 * Created by ivanoreh on 7/8/16.
 */

function updateSellers(){
    XHR.get(url + 'users/', function(resp){
        console.log(resp);
        var lista = document.getElementById("sellers-list");
        var newInnerHTML = "";

        for(var i = 0; i < resp.length; ++i){
            var img = "img/placeholder.png";
            try{
                img = resp[i].slika.url;
            }catch(e){

            }

            var item = '<div class="single-wid-product">' +
                       '<a href="single-product.html"><img src="' + img + '" alt="" class="product-thumb"></a>' +
                       '<h2><a href="single-product.html">' + resp[i].name.first + ' ' + resp[i].name.last + '</a></h2>' +
                       '<h2><a href="single-product.html">Broj proizvoda: 26' +
                       '</div>';

            if (!resp[i].isAdmin)
                newInnerHTML += item;
        }

        lista.innerHTML = newInnerHTML;
    })
}