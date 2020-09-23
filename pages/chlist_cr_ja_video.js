import React from 'react';
import ChannelItem from "../components/ChannelItem"

export default class App extends React.Component {
	render() {
		const channelItem = [
			{
				icon: 'https://assets.smartnews.com/cr_ja_extra_astronomy/space_icon.png',
				name: '天文・宇宙',
				desc: '天体観測、宇宙探査、宇宙開発など',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_extra_astronomy'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_column_fishing/logo_square.png',
				name: '釣り',
				desc: '集まれ！釣り好き',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_column_fishing'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_sports_horseracing/logo_square.jpg',
				name: '競馬',
				desc: '国内外の競馬情報をまとめて！',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_sports_horseracing'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_national_train/logo_square.png',
				name: '鉄道',
				desc: '鉄道趣味人のための情報をお届け',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_national_train'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_national_shogi/logo_square.png',
				name: '将棋',
				desc: '対局情報から棋士ブログまで網羅',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_national_shogi'
			},

			{
				icon: 'https://assets.smartnews.com/quiz/quiz.png',
				name: 'クイズ',
				desc: 'クイズに関する話題が満載！',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_extra_quiz'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_economy_bike/logo_square.png',
				name: 'バイク',
				desc: 'バイクライフを応援する情報',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_economy_bike'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_technology_audiovisual/logo_square.png',
				name: 'オーディオビジュアル',
				desc: 'AVの最新情報',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_technology_audiovisual'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_sports_golf/logo_square.png',
				name: 'ゴルフ',
				desc: '国際ツアーや有名選手などの情報をお届け',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_sports_golf'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_sports_bicycleracing/icon_bicycle.png',
				name: '自転車',
				desc: '自転車にまつわる様々な情報をお届け',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_sports_bicycleracing'
			},

			{
				icon: 'https://assets.smartnews.com/fortune-telling/logo_square.png',
				name: '占い',
				desc: '毎日を占いでもっと楽しく！',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_column_fortunetelling'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_column_travel/logo_square.png',
				name: 'トラベル',
				desc: '国内/海外の観光スポットから航空情報まで！',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_column_travel'
			},

			{
				icon: 'https://assets.smartnews.com/movie/logo_square.png',
				name: '映画',
				desc: '新作予告から注目作レビューまで',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_entertainment_movie'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_entertainment_music/logo_square.png',
				name: '音楽',
				desc: '話題のヒット作やアーティスト情報をお届け',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_entertainment_music'
			},

			{
				icon: 'https://assets.smartnews.com/cr_ja_entertainment_art/logo_square.png',
				name: 'アート',
				desc: 'アート情報をまとめてお届け',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_entertainment_art'
			},

			{
				icon: 'https://assets.smartnews.com/dokusho/logo_square.png',
				name: '読書',
				desc: '今、話題の本の情報をお届けします',
				url: 'smartnews://openChannelDetail?identifier=$cr_ja_extra_book'
			}
		]


		return (
			<>
				<section>
					<section class="">
						<div className="content">
							<div className="description">
							</div>
							<div className="banner">
								<img src="banner2.png" className="banner-image" />
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
						width:80%;
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

					body{
						font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
					}

				`}</style>
			</>
		);
	}

}
