import { Component,OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent {
  postForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(25)]],
    author: ['', Validators.required],
    content: ['', Validators.required],
    date: ['', [Validators.required, Validators.pattern(/^\d{4}-\d{2}-\d{2}$/)]],
  });

  constructor(private fb: FormBuilder, private postService: PostService) {}

  onSubmit() {
    if (this.postForm.valid) {
      this.postService.addPost(this.postForm.value).subscribe(() => {
        alert('Post added successfully!');
        window.location.href = '/';
      });
    }
  }
}

