import React from 'react';
import Navbar from '../Navbar/Navbar'; 
import './landing.css';
function Landingpage() {
    return (
        <div className="landingpage">
            <div>
                <Navbar />
            </div>
            <h1>Seamless Team Collaboration</h1>
            <p>Connect, communicate, and coordinate effortlessly with TeamSync.</p>
            <button className='Join'>join us now</button>
            {/* <img src="/Selection.png" alt="Landing" className='image'/>                */}
            <h1>Key Features</h1>
            <p>Discover how TeamSync empowers collaboration with cutting-edge tools designed for seamless teamwork and productivity.</p>
        
        </div>
    );
}

export default Landingpage;
