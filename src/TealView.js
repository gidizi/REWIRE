import React from 'react';
import GeneralView from "./GeneralView"

function TealView(props){
	const tealTheme = { name: "teal", logo: "#FFFFFF", background: "#29E2FF", text: "#000000", backButt: "#FFFFFF"}
	return(
		<GeneralView themeColor={tealTheme} smallScreen={props.smallScreen} handleChange={props.handleChange}
        handleBack={props.handleBack} boxShadow={false} />
		)
}


export default TealView