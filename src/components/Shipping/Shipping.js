import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/UseAuth';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css';

const Shipping = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const{user}=useAuth()
    const onSubmit = data => {
        const savedCart = getStoredCart();
        data.order = savedCart; 
        
        fetch('http://localhost:3007/orders' , {
            method: 'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            if(result.insertedId){
                alert('wow! order successfully procced');
                clearTheCart()
                reset()
            }
            
        })
    }
    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="Name" defaultValue={user.displayName} {...register("Name",{ required: true })} />
      {errors.Name && <span className="error-text">This field is required</span>}  

      <input placeholder="Email" defaultValue={user.email} {...register("email", { required: true })} />      
      {errors.email && <span className="error-text">This field is required</span>}

      <input placeholder="Address 1" {...register("address", { required: true })} />      
      {errors.address && <span className="error-text">This field is required</span>}    
      <input className="sub-btn" type="submit" />
    </form>
        </div>
    );
};

export default Shipping;