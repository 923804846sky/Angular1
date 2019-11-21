import {
  Component,
  OnInit
} from '@angular/core';
import {
  Router, ActivatedRoute
} from '@angular/router'
import {
  UploadFile, NzIconService
} from 'ng-zorro-antd';
import {
  FuwuService
} from '../../jstask5/fuwu.service';
import {
  HttpClient
} from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Observable, Observer } from 'rxjs';




@Component({
  selector: 'app-article2',
  templateUrl: './article2.component.html',
  styleUrls: ['./article2.component.scss']
})
export class Article2Component implements OnInit {
  validateForm: FormGroup;
  size = 'large';
  [x: string]: any;



  public omg: any = {};
  public off: boolean = false;


  constructor(
    public actRouter:ActivatedRoute,
    public ser: FuwuService,
     public rou: Router,
      public http: HttpClient,

      private iconService: NzIconService,
      private fb: FormBuilder,

      ) 
      {
        this.validateForm = this.fb.group({
          userName: ['', [Validators.required],
           [this.userNameAsyncValidator]],
           serName: ['', [Validators.required],
           [this.userNameAsyncValidator]],
           erName: ['', [Validators.required],
           [this.userNameAsyncValidator]],
           Name: ['', [Validators.required],
           [this.userNameAsyncValidator]],
           email: ['', [Validators.email, Validators.required]],
           password: ['', [Validators.required]],
           confirm: ['', [this.confirmValidator]],
           comment: ['', [Validators.required]]
    
    
        });
    this.iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_8d5l8fzk5b87iudi.js'
    });
  }
filelist = [];
  ngOnInit() {
    // 默认加载UI组件
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      erName: [null, [Validators.required]],
      Name: [null, [Validators.required]],
     comment: [null, [Validators.required]],

       remember: [true]
    });

    this.actRouter.queryParamMap.subscribe((res: any) => {
      if (res.params.id != undefined) {
          this.ser.editData(res.params.id).subscribe((result: any) => {
              console.log(result)
              var img = result.data.article;
              img.type = img.type.toString()
              img.industry = img.industry.toString()
              this.omg = img;
              this.fileList = [{
                  uid: -1,
                  name: 'xxx.png',
                  status: 'done',
                  url: this.omg.img
              }];
             
          })
      }
  })


  }

  



  change(e) {
    console.log(e)
    if (e.type == "success") {
      this.omg.img = e.file.response.data.url
    }
    console.log(this.omg)
  }


 




  cnline() {
    // 深拷贝
    this.off = true;
    let params = JSON.parse(JSON.stringify(this.omg))
    console.log(params)
    params.status = 1;
    console.log(params)
    this.ser.upload(params).subscribe((res: any) => {
      console.log(res);
      if (res.code == 0) {
        this.rou.navigate(['/jstask6/article'])
      }else{
        this.off = false;
      }
    })
  }



online() {
  this.off = true;
  let params = JSON.parse(JSON.stringify(this.omg)) //深拷贝。不加这一行代码img地址会有问题
  console.log(params)
  params.status = 2;
  if (params.id) { //判断是否有传入id从而判断是否为编辑
      console.log(params)
      this.ser.putData(params).subscribe((haha: any) => {
          if (haha.code == 0) {
              this.rou.navigate(['/jstask6/article'])
          } else{
            this.off = false;
          }
      })
  } else {
      this.ser.upload(params).subscribe((res: any) => {
          console.log(res);
          // if (params.title == '' || params.type == null || params.content == '' || params.url == '' || params.img == undefined) {
          //     alert("信息不完整，请继续输入！")
       if (res.code == 0) {
              this.rou.navigate(['/jstask6/article'])
          } else {
            this.off = false;
          }
      })
  }
}

goBack() {
  
  // history.go(-1);
  window.history.back()
}











































// UI组件自带的TS代码
showUploadList = {
  showPreviewIcon: true,
  showRemoveIcon: true,
  hidePreviewIconInNonImage: true
};
fileList = [];
previewImage: string | undefined = '';
previewVisible = false;
handlePreview = (file: UploadFile) => {
  this.previewImage = file.url || file.thumbUrl;
  this.previewVisible = true;
};
// UI组件自带的TS代码



// ui组件
submitForm(value: any): void {
  for (const key in this.validateForm.controls) {
    this.validateForm.controls[key].markAsDirty();
    this.validateForm.controls[key].updateValueAndValidity();
  }
  console.log(value);
}

resetForm(e: MouseEvent): void {
  e.preventDefault();
  this.validateForm.reset();
  // for (const i in this.validateForm.controls) {
  //   this.validateForm.controls[i].markAsDirty();
  //   this.validateForm.controls[i].updateValueAndValidity();
  // }
  for (const key in this.validateForm.controls) {
    this.validateForm.controls[key].markAsPristine();
    this.validateForm.controls[key].updateValueAndValidity();
  }
}

validateConfirmPassword(): void {
  setTimeout(() => this.validateForm.controls.confirm.updateValueAndValidity());
}

userNameAsyncValidator = (control: FormControl) =>
  new Observable((observer: Observer<ValidationErrors | null>) => {
    setTimeout(() => {
      if (control.value === 'JasonWood') {
        // you have to return `{error: true}` to mark it as an error event
        observer.next({ error: true, duplicated: true });
      } else {
        observer.next(null);
      }
      observer.complete();
    }, 1000);
  });


  
confirmValidator = (control: FormControl): { [s: string]: boolean } => {
  if (!control.value) {
    return { error: true, required: true };
  } else if (control.value !== this.validateForm.controls.password.value) {
    return { confirm: true, error: true };
  }
  return {};
};
}
