> This project includes a basic react boilerplate. If you'd rather use another boilerplate such as
> create-react-app, angular-cli, or vue-cli, feel free to do so.

## Objective

Write a small frontend app that fetches layers from an URL and displays them on a map. The user should be able to enable/disable layers within a legend component. The legend component should have a toggle (for enabling/disabling) and an info button.
When clicking on the info button a modal should open displaying the layer's details.

Make it look good, doesn't have to be very sophisticated.

## Requirements

* Use ES6+ syntax.
* Use a component oriented framework (React, Angular 2 or later, VueJS 2).
* Use a Flux-like state management lib (Redux, Mobx, NgRx, Vuex).
* Use the Container-Component pattern to connect the state from the store with the components.
* For the map you can use the library / third-party component you prefer (we usually use leaflet).

## Bonus

* Use a CSS-in-JS solution.
* Include a loading spinner or placeholder.
* Describe any bottleneck or difficulties you might find.

## Basemap

`http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png`

## Layers

```json
[
  {
    "id": 1,
    "type": "leaflet",
    "name": "Weekly Volcano Report",
    "description": "Volcanoes with activity registered over the past 7 days.",
    "layerConfig": {
      "url":
        "https://api.resourcewatch.org/v1/query/c9eadefd-4a06-4f3b-a2eb-3e3f45624c24?sql=SELECT * FROM wat_012_city_water_intakes LIMIT = 10 &format=geojson"
    },
    "legendConfig": {
      "type": "basic",
      "items": [
        {
          "color": "#ed6fb1",
          "name": "Volcanoes with activity over the past 7 days"
        }
      ]
    }
  },

  {
    "id": 2,
    "type": "carto",
    "name": "2017 Climate Risk Index",
    "description":
      "Analysis of global climate risk based on extreme weather events and socioeconomic data in 2017. Lower index scores indicate higher risk.",
    "layerConfig": {
      "body": {
        "layers": [
          {
            "options": {
              "cartocss_version": "2.3.0",
              "cartocss":
                "#soc_067_climate_risk_index {polygon-opacity:1; line-width:0.3; line-color:#FFF; line-opacity:1;} [cri_score>100]{polygon-fill:#FEEAAF;} [cri_score>50][cri_score<=100]{polygon-fill:#FED27F;} [cri_score>20][cri_score<=50]{polygon-fill:#FE7400;} [cri_score>10][cri_score<=20]{polygon-fill:#FC0000;} [cri_score<=10]{polygon-fill:#A60000;}",
              "sql":
                "SELECT wri.cartodb_id, ST_Transform(wri.the_geom, 3857) AS the_geom_webmercator, data.country, data.cri_score FROM soc_067_climate_risk_index data LEFT OUTER JOIN wri_countries_a wri ON wri.name ILIKE TRIM(data.country) WHERE data.cri_score IS NOT NULL AND wri.iso_a3 IS NOT NULL UNION SELECT wri.cartodb_id, ST_Transform(wri.the_geom, 3857) AS the_geom_webmercator, data.country, data.cri_score FROM soc_067_climate_risk_index data INNER JOIN rw_aliasing_countries aliasing ON TRIM(data.country) ILIKE aliasing.alias INNER JOIN wri_countries_a wri ON wri.iso_a3 = aliasing.iso WHERE data.cri_score IS NOT NULL"
            },
            "type": "mapnik"
          }
        ],
        "minzoom": 3,
        "maxzoom": 18
      },
      "account": "wri-rw"
    },
    "legendConfig": {
      "items": [
        {
          "color": "#A60000",
          "name": "≤10"
        },
        {
          "color": "#FC0000",
          "name": "≤20"
        },
        {
          "color": "#FE7400",
          "name": "≤50"
        },
        {
          "color": "#FED27F",
          "name": "≤100"
        },
        {
          "color": "#FEEAAF",
          "name": ">100"
        }
      ],
      "type": "choropleth"
    }
  }
]
```

## Resources

[Carto.com Anonymous Maps docs](https://carto.com/docs/carto-engine/maps-api/anonymous-maps/)

[GeoJSON IO](http://geojson.io/)
