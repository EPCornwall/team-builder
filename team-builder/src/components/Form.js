import React from 'react';

export default function Form(props){
    const {handleChange, form, handleSubmit}=props
    return(
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    placeholder='Member Name'
                    name='name'
                    value={form.name}
                    onChange={(e)=>{handleChange(e)}}
                />
                 <input
                    placeholder='Favorite Food'
                    name='favFood'
                    value={form.favFood}
                    onChange={(e)=>{handleChange(e)}}
                />
                 <input
                    placeholder='Favorite Language'
                    name='favLang'
                    value={form.favLang}
                    onChange={(e)=>{handleChange(e)}}
                />          
            </form>
             <button onClick={handleSubmit}>Submit form</button>
        </div>
    )
}