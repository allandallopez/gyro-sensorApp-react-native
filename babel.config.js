module.exports = {
   presets: ['module:metro-react-native-babel-preset'],
   plugins: [
      [
         'module-resolver',
         {
            root: ['./src'],
            alias: {
               '@svgIcons': './src/assets/icons/svg',
               '@screens': './src/screens',
               '@routes': './src/routes',
               '@services': './src/services',
               '@utils': './src/utils',
               '@components': './src/components',
               '@svgImages': './src/assets/images',
            },
         },
      ],
   ],
}
