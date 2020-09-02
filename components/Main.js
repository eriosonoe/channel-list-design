import React from 'react';
import ChannelItem from './ChannelItem';
import style from '../pages/style.module.css';
import logo from '../public/icon.png'; // with import

export default class Main extends React.Component {

	render() {
        const channelItem = [
        {
			icon: '<img src={logo} />',
			name: 'お得・割引',
            desc: 'お得・割引な情報をお手元に'},
            
            {icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
			name: 'お得・割引',
            desc: 'お得・割引な情報をお手元に'},
            
            {icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
			name: 'お得・割引',
            desc: 'お得・割引な情報をお手元に'},

            {icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
			name: 'お得・割引',
            desc: 'お得・割引な情報をお手元に'},

            {icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
			name: 'お得・割引',
            desc: 'お得・割引な情報をお手元に'},

            {icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
			name: 'お得・割引',
            desc: 'お得・割引な情報をお手元に'}
        ]

		
		return (
            <>
            <section>
            <section class="">
              <div class=""></div>
              <div class="">
                <div className="description">
                 <h1>１タップでチャンネルが登録できます！</h1>
                 </div>
               </div>
               </section>
               </section>
            

            {channelItem.map((channelitem)=>{
            return (
                <li className="item">
			<ChannelItem
				icon={channelitem.icon}
				name={channelitem.name}
                desc={channelitem.desc}
			/>
            </li>
            )
             })}
            
        </>

        );
    }
}