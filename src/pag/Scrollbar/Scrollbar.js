import React, { useEffect, useRef, useState } from 'react';
import css from './scrollbar.module.css'
import { useInView } from 'react-intersection-observer';

const Scrollbar = () => {
    const title1Ref = useRef()
    const title2Ref = useRef()
    const title3Ref = useRef(3)

    const hendelClick1 = () => {
        title1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const hendelClick2 = () => {
        title2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const { ref: myRef, inView: myElementIsVisible } = useInView();

    const { ref: myRocket, inView: myRocketElementIsVisible } = useInView({ threshold: 0.5, rootMargin: '100px' });
    console.log(myRocketElementIsVisible);

    const mynewRef = useRef()


    useEffect(() => {
        if (myRocketElementIsVisible) {
            console.log(mynewRef.current);
            mynewRef.current.classList.add(css.animation);
        }

    }, [myRocketElementIsVisible])

    return (
        <>
            <div className={css.btnDiv} >
                <button onClick={() => hendelClick1()}>Click to title1</button>
                <button onClick={() => hendelClick2()}>Click to title2</button>
                <button>Click to title3</button>
            </div>
            <div className={css.block1}></div>
            <h1 className={css.title1} ref={title1Ref}> Hello World1</h1>

            <div className={css.block2}></div>
            <h1 className={css.title2} ref={title2Ref}> Hello World2</h1>

            <div className={css.block2} ref={myRocket} >
                <div className={css.innerBlock2} ref={mynewRef}>
                    <div className={css.star1} ></div>
                    <div className={css.star2} ></div>
                    <div className={css.star3} ></div>
                </div>
            </div>


            <h1 className={css.title1} ref={title3Ref} > Hello World333</h1>
            <div className={css.block3}></div>

            <div>
                <h1 className={css.title1} ref={myRef}> Example1 Scrollbar {myElementIsVisible ? 'Yes' : 'No'}</h1>
            </div>
            <div className={css.block1}></div>
        </>

    );
};

export default Scrollbar;