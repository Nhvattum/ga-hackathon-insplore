import React from 'react'
import Title from '../components/title'
import Head from 'next/head'
import Globe from '../components/globe'
import StaticGlobe from '../components/staticGlobe'
import { useRouter } from 'next/router'

export default function Random() {
    const router = useRouter()

    return (
        <div>
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@1,700&display=swap" rel="stylesheet"/>
            </Head>
            <Title />
            <StaticGlobe />
            <div className="randomButtons">
                <button onClick={() => router.push("/randomDestination")}>Spin Again</button>
                <button onClick={() => router.push("/destinations")}>See More Info</button>
            </div>
            <div>This is a "random" destination </div>
        </div>
    )
}