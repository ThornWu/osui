const {getBabelConfig} = require('@reskript/config-babel');
const {loaders} = require('@reskript/config-webpack');
const path = require('path');
const process = require('process');

const themeEnv = process.env.THEME;
const isOsuiTheme = themeEnv === 'osui';

const styleResources = isOsuiTheme ? (
    [require.resolve('@osui/theme/dist/antd-vars-patch.less')]
) : (
    [require.resolve('@osui/icloud-theme/dist/antd-vars-patch.less')]
);

const loaderOptions = {
    cwd: process.cwd(),
    srcDirectory: 'src',
    projectSettings: {
        build: {
            style: {
                resources: [
                    ...styleResources,
                    require.resolve('@osui/icloud-theme/dist/less-functions-overrides.less'),
                ],
                lessVariables: {
                    'ant-prefix': 'ant',
                },
                extractCSS: false,
            },
        },
    },
};

module.exports = () => ({
    core: {
        builder: 'webpack5',
    },
    stories: [
        '../stories/**/*.stories.[tj]s{,x}',
        '../stories/**/*.stories.mdx',
    ],
    addons: [
        {
            name: '@storybook/addon-docs',
            options: {
                configureJSX: true,
                babelOptions: {},
                sourceLoaderOptions: null,
            },
        },
        '@storybook/addon-storysource', // https://github.com/storybookjs/storybook/tree/master/addons/storysource
        '@storybook/addon-a11y/register', // https://github.com/storybookjs/storybook/tree/master/addons/a11y
        '@storybook/addon-viewport/register', // https://github.com/storybookjs/storybook/tree/master/addons/viewport
    ],
    webpackFinal: config => {
        config.module.rules.push({
            test: /\.(js|jsx|ts|tsx)$/,
            exclude: /node_modules/,
            use: [{
                loader: 'babel-loader',
                options: getBabelConfig(),
            }],
        });
        config.module.rules.push({
            test: /\.less$/,
            use: [
                loaders.style(loaderOptions),
                loaders.css(loaderOptions),
                loaders.less(loaderOptions),
                loaders.styleResources(loaderOptions),
            ],
        });
        // 如果使用css modules 请打开这个，并按需匹配css modules 文件
        // 这个同时打开了classnames loader， 可以用 import c from 'xxx.less'
        // config.module.rules.push({
        //     test: /\.less$/,
        //     loaders: [
        //         loaders.classNames(),
        //         loaders.style(loaderOptions),
        //         loaders.cssModules(loaderOptions),
        //         loaders.less(loaderOptions),
        //         loaders.styleResources(loaderOptions),
        //     ],
        // });

        config.resolve.extensions.push('.ts', '.tsx');
        config.resolve.alias['@'] = path.resolve(__dirname, '../src');
        config.resolve.alias['@osui/icons'] = '@osui/icons-icloud';

        config.module.rules[0].use[0].options.presets = [
            require.resolve('@babel/preset-react'),
            require.resolve('@babel/preset-env'),
            require.resolve('@emotion/babel-preset-css-prop'),
        ];

        return config;
    },
});
