var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_CONTOURS_2 = new ol.format.GeoJSON();
var features_CONTOURS_2 = format_CONTOURS_2.readFeatures(json_CONTOURS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_2.addFeatures(features_CONTOURS_2);
var lyr_CONTOURS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_2, 
                style: style_CONTOURS_2,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_2.png" /> CONTOURS'
            });
var format_FILTERWELL_3 = new ol.format.GeoJSON();
var features_FILTERWELL_3 = format_FILTERWELL_3.readFeatures(json_FILTERWELL_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_3.addFeatures(features_FILTERWELL_3);
var lyr_FILTERWELL_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_3, 
                style: style_FILTERWELL_3,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_3.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_4 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_4 = format_OBSERVATIONWELLS_4.readFeatures(json_OBSERVATIONWELLS_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_4.addFeatures(features_OBSERVATIONWELLS_4);
var lyr_OBSERVATIONWELLS_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_4, 
                style: style_OBSERVATIONWELLS_4,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_4.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_5 = new ol.format.GeoJSON();
var features_CONTOURS_5 = format_CONTOURS_5.readFeatures(json_CONTOURS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_5.addFeatures(features_CONTOURS_5);
var lyr_CONTOURS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_5, 
                style: style_CONTOURS_5,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_5.png" /> CONTOURS'
            });
var format_FILTERWELL_6 = new ol.format.GeoJSON();
var features_FILTERWELL_6 = format_FILTERWELL_6.readFeatures(json_FILTERWELL_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_6.addFeatures(features_FILTERWELL_6);
var lyr_FILTERWELL_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_6, 
                style: style_FILTERWELL_6,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_6.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_7 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_7 = format_OBSERVATIONWELLS_7.readFeatures(json_OBSERVATIONWELLS_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_7.addFeatures(features_OBSERVATIONWELLS_7);
var lyr_OBSERVATIONWELLS_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_7, 
                style: style_OBSERVATIONWELLS_7,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_7.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_8 = new ol.format.GeoJSON();
var features_CONTOURS_8 = format_CONTOURS_8.readFeatures(json_CONTOURS_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_8.addFeatures(features_CONTOURS_8);
var lyr_CONTOURS_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_8, 
                style: style_CONTOURS_8,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_8.png" /> CONTOURS'
            });
var format_FILTERWELL_9 = new ol.format.GeoJSON();
var features_FILTERWELL_9 = format_FILTERWELL_9.readFeatures(json_FILTERWELL_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_9.addFeatures(features_FILTERWELL_9);
var lyr_FILTERWELL_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_9, 
                style: style_FILTERWELL_9,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_9.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_10 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_10 = format_OBSERVATIONWELLS_10.readFeatures(json_OBSERVATIONWELLS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_10.addFeatures(features_OBSERVATIONWELLS_10);
var lyr_OBSERVATIONWELLS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_10, 
                style: style_OBSERVATIONWELLS_10,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_10.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_11 = new ol.format.GeoJSON();
var features_CONTOURS_11 = format_CONTOURS_11.readFeatures(json_CONTOURS_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_11.addFeatures(features_CONTOURS_11);
var lyr_CONTOURS_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_11, 
                style: style_CONTOURS_11,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_11.png" /> CONTOURS'
            });
var format_FILTERWELL_12 = new ol.format.GeoJSON();
var features_FILTERWELL_12 = format_FILTERWELL_12.readFeatures(json_FILTERWELL_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_12.addFeatures(features_FILTERWELL_12);
var lyr_FILTERWELL_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_12, 
                style: style_FILTERWELL_12,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_12.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_13 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_13 = format_OBSERVATIONWELLS_13.readFeatures(json_OBSERVATIONWELLS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_13.addFeatures(features_OBSERVATIONWELLS_13);
var lyr_OBSERVATIONWELLS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_13, 
                style: style_OBSERVATIONWELLS_13,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_13.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_14 = new ol.format.GeoJSON();
var features_CONTOURS_14 = format_CONTOURS_14.readFeatures(json_CONTOURS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_14.addFeatures(features_CONTOURS_14);
var lyr_CONTOURS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_14, 
                style: style_CONTOURS_14,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_14.png" /> CONTOURS'
            });
var format_FILTERWELL_15 = new ol.format.GeoJSON();
var features_FILTERWELL_15 = format_FILTERWELL_15.readFeatures(json_FILTERWELL_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_15.addFeatures(features_FILTERWELL_15);
var lyr_FILTERWELL_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_15, 
                style: style_FILTERWELL_15,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_15.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_16 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_16 = format_OBSERVATIONWELLS_16.readFeatures(json_OBSERVATIONWELLS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_16.addFeatures(features_OBSERVATIONWELLS_16);
var lyr_OBSERVATIONWELLS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_16, 
                style: style_OBSERVATIONWELLS_16,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_16.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_17 = new ol.format.GeoJSON();
var features_CONTOURS_17 = format_CONTOURS_17.readFeatures(json_CONTOURS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_17.addFeatures(features_CONTOURS_17);
var lyr_CONTOURS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_17, 
                style: style_CONTOURS_17,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_17.png" /> CONTOURS'
            });
var format_FILTERWELLS_18 = new ol.format.GeoJSON();
var features_FILTERWELLS_18 = format_FILTERWELLS_18.readFeatures(json_FILTERWELLS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELLS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELLS_18.addFeatures(features_FILTERWELLS_18);
var lyr_FILTERWELLS_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELLS_18, 
                style: style_FILTERWELLS_18,
                popuplayertitle: "FILTER WELLS",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELLS_18.png" /> FILTER WELLS'
            });
var format_OBSERVATIONWELLS_19 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_19 = format_OBSERVATIONWELLS_19.readFeatures(json_OBSERVATIONWELLS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_19.addFeatures(features_OBSERVATIONWELLS_19);
var lyr_OBSERVATIONWELLS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_19, 
                style: style_OBSERVATIONWELLS_19,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_19.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_20 = new ol.format.GeoJSON();
var features_CONTOURS_20 = format_CONTOURS_20.readFeatures(json_CONTOURS_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_20.addFeatures(features_CONTOURS_20);
var lyr_CONTOURS_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_20, 
                style: style_CONTOURS_20,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_20.png" /> CONTOURS'
            });
var format_FILTERWELL_21 = new ol.format.GeoJSON();
var features_FILTERWELL_21 = format_FILTERWELL_21.readFeatures(json_FILTERWELL_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_21.addFeatures(features_FILTERWELL_21);
var lyr_FILTERWELL_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_21, 
                style: style_FILTERWELL_21,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_21.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_22 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_22 = format_OBSERVATIONWELLS_22.readFeatures(json_OBSERVATIONWELLS_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_22.addFeatures(features_OBSERVATIONWELLS_22);
var lyr_OBSERVATIONWELLS_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_22, 
                style: style_OBSERVATIONWELLS_22,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_22.png" /> OBSERVATION WELLS'
            });
var format_CONTOURS_23 = new ol.format.GeoJSON();
var features_CONTOURS_23 = format_CONTOURS_23.readFeatures(json_CONTOURS_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOURS_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOURS_23.addFeatures(features_CONTOURS_23);
var lyr_CONTOURS_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOURS_23, 
                style: style_CONTOURS_23,
                popuplayertitle: "CONTOURS",
                interactive: true,
                title: '<img src="styles/legend/CONTOURS_23.png" /> CONTOURS'
            });
var format_FILTERWELLS_24 = new ol.format.GeoJSON();
var features_FILTERWELLS_24 = format_FILTERWELLS_24.readFeatures(json_FILTERWELLS_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELLS_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELLS_24.addFeatures(features_FILTERWELLS_24);
var lyr_FILTERWELLS_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELLS_24, 
                style: style_FILTERWELLS_24,
                popuplayertitle: "FILTER WELLS",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELLS_24.png" /> FILTER WELLS'
            });
var format_OBSERVATIONWELLS_25 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_25 = format_OBSERVATIONWELLS_25.readFeatures(json_OBSERVATIONWELLS_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_25.addFeatures(features_OBSERVATIONWELLS_25);
var lyr_OBSERVATIONWELLS_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_25, 
                style: style_OBSERVATIONWELLS_25,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_25.png" /> OBSERVATION WELLS'
            });
var format_CONTOUR_26 = new ol.format.GeoJSON();
var features_CONTOUR_26 = format_CONTOUR_26.readFeatures(json_CONTOUR_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_26.addFeatures(features_CONTOUR_26);
var lyr_CONTOUR_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_26, 
                style: style_CONTOUR_26,
                popuplayertitle: "CONTOUR",
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_26.png" /> CONTOUR'
            });
var format_FILTERWELL_27 = new ol.format.GeoJSON();
var features_FILTERWELL_27 = format_FILTERWELL_27.readFeatures(json_FILTERWELL_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_27.addFeatures(features_FILTERWELL_27);
var lyr_FILTERWELL_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_27, 
                style: style_FILTERWELL_27,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_27.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELL_28 = new ol.format.GeoJSON();
var features_OBSERVATIONWELL_28 = format_OBSERVATIONWELL_28.readFeatures(json_OBSERVATIONWELL_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELL_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELL_28.addFeatures(features_OBSERVATIONWELL_28);
var lyr_OBSERVATIONWELL_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELL_28, 
                style: style_OBSERVATIONWELL_28,
                popuplayertitle: "OBSERVATION WELL",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELL_28.png" /> OBSERVATION WELL'
            });
var format_CONTOUR_29 = new ol.format.GeoJSON();
var features_CONTOUR_29 = format_CONTOUR_29.readFeatures(json_CONTOUR_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_29.addFeatures(features_CONTOUR_29);
var lyr_CONTOUR_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_29, 
                style: style_CONTOUR_29,
                popuplayertitle: "CONTOUR",
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_29.png" /> CONTOUR'
            });
var format_Point_Files_Mar_FW_30 = new ol.format.GeoJSON();
var features_Point_Files_Mar_FW_30 = format_Point_Files_Mar_FW_30.readFeatures(json_Point_Files_Mar_FW_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Point_Files_Mar_FW_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Point_Files_Mar_FW_30.addFeatures(features_Point_Files_Mar_FW_30);
var lyr_Point_Files_Mar_FW_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Point_Files_Mar_FW_30, 
                style: style_Point_Files_Mar_FW_30,
                popuplayertitle: "Point_Files_Mar_FW",
                interactive: true,
                title: '<img src="styles/legend/Point_Files_Mar_FW_30.png" /> Point_Files_Mar_FW'
            });
var format_OBSERVATIONWELL_31 = new ol.format.GeoJSON();
var features_OBSERVATIONWELL_31 = format_OBSERVATIONWELL_31.readFeatures(json_OBSERVATIONWELL_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELL_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELL_31.addFeatures(features_OBSERVATIONWELL_31);
var lyr_OBSERVATIONWELL_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELL_31, 
                style: style_OBSERVATIONWELL_31,
                popuplayertitle: "OBSERVATION WELL",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELL_31.png" /> OBSERVATION WELL'
            });
var format_CONTOUR_32 = new ol.format.GeoJSON();
var features_CONTOUR_32 = format_CONTOUR_32.readFeatures(json_CONTOUR_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_32.addFeatures(features_CONTOUR_32);
var lyr_CONTOUR_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_32, 
                style: style_CONTOUR_32,
                popuplayertitle: "CONTOUR",
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_32.png" /> CONTOUR'
            });
var format_FILTERWELL_33 = new ol.format.GeoJSON();
var features_FILTERWELL_33 = format_FILTERWELL_33.readFeatures(json_FILTERWELL_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_33.addFeatures(features_FILTERWELL_33);
var lyr_FILTERWELL_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_33, 
                style: style_FILTERWELL_33,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_33.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_34 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_34 = format_OBSERVATIONWELLS_34.readFeatures(json_OBSERVATIONWELLS_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_34.addFeatures(features_OBSERVATIONWELLS_34);
var lyr_OBSERVATIONWELLS_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_34, 
                style: style_OBSERVATIONWELLS_34,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_34.png" /> OBSERVATION WELLS'
            });
var format_CONTOUR_35 = new ol.format.GeoJSON();
var features_CONTOUR_35 = format_CONTOUR_35.readFeatures(json_CONTOUR_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_35.addFeatures(features_CONTOUR_35);
var lyr_CONTOUR_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_35, 
                style: style_CONTOUR_35,
                popuplayertitle: "CONTOUR",
                interactive: true,
                title: '<img src="styles/legend/CONTOUR_35.png" /> CONTOUR'
            });
var format_FILTERWELL_36 = new ol.format.GeoJSON();
var features_FILTERWELL_36 = format_FILTERWELL_36.readFeatures(json_FILTERWELL_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FILTERWELL_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FILTERWELL_36.addFeatures(features_FILTERWELL_36);
var lyr_FILTERWELL_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FILTERWELL_36, 
                style: style_FILTERWELL_36,
                popuplayertitle: "FILTER WELL",
                interactive: true,
                title: '<img src="styles/legend/FILTERWELL_36.png" /> FILTER WELL'
            });
var format_OBSERVATIONWELLS_37 = new ol.format.GeoJSON();
var features_OBSERVATIONWELLS_37 = format_OBSERVATIONWELLS_37.readFeatures(json_OBSERVATIONWELLS_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OBSERVATIONWELLS_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSERVATIONWELLS_37.addFeatures(features_OBSERVATIONWELLS_37);
var lyr_OBSERVATIONWELLS_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSERVATIONWELLS_37,
maxResolution:70.0111653806549,
 
                style: style_OBSERVATIONWELLS_37,
                popuplayertitle: "OBSERVATION WELLS",
                interactive: true,
                title: '<img src="styles/legend/OBSERVATIONWELLS_37.png" /> OBSERVATION WELLS'
            });
var group_GROUNDWATERMODELLINGJAN = new ol.layer.Group({
                                layers: [lyr_CONTOUR_35,lyr_FILTERWELL_36,lyr_OBSERVATIONWELLS_37,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - JAN"});
var group_GROUNDWATERMODELLINGFEB = new ol.layer.Group({
                                layers: [lyr_CONTOUR_32,lyr_FILTERWELL_33,lyr_OBSERVATIONWELLS_34,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - FEB "});
var group_GROUNDWATERMODELLINGMAR = new ol.layer.Group({
                                layers: [lyr_CONTOUR_29,lyr_Point_Files_Mar_FW_30,lyr_OBSERVATIONWELL_31,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - MAR "});
var group_GROUNDWATERMODELLINGAPR = new ol.layer.Group({
                                layers: [lyr_CONTOUR_26,lyr_FILTERWELL_27,lyr_OBSERVATIONWELL_28,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - APR  "});
var group_GROUNDWATERMODELLINGMAY = new ol.layer.Group({
                                layers: [lyr_CONTOURS_23,lyr_FILTERWELLS_24,lyr_OBSERVATIONWELLS_25,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - MAY"});
var group_GROUNDWATERMODELLINGJUNE = new ol.layer.Group({
                                layers: [lyr_CONTOURS_20,lyr_FILTERWELL_21,lyr_OBSERVATIONWELLS_22,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - JUNE "});
var group_GROUNDWATERMODELLINGJUL = new ol.layer.Group({
                                layers: [lyr_CONTOURS_17,lyr_FILTERWELLS_18,lyr_OBSERVATIONWELLS_19,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - JUL "});
var group_GROUNDWATERMODELLINGAUG = new ol.layer.Group({
                                layers: [lyr_CONTOURS_14,lyr_FILTERWELL_15,lyr_OBSERVATIONWELLS_16,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - AUG "});
var group_GROUNDWATERMODELLINGSEP = new ol.layer.Group({
                                layers: [lyr_CONTOURS_11,lyr_FILTERWELL_12,lyr_OBSERVATIONWELLS_13,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - SEP "});
var group_GROUNDWATERMODELLINGOCT = new ol.layer.Group({
                                layers: [lyr_CONTOURS_8,lyr_FILTERWELL_9,lyr_OBSERVATIONWELLS_10,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - OCT "});
var group_GROUNDWATERMODELLINGNOV = new ol.layer.Group({
                                layers: [lyr_CONTOURS_5,lyr_FILTERWELL_6,lyr_OBSERVATIONWELLS_7,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - NOV "});
var group_GROUNDWATERMODELLINGDEC = new ol.layer.Group({
                                layers: [lyr_CONTOURS_2,lyr_FILTERWELL_3,lyr_OBSERVATIONWELLS_4,],
                                fold: "open",
                                title: "GROUND WATER MODELLING - DEC "});

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_CONTOURS_2.setVisible(true);lyr_FILTERWELL_3.setVisible(true);lyr_OBSERVATIONWELLS_4.setVisible(true);lyr_CONTOURS_5.setVisible(true);lyr_FILTERWELL_6.setVisible(true);lyr_OBSERVATIONWELLS_7.setVisible(true);lyr_CONTOURS_8.setVisible(true);lyr_FILTERWELL_9.setVisible(true);lyr_OBSERVATIONWELLS_10.setVisible(true);lyr_CONTOURS_11.setVisible(true);lyr_FILTERWELL_12.setVisible(true);lyr_OBSERVATIONWELLS_13.setVisible(true);lyr_CONTOURS_14.setVisible(true);lyr_FILTERWELL_15.setVisible(true);lyr_OBSERVATIONWELLS_16.setVisible(true);lyr_CONTOURS_17.setVisible(true);lyr_FILTERWELLS_18.setVisible(true);lyr_OBSERVATIONWELLS_19.setVisible(true);lyr_CONTOURS_20.setVisible(true);lyr_FILTERWELL_21.setVisible(true);lyr_OBSERVATIONWELLS_22.setVisible(true);lyr_CONTOURS_23.setVisible(true);lyr_FILTERWELLS_24.setVisible(true);lyr_OBSERVATIONWELLS_25.setVisible(true);lyr_CONTOUR_26.setVisible(true);lyr_FILTERWELL_27.setVisible(true);lyr_OBSERVATIONWELL_28.setVisible(true);lyr_CONTOUR_29.setVisible(true);lyr_Point_Files_Mar_FW_30.setVisible(true);lyr_OBSERVATIONWELL_31.setVisible(true);lyr_CONTOUR_32.setVisible(true);lyr_FILTERWELL_33.setVisible(true);lyr_OBSERVATIONWELLS_34.setVisible(true);lyr_CONTOUR_35.setVisible(true);lyr_FILTERWELL_36.setVisible(true);lyr_OBSERVATIONWELLS_37.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,group_GROUNDWATERMODELLINGDEC,group_GROUNDWATERMODELLINGNOV,group_GROUNDWATERMODELLINGOCT,group_GROUNDWATERMODELLINGSEP,group_GROUNDWATERMODELLINGAUG,group_GROUNDWATERMODELLINGJUL,group_GROUNDWATERMODELLINGJUNE,group_GROUNDWATERMODELLINGMAY,group_GROUNDWATERMODELLINGAPR,group_GROUNDWATERMODELLINGMAR,group_GROUNDWATERMODELLINGFEB,group_GROUNDWATERMODELLINGJAN];
lyr_CONTOURS_2.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_3.set('fieldAliases', {'id': 'id', 'Flter_Wel': 'Flter_Wel', 'Z-Value': 'Z-Value', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_OBSERVATIONWELLS_4.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-II': 'ASCI-II', 'ASCI-I': 'ASCI-I', });
lyr_CONTOURS_5.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_6.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Value': 'Z-Value', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_OBSERVATIONWELLS_7.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOURS_8.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_9.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Values': 'Z-Values', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_OBSERVATIONWELLS_10.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOURS_11.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_12.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Values': 'Z-Values', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_OBSERVATIONWELLS_13.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOURS_14.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_15.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Value': 'Z-Value', 'ASCI-II': 'ASCI-II', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', });
lyr_OBSERVATIONWELLS_16.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-II': 'ASCI-II', 'ASCI-I': 'ASCI-I', });
lyr_CONTOURS_17.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELLS_18.set('fieldAliases', {'id': 'id', 'Z-Value': 'Z-Value', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Flter_WELL': 'Flter_WELL', });
lyr_OBSERVATIONWELLS_19.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Well Name': 'Well Name', });
lyr_CONTOURS_20.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_21.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Value': 'Z-Value', 'P-NAME': 'P-NAME', 'ASCI - I': 'ASCI - I', 'ASCI - II': 'ASCI - II', });
lyr_OBSERVATIONWELLS_22.set('fieldAliases', {'id': 'id', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Layer-': 'Layer-', });
lyr_CONTOURS_23.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELLS_24.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Values': 'Z-Values', 'ASCI-II': 'ASCI-II', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', });
lyr_OBSERVATIONWELLS_25.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOUR_26.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_27.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'Z-Value': 'Z-Value', 'P-NAME': 'P-NAME', 'ASCI - I': 'ASCI - I', 'ASCI - II': 'ASCI - II', });
lyr_OBSERVATIONWELL_28.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOUR_29.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_Point_Files_Mar_FW_30.set('fieldAliases', {'id': 'id', 'Flter_Well': 'Flter_Well', 'P-Name': 'P-Name', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Z-Value': 'Z-Value', });
lyr_OBSERVATIONWELL_31.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'Z-Values': 'Z-Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOUR_32.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_33.set('fieldAliases', {'id': 'id', 'Flter_Well': 'Flter_Well', 'P-Name': 'P-Name', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Z-Value': 'Z-Value', });
lyr_OBSERVATIONWELLS_34.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'Well Name': 'Well Name', 'DIFF': 'DIFF', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Z-Values': 'Z-Values', });
lyr_CONTOUR_35.set('fieldAliases', {'fid': 'fid', 'RECORD': 'RECORD', 'LAYER': 'LAYER', 'Z': 'Z', 'ID': 'ID', 'ICOL': 'ICOL', 'ITYP': 'ITYP', 'IART': 'IART', 'TEXT': 'TEXT', 'LZ': 'LZ', });
lyr_FILTERWELL_36.set('fieldAliases', {'id': 'id', 'Flter_WELL': 'Flter_WELL', 'P-NAME': 'P-NAME', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', 'Z-Value': 'Z-Value', });
lyr_OBSERVATIONWELLS_37.set('fieldAliases', {'id': 'id', 'Layer': 'Layer', 'P-NAME': 'Well Name', 'DIFF': 'DIFF', 'Z -Values': 'Z -Values', 'ASCI-I': 'ASCI-I', 'ASCI-II': 'ASCI-II', });
lyr_CONTOURS_2.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_3.set('fieldImages', {'id': '', 'Flter_Wel': '', 'Z-Value': '', 'P-NAME': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_OBSERVATIONWELLS_4.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-II': '', 'ASCI-I': '', });
lyr_CONTOURS_5.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_6.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Value': '', 'P-NAME': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_OBSERVATIONWELLS_7.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOURS_8.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_9.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Values': '', 'P-NAME': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_OBSERVATIONWELLS_10.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOURS_11.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_12.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Values': '', 'P-NAME': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_OBSERVATIONWELLS_13.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOURS_14.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_15.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Value': '', 'ASCI-II': '', 'P-NAME': '', 'ASCI-I': '', });
lyr_OBSERVATIONWELLS_16.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-II': '', 'ASCI-I': '', });
lyr_CONTOURS_17.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELLS_18.set('fieldImages', {'id': '', 'Z-Value': '', 'P-NAME': '', 'ASCI-I': '', 'ASCI-II': '', 'Flter_WELL': '', });
lyr_OBSERVATIONWELLS_19.set('fieldImages', {'id': '', 'Layer': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', 'Well Name': '', });
lyr_CONTOURS_20.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_21.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Value': '', 'P-NAME': '', 'ASCI - I': '', 'ASCI - II': '', });
lyr_OBSERVATIONWELLS_22.set('fieldImages', {'id': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', 'Layer-': '', });
lyr_CONTOURS_23.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELLS_24.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Values': '', 'ASCI-II': '', 'P-NAME': '', 'ASCI-I': '', });
lyr_OBSERVATIONWELLS_25.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOUR_26.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_FILTERWELL_27.set('fieldImages', {'id': '', 'Flter_WELL': '', 'Z-Value': '', 'P-NAME': '', 'ASCI - I': '', 'ASCI - II': '', });
lyr_OBSERVATIONWELL_28.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOUR_29.set('fieldImages', {'fid': '', 'RECORD': '', 'LAYER': '', 'Z': '', 'ID': '', 'ICOL': '', 'ITYP': '', 'IART': '', 'TEXT': '', 'LZ': '', });
lyr_Point_Files_Mar_FW_30.set('fieldImages', {'id': '', 'Flter_Well': '', 'P-Name': '', 'ASCI-I': '', 'ASCI-II': '', 'Z-Value': '', });
lyr_OBSERVATIONWELL_31.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'Z-Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOUR_32.set('fieldImages', {'fid': 'TextEdit', 'RECORD': 'Range', 'LAYER': 'TextEdit', 'Z': 'TextEdit', 'ID': 'Range', 'ICOL': 'Range', 'ITYP': 'Range', 'IART': 'Range', 'TEXT': 'TextEdit', 'LZ': 'TextEdit', });
lyr_FILTERWELL_33.set('fieldImages', {'id': '', 'Flter_Well': '', 'P-Name': '', 'ASCI-I': '', 'ASCI-II': '', 'Z-Value': '', });
lyr_OBSERVATIONWELLS_34.set('fieldImages', {'id': '', 'Layer': '', 'Well Name': '', 'DIFF': '', 'ASCI-I': '', 'ASCI-II': '', 'Z-Values': '', });
lyr_CONTOUR_35.set('fieldImages', {'fid': 'TextEdit', 'RECORD': 'Range', 'LAYER': 'TextEdit', 'Z': 'TextEdit', 'ID': 'Range', 'ICOL': 'Range', 'ITYP': 'Range', 'IART': 'Range', 'TEXT': 'TextEdit', 'LZ': 'TextEdit', });
lyr_FILTERWELL_36.set('fieldImages', {'id': 'TextEdit', 'Flter_WELL': 'TextEdit', 'P-NAME': 'TextEdit', 'ASCI-I': '', 'ASCI-II': '', 'Z-Value': '', });
lyr_OBSERVATIONWELLS_37.set('fieldImages', {'id': 'TextEdit', 'Layer': 'TextEdit', 'P-NAME': 'TextEdit', 'DIFF': 'TextEdit', 'Z -Values': '', 'ASCI-I': '', 'ASCI-II': '', });
lyr_CONTOURS_2.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_3.set('fieldLabels', {'id': 'no label', 'Flter_Wel': 'no label', 'Z-Value': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_OBSERVATIONWELLS_4.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-II': 'no label', 'ASCI-I': 'no label', });
lyr_CONTOURS_5.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_6.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Value': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_OBSERVATIONWELLS_7.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_CONTOURS_8.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_9.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Values': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_OBSERVATIONWELLS_10.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_CONTOURS_11.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_12.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Values': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_OBSERVATIONWELLS_13.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_CONTOURS_14.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_15.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Value': 'no label', 'ASCI-II': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', });
lyr_OBSERVATIONWELLS_16.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-II': 'no label', 'ASCI-I': 'no label', });
lyr_CONTOURS_17.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELLS_18.set('fieldLabels', {'id': 'no label', 'Z-Value': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Flter_WELL': 'no label', });
lyr_OBSERVATIONWELLS_19.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Well Name': 'no label', });
lyr_CONTOURS_20.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_21.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Value': 'no label', 'P-NAME': 'no label', 'ASCI - I': 'no label', 'ASCI - II': 'no label', });
lyr_OBSERVATIONWELLS_22.set('fieldLabels', {'id': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Layer-': 'no label', });
lyr_CONTOURS_23.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELLS_24.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Values': 'no label', 'ASCI-II': 'no label', 'P-NAME': 'no label', 'ASCI-I': 'no label', });
lyr_OBSERVATIONWELLS_25.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_CONTOUR_26.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_27.set('fieldLabels', {'id': 'no label', 'Flter_WELL': 'no label', 'Z-Value': 'no label', 'P-NAME': 'no label', 'ASCI - I': 'no label', 'ASCI - II': 'no label', });
lyr_OBSERVATIONWELL_28.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_CONTOUR_29.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_Point_Files_Mar_FW_30.set('fieldLabels', {'id': 'no label', 'Flter_Well': 'no label', 'P-Name': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Z-Value': 'no label', });
lyr_OBSERVATIONWELL_31.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'Z-Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_CONTOUR_32.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_33.set('fieldLabels', {'id': 'no label', 'Flter_Well': 'no label', 'P-Name': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Z-Value': 'no label', });
lyr_OBSERVATIONWELLS_34.set('fieldLabels', {'id': 'no label', 'Layer': 'no label', 'Well Name': 'no label', 'DIFF': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Z-Values': 'no label', });
lyr_CONTOUR_35.set('fieldLabels', {'fid': 'no label', 'RECORD': 'no label', 'LAYER': 'no label', 'Z': 'no label', 'ID': 'no label', 'ICOL': 'no label', 'ITYP': 'no label', 'IART': 'no label', 'TEXT': 'no label', 'LZ': 'no label', });
lyr_FILTERWELL_36.set('fieldLabels', {'id': 'header label - visible with data', 'Flter_WELL': 'hidden field', 'P-NAME': 'inline label - always visible', 'ASCI-I': 'no label', 'ASCI-II': 'no label', 'Z-Value': 'no label', });
lyr_OBSERVATIONWELLS_37.set('fieldLabels', {'id': 'hidden field', 'Layer': 'inline label - always visible', 'P-NAME': 'inline label - always visible', 'DIFF': 'inline label - always visible', 'Z -Values': 'no label', 'ASCI-I': 'no label', 'ASCI-II': 'no label', });
lyr_OBSERVATIONWELLS_37.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});