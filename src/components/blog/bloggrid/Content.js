import React, {useState, useEffect, useCallback} from "react";
import {client} from '../../../Client'

const Content = () => {
    const [blogPosts, setBlogPosts]= useState([])

    const cleanBlogPosts = useCallback((rawData) => {
        const cleanBlogPosts= rawData.map((posts) => {
            const {sys, fields}= posts
            const {id} = sys
            const blogTitle = fields.title
            const blogImage = fields.featuredImage.fields.file.url
            const blogDescription = fields.description
            const blogBody = fields.body
            const slug = fields.slug
            const updatedPosts = {id, blogTitle, blogImage, blogDescription, blogBody, slug}
            return updatedPosts
        })
        setBlogPosts(cleanBlogPosts)
    }, [])

    const getBlogPosts = useCallback( async()=>{
        try{
            const response = await client.getEntries({content_type: 'blogPost', order: 'sys.createdAt'})
            const responseData = response.items
           if(responseData){
               cleanBlogPosts(responseData)
           }else{
               setBlogPosts([])
           }
        } catch(error){
            console.log(error)
        }
    }, [cleanBlogPosts])

    useEffect(()=>{
        getBlogPosts()
    },[getBlogPosts])

console.log(blogPosts)







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
                </section>
                </main>
                <div className="row">
        {blogPosts.map((item)=> {
            
           const { id, slug, blogTitle, blogDescription, blogBody, blogImage, index }= item
            return (
                                <div key ={index} className="card col-md-6">
                                    <img src={blogImage} alt="" className="card-img-top rounded img-fluid" />
                                    
                                    <h4 className="card-title h4-md mb-3" align="center"><a href={slug}>{blogTitle}</a></h4>
                                    <p className="card-text">{blogDescription}</p>
                                    <a href={slug} className="btn btn-primary btn-theme bg-navy-blue no-shadow">Read More <i className="icofont-rounded-right"></i></a>
                                </div>
                        
                     
                
            )
            })}
            </div>
        </>
    );
};
export default Content;
