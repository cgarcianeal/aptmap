import {Component, Inject, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { MapService } from '../../_services/map.service';
import { GeoJson, FeatureCollection } from '../../_models/map';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';


@Component({
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit{

  opened = true;

  /// default settings
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 38.901937;
  lng = -77.066926;
  message = 'Hello World!';



  // data
  source: any;
  markers;

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
    this.mapService.getApts().subscribe(res => {
      console.log(res);
      this.markers = [];
      this.markers = res;
    });
    this.initializeMap()
  }

  private initializeMap() {
    /// locate the user
    if (!navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.map.flyTo({
          center: [this.lng, this.lat]
        })
      });
    }


    setTimeout(() => {
      this.map.flyTo({
        center: [-77.062445, 38.897493 ]
      })
    }, 0);

    this.buildMap()

  }

  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lng, this.lat]
    });


    /// Add map controls
    this.map.addControl(new mapboxgl.NavigationControl());


    //// Add Marker on Click
    this.map.on('click', (event) => {
      const coordinates = [event.lngLat.lng, event.lngLat.lat]
      const newMarker   = new GeoJson(coordinates, { message: this.message })
      //this.mapService.createMarker(newMarker)
    })


    /// Add realtime firebase data on map load
    this.map.on('load', (event) => {

      /// register source
      this.map.addSource('firebase', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: []
        }
      });

      let m = this.map;

      /// get source
      this.source = this.map.getSource('firebase');

      /// subscribe to realtime database and set data source
      /*
      this.markers.subscribe(markers => {
        let data = new FeatureCollection(markers)
        this.source.setData(data)
      })

       */
      let data = new FeatureCollection(this.markers);
      this.source.setData(data);


      /// create map layers with realtime data
      this.map.addLayer({
        id: 'firebase',
        source: 'firebase',
        type: 'symbol',
        layout: {
          'text-field': '{name}',
          'text-size': 12,
          'text-transform': 'uppercase',
          'icon-image': 'castle-15',
          'icon-size': 1.8,
          'icon-allow-overlap': true,
          'text-allow-overlap': true,
          'text-offset': [0, 1.5]
        },
        paint: {
          'text-color': 'blue',
          'text-halo-color': '#fff',
          'text-halo-width': 2
        }
      })

    })

  }


  /// Helpers
/*
  removeMarker(marker) {
    this.mapService.removeMarker(marker.$key)
  }

 */

  flyTo(data: GeoJson) {
    this.map.flyTo({
      center: data.geometry.coordinates
    })
  }
}
