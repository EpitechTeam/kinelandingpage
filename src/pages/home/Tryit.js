import React from "react";
import styled from "styled-components";
import sec_bg from "../../assets/secondary_bg.png";
import {Button, Col, Row} from "react-bootstrap";

const Empty = styled.div`
    margin-top: 100px;
    height: 100px;
`;

const Style = styled.div`
    background-image: url(${sec_bg});
    background-repeat: no-repeat;
    background-size: fit;
    height: 70vh;
    
    color: white;
    
    
    .ti-title {
        font-family: Roboto-Bold, sans-serif;
        font-size: 42px;
        color: white;
    }
    
    .btn-try {
        color: white;
        border: 3px solid white;
        border-radius: 25px;
        padding: 5px 20px;
        font-size: 20px;
        background-color: transparent;
        font-family: Roboto-Bold, sans-serif;
    }
    
    .btn-try:active:focus {
        color: white;
        background-color: transparent;
        border-color: white;
        transform: scale(0.98);
    }
    
    .ti-desc {
        font-family: Roboto-Light, sans-serif;
    }
    
`;

class Tryit extends React.Component {
    render() {
        return (
            <div>
                <Empty/>
                <Style>
                    <Row className="h-100 d-flex">
                        <Col className="d-flex justify-content-center align-items-center">
                            <div className="w-25 d-flex flex-column justify-content-center align-items-center mobile-w-100">
                                <div className="mobile-mt ti-title text-center mobile-title">
                                    Essayez le logiciel de rééducation Kine+
                                </div>
                                <Button className="mobile-mt btn-try mt-xl-5">
                                    Je veux essayer
                                </Button>
                                <div className="mobile-mt ti-desc mt-xl-5 text-center">Essai gratuit de 15 jours - Sans engagement</div>
                            </div>
                        </Col>
                    </Row>
                </Style>
            </div>
        );
    }
}

export default Tryit;
