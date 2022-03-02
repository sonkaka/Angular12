import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public name = 'Sơn Nguyễn';
  public age = 15;
  public traiCay = ['Nho', 'Cóc', 'Xoài', 'Ổi', 'Cam', 'Bưởi'];
  public traiCay2 = [
    { ten: 'Táo', gia: 12.567, haGia: true },
    { ten: 'Nho', gia: 3.123, haGia: true },
    { ten: 'Cóc', gia: -7.899, haGia: false },
  ];

  public vietNamData = [
    { city: 'Tỉnh/Thành phố', district: ['Quận/Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
  ];

  public districts: any[] = ['Quận/Huyện'];

  constructor() {}

  ngOnInit(): void {
    console.log('vietNamData:', this.vietNamData);
  }

  public resetName(): void {
    console.log('Click button resetName');
    this.name = '';
  }

  public changeCity(event: any): void {
    const city = event.target.value;
    if (!city) {
      return;
    }

    //Cách 1
    // const search = this.vietNamData.filter(data => data.city === city);
    // if(search && search.length > 0){
    //   this.districts = search[0].district;
    // }
    // console.log('search', this.districts);

    //Cách 2
    this.districts =
      this.vietNamData.find((data) => data.city == city)?.district || [];
  }
}
