import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import TestCities from './maps/components/testCities.js'
import { Card, ListGroup, Button } from 'react-bootstrap'


import Title from '../components/title'
import Globe from '../components/globe'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    return(
        <div className="home">
            <Head >
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@1,700&display=swap" rel="stylesheet"/>
                <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap" rel="stylesheet"></link>
            </Head>
            <Title />
            <h3 className="subheading">
                explore from indoors
            </h3>
            {/* <Globe /> */}
            <div>
                <Card className="outerCard" style={{ height:'33rem', width: '31em'}}>
                    <div className="xDiv">
                        Destinations
                        <Link className="xLink" href="/">
                            <a className="aX">
                                <img className="x" src="/x.png"/>
                            </a>
                        </Link>
                    </div>
                    <Card.Body >
                        <Card className="destinationCard" style={{ width:'30em' }}>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="destinationCard">
                                    <div className="cityButton">
                                        <h3 className="city">Paris
                                        </h3>
                                        <button className="destinationBtn">Explore</button>
                                    </div>
                                    <h5 className="country">France</h5><br />
                                    <div>
                                        <img className="pics" src="paris preview - 1 - eiffel.png"/>
                                        <img className="pics" src="paris preview - 2 - louvre.png"/>
                                        <img className="pics" src="paris preview - 3 - Crepe.png"/>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="destinationCard">
                                    <div className="cityButton">
                                        <h3 className="city">Osaka
                                        </h3>
                                        <button className="destinationBtn">Explore</button>
                                    </div>
                                    <h5 className="country">Japan</h5><br />
                                    <div>
                                        <img className="pics" src="Osaka preview - 1 - Osaka Castle.png"/>
                                        <img className="pics" src="Osaka preview - 2 - boat.png"/>
                                        <img className="pics" src="Osaka preview - 3 - Sushi.png"/>
                                    </div>
                                </ListGroup.Item>
                                <ListGroup.Item className="destinationCard">
                                    <div className="cityButton">
                                        <h3 className="city">Cairo
                                        </h3>
                                        <button className="destinationBtn">Explore</button>
                                    </div>
                                    <h5 className="country">Egypt</h5><br />
                                    <div>
                                        <img className="pics" src="Cairo preview - 1 - pyramid.png"/>
                                        <img className="pics" src="Cairo preview - 2 - mosque.png"/>
                                        <img className="pics" src="Cairo preview - 3 - middle eastern food.png"/>
                                    </div>
                                </ListGroup.Item>
                            </ListGroup>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
            {/* <div className="homeButtons">
                <button onClick={() => router.push("/randomDestination")}>Randomize</button>
                <button onClick={() => router.push("/destinations")}>Destinations</button>
            </div> */}
        </div>
    )
}
