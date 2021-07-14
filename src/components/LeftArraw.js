import * as React from "react"

function LeftArrow(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"  {...props}>
      <path d="M0 0v54h54V0H0zm52 52H2V2h50v50z" fill={props?.color || "#1991be"} />
      <path fill={props?.color || "#1991be"} d="M23.707 36.293L15.414 28H40a1 1 0 100-2H15.414l8.293-8.293-1.414-1.414L11.586 27l10.707 10.707 1.414-1.414z" />
    </svg>
  )
}

export {LeftArrow};