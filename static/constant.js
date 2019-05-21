export const menuList = [
  {
    label: '用户管理',
    icon: 'fa fa-user-o',
    children: [{ label: '用户列表', id: 1, pathName: 'userManage' }]
  },
  {
    label: '账号管理',
    icon: 'fa fa-gift',
    disabled: true,
    children: [
      {
        label: '角色列表',
        id: 2,
        pathName: 'rolelist',
        disabled: true
      },
      {
        label: '管理员列表',
        id: 3,
        pathName: 'Managelist',
        disabled: true
      }
    ]
  },
  {
    label: '产品列表',
    icon: 'fa el-icon-goods',
    children: [{ label: '产品列表', id: 4, pathName: 'ProductList' }]
  },
  {
    label: '订单管理',
    icon: 'fa fa-folder-open',
    children: [
      { label: '线上订单列表', id: 6, pathName: 'OrderManage' },
      { label: '线下订单列表', id: 34, pathName: 'OfflineOrders' },
      { label: '快递信息查询', id: 7, pathName: 'express' },
      {
        label: '顺丰快递查询',
        id: 10086,
        url: 'http://www.sf-express.com/cn/sc/dynamic_function/waybill/'
      }
    ]
  },
  {
    label: '序列号管理',
    icon: 'fa fa-pie-chart',
    children: [{ label: '序列号列表', id: 8, pathName: 'SN' }]
  },
  {
    label: '公告资讯',
    icon: 'fa fa-file-audio-o',
    children: [
      { label: '公告标签', id: 9, pathName: 'NoticeLabelManage' },
      { label: '公告列表', id: 10, pathName: 'NoticeList' },
      { label: '特殊公告', id: 11, pathName: 'SNoticelist' },
      { label: '资讯标签', id: 13, pathName: 'label_manage' },
      { label: '资讯管理', id: 14, pathName: 'info' },
      { label: '版本管理', id: 36, pathName: 'Versions' }
    ]
  },
  {
    label: '发票管理',
    icon: 'fa fa-money',
    children: [{ label: '发票列表', id: 15, pathName: 'Receipt' }]
  },
  {
    label: '服务帮助',
    icon: 'fa fa-cny',
    children: [
      { label: '产品目录', id: 16, pathName: 'Ins' },
      { label: '手册目录', id: 17, pathName: 'Catalog' },
      { label: '内容列表', id: 18, pathName: 'Insl' },
      { label: '问题分类', id: 19, pathName: 'FAQ_Classifcation' },
      { label: '问题列表', id: 21, pathName: 'Detail' }
    ]
  },
  {
    label: '轮播图管理',
    icon: 'fa fa-picture-o',
    children: [{ label: '管理轮播图', id: 22, pathName: 'Carousel' }]
  },
  {
    label: '合伙人优惠管理',
    icon: 'fa fa-barcode',
    children: [
      { label: '查看折扣码', id: 23, pathName: 'DiscountCode' },
      { label: '查看优惠券', id: 24, pathName: 'Coupon' },
      { label: '查看派发记录', id: 25, pathName: 'CouponHistory' },
      { label: '代理商列表', id: 26, pathName: 'AgentsList' },
      { label: '代理商海报', id: 40, pathName: 'AgentsPoster' }
    ]
  },
  {
    label: '短信文本管理',
    icon: 'fa fa-tablet',
    children: [{ label: '短信文本', id: 27, pathName: 'SMS' }]
  },
  {
    label: '问题反馈管理',
    icon: 'fa fa-reply',
    children: [{ label: '问题反馈', id: 28, pathName: 'Feedback' }]
  },
  {
    label: '活动管理',
    icon: 'fa fa-gift',
    children: [
      { label: 'SXO活动列表', id: 29, pathName: 'Sxo' },
      { label: 'EOS用户列表', id: 30, pathName: 'EOS_user' },
      { label: 'EOS订单列表', id: 31, pathName: 'EOS_order' },
      { label: '糖果列表', id: 35, pathName: 'Candy_list' },
      { label: 'LUXE活动', id: 66, pathName: 'DoubleTwelve' },
      { label: '糖果官网', id: 39, pathName: 'Candy_audit' }
    ]
  },
  {
    label: 'BOS专区',
    icon: 'fa fa-briefcase',
    children: [
      { label: 'BOS水龙头', id: 41, pathName: 'BosFaucet' },
      { label: '查询解决方案', id: 42, pathName: 'BosSolutions' }
    ]
  },
  {
    label: '数据统计',
    icon: 'fa fa-database',
    children: [
      {
        label: '下载每月统计',
        id: 67,
        pathName: 'dataStatisticsIndex'
      },
      { label: '下载数据列表', id: 68, pathName: 'dataStatisticsList' }
    ]
  }
];
