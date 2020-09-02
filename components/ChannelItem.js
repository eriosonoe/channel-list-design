import React from 'react';


export default class ChannelItem extends React.Component {
	render() {
		return (
			<div className='channelItem'>
                
				<div>{this.props.icon}</div>
				<div>{this.props.name}</div>
				<div>{this.props.desc}</div>
                <div><button onClick={console.log("a")}>開く</button></div>
			</div>
		);
	}
}
