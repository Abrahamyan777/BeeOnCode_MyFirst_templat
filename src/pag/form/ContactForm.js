import React from 'react';
import './contactForm.css'
import { useForm } from 'react-hook-form';

const ContactForm = () => {
    const { register, formState: { errors, isValid }, handleSubmit, reset } = useForm({ mode: "onBlur"})

    const sendInfo = (data) => {
        reset()
    }


    return (
        <div className='contactFomrContainer'>
            <h1 className='title'> React Hook</h1>
            <form onSubmit={handleSubmit(sendInfo)}>
                <label>
                    first Name:
                    <input
                        {...register('firstName', {
                            required: "enter your fist Name",
                            pattern: {
                                value: "",
                                message: "Erorr Email"
                            }
                        })} 
                        />
                        <div className='eror'>{errors?.firstName?.message}</div>
                </label>

                <label>
                    last Name: 
                    <input 
                        {...register("lastName", {
                            required: "enter your last name",
                            minLength: {
                                value: 6,
                                message: "minLength 6"
                            }
                        })}
                    />
                    <div className='eror'>{errors?.lastName?.message}</div>
                </label>
                <input type='submit' disabled={!isValid} />
            </form>
        </div>
    );
};

export default ContactForm;