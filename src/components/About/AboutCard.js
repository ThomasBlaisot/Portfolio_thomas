import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p style={{textAlign: "justify"}}>
                        Après plusieurs années d’expérience en tant que Business Developer BtoB et BtoC dans différents secteurs, notamment chez SWILE et ORION Santé, j’ai pris un tournant décisif en me lançant dans le développement d’intelligence artificielle et la science des données. Ma formation en alternance chez STUDI, couplée à mon BTS NRC, m’a permis de développer des compétences en gestion de projet, CRM et vente, tout en approfondissant ma passion pour les nouvelles technologies.
                        <br/>
                        <br/>
                        Aujourd'hui, mes forces sont :
                    </p>
                    <ul>
                        <li className="about-activity">
                            <ImPointRight/> Python, Django, SQL, MongoDB
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Analyse et stratégie de données
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Esprit créatif, adaptabilité et gestion de projet
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Anglais et espagnol niveau B1
                        </li>
                    </ul>

                    <p style={{color: "rgb(155 126 172)"}}>
                        "Se réunir est un début, rester ensemble est un progrès, travailler ensemble est la réussite."{" "}
                    </p>
                    <footer className="blockquote-footer">Henry Ford</footer>
                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
