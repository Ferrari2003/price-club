import React from 'react';
import Feature from '../Feature/Feature';



const PricingOptions = ({option}) => { 
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'> 
            <div >
               <p><span className='text-5xl font-bold text-white'>{option.name}</span>
                 <span className='text-2xl text-gray-200'>/mon</span>
               </p> 
               <p className='text-3xl my-4'>{option.price}</p>
               
            </div>
              {
                features.map((feature, idx) => 
                <Feature key={idx} feature ={feature}> </Feature>)
              } 
              <div>
              <button className='bg-gray-300 py-2 font-bold mt-4  rounded-md w-full'>Buy Now</button>
              
              </div>
        </div>
    );
};

export default PricingOptions;