# Employee Performance Management System

A modern web application for managing employee performance, goals, and evaluations built with Next.js and Supabase.

## Features

- User authentication and role-based access control
- Employee goal setting and tracking
- Performance self-evaluations
- Manager reviews and approvals
- Performance analytics and reporting
- Admin dashboard for user management

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Supabase for backend and authentication
- ShadCN UI components
- Chart.js for analytics

## Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
cd employee-performance-system
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Copy `.env.local.example` to `.env.local`
- Add your Supabase project URL and anon key

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── (auth)             # Authentication pages
│   ├── employee/          # Employee-specific pages
│   ├── manager/           # Manager-specific pages
│   ├── shared/            # Shared pages
│   └── admin/             # Admin pages
├── components/            # React components
│   ├── layout/           # Layout components
│   ├── ui/               # UI components
│   └── shared/           # Shared components
└── lib/                  # Utility functions and configurations
```

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
