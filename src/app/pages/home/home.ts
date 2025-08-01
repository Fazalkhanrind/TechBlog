import { Component, OnInit } from '@angular/core';
import { DatePipe, DecimalPipe } from '@angular/common';
import { BlogPost as BlogPostModel } from '../../models/blog-post';
import { Blog } from '../../services/blog';
import { BlogPost } from '../../components/blog-post/blog-post';

interface Category {
  name: string;
  description: string;
  icon: string;
  gradient: string;
  count: number;
}

interface TrendingTopic {
  name: string;
  rank: number;
  mentions: number;
}

interface PopularTag {
  name: string;
  count: number;
}

interface RecentComment {
  id: number;
  author: string;
  text: string;
  post: string;
}

interface TechNews {
  id: number;
  title: string;
  summary: string;
  imageUrl: string;
  publishDate: Date;
  source: string;
  category: string;
  url: string;
  readTime: number;
}

interface FeaturedAuthor {
  id: number;
  name: string;
  title: string;
  bio: string;
  avatar: string;
  articlesCount: number;
  skills: string[];
  twitter?: string;
  linkedin?: string;
  github?: string;
}

interface LearningPath {
  id: number;
  title: string;
  description: string;
  icon: string;
  level: string;
  articlesCount: number;
  duration: string;
  difficulty: string;
  skills: string[];
  gradient: string;
}

interface CommunityStats {
  totalMembers: number;
  monthlyGrowth: number;
  totalArticles: number;
  weeklyArticles: number;
  totalComments: number;
  dailyComments: number;
  countries: number;
}

@Component({
  selector: 'app-home',
  imports: [DatePipe, DecimalPipe, BlogPost],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  featuredPosts: BlogPostModel[] = [];
  latestPosts: BlogPostModel[] = [];
  
  categories: Category[] = [
    {
      name: 'Artificial Intelligence',
      description: 'Latest AI trends and technologies',
      icon: '🤖',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      count: 45
    },
    {
      name: 'Web Development',
      description: 'Frontend and backend tutorials',
      icon: '💻',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      count: 78
    },
    {
      name: 'Mobile Development',
      description: 'iOS and Android app development',
      icon: '📱',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      count: 32
    },
    {
      name: 'Cloud Computing',
      description: 'AWS, Azure, and cloud solutions',
      icon: '☁️',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      count: 56
    },
    {
      name: 'Cybersecurity',
      description: 'Security best practices and tips',
      icon: '🔒',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      count: 23
    },
    {
      name: 'DevOps',
      description: 'CI/CD and deployment strategies',
      icon: '⚙️',
      gradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      count: 34
    }
  ];

  trendingTopics: TrendingTopic[] = [
    { name: 'ChatGPT Integration', rank: 1, mentions: 1250 },
    { name: 'React 19 Features', rank: 2, mentions: 890 },
    { name: 'Kubernetes Security', rank: 3, mentions: 745 },
    { name: 'TypeScript 5.0', rank: 4, mentions: 620 },
    { name: 'Next.js App Router', rank: 5, mentions: 580 }
  ];

  popularTags: PopularTag[] = [
    { name: 'JavaScript', count: 150 },
    { name: 'React', count: 120 },
    { name: 'Node.js', count: 95 },
    { name: 'Python', count: 85 },
    { name: 'AWS', count: 75 },
    { name: 'Docker', count: 65 },
    { name: 'TypeScript', count: 60 },
    { name: 'Angular', count: 55 },
    { name: 'Vue.js', count: 45 },
    { name: 'MongoDB', count: 40 }
  ];

  recentComments: RecentComment[] = [
    {
      id: 1,
      author: 'John Doe',
      text: 'Great article! This really helped me understand AI concepts better.',
      post: 'AI Trends 2025'
    },
    {
      id: 2,
      author: 'Sarah Smith',
      text: 'Thanks for the detailed web development roadmap. Very useful!',
      post: 'Web Dev Roadmap'
    },
    {
      id: 3,
      author: 'Mike Johnson',
      text: 'The security tips are spot on. Implementing them right away.',
      post: 'Cybersecurity Tips'
    }
  ];

  techNews: TechNews[] = [
    {
      id: 1,
      title: 'GitHub Copilot Chat Now Available in VS Code',
      summary: 'The new AI-powered chat feature brings conversational coding to your favorite editor.',
      imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=250&fit=crop&auto=format',
      publishDate: new Date('2025-01-15T10:30:00'),
      source: 'GitHub Blog',
      category: 'Development Tools',
      url: 'https://github.blog',
      readTime: 5
    },
    {
      id: 2,
      title: 'Microsoft Announces .NET 9 Performance Improvements',
      summary: 'New optimizations deliver up to 20% better performance in web applications.',
      imageUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=400&h=250&fit=crop&auto=format',
      publishDate: new Date('2025-01-14T14:15:00'),
      source: 'Microsoft DevBlog',
      category: 'Framework',
      url: 'https://devblogs.microsoft.com',
      readTime: 7
    },
    {
      id: 3,
      title: 'OpenAI Releases GPT-5 with Enhanced Reasoning',
      summary: 'The latest model shows significant improvements in complex problem-solving tasks.',
      imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&auto=format',
      publishDate: new Date('2025-01-13T09:00:00'),
      source: 'OpenAI',
      category: 'AI',
      url: 'https://openai.com',
      readTime: 8
    },
    {
      id: 4,
      title: 'Google Cloud Introduces New Serverless Database',
      summary: 'Spanner Serverless offers automatic scaling with zero-config deployment.',
      imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop&auto=format',
      publishDate: new Date('2025-01-12T16:45:00'),
      source: 'Google Cloud',
      category: 'Cloud',
      url: 'https://cloud.google.com',
      readTime: 6
    }
  ];

  featuredAuthors: FeaturedAuthor[] = [
    {
      id: 1,
      name: 'Sarah Chen',
      title: 'Senior Full Stack Developer',
      bio: 'Passionate about creating scalable web applications with modern technologies.',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      articlesCount: 45,
      skills: ['React', 'Node.js', 'TypeScript', 'AWS', 'MongoDB'],
      twitter: 'https://twitter.com/sarahchen',
      linkedin: 'https://linkedin.com/in/sarahchen',
      github: 'https://github.com/sarahchen'
    },
    {
      id: 2,
      name: 'David Rodriguez',
      title: 'AI/ML Engineer',
      bio: 'Specializing in machine learning models and AI-driven solutions for enterprise.',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      articlesCount: 38,
      skills: ['Python', 'TensorFlow', 'PyTorch', 'Docker', 'Kubernetes'],
      twitter: 'https://twitter.com/davidml',
      linkedin: 'https://linkedin.com/in/davidrodriguez',
      github: 'https://github.com/davidml'
    },
    {
      id: 3,
      name: 'Emily Watson',
      title: 'DevOps Architect',
      bio: 'Building robust CI/CD pipelines and cloud infrastructure for growing teams.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      articlesCount: 52,
      skills: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'Monitoring'],
      linkedin: 'https://linkedin.com/in/emilywatson',
      github: 'https://github.com/emilywatson'
    }
  ];

  learningPaths: LearningPath[] = [
    {
      id: 1,
      title: 'Frontend Development Mastery',
      description: 'Complete journey from HTML/CSS to advanced React and TypeScript',
      icon: '🎨',
      level: 'Beginner to Advanced',
      articlesCount: 24,
      duration: '8 weeks',
      difficulty: 'Progressive',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'TypeScript', 'Redux'],
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      id: 2,
      title: 'Backend Development with Node.js',
      description: 'Build scalable server-side applications with modern Node.js stack',
      icon: '⚙️',
      level: 'Intermediate',
      articlesCount: 18,
      duration: '6 weeks',
      difficulty: 'Intermediate',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'JWT', 'Testing'],
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      id: 3,
      title: 'Cloud Architecture on AWS',
      description: 'Design and deploy cloud solutions using AWS services',
      icon: '☁️',
      level: 'Advanced',
      articlesCount: 15,
      duration: '10 weeks',
      difficulty: 'Advanced',
      skills: ['AWS', 'Lambda', 'DynamoDB', 'CloudFormation', 'API Gateway'],
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      id: 4,
      title: 'Machine Learning Fundamentals',
      description: 'Start your AI journey with practical ML concepts and implementations',
      icon: '🤖',
      level: 'Beginner',
      articlesCount: 20,
      duration: '12 weeks',
      difficulty: 'Beginner',
      skills: ['Python', 'Pandas', 'Scikit-learn', 'TensorFlow', 'Data Analysis'],
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ];

  communityStats: CommunityStats = {
    totalMembers: 15420,
    monthlyGrowth: 12,
    totalArticles: 1285,
    weeklyArticles: 18,
    totalComments: 8750,
    dailyComments: 45,
    countries: 87
  };

  constructor(private blogService: Blog) {}

  ngOnInit(): void {
    this.loadFeaturedPosts();
    this.loadLatestPosts();
  }

  private loadFeaturedPosts(): void {
    this.blogService.getFeaturedPosts().subscribe(posts => {
      this.featuredPosts = posts.map(post => ({
        ...post,
        likes: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 50) + 1
      }));
    });
  }

  private loadLatestPosts(): void {
    this.blogService.getAllPosts().subscribe(posts => {
      this.latestPosts = posts.filter(post => !post.featured).slice(0, 6).map(post => ({
        ...post,
        likes: Math.floor(Math.random() * 100) + 10,
        comments: Math.floor(Math.random() * 50) + 1
      }));
    });
  }

  getAuthorInitials(author: string): string {
    return author
      .split(' ')
      .map(name => name.charAt(0))
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  getTagSize(count: number): number {
    const minSize = 12;
    const maxSize = 20;
    const maxCount = Math.max(...this.popularTags.map(tag => tag.count));
    return minSize + ((count / maxCount) * (maxSize - minSize));
  }

  onImageError(event: any): void {
    // Fallback to a default avatar if image fails to load
    event.target.src = 'https://via.placeholder.com/150x150/667eea/ffffff?text=SC';
  }
}
