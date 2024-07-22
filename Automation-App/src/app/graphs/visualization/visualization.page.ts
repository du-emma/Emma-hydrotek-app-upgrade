import { Component, OnInit, ViewChild } from '@angular/core';
import {Chart} from 'chart.js';
import {ChartDataset} from 'chart.js';

import { VariableManagementService } from 'src/app/Services/variable-management.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Label } from 'ng2-charts';
import { BaseChartDirective } from 'ng2-charts';
import * as moment from 'moment';
import { ModalController } from '@ionic/angular';
import { AddFertigationSystemPage } from 'src/app/add-fertigation-system/add-fertigation-system.page';
import { AddClimateControllerPage } from 'src/app/add-climate-controller/add-climate-controller.page';
import { skipWhile, filter } from 'rxjs/operators';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.page.html',
  styleUrls: ['./visualization.page.scss'],
})
export class VisualizationPage implements OnInit {

  today: string;
  startDate:string=new Date().toString();
  endDate:string=new Date().toString();
  deviceName: string;
  clusterName: string;
  start_date:string;
  end_date:string;
  
  compareWith : any ;
  DefaultValue:string;

  deviceAlertOptions: any = {
    header: "Device Name"
  }

  clusterAlertOptions: any = {
    header: "Cluster Name"
  } 

  options:any[]=[
    {
      id:0,
      name:'Please Select'
    },
    {
      id:1,
      name:'Last Week'
    },
    {
      id:2,
      name:'Last Month'
    }
  ];

compareWithFn(o1, o2) {
  return o1 === o2;
};

dateChanged(date){
  //console.log(date.detail.value);
  //console.log('inside date changed: '+this.startDate);
  
  //this.start_date = this.startDate;
  this.start_date=moment(this.startDate).format("YYYY-MM-DDTHH:mm:ss");
  this.end_date=moment(this.endDate).format("YYYY-MM-DDTHH:mm:ss");
  //console.log(this.end_date);
  this.onApply(this.start_date,this.end_date);   
}

onSelectedChange(event:any){
  console.log(event.target.value);

  if(event.target.value=="1")
  {
    //console.log("inside")
    this.start_date=moment(this.today).subtract(7,"days").format("YYYY-MM-DDTHH:mm:ss");
    this.today = moment(this.today).format("YYYY-MM-DDTHH:mm:ss");
    this.onApply(this.start_date,this.today);
  }
  else if(event.target.value=="2")
  {
    this.start_date=moment(this.today).subtract(1,"month").format("YYYY-MM-DDTHH:mm:ss");
    this.today = moment(this.today).format("YYYY-MM-DDTHH:mm:ss");
    //console.log(this.start_date);
    this.onApply(this.start_date,this.today);
  }
}

//New piece of code
chartData:ChartDataset[]=[
  {data:[],label:'ph',borderColor: "#3e95cd",fill: false,tension:0,yAxisID:'ph-ec'},
  {data:[],label:'ec',borderColor: "#8e5ea2",fill: false,tension:0,yAxisID:'ph-ec'},
  {data:[],label:'temp',borderColor: "#FF4233",fill: false,tension:0,yAxisID:'temp'}];

chartLabels: Label[];
chartType = 'line';

chartOptions= {
  responsive: true,
  title: {
    display: true,
    text: 'Sensors Data Visualization'
  },
  scales:{
          yAxes:[
            {
              id:'ph-ec',
              type:'linear',
              position:'left',
              scaleLabel: {
                display: true,
                labelString: 'ph-ec scale'
              },
              //ticks:{beginAtZero:true}
          },
          {
            id:'temp',
            type:'linear',
            position:'right',
            scaleLabel: {
              display: true,
              labelString: 'Temperature'
            },
            //ticks:{beginAtZero:true}

            ticks: {
              // Include a dollar sign in the ticks
              callback: function(value, index, values) {
                  return  value + '°C';
              },
              
          }
          }]
        }, 
};



// end





















  constructor(public variableManagentService: VariableManagementService, private modalController: ModalController) {
    console.log('inside constructor'); 

    
    // this.radio_option="A";
    this.today = new Date().toString();
    
    // Fetch Display Data from Database
    //this.variableManagentService.fetchBotData();


    // this.variableManagentService.on_update.subscribe(resData=>{
    //   console.log('test');
    //   this.showChart();
    // })  
    
  }

  
  ngOnInit() {
    console.log('inside ngOnInit');
    // Subscribe to changes in System ID
    this.variableManagentService.selectedDevice.pipe(filter(str => str != null)).subscribe(resData => {
      console.log("monitoring page selected device");
      this.deviceName = resData;
    });
    
    // Update GrowRoom ID selection
    this.variableManagentService.selectedCluster.pipe(filter(str => str != null)).subscribe(resData => {
      console.log("monitoring page selected cluster");
      this.clusterName = resData;
    });
    
    this.DefaultValue = "0" ;
    this.compareWith = this.compareWithFn;
   // this.variableManagentService.fetchClusters(false);
    this.getData();
  }

  getData()
  {
    // console.log(this.growRoomID);
    this.startDate=moment().format("YYYY-MM-DDTHH:mm:ss");
    this.endDate=moment().format("YYYY-MM-DDTHH:mm:ss");  
    
    this.start_date = this.startDate+'.000Z';
    this.end_date=  this.end_date+'.000Z';

    this.chartData[0].data=[];
    this.chartData[1].data=[];
    this.chartData[2].data=[];
    this.chartLabels =[];

  //  this.variableManagentService.getAllSensorsData(this.growRoomID,this.systemID,this.start_date,this.end_date);
    this.chartLabels = this.variableManagentService.sensorsTimeData;
    this.chartData[0].data=this.variableManagentService.phValueData;
    this.chartData[1].data=this.variableManagentService.ecValueData;
    this.chartData[2].data=[20,21,23,24,20,26,21,22,21,24,29,27,28,26,28,23,21,20,21,22];
  }

  // Change Device
  changeDevice(deviceName : string){
    console.log("change device");
    if(this.variableManagentService.selectedDevice.value != deviceName){
    //  this.variableManagentService.updateCurrentCluster(this.clusterName, deviceName);
    }
  }

  // Change Cluster
  changeCluster(clusterName: string){
    console.log("change cluster");
  //  this.variableManagentService.updateCurrentCluster(clusterName, null);
  }

    onApply(newstartDate:string,newendDate:string){

      newstartDate = newstartDate+'.000Z';
      newendDate = newendDate+'.000Z';
      console.log(newstartDate);

      this.chartData[0].data=[];
      this.chartData[1].data=[];
      this.chartData[2].data=[];
      this.chartLabels =[];
      
//      this.variableManagentService.getAllSensorsData(this.growRoomID,this.systemID,newstartDate,newendDate);
      // console.log(this.variableManagentService.phValueData);
      this.chartLabels = this.variableManagentService.sensorsTimeData;
      this.chartData[0].data=this.variableManagentService.phValueData;
      this.chartData[1].data=this.variableManagentService.ecValueData;
      this.chartData[2].data=[20,21,23,24,20,26,21,22,21,24,29,27,28,26,28,23,21,20,21,22];
    }


    
    
    

//     showChart(){
    
// //     var ctx = (<any>document.getElementById('lineChart')).getContext('2d');
// //     var chart = new Chart(ctx, {
// //       type: 'line',
// //     data: {
// //       labels:this.variableManagentService.sensorsTimeData,
// //     //labels:sensor_data[1],
// //     //labels:[1500,1600,1700,1750,1800,1850,1900,1950,1999,2050],
    
// //     datasets: [
// //       { 
// //         data:this.variableManagentService.phValueData,     //sensor_data[1],
// //         label: "ph",
// //         borderColor: "#3e95cd",
// //         fill: false,
// //         lineTension:0,
// //         yAxisID:'ph-ec'
// //       },
// //       { 
// //         data:this.variableManagentService.ecValueData,
// //         label: "ec",
// //         borderColor: "#8e5ea2",
// //         fill: false,
// //         lineTension:0,
// //         yAxisID:'ph-ec'
// //       },
// //       {
// //         data: [20,21,23,24,20,26,21,22,21,24,29,27,28,26,28,23,21,20,21,22],
// //         label: "temprature",
// //         borderColor: "#FF4233",
// //         fill: false,
// //         lineTension:0,
// //         yAxisID:'temp'
// //       }, 
// //     ]
// //   },

// //   options: {
// //     responsive: true,
// //     title: {
// //       display: true,
// //       text: 'Sensors Data Visualization'
// //     },
// //     scales:{
// //       yAxes:[
// //         {
// //           id:'ph-ec',
// //           type:'linear',
// //           position:'left',
// //           scaleLabel: {
// //             display: true,
// //             labelString: 'ph-ec scale'
// //           }
// //       },
// //       {
// //         id:'temp',
// //         type:'linear',
// //         position:'right',
// //         scaleLabel: {
// //           display: true,
// //           labelString: 'Temperature'
// //         },
// //         ticks: {
// //           // Include a dollar sign in the ticks
// //           callback: function(value, index, values) {
// //               return  value + '°C';
// //           },
          
// //       }
// //       }]
// //     }
// //   }
// // });
// }

async presentGrowRoomModal() {
  const modal = await this.modalController.create({
    component: AddClimateControllerPage,
  });
  return await modal.present();
}

async presentSystemModal() {
  const modal = await this.modalController.create({
    component: AddFertigationSystemPage,
  });
  return await modal.present();
}

}




