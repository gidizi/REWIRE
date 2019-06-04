import React from 'react';

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function ColorOption(props) {
	return(
			<option	value={props.Color}>
				{capitalizeFirstLetter(props.Color)}
			</option>	
		)
}
export default ColorOption
