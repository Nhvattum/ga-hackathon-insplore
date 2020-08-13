import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import Title from '../components/title'
import MapSidebar from './maps/components/map-sidebar'

const Map0 = dynamic(() => import('./maps/components/map0'), {
  loading: () => <p>Loading...</p>,
  ssr: false
})


export default function MapboxViewWorld() {

  const router = useRouter()
  const [show, setShow] = useState(false);

  return (
    <div>
      <div>
        <Title />
        <h3 className="subheading">
            explore from indoors
          </h3>
        <div className="map-body">
          <MapSidebar show={ show } />
          <Map0 setShow={ setShow } />
        </div>
      </div>
      <html>
          <head>
            <script src='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
          </head>
          <div>
            <div className="homeButton">
              <span onClick={() => router.push('/')}>Return to home page</span>
            </div>
          </div>
            <Title />
            <div className="map-body">
              <Map0 />
              <MapSidebar />
            </div>
            <footer>
            <div className="homeButton">
              <span onClick={() => router.push('/')}>Return to home page</span>
            </div>
            </footer>
      </html>
    </div>
  )
} 