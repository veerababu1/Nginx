import { Component, OnInit } from '@angular/core';
import {Job} from './job';
import {JobService} from '../services/job.service';

  @Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
            Jobs: Job;
            SelectedJob: Job;
            ErrorHandler: any;
            displayDetails(items) {
              this.SelectedJob = items;
            }
            constructor( private jobsvc: JobService ) {
                      this.jobsvc.getJobs()
                        .subscribe(result => {
                        this.Jobs = result;
                      },
                      error => {
                          this.ErrorHandler = true;
                       // console.log(error);
                      })

    // this.Jobs = jobsvc.getJobs();
    /*this.Jobs=new Array<Job>();
    let job1=new Job();
    job1.Title="Trainee"
    job1.Description="Angular 2 Developer";
    job1.Experience="2 years";
    job1.Location="Hyderabad";
    job1.Category="Developer";
    job1.Company="NBits Tech";
    job1.Salary="6.5L per anum";
    this.Jobs.push(job1);

    let job2=new Job();
    job2.Title="Engineer";
    job2.Description=" Java Developer";
    job2.Experience="3 years";
    job2.Location="Bangalore";
    job2.Category="Developer";
    job2.Company="InfoBrin Tech";
    job2.Salary="8.5L per anum";
    this.Jobs.push(job2);
    */
  }
    ngOnInit() {  }
}
