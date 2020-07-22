import React from 'react';
import MemberCard from './MemberCard'

export default function MemberList(props){
    return(
        <div>
        {props.members.map((object, index)=>{
            return <MemberCard member={object} key ={index}/>
        })}
        </div>
    )
}