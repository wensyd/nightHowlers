import {React, useEffect, useState, useCallback} from "react";
import {client} from '../../../Client'

const Content = () => {

    const [singleBlog, setSingleBlog] = useState([])

    const cleanSingleBlog = useCallback((rawData) => {
       const cleanSingleBlog = rawData.map((post) => {
            const {sys, fields} = post
            const {id} = sys
            const slug = fields.slug
            const blogTitle = fields.title
            const blogImage = fields.featuredImage.fields.file.url
            const blogDescription = fields.description
            const blogBody = fields.body
            const updateSingleBlog = {id, blogTitle, blogImage, blogDescription, blogBody, slug}
            return updateSingleBlog
        })
        setSingleBlog(cleanSingleBlog)
    }, [])


    const getSingleBlog = useCallback (async (slug) => {
        try {
            const response = await client.getEntries(
                {content_type: 'blogPost',
                'fields.slug' : slug
            })
            const responseData = response.items
            if(responseData) {
                cleanSingleBlog(responseData)
            }else{
                setSingleBlog([])
            }
        }catch(error) {
            console.log(error)
        }
    }, [cleanSingleBlog])

    useEffect(() => {
        getSingleBlog()
    }, [getSingleBlog])

    console.log(singleBlog)

    return (
        <>
            <main id="body-content">
                <header className="mt-5">

                </header>
                </main>
            <div className="container">
                {singleBlog.map((item) => {
                    const { id, slug, blogTitle, blogImage, blogDescription, blogBody} = item
                    return(
                                        <div  key = {id} >
                                            <img src={blogImage} alt="" className="rounded mb-4" />
                                          
                                            <h4 className="h4-md mb-3 fw-7 txt-blue" align="center">{blogTitle}</h4>
                                            <p>{blogDescription}</p>
                                            <p>{blogBody}</p>

                                            
                                        </div>
                       
                )
                        
            })}
                
                </div>           
          
        </>
    );
};
export default Content;
