import {React, useEffect, useState, useCallback} from "react";
import { useParams } from "react-router";
import {client} from '../../../Client'

const Content = () => {
    const params = useParams();
   
    const [singleBlog, setSingleBlog] = useState([])

    const cleanSingleBlog = useCallback((rawData) => {
   
       const cleanSingleBlog = rawData.filter((post) =>{
          
           if(post.fields.slug === params.slug) {
              
              
            const {sys, fields} = post
            const slug = fields.slug
            const blogTitle = fields.title
            const blogImage = fields.featuredImage.fields.file.url
            const blogDescription = fields.description
            const blogBody = fields.body
            
               
                const updateSingleBlog = {
                   
                slug, blogTitle, blogImage,blogDescription,blogBody
                
                }
                
                return updateSingleBlog
           }
       })
        console.log(cleanSingleBlog)
      
        setSingleBlog(cleanSingleBlog)
    }, [])


    const getSingleBlog = useCallback (async (slug) => {
        try {
            const response = await client.getEntries(
                {content_type: 'blogPost',
                'fields' :{}
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

    // console.log(singleBlog)

    return (
        <>
            <main id="body-content">
                <header className="mt-5">

                </header>
                </main>
            <div className="container" id="singleContainer">
                {singleBlog.map((post) => {
                    // console.log(post)
                const slug = post.fields.slug
                const blogTitle = post.fields.title
                const blogImage = post.fields.featuredImage.fields.file.url
                const blogDescription = post.fields.description
                const blogBody = post.fields.body
                    return(
                                        <div className="container">
                                            <img src={blogImage} alt="" className="rounded mb-4 px-5 img-fluid" id="singleImage" />
                                          
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
