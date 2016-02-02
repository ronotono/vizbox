!function(){"use strict";angular.module("vizbox",["ngAnimate","ngSanitize","ngMessages","ngAria","ngRoute","ui.bootstrap","toastr"])}(),function(){"use strict";function a(){var a={restrict:"E",replace:!0,scope:{rows:"=rows",chartId:"=chartId"},link:function(a,t,e){var r='<div id="'+a.chartId+'"></div>';t.html(r);var n=c3.generate({bindto:"#"+a.chartId,data:{columns:a.rows,type:"pie",colors:{d1:"#73C2FB",d2:"#1F75FE",d3:"#0247FE",d4:"#4F86F7"}}});a.$watch("rows",function(){n.load({columns:a.rows})})}};return a}angular.module("vizbox").directive("pieChart",a)}(),function(){"use strict";function a(){function a(a){var t=this;t.relativeDate=a(t.creationDate).fromNow()}var t={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return a.$inject=["moment"],t}angular.module("vizbox").directive("acmeNavbar",a)}(),function(){"use strict";function a(){var a={restrict:"E",replace:!0,scope:{rows:"=rows",chartId:"=chartId"},link:function(a,t,e){var r='<div id="'+a.chartId+'"></div>';t.html(r);var n=c3.generate({bindto:"#"+a.chartId,padding:{top:10,right:20},data:{x:"x",columns:a.rows,colors:{d1:"#0247FE",d2:"#73C2FB"}},axis:{x:{type:"indexed",tick:{fit:!1}},y:{max:80,min:0,padding:{top:0,bottom:0},tick:{outer:!1,count:5,fit:!0}}},grid:{x:{show:!0},y:{show:!0}}});a.$watch("rows",function(){n.load({columns:a.rows,duration:1500})})}};return a}angular.module("vizbox").directive("lineChart",a)}(),function(){"use strict";function a(){var a={restrict:"E",replace:!0,scope:{chartId:"=chartId",geoLocation:"=geoLocation"},link:function(a,t,e){function r(){b.style("fill",function(a,t){var e=[Math.floor(10*Math.random()+5),Math.floor(20*Math.random()+40),Math.floor(155*Math.random()+100)];return"rgb("+e[0]+","+e[1]+","+e[2]+")"})}function n(){s=t[0].parentNode.clientWidth,s=s-v.left-v.right,c=s*h,c>320&&(c=310),d.translate([s/2,c/2]).scale(s/1.2),p.style("width",s+"px").style("height",c+"px"),p.selectAll(".land").attr("d",l),p.selectAll(".state").attr("d",l)}function o(a,t){var e=(d3.select(this).style("fill"),a.id+"");a.id<10&&(e="0"+e);var r=u[e],n=r.name;r&&(A||(A=g.append("div").attr("class","tooltip-container")),A.html('<table class="c3-tooltip tooltip"><tbody><tr><th colspan="2">State</th></tr><tr class=""><td class="name">'+n+'</td><td class="value">'+Math.random().toFixed(1)+"</td></tr></tbody></table>"),A.transition().duration(200).style("left",d3.event.layerX+"px").style("top",d3.event.layerY+"px").style("opacity",.9))}function i(a,t){A.transition().duration(200).style("opacity",0)}var s,c,d,l,b,u={10:{stateAbbr:"DE",name:"Delaware"},11:{stateAbbr:"DC",name:"District of Columbia"},12:{stateAbbr:"FL",name:"Florida"},13:{stateAbbr:"GA",name:"Georgia"},15:{stateAbbr:"HI",name:"Hawaii"},16:{stateAbbr:"ID",name:"Idaho"},17:{stateAbbr:"IL",name:"Illinois"},18:{stateAbbr:"IN",name:"Indiana"},19:{stateAbbr:"IA",name:"Iowa"},20:{stateAbbr:"KS",name:"Kansas"},21:{stateAbbr:"KY",name:"Kentucky"},22:{stateAbbr:"LA",name:"Louisiana"},23:{stateAbbr:"ME",name:"Maine"},24:{stateAbbr:"MD",name:"Maryland"},25:{stateAbbr:"MA",name:"Massachusetts"},26:{stateAbbr:"MI",name:"Michigan"},27:{stateAbbr:"MN",name:"Minnesota"},28:{stateAbbr:"MS",name:"Mississippi"},29:{stateAbbr:"MO",name:"Missouri"},30:{stateAbbr:"MT",name:"Montana"},31:{stateAbbr:"NE",name:"Nebraska"},32:{stateAbbr:"NV",name:"Nevada"},33:{stateAbbr:"NH",name:"New Hampshire"},34:{stateAbbr:"NJ",name:"New Jersey"},35:{stateAbbr:"NM",name:"New Mexico"},36:{stateAbbr:"NY",name:"New York"},37:{stateAbbr:"NC",name:"North Carolina"},38:{stateAbbr:"ND",name:"North Dakota"},39:{stateAbbr:"OH",name:"Ohio"},40:{stateAbbr:"OK",name:"Oklahoma"},41:{stateAbbr:"OR",name:"Oregon"},42:{stateAbbr:"PA",name:"Pennsylvania"},44:{stateAbbr:"RI",name:"Rhode Island"},45:{stateAbbr:"SC",name:"South Carolina"},46:{stateAbbr:"SD",name:"South Dakota"},47:{stateAbbr:"TN",name:"Tennessee"},48:{stateAbbr:"TX",name:"Texas"},49:{stateAbbr:"UT",name:"Utah"},50:{stateAbbr:"VT",name:"Vermont"},51:{stateAbbr:"VA",name:"Virginia"},53:{stateAbbr:"WA",name:"Washington"},54:{stateAbbr:"WV",name:"West Virginia"},55:{stateAbbr:"WI",name:"Wisconsin"},56:{stateAbbr:"WY",name:"Wyoming"},60:{stateAbbr:"AS",name:"American Samoa"},66:{stateAbbr:"GU",name:"Guam"},69:{stateAbbr:"MP",name:"Northern Mariana Islands"},72:{stateAbbr:"PR",name:"Puerto Rico"},74:{stateAbbr:"UM",name:"U.S. Minor Outlying Islands"},78:{stateAbbr:"VI",name:"U.S. Virgin Islands"},"01":{stateAbbr:"AL",name:"Alabama"},"02":{stateAbbr:"AK",name:"Alaska"},"04":{stateAbbr:"AZ",name:"Arizona"},"05":{stateAbbr:"AR",name:"Arkansas"},"06":{stateAbbr:"CA",name:"California"},"08":{stateAbbr:"CO",name:"Colorado"},"09":{stateAbbr:"CT",name:"Connecticut"}},m=a.geoLocation.data,v={top:5,left:5,bottom:5,right:5},h=1.1;s=t[0].parentNode.clientWidth,s=s-v.left-v.right,c=Math.round(s*h),c>320&&(c=310),d=d3.geo.albersUsa().scale(s/1.2).translate([s/2,c/2]),l=d3.geo.path().projection(d);var g=d3.select(t[0]).append("div").attr("class",""),p=g.append("svg").attr({width:s,height:c}),b=p.selectAll("path.state").data(topojson.feature(m,m.objects.states).features).enter().append("path").attr("class","state").attr("id",function(a){var t=a.id+"";a.id<10&&(t="0"+t);var e=u[t].name.toLowerCase().replace(/\s/g,"-");return e}).attr("d",l);b.on("mouseover",o).on("mouseout",i),p.append("path").datum(topojson.mesh(m,m.objects.states)).attr("class","land").attr("d",l),r();setInterval(function(){r()},3e3);d3.select(window).on("resize",n);var A}};return a}angular.module("vizbox").directive("geoChart",a)}(),function(){"use strict";function a(){var a={restrict:"E",replace:!1,scope:{rows:"=rows",chartId:"=chartId"},link:function(a,t,e){var r='<div id="'+a.chartId+'"></div>';t.html(r);var n=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["#5cd3ff","#47ceff","#33c9ff","#1fc3ff","#00bbff","#00b4f5","#00a5e0","#0096cc","#0087b8","#0078a3","#00698f","#005a7a"],i=c3.generate({bindto:"#"+a.chartId,data:{type:"bar",columns:a.rows,colors:{d1:function(a){return o[a.index]}}},bar:{width:{ratio:.8}},axis:{y:{max:60,min:0,padding:{top:0,bottom:0},tick:{format:function(a){return a+"k"}}},x:{type:"category",tick:{format:function(a){return console.log("d",a),n[a].slice(0,8!==a?3:4)}}}},legend:{show:!1},padding:{top:10,right:20},grid:{y:{show:!0}},tooltip:{format:{title:function(a){return n[a]},value:function(a){return"$ "+d3.format(",")((1e3*a).toFixed(2))}}}});a.$watch("rows",function(){i.load({columns:a.rows})})}};return a}angular.module("vizbox").directive("barChart",a)}(),function(){"use strict";function a(a,t,e,r){function n(){return{length:0,data:{d1:{array:[],average:0,variance:0},d2:{array:[],average:0,variance:0},d3:{array:[],average:0,variance:0},d4:{array:[],average:0,variance:0}},setAverageAndVariance:function(a,t,e){this.data[a].average=t,this.data[a].variance=e},setLength:function(a){this.length=a},getData:function(){var a=this;return Object.keys(a.data).map(function(t){var e=[];e.push(t);for(var r=a.length,n=a.data[t].average,o=a.data[t].variance,i=0;r>i;i++)e.push(a.getNumber(n,o));return e})},getNumber:function(a,t){return a+(.5-Math.random()*t)}}}function o(){return{length:0,data:{xData:{array:["x"],average:0,variance:0},d1Data:{array:["d1"],average:0,variance:0},d2Data:{array:["d2"],average:0,variance:0}},setAverageAndVariance:function(a,t,e){this.data[a].average=t,this.data[a].variance=e},setLength:function(a){this.length=a},getInitialArray:function(a){var t=this;return Object.keys(t.data).map(function(a){for(var e=t.data[a].array,r=t.length,n=t.data[a].average,o=t.data[a].variance,i=0;r>i;i++)"xData"===a?e.push(i):e.push(t.getNumber(n,o));return e})},getUpdatedArray:function(){var a=this;return Object.keys(this.data).map(function(t){var e=a.data[t].array,r=(a.length,a.data[t].average),n=a.data[t].variance;return e.splice(1,1),"xData"===t?e.push(+e[e.length-1]+1):e.push(a.getNumber(r,n)),e})},getNumber:function(a,t){return a+(.5-Math.random()*t)}}}a.geoChartId="geo",a.geoLocation=r,a.pieChartId="pieChart";var i=new n;i.setLength(12),i.setAverageAndVariance("d1",50,30),i.setAverageAndVariance("d2",25,20),i.setAverageAndVariance("d3",80,20),i.setAverageAndVariance("d4",25,5),a.pieRows=i.getData(),a.pieInterval=e(function(){a.pieRows=i.getData()},2e3),a.barChartId="barChart",a.barRows=a.pieRows.slice(0,1),console.log("$scope.pieData",a.barRows),a.lineChartId="lineChart";var s=new o;s.setLength(12),s.setAverageAndVariance("d1Data",55,15),s.setAverageAndVariance("d2Data",30,20),a.lineRows=s.getInitialArray(),a.lineInterval=e(function(){a.lineRows=s.getUpdatedArray()},5e3)}angular.module("vizbox").controller("MainController",a),a.$inject=["$scope","$http","$interval","geoLocation"]}(),function(){"use strict";function a(a){a.debug("runBlock end"),a.debug("check c3",c3),a.debug("check topojson",topojson)}angular.module("vizbox").run(a),a.$inject=["$log"]}(),function(){"use strict";function a(a){a.when("/",{templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",resolve:{geoLocation:["$http",function(a){return a.get("app/data/us.json").success(function(a){return a.data})}]}}).otherwise({redirectTo:"/"})}angular.module("vizbox").config(a),a.$inject=["$routeProvider"]}(),function(){"use strict";angular.module("vizbox").constant("moment",moment).constant("d3",d3).constant("c3",c3).constant("topojson",topojson)}(),function(){"use strict";function a(a,t){a.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}angular.module("vizbox").config(a),a.$inject=["$logProvider","toastrConfig"]}(),angular.module("vizbox").run(["$templateCache",function(a){a.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="col-sm-6 col-md-6"><div class="thumbnail"><line-chart rows="lineRows" chart-id="lineChartId"></line-chart></div></div><div class="col-sm-6 col-md-6"><div class="thumbnail"><bar-chart rows="barRows" chart-id="barChartId"></bar-chart></div></div><div class="col-sm-6 col-md-8"><div class="thumbnail"><geo-chart chart-id="geoChartId" geo-location="geoLocation"></geo-chart></div></div><div class="col-sm-6 col-md-4"><div class="thumbnail"><pie-chart rows="pieRows" chart-id="pieChartId"></pie-chart></div></div></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class="container-fluid"><div class="navbar-header"><a class="navbar-brand" href=""><span class="glyphicon glyphicon-flash"></span></a></div><div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6"><ul class="nav navbar-nav"></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-b5ecf35b0f.js.map