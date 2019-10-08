import React from 'react';
import {Col, Row} from "react-bootstrap";
import MainButton from "../../components/buttonRounded";
import main_picture from "../../assets/main_picture.png";
import styled from "styled-components";
import main_bg from "../../assets/main_bg.png";

const MainContainer = styled.div`
    background-image: url(${main_bg});
    background-size: cover;
    background-position: center -100px;
    background-repeat: no-repeat;
    height: 100vh;
`;


const BlackText = styled.div`
    font-family: Roboto-Black;
    font-size: ${props => props.size}
    color: white
`;

const ThinText = styled.div`
    margin-top: 20px;
    font-family: Roboto-Thin;
    font-size: ${props => props.size}
    color: white
`;

class Presentation extends React.Component {
    DisplayMain = () => {
        return(
            <MainContainer className="p-lg-4">
                <Row className="d-flex h-75 justify-content-center align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Row className="w-75">
                            <Col>
                                <BlackText size={"30px"} className="mobile-title">
                                    Innovez la rééducation
                                    de vos patients avec
                                    le logiciel d’analyse de mouvements
                                    le plus efficace.
                                </BlackText>
                                <ThinText size={"24px"} className="mobile-desc">
                                    Optimisez les résultats de vos patients avec une solution en ligne qui optimise vos séances
                                </ThinText>
                                <div style={{marginTop: "20px"}}>
                                    <MainButton fontWeight="Black" text="Je me lance" color="white"/>
                                </div>
                            </Col>
                        </Row>
                    </Col>

                    <Col className="mobile-hide">
                        <img src={main_picture} alt="dashboard-exemple" style={{width: "70%", height: "auto"}}/>
                    </Col>
                </Row>
            </MainContainer>
        )
    };

    render() {
        return (
            this.DisplayMain()
        )
    }
}

export default Presentation;
