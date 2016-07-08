//var url = "http://localhost:3000/";
var url = "http://hrkify.ivanorehovec.info:3000/";
var XHR = new function() {
	this.post = function(url, data, callback){
		var xmlHttp = new XMLHttpRequest();
		
		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				//console.log(xmlHttp.responseText);
				var resp = {};
				try{
					resp = JSON.parse(xmlHttp.response);
				} catch(e){
					resp['status'] = xmlHttp.status;
				}
				callback(resp);
			}
			else if(xmlHttp.readyState == 4 ){
				callback("");
			}
		};
		

		xmlHttp.open("POST", url, true); // true for asynchronous, "http://localhost:3000/hrki/look/"
		//var postObj = {hid: 'uniqueID', newLook : 'sdafasdf', locations: [[45,16], [44,15]]};

		xmlHttp.setRequestHeader("Content-type", "application/json");
		xmlHttp.send(JSON.stringify(data));
	};	
	
	this.get = function(url, callback){
		var xmlHttp = new XMLHttpRequest();

		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
				//console.log(xmlHttp.responseText);
				var resp = {};
				try{
					resp = JSON.parse(xmlHttp.response);
				} catch(e){
					resp['status'] = xmlHttp.status;
				}

				var cache = resp;
				try{
					cache = JSON.stringify(cache);
				} catch (e){}
				Storage.set(url, cache);
				callback(resp);
			}
			else if(xmlHttp.readyState == 4){
				var cache = Storage.get(url);
				if(cache == null){
					return;
				}
				try{
					cache = JSON.parse(cache);
				}catch(e){}

				callback(cache);
			}
		};

		xmlHttp.open("GET", url, true); // true for asynchronous, "http://localhost:3000/hrki/look/"
		//var postObj = {hid: 'uniqueID', newLook : 'sdafasdf', locations: [[45,16], [44,15]]};

		xmlHttp.send(null);
	}
};

function getProducts(callback){
    XHR.get(url + "/products", callback);
}


/*
 * function callback(resp){
 *    console.log(resp);
 * }
 * */
