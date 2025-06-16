import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    excerpt: 'Learn how to set up a modern React application with TypeScript, including best practices and common patterns.',
    content: `
# Getting Started with React and TypeScript

React and TypeScript make a powerful combination for building modern web applications. In this comprehensive guide, we'll explore how to set up and work with both technologies effectively.

## Why TypeScript with React?

TypeScript brings static typing to JavaScript, which provides several benefits:

- **Better Developer Experience**: Enhanced IDE support with autocomplete and error detection
- **Fewer Runtime Errors**: Catch errors at compile time rather than runtime
- **Better Refactoring**: Safe refactoring with confidence
- **Self-Documenting Code**: Types serve as documentation

## Setting Up Your Project

The easiest way to get started is using Vite:

\`\`\`bash
npm create vite@latest my-react-app -- --template react-ts
cd my-react-app
npm install
npm run dev
\`\`\`

## Basic Component Patterns

Here's how to create a typed React component:

\`\`\`tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={\`btn btn-\${variant}\`}
    >
      {children}
    </button>
  );
}
\`\`\`

## Working with State

TypeScript makes state management more predictable:

\`\`\`tsx
interface User {
  id: number;
  name: string;
  email: string;
}

function UserProfile() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Component logic here
}
\`\`\`

## Best Practices

1. **Use Interfaces for Props**: Always define interfaces for component props
2. **Leverage Union Types**: Use union types for variants and states
3. **Generic Components**: Create reusable components with generics
4. **Strict Mode**: Enable strict mode in TypeScript configuration

## Conclusion

React and TypeScript together provide a robust foundation for building scalable applications. The initial setup might seem complex, but the long-term benefits in maintainability and developer experience are worth it.

Start small, gradually adopt TypeScript patterns, and you'll soon appreciate the enhanced development experience it provides.
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Frontend Developer and React enthusiast with 5+ years of experience building modern web applications.'
    },
    publishedAt: '2024-01-15T10:00:00Z',
    tags: ['React', 'TypeScript', 'Frontend', 'JavaScript'],
    category: 'Development',
    readingTime: 8,
    featured: true,
    coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  },
  {
    id: '2',
    title: 'Modern CSS Techniques for Better Web Design',
    slug: 'modern-css-techniques-web-design',
    excerpt: 'Explore the latest CSS features and techniques that will elevate your web design skills and create stunning user interfaces.',
    content: `
# Modern CSS Techniques for Better Web Design

CSS has evolved tremendously over the past few years. Modern CSS provides powerful tools that make creating beautiful, responsive designs easier than ever before.

## CSS Grid: The Game Changer

CSS Grid revolutionized how we approach layout design:

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}
\`\`\`

## Flexbox for Component Layout

Flexbox remains essential for component-level layouts:

\`\`\`css
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
\`\`\`

## CSS Custom Properties (Variables)

Custom properties make theming and maintenance much easier:

\`\`\`css
:root {
  --primary-color: #3b82f6;
  --secondary-color: #64748b;
  --border-radius: 0.5rem;
}

.button {
  background-color: var(--primary-color);
  border-radius: var(--border-radius);
}
\`\`\`

## Container Queries

The future of responsive design:

\`\`\`css
@container (min-width: 400px) {
  .card {
    display: flex;
    flex-direction: row;
  }
}
\`\`\`

## Advanced Selectors

Modern CSS selectors provide more precise targeting:

\`\`\`css
/* Select every 3rd item starting from the 2nd */
.item:nth-child(3n+2) {
  background-color: var(--highlight-color);
}

/* Select items that don't have a specific class */
.item:not(.featured) {
  opacity: 0.7;
}
\`\`\`

## Conclusion

These modern CSS techniques enable us to create more maintainable, flexible, and beautiful web designs. Start incorporating them into your projects to see immediate improvements in your development workflow.
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'UI/UX Designer and CSS specialist focused on creating beautiful, accessible web experiences.'
    },
    publishedAt: '2024-01-12T14:30:00Z',
    tags: ['CSS', 'Web Design', 'Frontend', 'Responsive Design'],
    category: 'Design',
    readingTime: 6,
    featured: true,
    coverImage: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  },
  {
    id: '3',
    title: 'Building Scalable Node.js Applications',
    slug: 'building-scalable-nodejs-applications',
    excerpt: 'Learn the best practices and architectural patterns for building Node.js applications that can scale with your business needs.',
    content: `
# Building Scalable Node.js Applications

As your application grows, scalability becomes crucial. This guide covers essential patterns and practices for building Node.js applications that can handle increased load and complexity.

## Application Architecture

### Layered Architecture

Organize your code into distinct layers:

\`\`\`
src/
├── controllers/     # Handle HTTP requests
├── services/        # Business logic
├── repositories/    # Data access
├── models/          # Data models
└── middleware/      # Express middleware
\`\`\`

### Dependency Injection

Use dependency injection for better testability:

\`\`\`javascript
class UserService {
  constructor(userRepository, emailService) {
    this.userRepository = userRepository;
    this.emailService = emailService;
  }

  async createUser(userData) {
    const user = await this.userRepository.create(userData);
    await this.emailService.sendWelcomeEmail(user.email);
    return user;
  }
}
\`\`\`

## Database Optimization

### Connection Pooling

Always use connection pooling for database connections:

\`\`\`javascript
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
});
\`\`\`

### Query Optimization

- Use indexes effectively
- Implement pagination for large datasets
- Consider read replicas for read-heavy applications

## Caching Strategies

### Redis for Session Storage

\`\`\`javascript
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));
\`\`\`

## Error Handling

Implement comprehensive error handling:

\`\`\`javascript
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

const globalErrorHandler = (err, req, res, next) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: 'error',
      message: err.message
    });
  } else {
    console.error('Unexpected error:', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};
\`\`\`

## Monitoring and Logging

### Structured Logging

Use structured logging for better observability:

\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'app.log' }),
    new winston.transports.Console()
  ]
});
\`\`\`

## Conclusion

Building scalable Node.js applications requires careful planning and adherence to best practices. Focus on clean architecture, proper error handling, and monitoring to ensure your application can grow with your needs.
    `,
    author: {
      name: 'David Rodriguez',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Backend Engineer with expertise in Node.js, microservices, and cloud architecture.'
    },
    publishedAt: '2024-01-10T09:15:00Z',
    tags: ['Node.js', 'Backend', 'Scalability', 'Architecture'],
    category: 'Development',
    readingTime: 10,
    featured: false,
    coverImage: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  },
  {
    id: '4',
    title: 'The Future of Web Development: Trends to Watch',
    slug: 'future-web-development-trends',
    excerpt: 'Discover the emerging trends and technologies that are shaping the future of web development in 2024 and beyond.',
    content: `
# The Future of Web Development: Trends to Watch

The web development landscape is constantly evolving. Here are the key trends that are shaping the future of how we build for the web.

## WebAssembly (WASM)

WebAssembly is bringing near-native performance to web applications:

- **Performance**: Execute code at near-native speed
- **Language Flexibility**: Write web apps in Rust, C++, Go, and more
- **Use Cases**: Gaming, image processing, scientific computing

## Edge Computing

Moving computation closer to users:

\`\`\`javascript
// Edge function example
export default async function handler(request) {
  const userLocation = request.cf.country;
  
  // Serve localized content based on user location
  const content = await getLocalizedContent(userLocation);
  
  return new Response(content, {
    headers: { 'Content-Type': 'text/html' }
  });
}
\`\`\`

## AI-Powered Development

AI is transforming how we write code:

- **Code Generation**: Tools like GitHub Copilot
- **Automated Testing**: AI-generated test cases
- **Performance Optimization**: Automated code optimization

## Micro-Frontends

Breaking down monolithic frontends:

\`\`\`javascript
// Module federation example
const ModuleFederationPlugin = require('@module-federation/webpack');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        mfe1: 'mfe1@http://localhost:3001/remoteEntry.js',
        mfe2: 'mfe2@http://localhost:3002/remoteEntry.js',
      },
    }),
  ],
};
\`\`\`

## Progressive Web Apps (PWAs)

PWAs continue to bridge the gap between web and native:

- **Offline Functionality**: Service workers for offline support
- **App-like Experience**: Native app feel in the browser
- **Installation**: Install web apps on devices

## Serverless Architecture

Serverless is becoming mainstream:

\`\`\`javascript
// Serverless function
export async function handler(event, context) {
  const { httpMethod, body } = event;
  
  if (httpMethod === 'POST') {
    const data = JSON.parse(body);
    // Process data
    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  }
}
\`\`\`

## Web3 and Blockchain Integration

Decentralized web technologies:

- **Smart Contracts**: Ethereum, Solana integration
- **Decentralized Storage**: IPFS, Arweave
- **Cryptocurrency Payments**: Web3 wallets integration

## Conclusion

The future of web development is exciting and full of possibilities. Stay curious, keep learning, and experiment with these emerging technologies to stay ahead of the curve.

The key is to understand which trends align with your projects and gradually incorporate them into your development workflow.
    `,
    author: {
      name: 'Emily Watson',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Tech Lead and innovation enthusiast, always exploring the latest trends in web development.'
    },
    publishedAt: '2024-01-08T16:45:00Z',
    tags: ['Web Development', 'Trends', 'Future Tech', 'Innovation'],
    category: 'Technology',
    readingTime: 7,
    featured: false,
    coverImage: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  },
  {
    id: '5',
    title: 'Mastering Git: Advanced Workflows and Best Practices',
    slug: 'mastering-git-advanced-workflows',
    excerpt: 'Take your Git skills to the next level with advanced workflows, branching strategies, and collaboration techniques.',
    content: `
# Mastering Git: Advanced Workflows and Best Practices

Git is more than just version control—it's a powerful tool for collaboration and project management. Let's explore advanced techniques that will make you a Git master.

## Branching Strategies

### Git Flow

A robust branching model for larger projects:

\`\`\`bash
# Initialize git flow
git flow init

# Start a new feature
git flow feature start new-feature

# Finish a feature
git flow feature finish new-feature

# Start a release
git flow release start 1.0.0
\`\`\`

### GitHub Flow

A simpler approach for continuous deployment:

1. Create a branch from main
2. Make changes and commit
3. Open a pull request
4. Review and merge
5. Deploy from main

## Advanced Git Commands

### Interactive Rebase

Clean up your commit history:

\`\`\`bash
# Interactive rebase for last 3 commits
git rebase -i HEAD~3

# Options: pick, reword, edit, squash, drop
\`\`\`

### Cherry Picking

Apply specific commits to another branch:

\`\`\`bash
# Cherry pick a specific commit
git cherry-pick <commit-hash>

# Cherry pick multiple commits
git cherry-pick <commit1> <commit2>
\`\`\`

### Bisect for Bug Hunting

Find the commit that introduced a bug:

\`\`\`bash
# Start bisecting
git bisect start

# Mark current commit as bad
git bisect bad

# Mark a known good commit
git bisect good <commit-hash>

# Git will checkout commits for you to test
# Mark each as good or bad until found
git bisect good  # or git bisect bad

# End bisecting
git bisect reset
\`\`\`

## Collaboration Best Practices

### Commit Message Conventions

Use conventional commits for better history:

\`\`\`
feat: add user authentication
fix: resolve login redirect issue
docs: update API documentation
style: format code with prettier
refactor: extract user service
test: add unit tests for auth
chore: update dependencies
\`\`\`

### Pre-commit Hooks

Automate code quality checks:

\`\`\`bash
# Install pre-commit
npm install --save-dev husky lint-staged

# Add to package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": [
      "eslint --fix",
      "prettier --write",
      "git add"
    ]
  }
}
\`\`\`

## Advanced Workflows

### Semantic Versioning with Git Tags

\`\`\`bash
# Create annotated tag
git tag -a v1.0.0 -m "Release version 1.0.0"

# Push tags to remote
git push origin --tags

# List tags
git tag -l
\`\`\`

### Submodules for Code Reuse

\`\`\`bash
# Add submodule
git submodule add https://github.com/user/repo.git path/to/submodule

# Initialize submodules after cloning
git submodule update --init --recursive

# Update submodules
git submodule update --remote
\`\`\`

## Git Aliases for Productivity

Add these to your \`.gitconfig\`:

\`\`\`ini
[alias]
    st = status
    co = checkout
    br = branch
    ci = commit
    unstage = reset HEAD --
    last = log -1 HEAD
    visual = !gitk
    lg = log --oneline --graph --decorate --all
    amend = commit --amend --no-edit
\`\`\`

## Troubleshooting Common Issues

### Undo Last Commit (Keep Changes)

\`\`\`bash
git reset --soft HEAD~1
\`\`\`

### Recover Deleted Branch

\`\`\`bash
# Find the commit hash
git reflog

# Recreate branch
git checkout -b recovered-branch <commit-hash>
\`\`\`

### Clean Up Local Branches

\`\`\`bash
# Delete merged branches
git branch --merged | grep -v "\\*\\|main\\|develop" | xargs -n 1 git branch -d
\`\`\`

## Conclusion

Mastering Git takes time and practice, but these advanced techniques will significantly improve your development workflow. Start incorporating these practices gradually, and you'll soon find yourself working more efficiently with version control.

Remember: Git is a tool to serve your workflow, not the other way around. Choose the techniques that best fit your team and project needs.
    `,
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      bio: 'Senior Developer and Git enthusiast with 8+ years of experience in version control and team collaboration.'
    },
    publishedAt: '2024-01-05T11:20:00Z',
    tags: ['Git', 'Version Control', 'Workflow', 'Collaboration'],
    category: 'Development',
    readingTime: 12,
    featured: false,
    coverImage: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
  }
];

export const categories = [
  { id: '1', name: 'Development', slug: 'development', description: 'Programming tutorials and best practices', count: 3 },
  { id: '2', name: 'Design', slug: 'design', description: 'UI/UX design and web design techniques', count: 1 },
  { id: '3', name: 'Technology', slug: 'technology', description: 'Latest tech trends and innovations', count: 1 }
];

export const tags = [
  { id: '1', name: 'React', slug: 'react', count: 1 },
  { id: '2', name: 'TypeScript', slug: 'typescript', count: 1 },
  { id: '3', name: 'CSS', slug: 'css', count: 1 },
  { id: '4', name: 'Node.js', slug: 'nodejs', count: 1 },
  { id: '5', name: 'Git', slug: 'git', count: 1 },
  { id: '6', name: 'Frontend', slug: 'frontend', count: 2 },
  { id: '7', name: 'Backend', slug: 'backend', count: 1 },
  { id: '8', name: 'Web Development', slug: 'web-development', count: 1 }
];