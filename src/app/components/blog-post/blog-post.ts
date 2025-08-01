import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BlogPost as BlogPostModel } from '../../models/blog-post';

@Component({
  selector: 'app-blog-post',
  imports: [DatePipe],
  templateUrl: './blog-post.html',
  styleUrl: './blog-post.scss'
})
export class BlogPost {
  @Input() post!: BlogPostModel;
  @Input() featured: boolean = false;
}
