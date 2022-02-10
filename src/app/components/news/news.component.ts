import { Component, OnInit } from '@angular/core';
import { news } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  public newsList: Array<news> = [
        {
          id:'1',
          subject:'new Location',
          content:'our new office is oppened at the new adres in the city monaco.............................',
          url:''
        },
        {
          id:'2',
          subject:'Currency',
          content:'the latest new about cryptocurrency ans trading effect on your investment.......................',
          url:''
        },
        {
          id:'3',
          subject:'Transaction',
          content:'new update on our application that facilitate more the transaction and make it more easier.......',
          url:''
        },
        {
          id:'4',
          subject:'new Location',
          content:'our new office is oppened at the new adres in the city monaco',
          url:''
        },
        {
          id:'5',
          subject:'new Location',
          content:'our new office is oppened at the new adres in the city monaco',
          url:''
        }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
