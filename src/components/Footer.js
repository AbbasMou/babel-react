// Filename - components/Footer.js

import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Box,
    FooterContainer,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box className="mt-4 bg-light">
            <h1
                style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "10px",
                }}
            >
            </h1>
            <FooterContainer>
                <Row>
                    <Column>
                        <Heading> بينما وباءت الأحمر,</Heading>
                        <FooterLink href="#"> الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading> بينما وباءت الأحمر,</Heading>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading> بينما وباءت الأحمر,</Heading>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                        <FooterLink href="#">
                            الطرفين الأوربيين كل
                        </FooterLink>
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="#">
                            <i className="fab fa-facebook-f">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-instagram">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Twitter
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-youtube">
                                <span
                                    style={{
                                        marginLeft: "10px",
                                    }}
                                >
                                    Youtube
                                </span>
                            </i>
                        </FooterLink>
                    </Column>
                </Row>
            </FooterContainer>
        </Box>
    );
};
export default Footer;
