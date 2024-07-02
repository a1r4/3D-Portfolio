import React from 'react';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className='cta'>
    <p className='cta-text'>Need a Software Engineer? <br
    className='sm:block hidden'/>
    Let's talk!</p>
    <Link to="/contact" className='btn'>Contact</Link>
    </section>
  );
}

export default CTA;
