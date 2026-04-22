import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../../../core/service/student.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail',
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  standalone: true,
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {

  student: any = {};

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.studentService.getById(id).subscribe(data => {
      this.student = data;
    });
  }
}