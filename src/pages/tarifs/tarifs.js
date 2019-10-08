import React from 'react';
import {Col, Row} from "react-bootstrap";

import checkedImg from "../../assets/checked.png";
import styled from "styled-components";
import {utils} from "../../utils";
import MainButton from "../../components/buttonRounded";
import {Link} from "react-router-dom";
import Footer from "../../components/footer";

const MainContainer = styled.div`
    height: calc(100vh - ${utils.navHeight});
    background-color: #00000011;
`;

const PricingBox = styled.div`
    width: 300px;
    border-radius: 5px;
    box-shadow: 0 0 8px hsla(0, 0%, 11%, 0.11) !important;
    color: ${utils.colors.darkBlue};
    font-family: Roboto-Thin, sans-serif;
    background-color: white;
    
    img {
        width: 17px;
    }
    
    .mainBtn {
        padding: 5px 20px;
    }
    
    .header {
        border-radius: 5px 5px 0 0;
        background-image: linear-gradient(to bottom right, ${utils.colors.mainBlue}, ${utils.colors.mainGreen});
        padding: 10px;
        color: white;
        font-family: Roboto-Black, sans-serif;
        font-size: 28px;
    }
    
    .pricing {
        font-family: Roboto-Black;
        font-size: 28px;
    }
    
    .pricing-desc {
        font-size: 14px;
    }
`;

class Tarifs extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Kine+ | Tarifs";
    }

    render() {
        return (
            <>
                <MainContainer className="p-lg-4">
                    <Row className="d-flex h-75 justify-content-center align-items-center">
                        <Col className="d-flex justify-content-center">
                            <PricingBox>
                                <div className="header d-flex justify-content-center align-items-center">
                                    Kine+
                                </div>
                                <div className="p-4">
                                    <div>
                                        <img src={checkedImg} alt="checked"/>
                                        <div className="d-inline-block ml-2">
                                            Suivi personnalisé des patients
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <img src={checkedImg} alt="checked"/>
                                        <div className="d-inline-block ml-2">
                                            Prescription d'exercices
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-5 p-3">
                                    <Row className="pricing">
                                        <Col className="d-flex justify-content-center">
                                            19€/mois
                                        </Col>
                                    </Row>
                                    <Row className="pricing-desc">
                                        <Col className="d-flex justify-content-center">
                                            par boîtier
                                        </Col>
                                    </Row>
                                </div>
                                <div className="d-flex justify-content-center mt-3 mb-4">
                                    <Link to="/checkout">
                                        <MainButton className="mainBtn" fontWeight="Black" text="Je me lance" color={utils.colors.darkBlue}/>
                                    </Link>
                                </div>
                            </PricingBox>
                        </Col>
                    </Row>
                </MainContainer>
                <Footer/>
            </>
        )
    }
}

export default Tarifs;
