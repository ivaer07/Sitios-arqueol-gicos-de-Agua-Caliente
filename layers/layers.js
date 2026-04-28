ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:8908").setExtent([500593.160547, 1081031.862183, 519059.754297, 1090694.445516]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_LmiteDistrital_1 = new ol.format.GeoJSON();
var jsonSource_LmiteDistrital_1 = new ol.source.Vector({
    attributions: ' ',
});
var lyr_LmiteDistrital_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LmiteDistrital_1, 
                style: style_LmiteDistrital_1,
                popuplayertitle: 'Límite Distrital',
                interactive: false,
    title: 'Límite Distrital<br />\
    <img src="styles/legend/LmiteDistrital_1_0.png" /> Aguacaliente o San Francisco<br />' });

fetchWFSLmiteDistrital_1Data(lyr_LmiteDistrital_1.get('title'), function (error, response) {
    var features_LmiteDistrital_1;
    try {
        if (typeof response === "object" && !response.nodeType) {
            // Case JSONP/GeoJSON
            features_LmiteDistrital_1 = format_LmiteDistrital_1.readFeatures(response);
        } else {
            // Case XML string o DOM
            var parser = new DOMParser();
            var xmlDoc = (typeof response === "string")
                ? parser.parseFromString(response, "text/xml")
                : response;

            // Find GML version from tags
            var gmlFormat;
            if (xmlDoc.getElementsByTagName("gml:featureMember").length > 0) {
                // GML2
                gmlFormat = new ol.format.GML2();
            } else if (xmlDoc.getElementsByTagName("gml:featureMembers").length > 0 ||
                    xmlDoc.getElementsByTagName("gml:FeatureCollection").length > 0) {
                // GML3
                gmlFormat = new ol.format.GML3();
            } else {
                // Fallback generico
                gmlFormat = new ol.format.WFS();
            }

            features_LmiteDistrital_1 = gmlFormat.readFeatures(xmlDoc, {
                dataProjection: 'EPSG:3857',
                featureProjection: map.getView().getProjection()
            });
        }

        if (features_LmiteDistrital_1 && features_LmiteDistrital_1.length > 0) {
            jsonSource_LmiteDistrital_1.addFeatures(features_LmiteDistrital_1);
        } else {
            lyr_LmiteDistrital_1.set('title', '<i class="fa-regular fa-triangle-exclamation" title="Parsing Error"></i> ' + lyr_LmiteDistrital_1.get('title'));
            console.warn("No features loaded for LmiteDistrital_1");
        }
    } catch (e) {
        console.error("Error parsing WFS for LmiteDistrital_1:", e);
    }
});
var format_Sitioarqueolgico_2 = new ol.format.GeoJSON();
var features_Sitioarqueolgico_2 = format_Sitioarqueolgico_2.readFeatures(json_Sitioarqueolgico_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:8908'});
var jsonSource_Sitioarqueolgico_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitioarqueolgico_2.addFeatures(features_Sitioarqueolgico_2);
var lyr_Sitioarqueolgico_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitioarqueolgico_2, 
                style: style_Sitioarqueolgico_2,
                popuplayertitle: 'Sitio arqueológico',
                interactive: true,
                title: '<img src="styles/legend/Sitioarqueolgico_2.png" /> Sitio arqueológico'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_LmiteDistrital_1.setVisible(true);lyr_Sitioarqueolgico_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_LmiteDistrital_1,lyr_Sitioarqueolgico_2];
lyr_LmiteDistrital_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GlobalID': 'GlobalID', 'CÓDIGO': 'CÓDIGO', 'CÓDIGO_DTA': 'CÓDIGO_DTA', 'PROVINCIA': 'PROVINCIA', 'CANTÓN': 'CANTÓN', 'DISTRITO': 'DISTRITO', 'CÓDIGO_PROVINCIA': 'CÓDIGO_PROVINCIA', 'CÓDIGO_CANTÓN': 'CÓDIGO_CANTÓN', 'LEGISLACIÓN': 'LEGISLACIÓN', 'OFICIALIZACIÓN': 'OFICIALIZACIÓN', 'SDE': 'SDE', 'REGIÓN': 'REGIÓN', 'VERSIÓN': 'VERSIÓN', });
lyr_Sitioarqueolgico_2.set('fieldAliases', {'Sitio': 'Sitio', 'Sigla': 'Sigla', 'Fecha de registro': 'Fecha de registro', 'Area': 'Area', 'Datacion': 'Datacion', 'Tipo de hallazgo': 'Tipo de hallazgo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'CRTM05 N': 'CRTM05 N', 'CRTM05 E': 'CRTM05 E', });
lyr_LmiteDistrital_1.set('fieldImages', {'OBJECTID': 'Range', 'GlobalID': 'TextEdit', 'CÓDIGO': 'Range', 'CÓDIGO_DTA': 'Range', 'PROVINCIA': 'TextEdit', 'CANTÓN': 'TextEdit', 'DISTRITO': 'TextEdit', 'CÓDIGO_PROVINCIA': 'Range', 'CÓDIGO_CANTÓN': 'Range', 'LEGISLACIÓN': 'TextEdit', 'OFICIALIZACIÓN': 'TextEdit', 'SDE': 'TextEdit', 'REGIÓN': 'TextEdit', 'VERSIÓN': 'TextEdit', });
lyr_Sitioarqueolgico_2.set('fieldImages', {'Sitio': 'TextEdit', 'Sigla': 'TextEdit', 'Fecha de registro': 'TextEdit', 'Area': 'TextEdit', 'Datacion': 'TextEdit', 'Tipo de hallazgo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'CRTM05 N': 'Range', 'CRTM05 E': 'Range', });
lyr_LmiteDistrital_1.set('fieldLabels', {'OBJECTID': 'hidden field', 'GlobalID': 'hidden field', 'CÓDIGO': 'hidden field', 'CÓDIGO_DTA': 'hidden field', 'PROVINCIA': 'hidden field', 'CANTÓN': 'hidden field', 'DISTRITO': 'no label', 'CÓDIGO_PROVINCIA': 'hidden field', 'CÓDIGO_CANTÓN': 'hidden field', 'LEGISLACIÓN': 'hidden field', 'OFICIALIZACIÓN': 'hidden field', 'SDE': 'hidden field', 'REGIÓN': 'hidden field', 'VERSIÓN': 'hidden field', });
lyr_Sitioarqueolgico_2.set('fieldLabels', {'Sitio': 'inline label - always visible', 'Sigla': 'inline label - always visible', 'Fecha de registro': 'inline label - visible with data', 'Area': 'inline label - visible with data', 'Datacion': 'inline label - visible with data', 'Tipo de hallazgo': 'inline label - visible with data', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'CRTM05 N': 'hidden field', 'CRTM05 E': 'hidden field', });
lyr_Sitioarqueolgico_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});