import * as React from 'react'
import { useState } from 'react'
import { Component } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl'


const places = [{
  name: "Eat and Drink",
  lat: -11.98938,
  lon: -77.08634,
  address: "Jiron Santa 137\nentrada a Alameda Chabuca Granda Lima\n15001, Peru",
  bannerURL: "https://i.imgur.com/7Bxx12L.png",
  bodyURL: "https://i.imgur.com/OAZfivo.png" 
}, {
  name: "Basilica y Convento de San Francisco do Lima",
  lat: -12.052660,
  lon: -77.033030,
  address: "Jirón Lampa\nCercado de Lima\n15001, Peru"
}, {
  name: "Larco Museum",
  lat: -12.072400,
  lon: -77.066000,
  address: "Av. Simón Bolivar 1515\nPueblo Libre\n15084, Peru"
}, {
  name: "Park of the Reserve",
  lat: -12.036910,
  lon: -77.091320,
  address: "Jr. Madre de Dios S/N\nCercado de Lima, Peru"
}, {
  name: "Bus to Macchu Picchu",
  lat: -12.089730,
  lon: -77.016160,
  address: ""
}
]


class Map extends Component {

  setSelectedMarker = (object) => {
    this.setState({
      selectedMarker: object,
      sidebarURL: object.bodyURL
    })
  };

  closePopup = () => {
    this.setState({
      selectedMarker: null,
      sidebarURL: ""
    })
  }

  state = {
    viewport: {
      width: 1200,
      height: 700,
      latitude: -12.10,
      longitude: -77.06,
      zoom: 11,
      scrollZoom: false
    },
    selectedMarker: null,
    sidebarURL: ""
  };
 
  render() {
    return (
      <div className="mapContainer">
        <head>
          <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet"/>
        </head>
        <div>
        </div>
        <ReactMapGL
          mapStyle="mapbox://styles/mapbox/streets-v9"
          mapboxApiAccessToken={`${process.env.NEXT_PUBLIC_MAPBOX_API_KEY}`}
          onViewportChange={(viewport) => this.setState({ viewport })}
          {...this.state.viewport}
          >
          <div className="PlacesList">
            {
            Object.keys(places).map((p, i) => {
              console.log(places[p].name);
              return <div key={i} id={places[p].name} className="MarkerDiv" onClick={(e) => {this.setSelectedMarker(places[p])}}>
                {this.state.selectedMarker !== null ? (
                  <Popup
                    latitude={this.state.selectedMarker.lat} 
                    longitude={this.state.selectedMarker.lon}
                    closeButton={false}
                    onClose={this.closePopup}
                    closeOnClick={true}
                    anchor="bottom"
                    offsetLeft={-88}
                    ><h3>{this.state.selectedMarker.name}</h3>
                    {/* <h3>{this.state.selectedMarker.address}</h3> */}
                      </Popup>
                    ) : 
                    null
                    }
                <Marker latitude={places[p].lat} longitude={places[p].lon}></Marker>
              </div>
            })
          }
          </div>
         
        </ReactMapGL>
      </div>
    );
  }
}

export default Map;