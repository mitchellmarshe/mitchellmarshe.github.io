import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  /**
   * The current year.
   * @return {number} year.
   */
  public currentYear(): number {
    return new Date().getFullYear();
  }
}
