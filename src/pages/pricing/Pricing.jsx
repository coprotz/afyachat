import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { TiTick } from "react-icons/ti";
import './pricing.css'

const Pricing = () => {
  return (
    <div className='pricing_container'>
        <Navbar/>
        <div className="pricing_inner">
            <div className="pricing_card">
                <span>Free</span>
                <h1> $ 0.00</h1>                
                <div className="card_items">
                    <TiTick/>
                    <span>Read Blogs and Posts</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Get Updated Medical Hints</span>
                </div>              
            </div>
            <div className="pricing_card">
                <span>Daily</span>
                <h1> $ 0.99</h1>
                <div className="card_items">
                    <TiTick/>
                    <span>get all from Free</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Get Consultations with doctors</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Valid for 1 day</span>
                </div>
                <button>Try Out</button>
            </div>
            <div className="pricing_card">
                <span>Weekly</span>
                <h1> $ 3.99</h1>
                <div className="card_items">
                    <TiTick/>
                    <span>get all from Free</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Get Consultations with doctors</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Valid for 7 days</span>
                </div>
                <button>Try Out</button>
            </div>
            <div className="pricing_card">
                <span>Monthly</span>
                <h1> $ 9.99</h1>
                <div className="card_items">
                    <TiTick/>
                    <span>get all from Free</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Get Consultations with doctors</span>
                </div>
                <div className="card_items">
                    <TiTick/>
                    <span>Valid for 30 days</span>
                </div>
                <button>Try Out</button>
            </div>
        </div>
    </div>
  )
}

export default Pricing
