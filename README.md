# dowjones-project
dowjones share visualization project in react

#### 地址 https://github.com/superSamChow/dowjones-project.git

#### 运行 

开发模式： `npm start`

生产模式： 暂无

## client目录简介

  └── src
    ├── app.js            ## 入口文件
    ├── app.scss          ## 全局样式
    ├── components        ## 展示型组件及其Redux
    │   ├── Detail
    │   └── Home
    │       ├── PreviewList.js
    │       └── PreviewListRedux.js
    ├── containers        
    ├── index.tpl.html    ## html模板文件
    ├── layouts           ## 布局
    │   └── Frame.js
    ├── redux             ## 全局redux配置
    │   ├── configureStore.js  ## store配置
    │   ├── middleware         ## 自定义middleware
    │   │   └── redux-composable-fetch.js   
    │   └── reducers.js        ## 全局reducers
    ├── routes                 ## 前端路由配置
    │   └── index.js
    ├── styles                 ## 局部样式（组件无关）
    ├── utils                  ## 辅助
    │   └── data_fetch.js
    └── views                  ## 页面组件（容器型）及其redux配置
        ├── Detail.js
        ├── Detail.scss
        ├── DetailRedux.js
        ├── Home.js
        ├── Home.scss
        └── HomeRedux.js


## 项目进展
### 03/09
今天就简单的创建一个空项目吧，不早了撸撸睡了。

### 03/10

#### fulfilled
  1. 搭建了express+webpack的热加载前后端环境。
  2. 大体划分了前端routes和views。
  3. 搭建了redux环境，并给出代码组织结构。
  4. 大体看了ant-design，决定引入ant-design加速开发效率。

#### unfulfilled
  1. 目前使用的dowjones成分股api，不是很好用。但是目前没有找到任何替代。
  2. 后端api路由没有划分。
  3. plottabeljs还没有看。
  4. eslint配置一般般吧，之前就没太重视，现在st里面全是红点😢。

#### tomorrow plans
  1. 解决数据获取问题，目前想到的一个stupid办法是将其保存为静态json文件的方式。这个今天小试了一下，但是由于后端路由的问题，没有搞定。（express已经基本处于不会的状态，需要再研究下）
  2. 使用antd的组件，组合业务ui组件。
  3. 如有可能，初试一下plottablejs。

#### 槽点
  1. express是短板。
  2. yahoo的dowjones api怎么用啊？不能在这里使用jsonp这样的办法吧？
  3. sass-loader和antd一起使用有坑！目前暂时干掉了sass-loader。