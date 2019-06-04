import React from 'react';
import GeneralView from "./GeneralView"

function WhiteView(props){
	const whiteTheme = { name: "white", logo: "#20C5F9", background: "#FFFFFF", text: "#000000", backButt: "#6F6F6F"}
	return(
		<GeneralView themeColor={whiteTheme} smallScreen={props.smallScreen} handleChange={props.handleChange}
        handleBack={props.handleBack} boxShadow={!props.smallScreen} />
		)
}


export default WhiteView