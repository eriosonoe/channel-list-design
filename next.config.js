const isProd = process.env.NODE_ENV === 'production'
module.exports = {
	basePath: isProd ? '/channel-list-design' : '',
	assetPrefix: isProd ? '/channel-list-design' : '',
}
