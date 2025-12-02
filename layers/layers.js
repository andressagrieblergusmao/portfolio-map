var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Lakesandwatersources_1 = new ol.format.GeoJSON();
var features_Lakesandwatersources_1 = format_Lakesandwatersources_1.readFeatures(json_Lakesandwatersources_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lakesandwatersources_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lakesandwatersources_1.addFeatures(features_Lakesandwatersources_1);
var lyr_Lakesandwatersources_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lakesandwatersources_1, 
                style: style_Lakesandwatersources_1,
                popuplayertitle: 'Lakes and water sources',
                interactive: true,
                title: '<img src="styles/legend/Lakesandwatersources_1.png" /> Lakes and water sources'
            });
var format_RightRiveroutsidethelimitedarea_2 = new ol.format.GeoJSON();
var features_RightRiveroutsidethelimitedarea_2 = format_RightRiveroutsidethelimitedarea_2.readFeatures(json_RightRiveroutsidethelimitedarea_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RightRiveroutsidethelimitedarea_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RightRiveroutsidethelimitedarea_2.addFeatures(features_RightRiveroutsidethelimitedarea_2);
var lyr_RightRiveroutsidethelimitedarea_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RightRiveroutsidethelimitedarea_2, 
                style: style_RightRiveroutsidethelimitedarea_2,
                popuplayertitle: 'Right River (outside the limited area)',
                interactive: true,
                title: '<img src="styles/legend/RightRiveroutsidethelimitedarea_2.png" /> Right River (outside the limited area)'
            });
var format_LeftRiveroutsideofthelimitedarea_3 = new ol.format.GeoJSON();
var features_LeftRiveroutsideofthelimitedarea_3 = format_LeftRiveroutsideofthelimitedarea_3.readFeatures(json_LeftRiveroutsideofthelimitedarea_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LeftRiveroutsideofthelimitedarea_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LeftRiveroutsideofthelimitedarea_3.addFeatures(features_LeftRiveroutsideofthelimitedarea_3);
var lyr_LeftRiveroutsideofthelimitedarea_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LeftRiveroutsideofthelimitedarea_3, 
                style: style_LeftRiveroutsideofthelimitedarea_3,
                popuplayertitle: 'Left River (outside of the limited area)',
                interactive: true,
                title: '<img src="styles/legend/LeftRiveroutsideofthelimitedarea_3.png" /> Left River (outside of the limited area)'
            });
var format_LegalProtectionofSecundaryRivers_4 = new ol.format.GeoJSON();
var features_LegalProtectionofSecundaryRivers_4 = format_LegalProtectionofSecundaryRivers_4.readFeatures(json_LegalProtectionofSecundaryRivers_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegalProtectionofSecundaryRivers_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegalProtectionofSecundaryRivers_4.addFeatures(features_LegalProtectionofSecundaryRivers_4);
var lyr_LegalProtectionofSecundaryRivers_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegalProtectionofSecundaryRivers_4, 
                style: style_LegalProtectionofSecundaryRivers_4,
                popuplayertitle: 'Legal Protection of Secundary Rivers',
                interactive: true,
                title: '<img src="styles/legend/LegalProtectionofSecundaryRivers_4.png" /> Legal Protection of Secundary Rivers'
            });
var format_SecundaryRivers_5 = new ol.format.GeoJSON();
var features_SecundaryRivers_5 = format_SecundaryRivers_5.readFeatures(json_SecundaryRivers_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SecundaryRivers_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SecundaryRivers_5.addFeatures(features_SecundaryRivers_5);
var lyr_SecundaryRivers_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SecundaryRivers_5, 
                style: style_SecundaryRivers_5,
                popuplayertitle: 'Secundary Rivers',
                interactive: true,
                title: '<img src="styles/legend/SecundaryRivers_5.png" /> Secundary Rivers'
            });
var format_LegalProtectionoftheMainRiver_6 = new ol.format.GeoJSON();
var features_LegalProtectionoftheMainRiver_6 = format_LegalProtectionoftheMainRiver_6.readFeatures(json_LegalProtectionoftheMainRiver_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegalProtectionoftheMainRiver_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegalProtectionoftheMainRiver_6.addFeatures(features_LegalProtectionoftheMainRiver_6);
var lyr_LegalProtectionoftheMainRiver_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegalProtectionoftheMainRiver_6, 
                style: style_LegalProtectionoftheMainRiver_6,
                popuplayertitle: 'Legal Protection of the Main River',
                interactive: true,
                title: '<img src="styles/legend/LegalProtectionoftheMainRiver_6.png" /> Legal Protection of the Main River'
            });
var format_MainRiver_7 = new ol.format.GeoJSON();
var features_MainRiver_7 = format_MainRiver_7.readFeatures(json_MainRiver_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MainRiver_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MainRiver_7.addFeatures(features_MainRiver_7);
var lyr_MainRiver_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MainRiver_7, 
                style: style_MainRiver_7,
                popuplayertitle: 'Main River',
                interactive: true,
                title: '<img src="styles/legend/MainRiver_7.png" /> Main River'
            });
var format_LegalProtectionArea_8 = new ol.format.GeoJSON();
var features_LegalProtectionArea_8 = format_LegalProtectionArea_8.readFeatures(json_LegalProtectionArea_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LegalProtectionArea_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LegalProtectionArea_8.addFeatures(features_LegalProtectionArea_8);
var lyr_LegalProtectionArea_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LegalProtectionArea_8, 
                style: style_LegalProtectionArea_8,
                popuplayertitle: 'Legal Protection Area',
                interactive: true,
                title: '<img src="styles/legend/LegalProtectionArea_8.png" /> Legal Protection Area'
            });
var format_StudyArea_9 = new ol.format.GeoJSON();
var features_StudyArea_9 = format_StudyArea_9.readFeatures(json_StudyArea_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StudyArea_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StudyArea_9.addFeatures(features_StudyArea_9);
var lyr_StudyArea_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StudyArea_9, 
                style: style_StudyArea_9,
                popuplayertitle: 'Study Area',
                interactive: true,
                title: '<img src="styles/legend/StudyArea_9.png" /> Study Area'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Lakesandwatersources_1.setVisible(true);lyr_RightRiveroutsidethelimitedarea_2.setVisible(true);lyr_LeftRiveroutsideofthelimitedarea_3.setVisible(true);lyr_LegalProtectionofSecundaryRivers_4.setVisible(true);lyr_SecundaryRivers_5.setVisible(true);lyr_LegalProtectionoftheMainRiver_6.setVisible(true);lyr_MainRiver_7.setVisible(true);lyr_LegalProtectionArea_8.setVisible(true);lyr_StudyArea_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Lakesandwatersources_1,lyr_RightRiveroutsidethelimitedarea_2,lyr_LeftRiveroutsideofthelimitedarea_3,lyr_LegalProtectionofSecundaryRivers_4,lyr_SecundaryRivers_5,lyr_LegalProtectionoftheMainRiver_6,lyr_MainRiver_7,lyr_LegalProtectionArea_8,lyr_StudyArea_9];
lyr_Lakesandwatersources_1.set('fieldAliases', {'nome': 'nome', 'geometriaA': 'geometriaA', 'regime': 'regime', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'tipoTrecho': 'tipoTrecho', 'salinidade': 'salinidade', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'Extensão': 'Extensão', });
lyr_RightRiveroutsidethelimitedarea_2.set('fieldAliases', {'geometriaA': 'geometriaA', 'coincideCo': 'coincideCo', 'dentroDePo': 'dentroDePo', 'compartilh': 'compartilh', 'caladoMax': 'caladoMax', 'regime': 'regime', 'larguraMed': 'larguraMed', 'velocidade': 'velocidade', 'profundida': 'profundida', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'eixoPrinci': 'eixoPrinci', 'nome': 'nome', 'navegabili': 'navegabili', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LeftRiveroutsideofthelimitedarea_3.set('fieldAliases', {'geometriaA': 'geometriaA', 'coincideCo': 'coincideCo', 'dentroDePo': 'dentroDePo', 'compartilh': 'compartilh', 'caladoMax': 'caladoMax', 'regime': 'regime', 'larguraMed': 'larguraMed', 'velocidade': 'velocidade', 'profundida': 'profundida', 'nomeAbrev': 'nomeAbrev', 'ID_Trecho_': 'ID_Trecho_', 'eixoPrinci': 'eixoPrinci', 'nome': 'nome', 'navegabili': 'navegabili', 'SHAPE_Leng': 'SHAPE_Leng', });
lyr_LegalProtectionofSecundaryRivers_4.set('fieldAliases', {'AREAAFLUEN': 'AREAAFLUEN', });
lyr_SecundaryRivers_5.set('fieldAliases', {'COMPAFLUEN': 'COMPAFLUEN', });
lyr_LegalProtectionoftheMainRiver_6.set('fieldAliases', {'AREATOTAL': 'AREATOTAL', });
lyr_MainRiver_7.set('fieldAliases', {'id': 'id', });
lyr_LegalProtectionArea_8.set('fieldAliases', {'RESDENTRO': 'RESDENTRO', });
lyr_StudyArea_9.set('fieldAliases', {'AREATOTAL': 'AREATOTAL', });
lyr_Lakesandwatersources_1.set('fieldImages', {'nome': 'TextEdit', 'geometriaA': 'Range', 'regime': 'Range', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'tipoTrecho': 'Range', 'salinidade': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'Extensão': 'TextEdit', });
lyr_RightRiveroutsidethelimitedarea_2.set('fieldImages', {'geometriaA': 'Range', 'coincideCo': 'Range', 'dentroDePo': 'Range', 'compartilh': 'Range', 'caladoMax': 'TextEdit', 'regime': 'Range', 'larguraMed': 'TextEdit', 'velocidade': 'TextEdit', 'profundida': 'TextEdit', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'eixoPrinci': 'Range', 'nome': 'TextEdit', 'navegabili': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_LeftRiveroutsideofthelimitedarea_3.set('fieldImages', {'geometriaA': 'Range', 'coincideCo': 'Range', 'dentroDePo': 'Range', 'compartilh': 'Range', 'caladoMax': 'TextEdit', 'regime': 'Range', 'larguraMed': 'TextEdit', 'velocidade': 'TextEdit', 'profundida': 'TextEdit', 'nomeAbrev': 'TextEdit', 'ID_Trecho_': 'Range', 'eixoPrinci': 'Range', 'nome': 'TextEdit', 'navegabili': 'Range', 'SHAPE_Leng': 'TextEdit', });
lyr_LegalProtectionofSecundaryRivers_4.set('fieldImages', {'AREAAFLUEN': 'TextEdit', });
lyr_SecundaryRivers_5.set('fieldImages', {'COMPAFLUEN': 'TextEdit', });
lyr_LegalProtectionoftheMainRiver_6.set('fieldImages', {'AREATOTAL': 'TextEdit', });
lyr_MainRiver_7.set('fieldImages', {'id': 'TextEdit', });
lyr_LegalProtectionArea_8.set('fieldImages', {'RESDENTRO': 'TextEdit', });
lyr_StudyArea_9.set('fieldImages', {'AREATOTAL': 'TextEdit', });
lyr_Lakesandwatersources_1.set('fieldLabels', {'nome': 'no label', 'geometriaA': 'no label', 'regime': 'no label', 'nomeAbrev': 'no label', 'ID_Trecho_': 'no label', 'tipoTrecho': 'no label', 'salinidade': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'Extensão': 'no label', });
lyr_RightRiveroutsidethelimitedarea_2.set('fieldLabels', {'geometriaA': 'no label', 'coincideCo': 'no label', 'dentroDePo': 'no label', 'compartilh': 'no label', 'caladoMax': 'no label', 'regime': 'no label', 'larguraMed': 'no label', 'velocidade': 'no label', 'profundida': 'no label', 'nomeAbrev': 'no label', 'ID_Trecho_': 'no label', 'eixoPrinci': 'no label', 'nome': 'no label', 'navegabili': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LeftRiveroutsideofthelimitedarea_3.set('fieldLabels', {'geometriaA': 'no label', 'coincideCo': 'no label', 'dentroDePo': 'no label', 'compartilh': 'no label', 'caladoMax': 'no label', 'regime': 'no label', 'larguraMed': 'no label', 'velocidade': 'no label', 'profundida': 'no label', 'nomeAbrev': 'no label', 'ID_Trecho_': 'no label', 'eixoPrinci': 'no label', 'nome': 'no label', 'navegabili': 'no label', 'SHAPE_Leng': 'no label', });
lyr_LegalProtectionofSecundaryRivers_4.set('fieldLabels', {'AREAAFLUEN': 'no label', });
lyr_SecundaryRivers_5.set('fieldLabels', {'COMPAFLUEN': 'no label', });
lyr_LegalProtectionoftheMainRiver_6.set('fieldLabels', {'AREATOTAL': 'no label', });
lyr_MainRiver_7.set('fieldLabels', {'id': 'no label', });
lyr_LegalProtectionArea_8.set('fieldLabels', {'RESDENTRO': 'no label', });
lyr_StudyArea_9.set('fieldLabels', {'AREATOTAL': 'no label', });
lyr_StudyArea_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});