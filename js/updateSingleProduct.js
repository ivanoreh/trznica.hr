/**
 * Created by ivanoreh on 7/8/16.
 */

var myitem;
function updateSingleProduct(id){
    XHR.get(url + 'product/' + id, function(item){
        console.log(item);
        item = item[0];
        var myitem = item;
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
            '<li role="presentation"><a href="https://www.facebook.com/sharer/sharer.php?u=http://ivanorehovec.info/trznica.hr/single-product.html?id='+ item._id  + '"  >Share</a></li>'+
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

        XHR.get(url + 'users/', function(resp){
            console.log(resp);


            for(var i = 0; i < resp.length; ++i){
                if(resp[i]._id != myitem.vlasnik)
                    continue;

                var img = "img/placeholder.png";
                try{
                    img = resp[i].slika.url;
                }catch(e){

                }

                var item ='<h2 class="sidebar-title">Od istog ponuditelja</h2>' +
                    '<div class="single-wid-product">' +
                    '<a href="prodavac.html?seller='+ resp[i]._id + '"><img src="' + img + '" alt="" class="product-thumb"></a>' +
                    '<h2><a href="prodavac.html?seller='+ resp[i]._id + '">' + resp[i].name.first + ' ' + resp[i].name.last + '</a></h2>' +
                    '<h2><a href="prodavac.html?seller='+ resp[i]._id + '">Broj proizvoda: 1' +
                    '</div>';

                document.getElementById("ponuditelj").innerHTML = item;
            }

        })
    })
}