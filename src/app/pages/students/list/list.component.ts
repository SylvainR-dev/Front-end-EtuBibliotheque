import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../core/service/student.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './list.component.html',
  standalone: true,
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {

  students: any[] = [];

  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.studentService.getAll().subscribe(data => {
      this.students = data as any[];
    });
  }

  delete(id: number) {
    this.studentService.delete(id).subscribe(() => {
      this.students = this.students.filter(student => student.id !== id);
    });
  }
}