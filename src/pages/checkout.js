import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";

import styled from "styled-components";
import {utils} from "../utils";
import MainButton from "../components/buttonRounded";
import Footer from "../components/footer";
import {Link} from "react-router-dom";
import mailService from "../services/mailService";

const MainContainer = styled.div`
    height: calc(100vh - ${utils.navHeight});
    background-color: #00000011;
`;

const CheckoutBox = styled.div`
    height: 500px;
    border-radius: 5px;
    box-shadow: 0 0 8px hsla(0, 0%, 11%, 0.11) !important;
    color: ${utils.colors.darkBlue};
    font-family: Roboto-Thin, sans-serif;
    background-color: white;
    
    
    a {
        color: ${utils.colors.darkBlue};
    }
    
    a:hover {text-decoration:none;}
    
    
    .title {
        font-family: Roboto-Bold, sans-serif;
        font-size: 18px;
    }
    
    .desc {
        font-family: Roboto-Thin, sans-serif;
        font-size: 18px;
    }
    
    .c-input {
        border-color: ${utils.colors.darkBlue};
        color: ${utils.colors.darkBlue};
        width: 200px;
    }
`;

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        document.title = "Kine+ | Tarifs";

        this.state = {
            email: '',
            card_number: '',
            card_expire: '',
            card_code: '',
            showAlert: false,
            thanks: false
        }
    }

    renderAlert = () => {
        let {showAlert} = this.state;
        if (showAlert === true) {
            return (
                <Alert variant="info">
                <b>Vous devez renseigner toutes les informations </b>(email, numéro de carte, date d'expiration, cryptogramme visuel).
                </Alert>
            )
        }
    };

    orderNow = async () => {
        let {email, card_number, card_expire, card_code} = this.state;

        if (email === "" || card_code === "" || card_expire === "" || card_number === "") {
            this.setState({
                showAlert: true
            });
        }
        else {

            let res = await mailService.orderNow(email);

            if (res.success === true) {
                this.setState({
                    showAlert: false,
                    thanks: true
                });
            }
            else {
                console.log('error');
            }
        }
    };

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    handleNb = (event) => {
        this.setState({
            card_number: event.target.value
        })
    };

    handleExpire = (event) => {
        this.setState({
            card_expire: event.target.value
        })
    };

    handleCode = (event) => {
        this.setState({
            card_code: event.target.value
        })
    };

    renderThanks = () => {
        let {thanks} = this.state;

        if (thanks === true) {
            return (
                <Row className="mt-auto mb-auto">
                    <Col className="d-flex flex-column justify-content-center align-items-center">
                        <div className="text-center">
                            <div className="title">Merci d'avoir commandé Kine+</div>
                        </div>
                    </Col>
                </Row>
            )
        }
        else {
            return (
                <>
                    <Row className="mt-auto mb-auto">
                        <Col className="d-flex flex-column justify-content-center align-items-center">
                            <div className="text-center">
                                <div className="title">Abonnement Kine+</div>
                                <div className="desc">19€/mois</div>
                            </div>
                            <div className="mt-5">
                                <input type="text" onChange={this.handleEmail} value={this.state.email} className="kine-input c-input" placeholder="Email"/>
                            </div>
                            <div className="mt-4">
                                <input type="text" onChange={this.handleNb} value={this.state.card_number} className="kine-input c-input" placeholder="Numéro de carte"/>
                            </div>

                            <div className="mt-4">
                                <input type="text" onChange={this.handleExpire} value={this.state.card_expire} className="kine-input c-input" placeholder="Date d'expiration"/>
                            </div>

                            <div className="mt-4">
                                <input type="text" onChange={this.handleCode} value={this.state.card_code} className="kine-input c-input" placeholder="Code CVC/CVV"/>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mt-xl-5 pl-3 pr-3">
                        <Col className="d-flex align-items-center">
                            <Link to="/tarifs">Revenir aux tarifs</Link>
                        </Col>
                        <Col className="d-flex align-items-center">
                            <MainButton fontWeight="Black" onClick={this.orderNow} text="Commander maintenant" color={utils.colors.darkBlue}/>
                        </Col>
                    </Row>
                </>
            )
        }
    };

    render() {
        return (
            <>
                <MainContainer className="p-lg-4">
                    {this.renderAlert()}
                    <Row className="d-flex h-75 justify-content-center align-items-center">
                        <Col className="d-flex justify-content-center">
                            <CheckoutBox className="p-3 d-flex justify-content-between flex-column">
                                {this.renderThanks()}
                            </CheckoutBox>
                        </Col>
                    </Row>
                </MainContainer>
                <Footer/>
            </>
        )
    }
}

export default Checkout;
