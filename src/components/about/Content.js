import React, {useState, useEffect, useCallback} from "react";
import {client} from '../../Client'

const Content = () => {
    const [aboutPage, setAboutPage] = useState([])

    const cleanUpAboutPage = useCallback ((rawData) => {
        const cleanAboutPage = rawData.map((about) => {
            const {sys, fields} = about
            const aboutImage = fields.aboutImage.fields.file.url
            const aboutDescription = fields.description
            const updatedAbout = {aboutDescription, aboutImage}
            return updatedAbout
        })
        setAboutPage(cleanAboutPage)
    }, [])

    const getAboutPage = useCallback(async() => {
        try{
            const response = await client.getEntries({content_type: 'about'})
            const responseData = response.items
            if(responseData){
                cleanUpAboutPage(responseData)
            }else {
                setAboutPage([])
            }
        } catch(error){
            console.log(error)
        }
    }, [cleanUpAboutPage])

    useEffect(()=> {
        getAboutPage()
    },[getAboutPage])

console.log(aboutPage)




    return (
        <>
        {aboutPage.map((item) => {
            const {aboutDescription, aboutImage} = item
            return (
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
                                <p>{aboutDescription}</p>
                                
                            </div>
                            <div className="col-md-6">
                                <img className="w-100" src={aboutImage} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                
            </main>
            )
        })}
        </>
    );
};
export default Content;
