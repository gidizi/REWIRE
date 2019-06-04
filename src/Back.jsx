import React from 'react';

function Back(props){
	return (
		<button id="backButton" style={{color: props.buttonColor}}
		onClick={() => props.handleClick()}>
			<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 13 13">
			    <g fill="none" fillRule="evenodd">
			        <path fill={props.backgroundColor} d="M-17-184h519v999.054H-17z"/>
			        <path fill={props.buttonColor} fillRule="nonzero" d="M8.49 11.78L3 6.43 8.49 1l-1-1L1 6.43l6.47 6.42 1-1.07z"/>
			    </g>
			</svg> {!props.smallScreen && "Back"}
		</button>
	)
}

export default Back