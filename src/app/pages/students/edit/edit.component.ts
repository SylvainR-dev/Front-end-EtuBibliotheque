import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../shared/material.module';
import { StudentService } from '../../../core/service/student.service';
import { Student } from '../../../core/models/Student';
import { ActivatedRoute, Router } from '@angular/router';
import { inject } from '@angular/core';

@Component({
  selector: 'app-edit',
  imports: [CommonModule, MaterialModule],
  templateUrl: './edit.component.html',
  standalone: true,
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit {

  private studentService = inject(StudentService);
  private formBuilder = inject(FormBuilder);
  private router = inject(Router);
  private route = inject(ActivatedRoute);
  editForm: FormGroup = new FormGroup({});
  submitted: boolean = false;

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required]
    });

    const id = this.route.snapshot.params['id'];
    this.studentService.getById(id).subscribe(data => {
      const student = data as Student;
      this.editForm.patchValue({
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email
      });
    });
  }

  get form() {
    return this.editForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.editForm.invalid) {
      return;
    }
    const id = this.route.snapshot.params['id'];
    const student: Student = {
      firstName: this.editForm.get('firstName')?.value,
      lastName: this.editForm.get('lastName')?.value,
      email: this.editForm.get('email')?.value
    };
    this.studentService.update(id, student).subscribe(() => {
      this.router.navigate(['/list']);
    });
  }

  onReset(): void {
    this.submitted = false;
    this.editForm.reset();
  }
}