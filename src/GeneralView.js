import React from 'react';


import ColorOption from "./ColorOption.js"
import Header from "./Header.js"


function GeneralView(props){
	const colorList = ["white", "teal"]
	document.body.style = `background: ${props.themeColor.background}`;
	return (
		<div className="flexContainer colDirection outerBorder">
			<Header themeColor={props.themeColor} smallScreen={props.smallScreen} handleBack={props.handleBack}/>
			<div className="flexContainer colDirection generalCentering">
				<div className={`flexContainer centeredFrame colDirection
				${!props.smallScreen && "largeScreenContentFrame generalCentering"}
				${props.boxShadow && "shadowFrame"}`} style={{color: props.themeColor.text}}>
					<select value={props.themeColor.name} onChange={props.handleChange} name="viewColor">
						{colorList.map((colorItem, index) => 
						<ColorOption Color={colorItem} key={index} />)}
					</select>
				</div>
			</div>
		</div>
		)
}

export default GeneralView