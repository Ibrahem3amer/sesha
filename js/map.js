
function myMap() {
    var mapCanvas = document.getElementById("map");
    var mapOptions = {
    center: new google.maps.LatLng(31.032178, 31.202202), 
    zoom: 7
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
    //------------------------start marker 1
    var marker1 = new google.maps.Marker({
        position: {lat: 31.045373, lng: 31.360637},
        map: map,
        title: 'Hour of code | Mansoura'
    });
    var contentString1 = '<div class="content-windows">'+
        '<h1 class="firstHeading">Hour of code | Mansoura</h1>'+
        '<div class="bodyContent">'+
        '<p class="bodyContent-first-p"><b><a href="https://www.facebook.com/Optimus.Space/" target="_blank">Optimus Coworking Space</a></b> co-working space, its better environment to study and work.</p>'+
        '<p class="bodyContent-second-p">Monday - 28 november 2016 at 12 pm</p>'+
        '</div>'+
        '</div>';

    var infowindow1 = new google.maps.InfoWindow({
        content: contentString1
    });
    marker1.addListener('click', function() {
        infowindow1.open(map, marker1);
    });
    //------------------------end marker 1

    //------------------------start marker 2
    var marker2 = new google.maps.Marker({
        position: {lat: 31.118573, lng: 30.943318},
        map: map,
        title: 'Hour of code | Kafr El-Shiekh'
    });
    var contentString2 = '<div class="content-windows">'+
        '<h1 class="firstHeading">Hour of code | Kafr El-Shiekh</h1>'+
        '<div class="bodyContent">'+
        '<p class="bodyContent-first-p"><b><a href="https://www.facebook.com/iGate.Coworking.Space/" target="_blank">I-Gate Coworking Space</a></b> co-working space, its better environment to study and work.</p>'+
        '<p class="bodyContent-second-p">tuesday and wednesday - 29 and 30 november 2016 at 3 pm.</p>'+
        '</div>'+
        '</div>';

    var infowindow2 = new google.maps.InfoWindow({
        content: contentString2
    });
    marker2.addListener('click', function() {
        infowindow2.open(map, marker2);
    });
    //------------------------end marker 2
    //------------------------start marker 3
    var marker3 = new google.maps.Marker({
        position: {lat: 31.242283, lng: 29.961380},
        map: map,
        title: 'Hour of code | Alexandria'
    });
    var contentString3 = '<div class="content-windows">'+
        '<h1 class="firstHeading">Hour of code | Alexandria</h1>'+
        '<div class="bodyContent">'+
        '<p class="bodyContent-first-p"><b><a href="https://www.facebook.com/Almorabaa3/" target="_blank">Almoraba3 co-working space</a></b> , its better environment to study and work</p>'+
        '<p class="bodyContent-second-p">Saturday - 3 march 2017 at 1 pm.</p>'+
        '</div>'+
        '</div>';

    var infowindow3 = new google.maps.InfoWindow({
        content: contentString3
    });
    marker3.addListener('click', function() {
        infowindow3.open(map, marker3);
    });
    //------------------------end marker 3
    //------------------------start marker 4
    var marker4 = new google.maps.Marker({
        position: {lat: 30.587713, lng: 31.487664},
        map: map,
        title: 'Hour of code | Zagazig'
    });
    var contentString4 = '<div class="content-windows">'+
        '<h1 class="firstHeading">Hour of code | Zagazig</h1>'+
        '<div class="bodyContent">'+
        '<p class="bodyContent-first-p"><b><a href="https://www.facebook.com/almejarra/" target="_blank">AlMejarra co-working space</a></b> , its better environment to study and work</p>'+
        '<p class="bodyContent-second-p">Saturday - 3 march 2017 at 1 pm.</p>'+
        '</div>'+
        '</div>';

    var infowindow4 = new google.maps.InfoWindow({
        content: contentString4
    });
    marker4.addListener('click', function() {
        infowindow4.open(map, marker4);
    });
    //------------------------end marker 3
}
                                    