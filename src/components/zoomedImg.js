import React, { useCallback, useState } from 'react'
import { LeftArrow } from "./LeftArraw"
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css';
import { Transition } from 'react-transition-group';
const host = window.location.hostname;
const ZommedImg = ({images, alt}) => {
  const duration = 700;
    const number = images?.length;
    const srcs = number == 0 ? ["https://"+host+"/upload/no_photo.png"] : images;
  const [isZoomed, setIsZoomed] = useState(false)
  const [index, setIndex] = useState(0);
  // const handleImgLoad = useCallback(() => {
  //   setIsZoomed(true)
  // }, [])
  const defaultStyle = {
    position:"fixed",
    zIndex:99,
    transition: `opacity ${duration}ms ease-in-out`,
    backdropFilter:"blur(1)",
    backgroundColor:"rgba(255, 255, 255, 0.97)",
    display:"flex",
    flexDirection:"center",
    justifyContent:"center",
    alignItems:"center",
    width:"100vw",
    height:"100vh",
    opacity: 0,
    top:0,
    left:0
}
  
  const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  };
const handlNext = ()=>{
    console.log(number,index);
    setIndex(index < (number-1)?(index+1): index > 0 ? (index-1) : 0)
}
  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])

  return (
    <div style={{
        position:"relative",
        display:"flex",
        alignItems:"center"
    }}>
        <LeftArrow width={40} height={40} onClick={handlNext} className={"o-arraw_slider"} />
        <img
        style={{
            // borderRadius:15,
            width:350,
            maxHeight:400,
            objectFit:"contain",
            backgroundColor:"#fff",
            cursor:"zoom-in"
            // boxShadow:"0px 0px 2px 0px #ccc"
            // backgroundSize:"contain"
        }}
            alt={alt}
            onClick={()=>setIsZoomed(true)}
            src={srcs[index]}
            width="350"
          />
      {isZoomed && <Transition in={isZoomed} timeout={duration}>
    {state => (<div style={{...defaultStyle, ...transitionStyles[state]}}>  
     <LeftArrow width={40} height={40} onClick={handlNext} className={"o-arraw_slider"} color={"#000"} />
          <img
            alt={alt}
            onClick={()=>setIsZoomed(false)}
            // onLoad={handleImgLoad}
            // width={300}
            src={srcs[index]}
            width="350"
          />
          </div>)  }
    </Transition>}

    </div>
  )
}

export {ZommedImg};