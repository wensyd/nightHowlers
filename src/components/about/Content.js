import React from "react";

const Content = () => {
    return (
        <>
            <main id="body-content">
                <header >
                    <div className="mb-5"></div>
                </header>
                <section className="wide-tb-80">
                    <div className="container-fluid pos-rel">
                        <div className="row align-items-center">
                            <div className="col-md-6 mt-7 pt-3">
                                <h2 className="mb-4 fw-7 txt-blue" align="center">
                                    About <span className="fw-6 txt-purple">Night Howlers</span>
                                </h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed metus viverra, congue sem ut, finibus odio. Praesent maximus massa enim, quis viverra velit accumsan ut. Nulla imperdiet ultricies justo quis tincidunt. Proin dui nibh, tempus ac metus at, aliquet ultricies sem. Vestibulum lobortis vestibulum est, non sagittis nisl gravida ac. Etiam ac ultrices enim, posuere mattis est. Nullam augue purus, fringilla ut venenatis at, fringilla in ante. In eget ante aliquam, ornare neque in, rutrum ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus magna mauris, suscipit at libero ut, convallis volutpat lacus. In consectetur ac diam id commodo. Vestibulum hendrerit congue sem quis imperdiet. Praesent quis velit eget dolor fringilla efficitur in in velit. Etiam vitae diam sed sapien porttitor elementum at nec tortor. Morbi quis orci sed mauris imperdiet aliquam non eu quam. Nunc dapibus dictum quam nec condimentum. </p>
                                
                            </div>
                            <div className="col-md-6">
                                <img className="w-100" src="images/blog_img_2.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
        </>
    );
};
export default Content;
