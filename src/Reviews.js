import user from "./userimage.webp"

const Reviews = () => {
    return (
        <>
            <div id="review">
                <div className="reviews">
                    <h1>WHAT OUR CUSTOMERS SAY ABOUT US !</h1>
                    <div class="wrapper-review">
                        <div class="box">
                            <i class="fas fa-quote-left quote"></i>
                            <p>The performance of the bike is very good and the comfort level is amazing. The bike is not too heavy and not too light. The light of the bike is awesome. It looks Aggressive and huge in size with its safety guards. The service cost is higher but the service quality is good and fast.</p>
                            <div class="content">
                                <div class="info">
                                    <div class="name">Alex Smith</div>
                                    <div class="job">Designer | Developer</div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <div class="image">
                                    <img src={user} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <i class="fas fa-quote-left quote"></i>
                            <p>
                            I am writing after one month of using a single battery scooty. Pros: best for riding in the city. Good pickup comparable to my activa but a bit lower. You should recover your scooty cost in 20000 km and the battery replacement cost in another 7000.
Cons: delicate plastics, less leg room, low boot space in dual battery, the seat has a bump separating the pillion which is uncomfortable, I got it covered with foam.
                            </p>
                            <div class="content">
                                <div class="info">
                                    <div class="name">Steven Chris</div>
                                    <div class="job">YouTuber | Blogger</div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <div class="image">
                                    <img src={user} alt=""></img>
                                </div>
                            </div>
                        </div>
                        <div class="box">
                            <i class="fas fa-quote-left  quote"></i>
                            <p>Very stylish, smooth run, load capacity is standard, the headlight is very bright, but body durability needs to be modified, the problem facing about a meter, body cracked tire is not long-lasting, seat plastic is also broken, suddenly accelerometer not working service center is not non cooperate these are problem facing.</p>
                            <div class="content">
                                <div class="info">
                                    <div class="name">Kristina Bellis</div>
                                    <div class="job">Freelancer | Advertiser</div>
                                    <div class="stars">
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="fas fa-star"></i>
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <div class="image">
                                    <img src={user} alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* footer */}
            <div className="footer">
                    <footer className="new_footer_area bg_color">
                        <div className="new_footer_top">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" style={{ visibility: 'visible', animationDelay: '0.2s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                            <p>Don’t miss any updates of our new templates and extensions.!</p>
                                            <form action="#" className="f_subscribe_two mailchimp" method="post" noValidate="true" _lpchecked={1}>
                                                <input type="text" name="EMAIL" className="form-control memail" placeholder="Email" />
                                                <button className="btn btn_get btn_get_two" type="submit">Subscribe</button>
                                                <p className="mchimp-errmessage" style={{ display: 'none' }} />
                                                <p className="mchimp-sucmessage" style={{ display: 'none' }} />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" style={{ visibility: 'visible', animationDelay: '0.4s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Download</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">Company</a></li>
                                                <li><a href="#">Android App</a></li>
                                                <li><a href="#">ios App</a></li>
                                                <li><a href="#">Desktop</a></li>
                                                <li><a href="#">Projects</a></li>
                                                <li><a href="#">My tasks</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" style={{ visibility: 'visible', animationDelay: '0.6s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                                            <ul className="list-unstyled f_list">
                                                <li><a href="#">FAQ</a></li>
                                                <li><a href="#">Term &amp; conditions</a></li>
                                                <li><a href="#">Reporting</a></li>
                                                <li><a href="#">Documentation</a></li>
                                                <li><a href="#">Support Policy</a></li>
                                                <li><a href="#">Privacy</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}>
                                            <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                            <div className="f_social_icon">
                                                <a href="#" className="fab fa-facebook" />
                                                <a href="#" className="fab fa-twitter" />
                                                <a href="#" className="fab fa-linkedin" />
                                                <a href="#" className="fab fa-pinterest" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="footer_bg">
                                <div className="footer_bg_one" />
                                <div className="footer_bg_two" />
                            </div>
                        </div>
                        
                    </footer>

                </div>
        </>
    );
}
export default Reviews;