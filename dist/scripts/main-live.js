!function(e,i,t){"use strict";function r(e,i){var t=new XMLHttpRequest;t.overrideMimeType("application/json"),t.open("GET",e,!0),t.onreadystatechange=function(){4==t.readyState&&"200"==t.status&&i(t.responseText)},t.send(null)}function p(e,i){var t=e.properties.field_image_id,r="",p=e.properties.rotation||0,n=e.properties.name||"",o=a+e.properties.nid,l="";l=0!==p?"full/,"+s+"/"+p+"/native.jpg":"full/"+s+",/"+p+"/native.jpg",t&&(r=t.replace(new RegExp("(.*/)[^/]+$"),"$1")+l);var d='<div style="width:'+s+'px;""><a class="popup" href='+o+'><h3 class="popup-text">'+n+"</h3><img src="+r+"></a></div>";i.bindPopup(d,{minWidth:s})}function n(){r(l,function(e){var i=JSON.parse(e),r=t.geoJson(i,{style:function(e){return e.properties&&e.properties.style},onEachFeature:p}),n=t.markerClusterGroup({spiderfyDistanceMultiplier:3,showCoverageOnHover:!1});n.addLayer(r),d.addLayer(n)})}t.Icon.Default.imagePath="images/";var a="http://libphp-prod.princeton.edu/versailles/item/",o="http://libimages.princeton.edu/loris2/exhibits%2FVersailles%2Fversailles_13%2FImage00120_vert.jp2/info.json",s=250,l="http://libphp-prod.princeton.edu/versailles/map.json",d=t.map("map",{center:[0,0],crs:t.CRS.Simple,zoom:0}),u=t.tileLayer.iiif(o,{}).addTo(d);u.on("load",n)}(window,document,L);