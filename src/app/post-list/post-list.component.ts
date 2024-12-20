import { Component,OnInit } from '@angular/core';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts: any[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.postService.postList().subscribe((data) => {
      this.posts = data;
    });
  }

  viewPost(id: number) {
    window.location.href = `/post/${id}`;
  }
}

