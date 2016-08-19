
var ajax = function(url, callback, type) {

  req = new XMLHttpRequest();
  req.open(type, url, false);
  req.setRequestHeader("Content-type", "application/json");
  req.onreadystatechange = function() {
    if (req.readyState === 4 && req.status === 200) {
      return callback(req.responseText);
    }
  };
  req.send();
  return req;
};


function getResposne(){

    ajax("https://maps.googleapis.com/maps/api/place/textsearch/json?query=Pizza%20Hut%20Denver%20CO&key=AIzaSyDwZV88BYeDPgeLmPoWjBxEyQfCIIh589E",  
    function(data) {


        //do something with the data like:
        self.postMessage(data);
    }, 
    'POST');

}


self.addEventListener('message', function(e) {
  // Send the message back.
  //self.postMessage('You said: ' + e.data);

  getResposne();
}, false);
