import React from 'react';
import ChannelItem from "../components/ChannelItem"

export default class App extends React.Component {
	render() {
		const channelItem = [
			{
				icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
				name: 'お得・割引',
				desc: 'お得・割引な情報をお手元に',
				url: 'https://google.com/'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_entertainment_animation/logo_square.png',
				name: 'アニメ',
				desc: '注目アニメから、声優情報まで！',
				url: 'https://google.com/'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_column_health/logo_square.png',
				name: 'ヘルスケア',
				desc: '健康・医療のお役立ち情報をお届け！',
				url: 'https://google.com/'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
				name: 'お得・割引',
				desc: 'お得・割引な情報をお手元に',
				url: 'https://google.com/'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
				name: 'お得・割引',
				desc: 'お得・割引な情報をお手元に',
				url: 'https://google.com/'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_column_sale/otoku_icon2.png',
				name: 'お得・割引',
				desc: 'お得・割引な情報をお手元に',
				url: 'https://google.com/'
			}
		]


		return (
			<>
				<section>
					<section class="">
						<div className="content">
							<div className="description">
								<p>これは hoge.js です</p>
							</div>
							<div className="banner">
								<img src="https://smartnews.github.io/cp-frontend/static/media/banner2.12f8e6a8.png" className="banner-image" />
							</div>


							<div className="title">人気のコンテンツをお届け</div>

							{channelItem.map((channelitem) => {
								return (
									<li className="item">
										<ChannelItem
											icon={channelitem.icon}
											name={channelitem.name}
											desc={channelitem.desc}
											url={channelitem.url}
										/>
									</li>
								)
							})}

							<div className='motto'>
								<p className='motto-desc'>ほかにも便利なチャンネルがたくさん！</p>
							</div>

							<div className="button">
								<button type="button" className='button'>いろんな情報を見にいく</button>
							</div>

						</div>
					</section>
				</section>

				<style jsx>{`

					.banner{
						padding: 10px 0;
						text-align: center;
					}

					.banner-image{
						width:100%;
						margin: 10px 0;
					}

					.motto-desc{
						font-size: 16px;
						font-weight: bold;
						text-align: center;
					}

					.button{
						width: 80%;
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
						height: 40px;
						border-radius: 30px;
						font-weight: bold;
						font-size: 12px;                
					}


					.content {
						padding:24px;
						margin: auto;
					}

					.item {
						margin: 0px 0;
						padding: auto;
						display: flex;
						font-size: 14px;
					}

					li {
						list-style: none;
					}

					.description {
						margin: auto ;
						text-align: center;
						font-size: 16px;
						font-weight: bold;
					}

					.title {
						font-size: 20px;
						font-weight: bold;
					}

					body * {
						font-size:16px;
					}
				`}</style>
			</>
		);
	}

}
