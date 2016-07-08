/**
 * Created by ivanoreh on 7/8/16.
 */

function updateSingleProduct(id){
    XHR.get(url + 'product/' + id, function(item){
        console.log(item);
        item = item[0];

        XHR.get(url + 'category/' + item["kategorija"][0], function(resp){
            console.log(resp);
            document.getElementById("category").innerHTML = "<a>" + resp[0].ime + "</a>";
            document.getElementById("kategorija-item").innerHTML = "<a>" + resp[0].ime + "</a>";
        });

        var img = "img/placeholder.png";
        try{
            img = item.slike[0].url;
        }catch(e){

        }

        item = '<h2 class="product-name">'+ item["ime"] +'</h2>' +
            '<div class="product-inner-price">'+
            '<ins>' + item["cijena"] + ' Kn</ins>'+
            '</div>'+

            '<div class="product-inner-category">'+
            '<p>Kategorija: <a href="" id="kategorija-item">' +  + '</a>. </p>'+
            '</div>'+

            '<div role="tabpanel">'+
            '<ul class="product-tab" role="tablist">'+
            '<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Detalji</a></li>'+
            '<li role="presentation"><a href="http://facebook.com"  >Share</a></li>'+
            '<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Lokacija</a></li>'+
            '</ul>'+
            '<div role="tabpanel" class="tab-pane fade in active" id="home">'+
            '<h2>Opis proizvoda/usluge</h2>'+
            '<p>'+ item["detalji"]+ '</p>'+

            '</div>'+
            '<div role="tabpanel" class="tab-pane fade" id="profile">'+
            '<h2 id="lokacija">Lokacija</h2>'+
            '<p>A2</p>'+
            '</div>'+
            '</div>'+
            '</div>';

        document.getElementById("proizvod").innerHTML = item;
        document.getElementById("proizvod-img").src = img;
    })
}