import React from "react";

const Content = () => {
    return (
        <>
    
            <main id="body-content">
                <header className="wide-mt-0 blogsHeader">
                    <div >
                        <img src="images/banner_2.jpg" className="img-fluid blogimg d-block w-100 h-100 p-0" alt=""/>
                    </div>

                </header>
                <section className="wide-tb-5 pb-5">
                    <div ><h1 className="blogh1 my-5 display-5" align="center">Our Blog</h1></div>
                <hr className="w-75"/>

                    <div className="container pos-rel">
                        <div id="js-grid-masonry" className="cbp">
                            
                            <div className="cbp-item">
                                <div className="blog-warp text-left">
                                    <img src="images/blog_img_2.jpg" alt="" className="rounded" />
                                    
                                    <h4 className="h4-md mb-3" align="center"><a href="blogsingle">Title</a></h4>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantiumg</p>
                                    <a href="blogsingle" className="btn-theme bg-navy-blue no-shadow">Read More <i className="icofont-rounded-right"></i></a>
                                </div>
                            </div>
                         
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};
export default Content;
