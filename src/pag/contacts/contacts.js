import React from 'react';
import './contacts.scss'


const Contacts = () => {
    return (
        <div className='contactsContainer'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d12251.025821866724!2d44.6807383292467!3d39.85729059325069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDUxJzIyLjMiTiA0NMKwNDEnMjkuNiJF!5e0!3m2!1sru!2sam!4v1690581589571!5m2!1sru!2sam"
                width="100%"
                height="100%"
                style={{ border: '0px solid' }}
                loading="lazy" ></iframe>
        </div>
    );
};

export default Contacts;