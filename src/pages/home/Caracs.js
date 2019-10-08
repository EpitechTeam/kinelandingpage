import React from "react";
import {Col, Row} from "react-bootstrap";
import caracsImg from "../../assets/caracs.png";
import styled from "styled-components";
import {Link} from "react-router-dom";
import {utils} from "../../utils";

const Style = styled.div`

    padding-top: 50px;
    padding-bottom: 50px;

    .caracImg {
        width: 90px;
        height: 90px;
    }
    
    .carac-title {
        font-family: Roboto-Black, sans-serif;
        font-size: 23px;
        width: 130px;
        text-align: center;
    }
    
    .carac-desc {
        font-family: Roboto-Thin, sans-serif;
        font-size: 20px;
        width: 200px;
        text-align: center;
        line-height: 25px;
    }
    
    .carac-more {
        font-family: Roboto-Bold, sans-serif;
        font-size: 16px;
        text-align: center;
        color: ${utils.colors.mainBlue};
    }
    
    .carac-more:hover {
        text-decoration: none;
    }
`;

class Caracs extends React.Component {
    render() {
        return (
            <Style>
                <div className="d-flex justify-content-center">
                    <Row className="d-flex w-75 justify-content-between">
                        <Col>
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <img src={caracsImg} alt="seance_live" className="caracImg"/>
                                <div className="mt-4 carac-title">
                                    Séances en live
                                </div>
                                <div className="mt-4 carac-desc">
                                    Analyses et statistiques en direct de la séance en cours.
                                </div>
                                <div className="mt-4 carac-desc">
                                    <Link to="/" className="carac-more">En savoir plus</Link>
                                </div>
                            </div>
                        </Col>
                        <Col className="mobile-margintop">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <img src={caracsImg} alt="seance_live" className="caracImg"/>
                                <div className="mt-4 carac-title">
                                    Séances en live
                                </div>
                                <div className="mt-4 carac-desc">
                                    Analyses et statistiques en direct de la séance en cours.
                                </div>
                                <div className="mt-4 carac-desc">
                                    <Link to="/" className="carac-more">En savoir plus</Link>
                                </div>
                            </div>
                        </Col>
                        <Col className="mobile-margintop">
                            <div className="d-flex justify-content-center align-items-center flex-column">
                                <img src={caracsImg} alt="seance_live" className="caracImg"/>
                                <div className="mt-4 carac-title">
                                    Séances en live
                                </div>
                                <div className="mt-4 carac-desc">
                                    Analyses et statistiques en direct de la séance en cours.
                                </div>
                                <div className="mt-4 carac-desc">
                                    <Link to="/" className="carac-more">En savoir plus</Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Style>
        )
    }
}

export default Caracs;
