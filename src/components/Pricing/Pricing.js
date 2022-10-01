import React from 'react';
import PricingOptions from '../PricingOptions/PricingOptions';

const Pricing = () => {
    const pricingOption = [
        {id: 1, name: 'Free',price: 0,features:[
           'Awesome Feature',
           'Extra Feature',
           'Unnecessary Feature',
           'Will never use Feature',
           'MoHOna Feature',
           'Ferrari Feature'
        ]
    
    },
        {id: 1, name: 'Medium',price: 9.888,features:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'MoHOna Feature',
            'Ferrari Feature'
         ] },
        {id: 1, name: 'Small',price: 19.999 ,features:[
            'Awesome Feature',
            'Extra Feature',
            'Unnecessary Feature',
            'Will never use Feature',
            'MoHONa Feature',
            'Ferrari Feature'
         ]},
    ]
    return (
       <div>
         <div className='text-5xl font-bold  bg-indigo-400 p-12 text-white'>
            <h2>Best Deal of Town</h2>           
        </div>
           <div className='grid md:grid-cols-3 gap-3 mt-7'>
           {
                pricingOption.map(option => <PricingOptions key={option.id}
                 option = {option}
                ></PricingOptions>)
            }   
           </div>
           
       </div>
    );
};

export default Pricing;