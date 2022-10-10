import React from 'react';
import { Link } from 'react-router-dom';

const Question = ({question}) => {
    console.log(question);
    return (
        <>
        <div>
            <div>
                <Link><p></p></Link>
                <Link><p></p></Link>
                <Link><p></p></Link>
                <Link><p></p></Link>
            </div>
        </div>
        </>
    );
};

export default Question;