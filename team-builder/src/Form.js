import React, {useState} from 'react';

export default function Form(props){
    const {handleChange, formValues, handleSubmit}=props
    
    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
            <input
                    placeholder='Member Name'
                    name='name'
                    value={formValues.name}
                    onChange={(e)=>{handleChange(e)}}
                />
            <input
                    placeholder='Email'
                    name='email'
                    value={formValues.email}
                    onChange={(e)=>{handleChange(e)}}
                />
            <input
                    placeholder='Role'
                    name='role'
                    value={formValues.role}
                    onChange={(e)=>{handleChange(e)}}
                />
            </form>
            <button onClick={handleSubmit}>Submit form</button>
        </div>
    )
}