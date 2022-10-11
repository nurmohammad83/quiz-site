import React from 'react';
import { toast } from 'react-toastify'
const Option = ({option,correctAnswer}) => {


    const AddAns=()=>{
        if(option===correctAnswer){
            toast.success('Correct Answer!', {autoClose:700})
        }else{
            toast.warning('Wrong!', {autoClose:700})
            console.log('wrong');
        }
    }
    return (<>
        <div >
            <button className='w-full border  rounded-2xl border-blue-600 p-4 text-lg ' onClick={AddAns}><p className=''><input type="radio" className='mr-4'/>{option}</p></button>
        </div>
        </>
    );
};

export default Option;