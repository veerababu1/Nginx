import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {Job} from '../job-list/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit {

  constructor( public router: Router) {
    this.jobDetails = new Job();
  }
  ngOnInit() {
  }
  @Input()
  jobDetails: Job;

}
