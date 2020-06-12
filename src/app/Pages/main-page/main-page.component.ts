import { Component, OnInit, AfterViewInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, AfterViewInit {

  counted = false;
  dynamicResize = true;
  type = 'GeoChart';
  myData = [
    [{v: 'PL-DS', f: 'Dolnośląskie'}, 123314, ],

  ];
  chartColumns = ['Województwo', 'Wypadki'];
  title = 'Title';
  myOptions = {
    is3D: true,
    region: 'PL',
    resolution: 'provinces',
  };
  constructor() { }

  ngOnInit(): void { }
  ngAfterViewInit(): void {
    var a = 0;
    $(window).scroll(function() {
      var oTop = $('#counter').offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter-value').each(function() {
          var $this = $(this),
            countTo = $this.attr('data-count');
          $({
            countNum: $this.text()
          }).animate({
              countNum: countTo
            },
            {
              duration: 2000,
              easing: 'swing',
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
              }
            });
        });
        a = 1;
      }

    });
}

}

