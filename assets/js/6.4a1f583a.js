(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{357:function(t,r,_){"use strict";_.r(r);var e=_(42),a=Object(e.a)({},(function(){var t=this,r=t.$createElement,_=t._self._c||r;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"全局说明"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局说明"}},[t._v("#")]),t._v(" 全局说明")]),t._v(" "),_("h2",{attrs:{id:"请求地址"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求地址"}},[t._v("#")]),t._v(" 请求地址")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("https://xxx.com\n")])])]),_("h2",{attrs:{id:"请求方式"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#请求方式"}},[t._v("#")]),t._v(" 请求方式")]),t._v(" "),_("p",[t._v("接口为"),_("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTTP",target:"_blank",rel:"noopener noreferrer"}},[t._v("http协议"),_("OutboundLink")],1),t._v("，上行都是form格式，支持压缩的，在header中，增加Accept-Encoding: gzip, deflate")]),t._v(" "),_("div",{staticClass:"custom-block warning"},[_("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),_("p",[t._v("上传文件的接口和网页提交无差别，必须符合http协议"),_("br"),t._v("\n下行为json格式，服务器会自动根据header部分开启压缩"),_("br"),t._v('\n自定义的头信息，一律为 "X-"开始，单词之间使用 “-”英文符号')])]),t._v(" "),_("p",[t._v("接口先暂定一个域名， 后面接口不再重复域名，并且客户端要兼容“/path/xxx”和“http://xxx.com/path/xxx”\n这种两种路径格式, 涉及用户账号信息部分使用https接口"),_("br"),t._v("\n接口原则为，尽量兼容http协议，少增加自定义部分")]),t._v(" "),_("ul",[_("li",[t._v("GET 服务器拉取数据")]),t._v(" "),_("li",[t._v("POST 向服务器提交数据")]),t._v(" "),_("li",[t._v("PUT 更新数据")]),t._v(" "),_("li",[t._v("DELETE 删除数据")])]),t._v(" "),_("h2",{attrs:{id:"全局上行参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局上行参数"}},[t._v("#")]),t._v(" 全局上行参数")]),t._v(" "),_("h3",{attrs:{id:"header部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#header部分"}},[t._v("#")]),t._v(" header部分")]),t._v(" "),_("p",[t._v("User-Agent 为手机型号或者用户浏览器的UA"),_("br"),t._v("\nAccept-Encoding: gzip, deflate"),_("br"),t._v("\nAccept: */*")]),t._v(" "),_("h3",{attrs:{id:"表单部分"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#表单部分"}},[t._v("#")]),t._v(" 表单部分")]),t._v(" "),_("p",[t._v("pf 手机平台 platform 缩写，为ios 、 android 、jailbreak"),_("br"),t._v("\npf_ver 平台版本 platform_version 缩写"),_("br"),t._v("\nman 设备厂商 manufacturer缩写"),_("br"),t._v("\nmod 设备型号 model缩写"),_("br"),t._v("\nsid 用户身份令牌，本地需要保存，在登录或者更改密码后，会被更改掉 格式为 用户ID + s + 密钥串加密"),_("br"),t._v("\nverc 版本号， 格式 x.y 格式，x和y必须都是数字"),_("br"),t._v("\nver 版本名称"),_("br"),t._v("\nlat 纬度latitude，如果没有，为空"),_("br"),t._v("\nlon 经度longitude 如果没有，为空"),_("br"),t._v("\nts 时间戳信息timestamp缩写, 必须为整型时间，秒"),_("br"),t._v("\nnet 网络制式 2g 3g 4g wifi"),_("br"),t._v("\nh 签名验证字段， 生成规则： md5(md5(提交表单数据，键值对字典排序 &连接) 小写) + ckey)"),_("br"),t._v("\nfr 渠道来源"),_("br"),t._v("\nckey 客户端指纹"),_("br"),t._v("\ndno 设备号device_no 缩写， 客户端各自实现，必须支持合法校验"),_("br"),t._v("\nan   协议版本号"),_("br"),t._v("\nlang 客户端本地语言 zh-CN 中文简体 en英语 ja日语 de德语 es西班牙语 fr法语 ko韩语 pt葡萄牙语 ru俄语 ar阿拉伯"),_("br"),t._v("\ncode , 值为产品渠道code"),_("br"),t._v("\ntz, 'Asia/Shanghai', 时区 string")]),t._v(" "),_("h2",{attrs:{id:"全局下行错误参数"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#全局下行错误参数"}},[t._v("#")]),t._v(" 全局下行错误参数")]),t._v(" "),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("客户端需要判断http的状态码，200为正常，其他状态参考http协议,返回的body部分为json结构，有公共部分")])]),t._v(" "),_("p",[t._v("error_reason，错误原因解释，正常为空字符串"),_("br"),t._v("\nerror_code, 错误代码，正常为0， 其他数字均为错误"),_("br"),t._v("\nerror_url , 如果有，需要客户端提醒error_reason 后，用户确认后，跳到该地址"),_("br"),t._v("\nnow_at , 服务器当前时间 int 精确到秒")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",[t._v("Error_code")]),t._v(" "),_("th",[t._v("Error_reason")])])]),t._v(" "),_("tbody",[_("tr",[_("td",[t._v("0")]),t._v(" "),_("td",[t._v("正常")])]),t._v(" "),_("tr",[_("td",[t._v("-1")]),t._v(" "),_("td",[t._v("一般错误")])]),t._v(" "),_("tr",[_("td",[t._v("-2")]),t._v(" "),_("td",[t._v("各种业务自定义弹窗类错误,返回数据中带有tip_popup对象")])]),t._v(" "),_("tr",[_("td",[t._v("-100到-199")]),t._v(" "),_("td",[t._v("账户相关错误")])]),t._v(" "),_("tr",[_("td",[t._v("-100")]),t._v(" "),_("td",[t._v("需要登录")])]),t._v(" "),_("tr",[_("td",[t._v("-101")]),t._v(" "),_("td",[t._v("帐号被封")])]),t._v(" "),_("tr",[_("td",[t._v("-102")]),t._v(" "),_("td",[t._v("设备被封")])]),t._v(" "),_("tr",[_("td",[t._v("-400到-499")]),t._v(" "),_("td",[t._v("表单提示错")])]),t._v(" "),_("tr",[_("td",[t._v("-400")]),t._v(" "),_("td",[t._v("表单参数不符合")])]),t._v(" "),_("tr",[_("td",[t._v("-401")]),t._v(" "),_("td",[t._v("贵族计费")])]),t._v(" "),_("tr",[_("td",[t._v("-402")]),t._v(" "),_("td",[t._v("钻石计费")])]),t._v(" "),_("tr",[_("td",[t._v("-403")]),t._v(" "),_("td",[t._v("认证")])])])]),t._v(" "),_("h2",{attrs:{id:"文件直传阿里云"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#文件直传阿里云"}},[t._v("#")]),t._v(" 文件直传阿里云")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",[_("code",[t._v("http-get\n   接口地址: /upload/prepare\n\n   上行参数:\n       id: '1' 用户ID,可以不传\n       sid: 用户的sid 可以不传\n       filename: 'a.jpg' 不能为空\n       size: 100X200 上传图片的尺寸,可不传\n       scene: 场景 user用户相关 feed动态 chat聊天 album相册 advises意见反馈 complain举报 agora声网相关 wait_dialog坐聊\n       sincere_answer 真心话答案 assistant_message聊天搭讪小助手\n\n   返回值:\n   {\n       error_code: 0/-1\n       error_reason: ''\n       status_code: 200/400/500\n       access_key_id: 'AccessKeyId'\n       access_key_secret: 'AccessKeySecret'\n       expiration: '2019-01-16T06:32:54Z'\n       security_token: 'SecurityToken'\n       endpoint: 'cn-shanghai'\n       bucket: 'bucket'\n       upload_filename: '/upload/5c3ecc8fc669e.jpg'\n   }\n")])])]),_("div",{staticClass:"custom-block tip"},[_("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),_("p",[t._v("获取参数并且上传文件成功之后, upload_filename值传给应用服务器实际接口, 参数格式是对应字段+ '_oss_url'\n比如头像: avatar_oss_url, 文件: file_oss_url ..等, 多个文件名用,隔")])])])}),[],!1,null,null,null);r.default=a.exports}}]);