import React from 'react'
import { Link } from 'react-router-dom'
import './OurServices.css'
import { ReactComponent as UiUxLogo } from '../../assests/icons/uiux.svg'
import { ReactComponent as DigitalMarketingLogo } from '../../assests/icons/digital-marketing.svg'
import { ReactComponent as GraphicDesignLogo } from '../../assests/icons/graphic-design.svg'
import { ReactComponent as MobileAppDevLogo } from '../../assests/icons/mobile-app-development.svg'
import { ReactComponent as WebDevLogo } from '../../assests/icons/web-development.svg'


function OurServices() {
    return (
        <section className="our-services">

            <h2> Our Services </h2>
            <div className="our-services-container">

                <div className="our-services-top-container">

                    <div class="card1">
                        <div className="car1_innerConrainer">
                            <UiUxLogo />
                            <h3>UI/UX Design</h3>
                        </div>
                        <div class="card__content1">
                            <p class="card__title1">UI/UX Design</p>
                            <p class="card__description1">
                                Transform user experiences with our UI/UX Design services, crafting intuitive interfaces that blend aesthetics with seamless functionality, ensuring visitors become loyal customers through visually compelling and user-centric designs.</p>
                        </div>
                    </div>
                    <div class="card1">
                        <div className="car1_innerConrainer">
                            <GraphicDesignLogo />
                            <h3>Graphic Design</h3>
                        </div>
                        <div class="card__content1">
                            <p class="card__title1">Graphic Design</p>
                            <p class="card__description1">Craft visually stunning graphics with our expertise in Graphic Design, tailored to tell your brand's story and captivate your audience across logos, social media visuals, and promotional materials.</p>
                        </div>
                    </div>
                    <div class="card1">
                        <div className="car1_innerConrainer">
                            <WebDevLogo />
                            <h3>Web Developement</h3>
                        </div>
                        <div class="card__content1">
                            <p class="card__title1">Web Developement</p>
                            <p class="card__description1">Revamp your digital presence with our Web Development services, creating scalable websites that combine robust functionality with standout design.</p>
                        </div>
                    </div>


                    {/* <article className="card">
                        <div className='bg'>
                            <div className='our-services-logo blob'>
                                <UiUxLogo />
                            </div>
                            <h3>UI/UX Design</h3>
                            <p>Elevate your user experience with our UI/UX Design services. We blend aesthetics with functionality to create interfaces that are not only visually appealing but also intuitive and engaging. From the first click to the final conversion, we ensure every interaction is seamless and enjoyable, turning casual visitors into loyal customers.</p>
                        </div>
                        <button>  <Link to="/service#ui-ux">Learn More</Link></button>
                    </article>

                    <article className="card second-card">
                        <div>
                            <div className='our-services-logo'>
                                <GraphicDesignLogo />
                            </div>
                            <h3>Graphic Design</h3>
                            <p>Make a lasting impression with our Graphic Design expertise. We craft visually stunning graphics that tell your brand's story and resonate with your audience. Whether it's a bold new logo, captivating social media visuals, or eye-catching promotional materials, our designs are tailored to elevate your brand and make it unforgettable.</p>
                        </div>
                        <button>  <Link to="/service#graphic-design">Learn More</Link></button>
                    </article>


                    <article className="card">
                        <div>
                            <div className='our-services-logo'>
                                <WebDevLogo />
                            </div>
                            <h3>Web Developement</h3>
                            <p>Transform your digital footprint with our Web Development services. We build robust, scalable, and secure websites that are designed to grow with your business. Utilizing the latest technologies and best practices, we create web solutions that are not only functional but also aesthetically pleasing, ensuring your site stands out in a crowded digital landscape.</p>
                        </div>
                        <button>  <Link to="/service#web-development">Learn More</Link></button>
                    </article> */}

                </div>

                <div className="our-services-bottom-container">

                    <div class="card1">
                        <div className="car1_innerConrainer">
                            <DigitalMarketingLogo />
                            <h3>Digital Marketingt</h3>
                        </div>
                        <div class="card__content1">
                            <p class="card__title1">Digital Marketingt</p>
                            <p class="card__description1">
                                Maximize digital impact with our targeted Digital Marketing strategies—from SEO and content to social media and PPC—driving traffic, boosting engagement, and increasing conversions for your online success.</p>
                        </div>
                    </div>
                    <div class="card1">
                        <div className="car1_innerConrainer">
                            <MobileAppDevLogo />
                            <h3>Mobile App Developement</h3>
                        </div>
                        <div class="card__content1">
                            <p class="card__title1">Mobile App Developement</p>
                            <p class="card__description1">Turn your ideas into reality with our Mobile App Development services. We create innovative, user-friendly apps for Android, iOS, or both, designed to meet your business goals and delight users.</p>
                        </div>
                    </div>

                    {/* <article className="card fourth-card">
                        <div>
                            <div className='our-services-logo'>
                                <DigitalMarketingLogo />
                            </div>
                            <h3>Digital Marketing</h3>
                            <p>Unleash the power of digital with our Digital Marketing strategies. From SEO and content marketing to social media and PPC campaigns, we develop customized plans that drive traffic, boost engagement, and increase conversions. Let us help you navigate the digital world and turn your online presence into a revenue-generating machine.</p>
                        </div>
                        <button>  <Link to="/service#digital-marketing">Learn More</Link></button>
                    </article>


                    <article className="card last-card">
                        <div>
                            <div className='our-services-logo'>
                                <MobileAppDevLogo />
                            </div>
                            <h3>Mobile App Developement</h3>
                            <p>Bring your ideas to life with our Mobile App Development services. We design and develop apps that are not only innovative but also user-friendly and engaging. Whether you’re looking to build an app for Android, iOS, or both, our team delivers top-tier solutions that align with your business goals and delight your users.</p>
                        </div>
                        <button>  <Link to="/service#mobile-app-development">Learn More</Link></button>
                    </article> */}
                </div>
            </div>


        </section>
    )
}

export default OurServices
