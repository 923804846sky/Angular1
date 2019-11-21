import {
  Injectable
} from '@angular/core';
import {
  HttpClient,
  HttpHeaders
} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
// 配置跨域
export class FuwuService {
  [x: string]: any;
  public posturl: string = "/a/login";
  // 找到端口
  public geturl: string = "/a/article/search"

  public editUrl: string = "/a/article"

  public uploadurl: string = "/a/u/article";
  
  public loginOutUrl: string = "/a/logout" 

  public putStatusUrl: string = "/a/u/article/status"
  
  public requestHeader = {
    headers: new HttpHeaders({
      "content-Type": "application/x-www-form-urlencoded"
    })
  }

  // 以下函数是序列化，post方法需要用到,和上面的zhanghaomima(shuju)相呼应。这是固定写法，
  zhanghaomima(data: any) {
    let paramStr = '',
      name, value, subName, innerObj;
    let that = this;
    for (name in data) {
      value = data[name];
      if (value instanceof Array) {
        for (let i of value) {
          subName = name;
          innerObj = {};
          innerObj[subName] = i;
          paramStr += this.paramFormat(innerObj) + '&';
        }
      } else if (value instanceof Object) {
        Object.keys(value).forEach(function (key) {
          subName = name + '[' + key + ']';
          innerObj = {};
          innerObj[subName] = value[key];
          paramStr += that.paramFormat(innerObj) + '&';
        });
      } else if (value !== undefined && value !== null) {
        paramStr += encodeURIComponent(name) + '=' +
          encodeURIComponent(value) + '&';
      }
    }
    return paramStr.length ? paramStr.substr(0, paramStr.length - 1) : paramStr;
  }

  constructor(public http: HttpClient) {}
  // 开始登陆请求

  postdata(shuju) {
    const params = typeof (shuju) === 'object' && String(shuju) !== '[object File]' ? this.zhanghaomima(shuju) : shuju;
    return this.http.post(
      this.posturl, params, this.requestHeader
    )
  }
  // 定义一个方法，找到http里的get端口，发送请求
  getData(a ? ) {
    return this.http.get(
      this.geturl, {
      // 定义分页所需要的参数a，问号可传可不穿
      params: a
    })
  }

  putStatusData(data) {
    const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.zhanghaomima(data) : data;
    return this.http.put(
      this.putStatusUrl, params, this.requestHeader
    )
  }

  upload(data) {
    const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.zhanghaomima(data) : data;
    return this.http.post(
      this.uploadurl, params, this.requestHeader
    )
  }

  putData(data) {
    console.log(data)
    const params = typeof (data) === 'object' && String(data) !== '[object File]' ? this.zhanghaomima(data) : data;
    return this.http.put(
       `${this.uploadurl}/${data.id}`, params, this.requestHeader
    )
  }
editData(ts){
  return this.http.get(
    `${this.editUrl}/${ts}`
  )
}

shanchuData(data){
  return this.http.delete (
       `${this.uploadurl}/${data.id}`
    )
}

cancel() {
  return this.http.post(
      this.loginOutUrl, this.requestHeader
  )
}



}
