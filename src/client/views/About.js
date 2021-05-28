import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

export default class About extends Component {
    render() {
        return (
            <div>
                <FadeIn>
                <section className="mail-container">  
                <div >
                    <h1>About Mr. Postcard</h1>
                    <p>Mr. Postcard has been facilitating direct mail advertising needs of individuals and businesses since 1996. Starting with the real estate market, founder Michael Vander Werf, who is known as "Mr. Postcard" to his friends, opened a small postcard company to assist realtors in their quest to market and sell property in and around metropolitan Atlanta. In just a few short months, success struck and the postcard business took off. Mr. Postcard, realizing that he could help more than just real estate agents, began designing and printing postcards for businesses and industries throughout the Atlanta area.</p>
                    <h2>Meet Just a Few of Our Clients... but you probably already know them</h2>
                    <h2>Meet the Mr. Postcard Team</h2>
                    <p>Michael Vander Werf</p>
                    <p>Founder, Co-owner, Sales Manager</p>
                    <p>Phone: 404-849-6139</p>
                    <p>Email: mike@mrpostcard.com</p>
                    <hr></hr>
                    <p>Ken Crane</p>
                    <p>Co-owner, Production Manager</p>
                    <p>Phone: 404-874-6139, ext. 2#</p>
                    <p>Email: ken@mrpostcard.com</p>
                    <hr></hr>
                    <p>Andre Pierce</p>
                    <p>Office Manager</p>
                    <p>Email: andre@mrpostcard.com</p>
                    <hr></hr>
                    <p>Al Kennon</p>
                    <p>Accounting</p>
                    <p>Email: al@mrpostcard.com</p>
                </div>
                </section>
                </FadeIn>
                
            </div>
        )
    }
}