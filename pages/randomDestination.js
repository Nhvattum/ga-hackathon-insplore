import React from 'react'
import Title from '../components/title'
import Head from 'next/head'
import Link from 'next/link'
import Globe from '../components/globe'
import StaticGlobe from '../components/staticGlobe'
import { useRouter } from 'next/router'

export default function Random() {
    const router = useRouter()

    return (
        <div>
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"/>
            </Head>
            <Title />
            <h3 className="subheading">
                explore from indoors
            </h3>
            <StaticGlobe />
            <div className="randomButtons">
                <button className="randomButton" onClick={() => router.push("/randomDestination")}>Spin Again</button>
                <button className="destinationButton" onClick={() => router.push("/destinations")}>Destinations</button>
            </div>
        </div>
    )
}