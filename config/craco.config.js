/**
 * 修改webpack 配置
 * @author XianZhengquan
 * @create 2020/6/11
 */
const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {plugin: CracoLessPlugin}
    ],
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            // 微应用的包名，这里与主应用中注册的微应用名称一致
            webpackConfig.output.library = `ReactMicroApp`;
            // 将你的 library 暴露为所有的模块定义下都可运行的方式
            webpackConfig.output.libraryTarget = 'umd';
            // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
            webpackConfig.output.jsonpFunction = `webpackJsonp_ReactMicroApp`;

            // webpackConfig.output.publicPath = 'http://localhost:10100/';
            return webpackConfig;
        }
    },
    devServer: (devServerConfig, {env, paths, proxy, allowedHost}) => {
        // 关闭主机检查，使微应用可以被 fetch
        devServerConfig.disableHostCheck = true;
        // 配置跨域请求头，解决开发环境的跨域问题
        devServerConfig.headers = {
            'Access-Control-Allow-Origin': '*'
        };
        // 配置 history 模式
        // devServerConfig.historyApiFallback = true;
        return devServerConfig;
    }
};
