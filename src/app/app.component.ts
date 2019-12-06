import { Component, OnInit } from '@angular/core';
declare var $: any
import * as $ from 'jquery'
@Component({
  selector: 'thor-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    $(document).ready(function () {
      'use strict';
      var TemplateSidebar = $('.sidebar');
      var MobileToggler = $(".t-header-mobile-toggler");

      MobileToggler.on("click", function () {
        $(".page-body").toggleClass("sidebar-collpased");
      });
      var current = location.pathname.split("/").slice(-1)[0].replace(/^\/|\/$/g, '');
      $('.navigation-menu li a', TemplateSidebar).each(function () {
        var $this = $(this);
        if (current === "") {
          if ($this.attr('href').indexOf("index.html") !== -1) {
            $(this).parents('li').last().addClass('active');
            if ($(this).parents('.navigation-submenu').length) {
              $(this).addClass('active');
            }
          }
        } else {
          if ($this.attr('href').indexOf(current) !== -1) {
            $(this).parents('li').last().addClass('active');
            if ($(this).parents('.navigation-submenu').length) {
              $(this).addClass('active');
            }
            if (current !== "index.html") {
              $(this).parents('li').last().find("a").attr("aria-expanded", "true");
              if ($(this).parents('.navigation-submenu').length) {
                $(this).closest('.collapse').addClass('show');
              }
            }
          }
        }
      });
      $(".btn.btn-refresh").on("click", function () {
        $(this).addClass("clicked");
        setTimeout(function () {
          $(".btn.btn-refresh").removeClass("clicked");
        }, 3000);
      });      
      $(".btn.btn-like").on("click", function () {
        $(this).toggleClass("clicked");
        $(this).find("i").toggleClass("mdi-heart-outline clicked").toggleClass("mdi-heart");
      });
      $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
      });
    });
  }
  title = 'Thor';
}
