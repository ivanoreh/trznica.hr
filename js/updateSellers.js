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
                       '<a href="prodavac.html?seller='+ resp[i]._id + '"><img src="' + img + '" alt="" class="product-thumb"></a>' +
                        '<h2><a href="prodavac.html?seller='+ resp[i]._id + '">' + resp[i].name.first + ' ' + resp[i].name.last + '</a></h2>' +
                       '<h2><a href="prodavac.html?seller='+ resp[i]._id + '">Broj proizvoda: ' + Math.round(Math.random() * 3)  +
                       '</div>';

            if (!resp[i].isAdmin)
                newInnerHTML += item;
        }

        lista.innerHTML = newInnerHTML;
    })
}