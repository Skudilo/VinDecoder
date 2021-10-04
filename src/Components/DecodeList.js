import React from 'react';
import DecodeItem from "./DecodeItem";

const DecodeList = ({decodeRes}) => {
	return (
		<div className='decode-list'>
				<h2>Decode Result:</h2>
				{decodeRes.map((item, i) => (
					<DecodeItem key={i} item={item}/>
				))}
			</div>
	);
};

export default DecodeList;
