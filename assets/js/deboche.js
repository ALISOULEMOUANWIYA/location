

    /*function beforClick() {
        map.on('click', function (e) {
                init();
                //console.log(e)
                //var newMarker = L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
                L.Routing.control({
                    waypoints: [
                        L.latLng(latitudeCc, longitudeCc),
                        L.latLng(e.latlng.lat, e.latlng.lng)
                    ],
                    routeWhileDragging: true
                }).on('routesfound', function (e) {
                    var routes = e.routes;
                    var i = 0, j=0 , k=0, timeController;
                    j = e.routes[0].coordinates.length / e.routes[0].instructions.length;
                    e.routes[0].coordinates.forEach(function (coord, index) {
                        var timeout = setTimeout(routing, 300 * index);
                        function routing() {
                            i +=1;
                            marker.setLatLng([coord.lat, coord.lng]);
                            if (i == e.routes[0].coordinates.length) {
                                if (marker) {
                                    //map.removeLayer(marker);
                                }
                                marker = L.marker([coord.lat, coord.lng], { icon: taxiIcon }).addTo(map);
                                marker.bindPopup("<b>"+e.routes[0].name+"</b><br>vous etes bien arrivé.").openPopup();
                                i=0;
                                j=0;
                                k=0;
                                clearTimeout(timeout);
                                buildMap();
                                
                            } else {
                                //console.log(i);
                                j-=1;
                                style(true)
                                if (j == 0) {
                                    j = e.routes[0].coordinates.length / e.routes[0].instructions.length;
                                    k+=1;
                                    marker.bindPopup("<b>maintenant vous etes à :</b><br>"+e.routes[0].instructions[k].road).openPopup();
                                } else {
                                    marker.bindPopup("<b>maintenant vous etes à :</b><br>"+e.routes[0].instructions[k].road).openPopup();
                                }
                            }
                        }
                    })

                }).addTo(map);
            });
    }*/
