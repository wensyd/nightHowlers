import React from "react";


const Content = () => {
    return (
        <>
            <main id="body-content" style={{ overflowY: "inherit" }}>
           
                <section className="bg-sky-blue wide-tb-30 pb-0">
                    <div className="container pos-rel">
                        <div className="row">
                            <div className="col-sm-12"> 
                            <h2 className="heading-h2">Enjoy a world tour, while making life changing money.
                  We have the miles.</h2>

                  <hr/>
                                <h1 className="heading-main">
                                    Our Values
                                </h1>
                            </div>
                            <div className="col-md-4 ">
                    
                                    <div className="icon-box-4 h-100">
                                        <i className="icofont-hand-power"></i>
                                        <h4 className="h4-md mb-3">EMPOWERMENT</h4>
                                        <p></p>
                                    </div>
                                
                            </div>
                            <div className="col-md-4 ">
                                
                                    <div className="icon-box-4 h-100">
                                        <i className="icofont-light-bulb"></i>
                                        <h4 className="h4-md mb-3">INNOVATION</h4>
                                        <p></p>
                                    </div>
                                
                            </div>
                            <div className="col-md-4 ">
                                
                                    <div className="icon-box-4 h-100">
                                        <i className="icofont-history"></i>
                                        <h4 className="h4-md mb-3">CONSISTENCY</h4>
                                        <p></p>
                                    </div>
                                
                            </div>
                            <div className="text-center btn-center mx-auto">
                                <a href="https://form.jotform.com/220327647149155" target="_blank" className="btn-theme bg-navy-blue">Join Our Team <i className="icofont-rounded-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="pos-rel bg-white">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-5 col-12 p-0">
                                <img src="images/why-choose-us.jpg" className="w-100" alt="" />
                            </div>
                            <div className="col-lg-6 col-12">
                                <div className="p-5 about-whoose">
                                    <h1 className="heading-main text-left mb-4">
                                        <span>Why Choose</span>
                                       Night Howlers
                                    </h1>
                                    <ul className="list-unstyled icons-listing theme-purple w-half mb-0">
                                        <li className=""><i className="icofont-check"></i>No Cap on Yearly earnings</li>
                                        <li className=""><i className="icofont-check"></i>2019 and up Trucks (goverened at 75mph)</li>
                                        <li className=""><i className="icofont-check"></i>Freightliners and Volvos</li>
                                        <li className=""><i className="icofont-check"></i>Second chance opportunities for those who have felonies and okay records.</li>
                                 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="wide-tb-80 bg-scroll bg-img-6 pos-rel callout-style-1">
                    <div className="bg-overlay blue opacity-60"></div>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4 col-md-12 mb-0 wow slideInUp" data-wow-duration="0" data-wow-delay="0.1s">
                                <h3 className="">Interested in working with Night Howlers?</h3>
                            </div>
                            <div className="col wow slideInUp" data-wow-duration="0" data-wow-delay="0.2s">
                                <div className="center-text">
                                    <h4>We not only provide opportunities for drivers, we give them second chances.</h4>
                                </div>
                            </div>
                            <div className="col-sm-auto wow slideInUp" data-wow-duration="0" data-wow-delay="0.3s">
                                <a href="https://form.jotform.com/220327647149155" target="_blank" className="btn btn-theme bg-white bordered">JOIN TODAY<i className="icofont-rounded-right"></i></a>
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    );
};
export default Content;
