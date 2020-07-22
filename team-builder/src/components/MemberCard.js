import React from 'react';

export default function MemberCard(props){
    const {name, favFood, favLang} = props.member;
    return(
        <div>
            <h3>{name}</h3>
            <p>Favorite Food:{favFood}</p>
            <p>Favorite Language: {favLang}</p>
        </div>
    )
}