import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})


export class FirstComponent implements OnInit {
  
  public PageID: number;
  constructor(private route: ActivatedRoute, private router: Router ) {
    this.PageID = parseInt(this.route.snapshot.paramMap.get('id'));
  }

  showPage2WithParam() {
    this.router.navigate(['/page2', this.PageID]);
  }

  ngOnInit() {
  }

}
