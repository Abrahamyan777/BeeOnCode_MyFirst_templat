import React, { useEffect, useRef, useState } from 'react';
import css from './scrollbar.module.scss'
import { useInView } from 'react-intersection-observer';
import Button from '../../common/button/Button';

const Scrollbar = () => {
    const title1Ref = useRef()
    const title2Ref = useRef()
    const title3Ref = useRef()

    const hendleClick1 = () => {
        title1Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const hendleClick2 = () => {
        title2Ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const { ref: myRef, inView: myElementIsVisible } = useInView();
    const firstRef = useRef(null);

    const hendleClick3 = () => {
        firstRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const secondRef = useRef(null);
    const hendleClick4 = () => {
        secondRef.current.scrollIntoView({ behavior: 'smooth' })
    }

    const { ref: myRocket, inView: myRocketElementIsVisible } = useInView({ threshold: 0.5, rootMargin: '100px' });
    // console.log(myRocketElementIsVisible);
    const mynewRef = useRef()

    useEffect(() => {
        if (myRocketElementIsVisible) {
            mynewRef.current.classList.add(css.animation);
        }

    }, [myRocketElementIsVisible])

    return (
        <>
            <div ref={secondRef}></div>
            <div className={css.btnDiv} >
                <Button onClick={() => hendleClick1()} className={css.clickTitle1} width="250px">Click to title1</Button>
                <Button onClick={() => hendleClick2()} className={css.clickTitle2}>Click to title2</Button>
                <Button onClick={() => hendleClick3()} className={css.clickTitle3}>Click to title3</Button>

            </div>


            <div>
                <h1>Reusble Button </h1>
                <Button variant='primary' >Click Me</Button>
                <Button variant='primary' disabled >disabled</Button>
                <Button variant="outlin" >Login</Button>
                <Button variant="outlin" disabled >LoginX</Button>

                <Button variant="outlin"  >Login</Button>
                <Button disabled>Click Me</Button>

                <button type="button" className={css.ho} disabled >Click Me!</button>
            </div>


            <div>
                <h1>Reusble Links </h1>
                <Button to="login" variant="ghost">Login</Button>
                <Button to="login" variant="registr">Login</Button>

                <Button to="registr" variant="registr">Registration</Button>
                <Button to="registr" variant="ghost">Registration</Button>

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

            <div>
                <h1 className={css.title1} ref={myRef}  > Example1 Scrollbar {myElementIsVisible ? 'Yes' : 'No'}</h1>

                <div className={css.gridContainer}>
                    <div className={css.grid}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>

                </div>

                <h1 className={css.title1} ref={myRef}  > Example1 Scrollbar {myElementIsVisible ? 'Yes' : 'No'}</h1>

            </div>

            <div className={css.grid_body}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>


            <div className={css.firstSection}>
                <h3 ref={firstRef} >This is a title</h3>
                <button onClick={() => hendleClick4()}>Click me</button>
            </div>
        </>

    );
};

export default Scrollbar;