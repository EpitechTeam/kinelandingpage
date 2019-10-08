import React from "react";
import styled from "styled-components";
import {Col, Row} from "react-bootstrap";
import {utils} from "../utils";

const Style = styled.div`
        height: 400px;
        background-color: rgba(0,0,0, 0.1);
        color: ${utils.colors.darkBlue};
        
        .footer-title {
            font-family: Roboto-Bold, sans-serif;
            font-size: 28px;
        }
        
        a {
            color: ${utils.colors.darkBlue};
             text-decoration: none;
        }
`;

class Footer extends React.Component {
    render() {
        return (
            <Style className="d-flex justify-content-center mobile-hide">
                <div className="h-100 p-xl-5 w-75 d-flex justify-content-center align-content-center">
                    <Row className="w-100 d-flex align-content-center">
                        <Col className="d-flex align-items-center flex-column">
                            <div>
                                <div className="footer-title">KINE+</div>
                                <div className="mt-xl-4 d-flex flex-column">
                                    <a href="/" className="mt-2">La solution</a>
                                    <a href="/tarifs" className="mt-2">Tarifs</a>
                                    <a href="/" className="mt-2">Services</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center flex-column">
                            <div>
                                <div className="footer-title">RESSOURCES</div>
                                <div className="mt-xl-4 d-flex flex-column">
                                    <a href="/" className="mt-2">La solution</a>
                                    <a href="/tarifs" className="mt-2">Tarifs</a>
                                    <a href="/" className="mt-2">Services</a>
                                </div>
                            </div>
                        </Col>
                        <Col className="d-flex align-items-center flex-column">
                            <div>
                                <div className="footer-title">LÉGAL</div>
                                <div className="mt-xl-4 d-flex flex-column">
                                    <a href="/" className="mt-2">La solution</a>
                                    <a href="/tarifs" className="mt-2">Tarifs</a>
                                    <a href="/" className="mt-2">Services</a>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </Style>
        );
    }
}

export default Footer;
