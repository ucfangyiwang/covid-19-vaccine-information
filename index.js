function mouseOver(id) {
    if (document.getElementById(id) != null)
        document.getElementById(id).style.visibility = "visible";//when mouse over the text is visibility
}

function mouseOut(id) {
    if (document.getElementById(id) != null)
        document.getElementById(id).style.visibility = "hidden";//when mouse out the text is hidden
}


var map;

function initMap()
{
  var canberramap = {
    center: {lat:-35.28095067187845,lng: 149.12842384827354}//location
    , zoom: 8,//size of the map
    mapTypeId: google.maps.MapTypeId.ROADMAP  // type of the map 
  };
  map=new google.maps.Map(document.getElementById("googleMap"),canberramap) //add map to web page



var markers=[   // this is a mark arrary
    {
    vaccine:{lat:-35.277395166082236,lng:149.12854441274547},//information about the position and content
  },
  {
    content:'<h5>Immunisation service</h5><p>Address:Jolimont Centre, Shop 2, 65 Northbourne Ave, CITY, ACT 2601 <br>Contact:Phone:  0261621133</p>'//information about the position and content
    },
    {
        vaccine:{lat:-35.34614485625838,lng:149.0860897839122},
        content:'<h5>Immunisation service</h5><p>Address:Westfield Woden, Shop G98, 2 Keltie St, PHILLIP, ACT 2606 <br>Contact:Phone:  0262821414</p>'
        },
        {
            vaccine:{lat:-35.33313939631138,lng:149.1555787974055},
            content:'<h5>Immunisation service</h5><p>Address:63 Boolimba Cres, NARRABUNDAH, ACT 2604<br>Contact:Phone:  02 6284 6222</p>'
            },
        {
         vaccine:{lat:-35.24678528106247,lng:149.1014333587698},
         content:'<h5>Immunisation service</h5><p>Address:AIS Arena, 26 LEVERRIER STREET, BRUCE, ACT<br> 2617Contact:Phone:  0251247700</p>'
             },
          {
                vaccine:{lat:-35.304039559400145,lng:149.19394232730022},
                content:'<h5>Immunisation service</h5><p>Address:30 Nomad Drive, Pialligo</p>'
              },
    ] 
     for(var i = 0;i < markers.length;i++){ // add all of element mark to function
    // Add marker
    Marker(markers[i]);
  }

function Marker(place){
    var marker =new google.maps.Marker({ //add all vaccine clinic on the map
        position:place.vaccine,
        map:map,
    });
    if(place.content){
        var infoWindow = new google.maps.InfoWindow({ // add content 
          content:place.content
        });

        marker.addListener('click', function(){// click 
          infoWindow.open(map, marker);
        });
    }

}
}
