import React from 'react';


export default class ChannelItem extends React.Component {

    onClickOpenButton(){
        location.href = this.props.url;
    }

	render() {
		return (
            <>
			    <div className='channelItem'>
				<div className='image'><img src={this.props.icon} className='icon'/></div>
				<div className=' channel-item'>
                    <div className='name'>{this.props.name}</div>
				    <div className='desc'>{this.props.desc}</div>
                </div>

                <div className='button'><button type="button" className='button-deco linkbox' onClick={()=>{this.onClickOpenButton()}}>開く</button></div>
                
			</div>


            <style jsx>{`



            .channelItem {
                padding: 10px 0;
                display: flex;
                border-bottom: 1px solid #D8D8D8;
                width:100%;
                
            }


            .image {
               width:12%;
               margin:auto;
                
            }

            .icon {
                width: 100%;
                height: auto;

            }
             
            .channel-item {
                width:64%;
                display: auto;
                margin: 0 10px; 
            }

             .name {
                 
                 font-weight: bold;
                 font-size: 16px;
             }

            .desc {
                font-size: 12px;
                color: #8D8D8D;

            }

            .button{
                width: 24%;
                text-align: center;
                margin: auto;

            }
                        
            button {
                font-family: inherit;
                /* 1 */
                font-size: 80%;
                /* 1 */
                line-height: 1.15;
                /* 1 */
                margin: 0;
                /* 2 */ 
                border: none; 
                /* 枠線を消す */
                outline: none;
                background-color: #30a7e5;
                color: #FFFFFF;
                vertical-align: middle;
                width: 100%;
                height: 30px;
                border-radius: 16px;
                font-weight: bold;
                font-size: 12px;

                
                }

                


        

            `}

            </style>
            </>
		);
	}
}
