## Day 1 — 2026-05-21

**Hours worked:** 2

**What I did:**
- Created the GitHub repository for the AI Spend Audit project
- Initialized a Next.js project using TypeScript and Tailwind CSS
- Created the base folder structure:
  - app/
  - components/
  - lib/
  - tests/
  - public/
- Added all required markdown documentation files mentioned in the assignment
- Explored the Next.js App Router and project structure for around 1.5 hours
- Researched the assignment requirements carefully and planned the 7-day execution strategy
- Setup the initial local development environment successfully

**What I learned:**
- Basic structure and workflow of Next.js App Router
- Difference between app routing and traditional React routing
- Importance of keeping business logic separated from UI components
- How the assignment is more focused on shipping a complete product than writing complex code

**Blockers / what I'm stuck on:**
- No major blockers today
- Still exploring the best approach for organizing the audit engine logic and backend flow

**Plan for tomorrow:**
- Continue learning Next.js fundamentals required for the project
- Start building the spend input form UI
- Learn localStorage persistence for form data
- Research Supabase basics for storing audit reports
- Push multiple meaningful commits and keep deployment workflow ready


## Day 2 — 2026-05-21

**Hours worked:** 4

**What I did:**
- Built the initial spend input form on the homepage
- Added support for dynamically adding and removing multiple AI tools
- Implemented tool selection with plan dropdowns using structured pricing data
- Added monthly spend and seat count inputs for each selected tool
- Created reusable form components for cleaner structure and maintainability
- Implemented localStorage persistence using a custom React hook so form state survives page reloads
- Refactored pricing and type definitions into separate files for better scalability
- Pushed multiple meaningful commits while keeping the project deployed and functional

**What I learned:**
- Better understanding of React state management for dynamic form arrays
- How to build reusable form components cleanly in Next.js App Router
- How localStorage persistence works with custom hooks and useEffect
- Importance of separating UI logic from business logic early in the project

**Blockers / what I'm stuck on:**
- No major blockers today
- Still planning the exact structure of the audit recommendation engine and recommendation scoring logic

**Plan for tomorrow:**
- Start building the audit engine logic and recommendation rules
- Create savings calculation utilities
- Begin writing automated tests for audit logic
- Improve homepage layout and basic responsive behavior