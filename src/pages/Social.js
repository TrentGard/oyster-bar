import React from 'react';
import { Carousel, Container } from "react-bootstrap";
import facebookIcon from "../img/facebook_icon.png";
import instagramIcon from "../img/instagram_icon.png";
import InstagramEmbed from 'react-instagram-embed';

const Social = () => {
    return (
        <Container>
            <h1 className="page-title">Follow Us On Social Media!</h1>
            <br />
            <a href="https://www.facebook.com/The-Oyster-Bar-292501212282/" target="_blank" without rel="noopener noreferrer" style={{ "color": "tan" }}><h3 className="page-title"><img src={facebookIcon} alt="Facebook" className="social-icon" /> Facebook</h3></a>
            <br />
            <Carousel controls={true} interval={4500} fade={true}>
                <Carousel.Item>
                    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fphoto.php%3Ffbid%3D10158801074134358%26set%3Da.10150421279549358%26type%3D3&width=500"
                        width="500"
                        height="370"
                        style={{ "border": "none;overflow:hidden", "background": "white" }}
                        scrolling="no"
                        frameborder="0"
                        allowTransparency="true"
                        allow="encrypted-media"
                        title="fb1">
                    </iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe title="fb2" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Friggo75%2Fposts%2F10219559016992779&width=500" width="500" height="679" style={{ "border": "none;overflow:hidden", "background": "white" }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe title="fb3" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Flaura.evanssteele%2Fposts%2F2282369278690079&width=500" width="500" height="661" style={{ "border": "none;overflow:hidden", "background": "white" }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </Carousel.Item>
                <Carousel.Item>
                    <iframe title="fb4" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fdon.croy%2Fposts%2F10212506969461189%3A0&width=500" width="500" height="563" style={{ "border": "none;overflow:hidden", "background": "white" }} scrolling="no" frameborder="0" allowTransparency="true" allow="encrypted-media"></iframe>
                </Carousel.Item>
            </Carousel>
            <br />
            <br />
            <a href="https://www.instagram.com/fwoysterbar/" target="_blank" without rel="noopener noreferrer" style={{ "color": "tan" }}><h3 className="page-title"><img src={instagramIcon} alt="Instagram" className="social-icon" /> Instagram</h3></a>
            <br />
            <Carousel>
                <Carousel.Item>
                    <div className="instagram">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B2DGR_3Avn5/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="instagram">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B2FaSxhAaOd/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="instagram">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B2C1OHrAOnI/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="instagram">
                        <InstagramEmbed
                            url='https://www.instagram.com/p/B2Evcs7Av4k/'
                            maxWidth={320}
                            hideCaption={false}
                            containerTagName='div'
                            protocol=''
                            injectScript
                            onLoading={() => { }}
                            onSuccess={() => { }}
                            onAfterRender={() => { }}
                            onFailure={() => { }}
                        />
                    </div>
                </Carousel.Item>
            </Carousel>
        </Container>);
}

export default Social;