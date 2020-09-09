const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	basePath: '/channel-list-design',
	assetPrefix: isProd ? '/channel-list-design' : '',
}
