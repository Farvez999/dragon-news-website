import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h5>Our Terms and Conditions</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, ipsam veritatis laborum error ipsa sit odio aspernatur est. Rerum porro voluptate odit omnis? Est quibusdam perspiciatis ex doloremque libero consequuntur sint vero placeat dolorem! Aut similique cumque qui nihil provident reprehenderit repudiandae necessitatibus, ipsam perspiciatis voluptatem. Quis dolore illum mollitia.</p>
            <p>Go back to: <Link to='/signup'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;