import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { GeoJson } from '../_models/map';
import * as mapboxgl from 'mapbox-gl';

@Injectable()
export class MapService {

  apts: GeoJson[] = [
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-77.076042, 38.892960]
      },
      "properties": {
        name: "Rosslyn",
        address: "12312 perwe apt 43",
        dw: true,
        wd: true
      }
    },
    {
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "coordinates": [-77.051755, 38.899831]
      },
      "properties": {
        "name": "Foggy Bottom",
        address: "12312 perwe apt 43",
        dw: true,
        wd: true
      }
    }
  ];

  constructor() {
    mapboxgl.accessToken = environment.mapbox.accessToken
  }

  getMarkers() {
    return this.apts;
  }

  /*
    createMarker(data: GeoJson) {
      return this.db.list('/markers')
        .push(dat    }
  /*
    removeMarker($key: string) {
      return this.db.object('/markers/' + $key).remove()
    }

   */

}
