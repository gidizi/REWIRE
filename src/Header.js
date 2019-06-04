import React from 'react';

import Logo  from './Logo.jsx';
import BackButt  from './Back.jsx';


function Header(props){
	return(
		<div className="flexContainer rowDirection header">
			<div id="backButtDiv" className="flexcol-4">
				<BackButt backgroundColor={props.themeColor.background} buttonColor={props.themeColor.backButt} 
				smallScreen={props.smallScreen} handleClick={props.handleBack}/> 
			</div>
			<div id="logoDiv" className="flexcol-4">
				{!props.smallScreen && <Logo logoColor={props.themeColor.logo} />}
			</div>
		</div>
		)
}


export default Header