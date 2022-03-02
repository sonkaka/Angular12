import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-get-data',
  templateUrl: './get-data.component.html',
  styleUrls: ['./get-data.component.scss'],
})
export class GetDataComponent implements OnInit {
  constructor(private services: HttpServerService) {}

  public ngOnInit(): void {
    this.services.getComments().subscribe((data) => {
      console.log('getComments: ', data);
    });

    // this.services.getRandomUsers(5).subscribe((data) => {
    //   console.log('getRandomUsers: ', data.results);
    // });
  }
}
