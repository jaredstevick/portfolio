"use strict";angular.module("Portfolio",["ngSanitize"]).controller("MainCtrl",["$http","$scope","$sce",function(o,t,l){$(".navbar-collapse ul li a").click(function(){$(".navbar-toggle:visible").click()}),$(function(){$("a[href*=#]:not([href=#portfolioModal1], [href=#portfolioModal2], [href=#portfolioModal3], [href=#portfolioModal4], [href=#portfolioModal5], [href=#portfolioModal6])").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var o=$(this.hash);if(o=o.length?o:$("[name="+this.hash.slice(1)+"]"),o.length)return $("html,body").animate({scrollTop:o.offset().top},1e3),!1}})}),$(window).scroll(function(){$(this).scrollTop()>5?$(".navbar-fixed-top").addClass("opaque"):$(".navbar-fixed-top").removeClass("opaque")}),$(".carousel").carousel({interval:5e3});var e=this;o.jsonp("http://api.tumblr.com/v2/blog/jaredstevick.tumblr.com/posts?api_key=1yLHFpQZusNUtc3ITApvq919tz8ZBJxI7qQxd2DiMOg0Iawa6Z&filter=text&limit=3&callback=JSON_CALLBACK").success(function(o){e.posts=o.response.posts,t.trustThisHtml=function(o){return l.trustAsHtml(o)}}),$("#submitForm").on("click",function(){$("#contactForm")[0].reset()}),$(function(){$("[data-toggle='tooltip']").tooltip()}),console.log("So you like to look under the hood? Why don't you check out my Github? http://github.com/jaredstevick")}]);