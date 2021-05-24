import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router } from '@angular/router';
import { VariableManagementService } from '../Services/variable-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  title: String;
  constructor(private router: Router, private activeRoute : ActivatedRoute) { }

  ngOnInit() { //initial name
    let tempRoute = this.router.url.substr(11);
    if(tempRoute.indexOf('?') !== -1){ //if has query params, cut them out
      tempRoute = tempRoute.substr(0,tempRoute.indexOf('?'));
    }
    this.title = tempRoute[0].toUpperCase() + tempRoute.substr(1);
  }

  navigateToTab(tabName : string){
    this.router.navigate(['/dashboard/'+tabName], { queryParamsHandling: "preserve" });
    this.title = tabName[0].toUpperCase() + tabName.substr(1); // capitalize this
  }
}

   

  

