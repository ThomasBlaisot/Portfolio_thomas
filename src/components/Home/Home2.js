import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillMail, AiFillPhone,
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description">
                        <h1 style={{fontSize: "2.2em"}}>
                            QUAND <span className="purple"> L'ADVERSITÉ </span> DEVIENT <span
                            className="purple"> OPPORTUNITÉ </span>
                        </h1>
                        <p className="home-about-body">
                            Mon parcours professionnel a
                            <i>
                                <b className="purple"> débuté dans le  le domaine du business development,  </b>
                            </i> où j'ai appris à identifier les besoins des clients et à créer des solutions adaptées à leur satisfaction. 💼
                            <br/>
                            <br/>
                            Mais c'est à partir de juin 2022 que mon
                            <i>
                                <b className="purple"> aventure a véritablement pris son envol. </b>
                            </i>
                            En lançant ma micro-entreprise, j’ai plongé dans la gestion de projet, l’étude de marché et le prototypage, tout en tissant des partenariats stratégiques.
                            <br/>
                            <br/>
                            Cette expérience m'a conduit à découvrir une passion profonde pour la technologie, et en particulier
                            pour
                            <i>
                                <b className="purple"> l'intelligence artificielle et la science des données. 🧙✨ </b>
                            </i>
                            Depuis, je m’efforce de fusionner l'innovation, la stratégie et la programmation pour bâtir
                            des projets toujours plus ambitieux.

                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>
                            <img src={myImg} className="img-fluid" alt="avatar"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>TEASER</h1>
                        <p>
                            Coming <span className="purple">soon </span>
                        </p>
                        <div className="flex justify-center w-full">
                            <div role="status"
                                 className="flex items-center justify-center xs:h-40 sm:h-56 md:h-96 aspect-video bg-gray-300 rounded-lg animate-pulse dark:bg-gray-700">
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                    <path
                                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>

                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>CONTACTS</h1>
                        <p>
                            Un <span className="purple">message </span> peut tout changer.
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/ThomasBlaisot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="tel:0672512243"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour  home-social-icons"

                                >
                                    <AiFillPhone/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/thomasblaisot/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="mailto:thomas.blaisot@ecoles-epsi.net"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon-colour  home-social-icons"

                                >
                                    <AiFillMail/>
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
