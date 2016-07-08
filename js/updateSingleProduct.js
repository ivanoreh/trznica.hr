/**
 * Created by ivanoreh on 7/8/16.
 */

function updateSingleProduct(id){
    XHR.get(url + 'product/' + id, function(item){
        console.log(item);

        var img = "img/placeholder.png";
        try{
            img = item.slike[0].url;
        }catch(e){

        }

        item = '<h2 class="product-name">Sony Smart TV - 2015</h2>' +
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
            '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tristique, diam in consequat iaculis, est purus iaculis mauris, imperdiet facilisis ante ligula at nulla. Quisque volutpat nulla risus, id maximus ex aliquet ut. Suspendisse potenti. Nulla varius lectus id turpis dignissim porta. Quisque magna arcu, blandit quis felis vehicula, feugiat gravida diam. Nullam nec turpis ligula. Aliquam quis blandit elit, ac sodales nisl. Aliquam eget dolor eget elit malesuada aliquet. In varius lorem lorem, semper bibendum lectus lobortis ac.</p>'+

            '<p>Mauris placerat vitae lorem gravida viverra. Mauris in fringilla ex. Nulla facilisi. Etiam scelerisque tincidunt quam facilisis lobortis. In malesuada pulvinar neque a consectetur. Nunc aliquam gravida purus, non malesuada sem accumsan in. Morbi vel sodales libero.</p>'+
            '</div>'+
            '<div role="tabpanel" class="tab-pane fade" id="profile">'+
            '<h2>Lokacija</h2>'+
            '<p>A2</p>'+
            '</div>'+
            '</div>'+
            '</div>';

        document.getElementById("proizvod").innerHTML = item;
    })
}