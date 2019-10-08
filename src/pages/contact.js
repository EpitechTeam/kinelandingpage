import React from 'react';
import {Alert, Col, Row} from "react-bootstrap";
import styled from "styled-components";
import main_bg from "../assets/main_bg.png";
import {utils} from "../utils";
import MainButton from "../components/buttonRounded";

const MainContainer = styled.div`
    background-image: url(${main_bg});
    background-size: cover;
    background-position: center -100px;
    background-repeat: no-repeat;
    height: calc(100vh - ${utils.navHeight});
    
    color: white;
    
    .title {
        font-family: Roboto-Black;
        font-size: 48px;
    }
    
    .inputEmail {
        background: none;
        border: none;
        border-bottom: 3px solid white;
        width: 300px;
        color: white;
        padding: 5px;
        font-family: Roboto-Medium, sans-serif;
    }
    
    .inputEmail::placeholder {
        color: white;
    }
    
    .inputEmail:focus {
        outline: none;
    }
    
    textarea {
        resize: none;
        border: none;
        border-radius: 5px;
        width: 500px;
        height: 150px;
        color: ${utils.colors.darkBlue};
        font-family: Roboto-Medium, sans-serif;
        padding: 10px;
    }
    
    textarea:focus {
        outline: none;
    }
    
    button {
        margin-top: 50px !important;
        font-size: 22px;
        padding: 5px 30px;
    }
`;

class Contact extends React.Component {

    constructor(props) {
        super(props);

        document.title = "Kine+ | Contact";

        this.state = {
            email: "",
            message: "",
            showAlert: false
        }
    }

    handleEmailChange = (event) => {
        this.setState({email: event.target.value});
    };

    handleMessageChange = (event) => {
        this.setState({message: event.target.value});
    };

    handleClick = (event) => {
        console.log("clicked");
        let {email, message} = this.state;

        if (email === "" || message === "") {
            this.setState({
                showAlert: true
            });
        }
        else {
            this.setState({
                showAlert: false
            });
        }
    };

    displayAlert = () => {
        let {showAlert} = this.state;

        if (showAlert === true) {
            return (
                <Alert variant="info" className="alert">
                    Veuillez renseigner votre email et votre message.
                </Alert>
            );
        }
    };

    DisplayMain = () => {
        return(
            <MainContainer className="p-lg-4">
                {this.displayAlert()}
                <Row className="d-flex h-75 justify-content-center align-items-center">
                    <Col className="d-flex justify-content-center">
                        <Row className="w-75">
                            <Col className="d-flex justify-content-center flex-column align-items-center">
                                <div className="title text-center">Un renseignement?</div>

                                <input className="inputEmail mt-5" value={this.state.email} onChange={this.handleEmailChange} type="text" placeholder="Email"/>

                                <textarea className="mt-5" value={this.state.message} onChange={this.handleMessageChange}/>

                                <MainButton className="mainBtn" onClick={this.handleClick} fontWeight="Medium" text="Envoyer" color="white"/>
                            </Col>
                        </Row>
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

export default Contact;
