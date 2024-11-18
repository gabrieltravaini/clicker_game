import React from "react";
import "./Header.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const Header = () => {

    return (
        <Container className="top-bar">
            <Row>
                <Col><Button variant="secondary">EXIT</Button></Col>
                <Col xs={8}><div className="score-container">
                    <div className="score">0</div>
                    <div className="per-second">12 per/s</div>
                </div></Col>
                <Col className="profile-container"><div class="profile-icon">👤</div></Col>
            </Row>
        </Container>

    )
}

export default Header