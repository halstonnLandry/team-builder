import React from 'react'

const AnotherOne=props=>{
    return(
        <div>
            {props.whatever.map((member,index)=>{
                return (
                    <>
                        <p>{member.name}</p>
                        <p>{member.email}</p>
                        <p>{member.role}</p>
                    </>
                )
            })}
        </div>
    )
}
export default AnotherOne;