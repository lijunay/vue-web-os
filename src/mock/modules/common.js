import Mock from "mockjs";
let debug = 1;
if (debug) {
  // 登录接口
  Mock.mock(/login/, {
    code: 0,
    msg: "Success",
    data: {
      userId: "@integer(1,10)",
	  userName:'李建',
      token: "@string(30)",
	  department:'开发部',
	  position:'全栈开发',
	  phone:18888888888,
	  avatarUrl:'https://s2.ax1x.com/2020/02/16/3ShASK.jpg'
    }
  });

  // 获取权限元数组
  Mock.mock(/getMenu/, {
    code: 0,
    msg: "Success",
    data: {
      menu: [{
        "id": 1,
        "permissionsname": "技术解决",
        "permissionsenglish": "cloudDisk",
        "state": true,
        "type": 1,
        "parentid": 0,
        "color": "primary",
        "icon": "ios-cloud",
        "image": null
      }, {
        "id": 2,
        "permissionsname": "弹出框",
        "permissionsenglish": "bigFileUpload",
        "state": true,
        "type": 2,
        "parentid": 1,
        "color": "primary",
        "icon": "ios-cloud-upload",
        "image": null
      }, {
        "id": 3,
        "permissionsname": "系统介绍",
        "permissionsenglish": "userManagement",
        "state": true,
        "type": 1,
        "parentid": 0,
        "color": "success",
        "icon": "ios-body",
        "image": null
      }, {
        "id": 4,
        "permissionsname": "安装与启动",
        "permissionsenglish": "personnelList",
        "state": true,
        "type": 2,
        "parentid": 3,
        "color": "success",
        "icon": "ios-globe",
        "image": null
      }, {
        "id": 5,
        "permissionsname": "按钮",
        "permissionsenglish": "documentCenter",
        "state": true,
        "type": 2,
        "parentid": 1,
        "color": "primary",
        "icon": "ios-albums",
        "image": null
      }, {
        "id": 6,
        "permissionsname": "页面跳转",
        "permissionsenglish": "pageJump",
        "state": true,
        "type": 2,
        "parentid": 1,
        "color": "primary",
        "icon": "ios-crop",
        "image": null
      }, {
        "id": 7,
        "permissionsname": "新增模块",
        "permissionsenglish": "addModule",
        "state": true,
        "type": 2,
        "parentid": 3,
        "color": "success",
        "icon": "ios-grid",
        "image": null
      }, {
        "id": 7,
        "permissionsname": "新增页面",
        "permissionsenglish": "addPage",
        "state": true,
        "type": 2,
        "parentid": 3,
        "color": "success",
        "icon": "ios-easel",
        "image": null
      },{
        "id": 8,
        "permissionsname": "Excel",
        "permissionsenglish": "excelModel",
        "state": true,
        "type": 2,
        "parentid": 3,
        "color": "success",
        "icon": "ios-easel",
        "image": null
      },]
    }
  });

 
}
