import {
  Router,ActivatedRoute
} from '@angular/router'
import {
  Component,
  OnInit
} from '@angular/core';
import {
  FuwuService
} from '../../jstask5/fuwu.service';
import { NzI18nService, zh_CN, en_US } from 'ng-zorro-antd';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  size = 'large';

  cancel(): void {
    this.nzMessageService.info('click cancel');
  }
  
  date = null;
  dateRange = [];
  isEnglish = false;
  nzMessageService: any;
  type: any;

  
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }

  changeLanguage(): void {
    this.i18n.setLocale(this.isEnglish ? zh_CN : en_US);
    this.isEnglish = !this.isEnglish;
  }
 
  // 设置一个准备接受数据的东西
  public bbb: [];
  // 分页绑定数据,接收任意数据类型any
  public shujuzongshu: number;
  public fenyeyeshu: number;
  public fenye:any = {};
  // 数据绑定
  public shuju:any = {


};

  public savePage:any;

  // 初始化
  constructor(public ser: FuwuService, 
              public rou: Router,
              private i18n: NzI18nService,
              public actRouter:ActivatedRoute
              ) {}
  // 默认加载
  ngOnInit() {
    this.actRouter.queryParamMap.subscribe((result: any) => {
      console.log(result)
      this.savePage = result.params
      console.log(result.params)
      this.getTable(this.savePage)
  })


  }
shanchu(data){
    this.ser.shanchuData(data).subscribe((res: any) =>{
      this.getTable()
    
    })
  }
  
  // 设定方法，接收数据赋值res
  // getTable(a ? ) {
  //   this.ser.getData(a).subscribe((res: any) => {
  //     console.log(res)
  //     // 赋值
  //     this.bbb = res.data.articleList
  //     this.shujuzongshu = res.data.total;
  //     this.fenyeyeshu = res.data.size;

  //   })
    
  // }
  getTable(params?){
   
    this.ser.getData(params).subscribe((res:any)=>{
    console.log(params)//这里的res是从后台接受的返回参数
    this.bbb = res.data.articleList
      this.shujuzongshu = res.data.total;
      this.fenyeyeshu = res.data.size;
  })
}

  // 这个E代表的是你点击的第几页，change是你在HTML文件里的命名
  // 告诉上面你需要这个分页的数据，让上面去找

change(e){
  this.fenye = {
    page:e
  }
  let fenyeshuju = Object.assign(this.fenye,this.shuju)
  console.log(fenyeshuju);
  this.rou.navigate(['/jstask6/article'], {
          queryParams:fenyeshuju
         
      })

} 

  sousuo() {
    // this.shuju.type == undefined ? "" : this.shuju.type;
    // this.shuju.status == undefined ? "" : this.shuju.status;

    // let starta = this.shuju.start ? new Date(this.shuju.start).getTime() : '';
    // let enda = this.shuju.end ? new Date(this.shuju.end).getTime() + 86399999 : '';
    this.shuju.startAt = this.shuju.startAt ? transform(this.shuju.startAt) : '';
    this.shuju.endAt = this.shuju.endAt ? transform(this.shuju.endAt) + 86399999 : ''; //能搜索同一天的数据(1天是86400000ms)
     //这里是获取到搜索日期当天凌晨的时间，并转换为时间戳格式(计算1970/1/1到当前搜索时间凌晨的毫秒)
    function transform(dt) {
        if (typeof dt !== 'number') {
            return new Date((dt).getFullYear() + '-' + ((dt).getMonth() + 1) + '-' + (dt).getDate()).valueOf();
        } else {
            return dt
        }
    }
    if (this.shuju.type === null || this.shuju.type === undefined) {this.shuju.type = "" }
    if (this.shuju.status === null || this.shuju.status === undefined) {this.shuju.status = "" }
    this.getTable({
      type: this.type,
      status: this.shuju.status,
      startAt: this.shuju.start,
      endAt: this.shuju.end,
    })
    this.rou.navigate(['/jstask6/article'], {
      queryParams: this.shuju,
     
  })
  if (this.shuju.endAt) {
    this.shuju.endAt = this.shuju.endAt - 86399999;
}
  }

  qingkong() {
 this.shuju = {};
 this.rou.navigate(['/jstask6/article'], {
  queryParams: this.shuju,
  })
  }


  
  confirm(id, status) {
    console.log(id, status)
    status = status == 1 ? 2 : 1;//先进行后面的三元表达式，再将结果赋给前面

    this.ser.putStatusData({
        id: id,
        status: status
    }).subscribe((res: any) => {
        console.log(res)
        if (res.code == 0) {
            console.log(this.savePage)
            this.getTable(this.savePage)
        }
    })
}
edit(data) {
  console.log(data)
  this.rou.navigate(['/jstask6/article2'], {
      queryParams: data
      
  })
}


  }
