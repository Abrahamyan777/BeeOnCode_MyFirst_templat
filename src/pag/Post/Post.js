import { useDispatch, useSelector } from "react-redux";
import css from  "./Post.module.css"
import { useState } from "react";
import Button from "../../common/button/Button";

function Posts() {

    const dispatech = useDispatch();
    const state = useSelector(state => state)

    console.log(state.Cash.cash);

    const addMoney = (x) => {
        dispatech({type: "ADD_CASH", paylod: 1})

    }
    const getMoney = (y) => {
        dispatech({type: "GET_CASH", paylod: 1})
    }


    return (
        <div className={css.postContainer}>
            Tise is a Post ssssssssssss

            <div className={css.cashMoney}>
                Tise is a Post ssssssssssss
                <div className={css.cashTitle}>{state.Cash.cash}</div>

                <Button variant="primary" onClick={()  => addMoney()}>ADD Money</Button>
                <br></br>
                <br></br>
                <Button variant="outlin" onClick={() => getMoney()}>Get Money</Button>
                <hr></hr>

                <div>
                    
                </div>


            </div>
        </div>
    )
}

export default Posts;