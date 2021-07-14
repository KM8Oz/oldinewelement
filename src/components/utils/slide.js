import React from 'react';

const Slider = ({name, value,model, unit}) => {
    return (
        <div className="pcb-slider" style={{
            background: `linear-gradient(90deg, #51d051 ${value}%, #ccc ${value}%)`,
            width:"100%",
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            margin:"10px 0px ",
            padding:"0em 2em",
            fontSize:"1em",
            fontWeight:"700"
        }}>
            <p style={{
                padding: "1em 0em",
                margin:"unset"
            }}>{name}</p>
            <p
            style={{
                margin:"auto 0"
            }}
            >{model} <span>{unit}</span></p>
        </div>
    )
}

export default Slider;