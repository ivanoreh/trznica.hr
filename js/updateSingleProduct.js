/**
 * Created by ivanoreh on 7/8/16.
 */

function updateSingleProduct(id){
    XHR.get(url + 'product/' + id, function(item){
        console.log(item);
        item = item[0];

        var img = "img/placeholder.png";
        try{
            img = item.slike[0].url;
        }catch(e){

        }

        item = '<h2 class="product-name">'+ item["ime"] +'</h2>' +
            '<div class="product-inner-price">'+
            '<ins>' + item["cijena"] + '</ins>'+
            '</div>'+

            '<div class="product-inner-category">'+
            '<p>Kategorija: <a href="" id="kategorija-item">Summer</a>. </p>'+
            '</div>'+

            '<div role="tabpanel">'+
            '<ul class="product-tab" role="tablist">'+
            '<li role="presentation" class="active"><a href="#home" aria-controls="home" role="tab" data-toggle="tab">Detalji</a></li>'+
            '<li role="presentation"><a href="#profile" aria-controls="profile" role="tab" data-toggle="tab">Lokacija</a></li>'+
            '</ul>'+
            '<div class="tab-content">'+
            '<div role="tabpanel" class="tab-pane fade in active" id="home">'+
            '<h2>Opis proizvoda/usluge</h2>'+
            '<p>'+ item["detalji"]+ '</p>'+

            '</div>'+
            '<div role="tabpanel" class="tab-pane fade" id="profile">'+
            '<h2>Lokacija</h2>'+
            '<p>A2</p>'+
            '</div>'+
            '</div>'+
            '</div>';

        document.getElementById("proizvod").innerHTML = item;
        document.getElementById("proizvod-img").src = img;
    })
}