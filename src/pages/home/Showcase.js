import React from 'react';
import styled from "styled-components";
import {utils} from "../../utils";
import {Col, Row} from "react-bootstrap";
import analyticsImg from "../../assets/analytics.png";
import checkedImg from "../../assets/checked.png";


const Style = styled.div`
    background-color: ${utils.colors.lightBlue};
    color: ${utils.colors.darkBlue};
    
    .sc-img {
        width: 300px;
        height: 300px;
    }
    
    .sc-checked {
        position: relative;
        top: 2px;
        width: 17px;
        height: 17px;
    }
    
    .sc-col {
    }
    
    .sc-title {
        font-family: Roboto-Black, sans-serif;
        font-size: 28px;
        width:
    }
    
    .sc-desc {
        font-family: Roboto-Medium, sans-serif;
    }
   
`;

class Showcase extends React.Component {
    render() {
        return (
            <Style className="mt-xl-5 d-flex justify-content-center">
                <div className="mt-xl-5 pt-5 pb-5 d-flex w-75 align-items-center flex-column">
                    <Row className="w-75 d-flex mb-5 mr-2 ml-2">
                        <Col>
                            <div className="sc-col">
                                <div className="sc-title">Analysez la séance en LIVE</div>
                                <div className="mt-5">
                                    <div className="d-flex flex-row">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Recevez les statistiques en direct</div>
                                    </div>

                                    <div className="d-flex flex-row mt-3">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Suivez la progression de la séance</div>
                                    </div>

                                    <div className="d-flex flex-row mt-3">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Rediffusion d’une séance</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end mobile-hide">
                            <img className="sc-img" src={analyticsImg} alt="Analysez la séance en live"/>
                        </Col>
                    </Row>
                    <Row className="w-75 d-flex mt-xl-5 mb-5 mr-2 ml-2">
                        <Col className="d-flex mobile-hide">
                            <img className="sc-img" src={analyticsImg} alt="Analysez la séance en live"/>
                        </Col>
                        <Col>
                            <div className="sc-col">
                                <div className="sc-title">Analysez la séance en LIVE</div>
                                <div className="mt-5">
                                    <div className="d-flex flex-row">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Recevez les statistiques en direct</div>
                                    </div>

                                    <div className="d-flex flex-row mt-3">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Suivez la progression de la séance</div>
                                    </div>

                                    <div className="d-flex flex-row mt-3">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Rediffusion d’une séance</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="w-75 d-flex mt-xl-5 mr-2 ml-2">
                        <Col>
                            <div className="sc-col">
                                <div className="sc-title">Analysez la séance en LIVE</div>
                                <div className="mt-5">
                                    <div className="d-flex flex-row">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Recevez les statistiques en direct</div>
                                    </div>

                                    <div className="d-flex flex-row mt-3">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Suivez la progression de la séance</div>
                                    </div>

                                    <div className="d-flex flex-row mt-3">
                                        <img className="sc-checked" src={checkedImg} alt="checked"/>
                                        <div className="ml-2 sc-desc">Rediffusion d’une séance</div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex justify-content-end mobile-hide">
                            <img className="sc-img" src={analyticsImg} alt="Analysez la séance en live"/>
                        </Col>
                    </Row>
                </div>
            </Style>
        )
    }
}

export default Showcase;
