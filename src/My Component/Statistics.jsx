import React, { useContext } from 'react';
import { Mycontext } from './Root';

const Statistics = () => {
    const total = useContext(Mycontext)
    console.log(total);
    return (
        <div>
            
        </div>
    );
};

export default Statistics;