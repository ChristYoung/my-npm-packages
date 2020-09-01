import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ngx-img-krump',
  templateUrl: './ngx-img-krump.component.html',
  styleUrls: ['./ngx-img-krump.component.css']
})
export class NgxImgKrumpComponent implements OnInit {

  fileUploadImgStyle: string; // 点击选择图片文件的样式

  constructor() { }

  ngOnInit(): void {
  }

}
