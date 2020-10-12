ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [59.93863506417266,30.323117499999945],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        }),

    // Создаем геообъект с типом геометрии "Точка".
        myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [59.93863506417266,30.323117499999945]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '',
                hintContent: ''
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#blackStretchyIcon',
            // Метку можно перемещать.
            draggable: false
        }),
        myPieChart = new ymaps.Placemark([
            55.847, 37.6
        ], {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 30,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 10,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 3,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 200
        });

    myMap.geoObjects
                .add(new ymaps.Placemark([59.93863506417266,30.323117499999945], {
            balloonContent: 'Большая конюшня 19/8',
        }, {
            preset: 'islands#blueCircleDotIconWithCaption',
            iconCaptionMaxWidth: '50'
        }));
}

