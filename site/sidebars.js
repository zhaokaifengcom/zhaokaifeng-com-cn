// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //gdsx: [{type: 'autogenerated', dirName: '.'}],

// 高等数学
  gdsx: [
    'gdsx/intro',
    {
      type: 'category',
      label: '课程|第一章：函数、极限和连续',
      items: ['gdsx/Chapter_1/1.1', 'gdsx/Chapter_1/1.2', 'gdsx/Chapter_1/1.3'],
    },
	
	{
      type: 'category',
      label: '课程|第二章：一元函数微分学',
      items: ['gdsx/Chapter_2/2.1', 'gdsx/Chapter_2/2.2', 'gdsx/Chapter_2/2.3'],
    },
	
	{
      type: 'category',
      label: '课程|第三章：一元函数积分学',
      items: ['gdsx/Chapter_3/01', 'gdsx/Chapter_3/02'],
    },
	
	{
      type: 'category',
      label: '习题|第一章：函数、极限和连续',
      items: ['gdsx/Exercise_1/01', 'gdsx/Exercise_1/02', 'gdsx/Exercise_1/03', 'gdsx/Exercise_1/04'],
    },
	
  ],
  
  
// 线性代数
  xxds: [
    'xxds/intro',
    {
      type: 'category',
      label: '课程 | 第一章',
      items: ['xxds/Chapter_1/01', 'xxds/Chapter_1/02'],
    },
	
	{
      type: 'category',
      label: '课程 | 第二章',
      items: ['xxds/Chapter_2/01', 'xxds/Chapter_2/02'],
    },
	
  ],
  
  
// 概率统计
  gltj: [
    'gltj/intro',
    {
      type: 'category',
      label: '课程 | 第一章',
      items: ['gltj/Chapter_1/01', 'gltj/Chapter_1/02'],
    },
	
	{
      type: 'category',
      label: '课程 | 第二章',
      items: ['gltj/Chapter_2/01', 'gltj/Chapter_2/02'],
    },
	
  ],
  
  
// 数学真题
  sxzt: [
    'sxzt/intro',
    {
      type: 'category',
      label: '课程 | 第一章',
      items: ['sxzt/Chapter_1/01', 'sxzt/Chapter_1/02'],
    },
	
	{
      type: 'category',
      label: '课程 | 第二章',
      items: ['sxzt/Chapter_2/01', 'sxzt/Chapter_2/02'],
    },
	
  ],
  
  
// Ultra News
  ultranews: [
    'ultranews/intro',
    {
      type: 'category',
      label: '2025 年',
      items: ['ultranews/2025/01', 'ultranews/2025/02'],
    },
	
  ],
   
};

export default sidebars;
