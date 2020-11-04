import React, { useState, useEffect } from 'react'
import './Testimonial.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

const Testimonial = () => {

    const [testimonials, setTestimonials] = useState([])

    useEffect(() => {
        async function getTestimonials(){
            const testimonials = await getTestimonialsFromDB()
            setTestimonials(testimonials)
        }
        getTestimonials()
    }, [])

    useEffect(() => {
        console.log(testimonials)
    }, [testimonials])

    const getTestimonialsFromDB = () => {
        const request = axios.get('/api/testimonials/all')
                            .then(response => response.data)
            return request
    }

    const displayTestimonials = () => (
        testimonials.map((testimonial, i) => (
            <div className="col-3" key={i}>
                <FontAwesomeIcon icon={faQuoteLeft} className="fa-quote-left" />
                <p>{testimonial.quote}</p>
                <div className="rating">
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                    <FontAwesomeIcon icon={faStar} className="fa-star" />
                </div>
                <img src={`http://localhost:5000/${testimonial.testimonialImage}`} alt="testimonial-img" className="testimonial-img"></img>
                <h3>{testimonial.name}</h3>
            </div>
        ))
    )

    return (
        <div className="testimonial">
            <div className="small-container">

                {<div className="row">{displayTestimonials()}</div>}

            </div>
        </div>
    )
    
    // return (
    //     <div className="testimonial">
    //         <div className="small-container">
    //             <div className="row">
    //                 <div className="col-3">
    //                     <FontAwesomeIcon icon={faQuoteLeft} className="fa-quote-left" />
    //                     <p>Lorem ispum is simply dummy text of the printing and type setting industry. Lorem Ipsum 
    //                         has been the industry's standard dummy text ever</p>
    //                     <div className="rating">
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                     </div>
    //                     <img src={require('../../../img/user-1.png')} />
    //                     <h3>Sara Lynn</h3>
    //                 </div>
    //                 <div className="col-3">
    //                     <FontAwesomeIcon icon={faQuoteLeft} className="fa-star" />
    //                     <p>Lorem ispum is simply dummy text of the printing and type setting industry. Lorem Ipsum 
    //                         has been the industry's standard dummy text ever</p>
    //                     <div className="rating">
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                     </div>
    //                     <img src={require('../../../img/user-2.png')} />
    //                     <h3>Fady Attia</h3>
    //                 </div>
    //                 <div className="col-3">
    //                     <FontAwesomeIcon icon={faQuoteLeft} className="fa-star" />
    //                     <p>Lorem ispum is simply dummy text of the printing and type setting industry. Lorem Ipsum 
    //                         has been the industry's standard dummy text ever</p>
    //                     <div className="rating">
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                         <FontAwesomeIcon icon={faStar} className="fa-star" />
    //                     </div>
    //                     <img src={require('../../../img/user-3.png')} />
    //                     <h3>Angelina Jolie</h3>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}

export default Testimonial