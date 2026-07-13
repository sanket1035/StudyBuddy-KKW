# Study Buddy KKW

> One hub for every note, PYQ, and resource K.K. Wagh students actually need.

Study Buddy KKW is a modern, open-source educational resource portal designed specifically for engineering students of the **K. K. Wagh Institute of Engineering Education & Research**. Used by 400+ students per year, this platform is built to make it easy for anyone to find unit-wise study materials, handwritten notes, and past year question papers (PYQs) in under 30 seconds.

---

## 🚀 Features

- **Dynamic Year Selection**: Easily toggle between First Year and Second Year (AI&DS / CS) curricula.
- **Unit-Wise Categorization**: Find notes, handwritten materials, and question banks sorted neatly by Unit 1 to 5.
- **Fast Global Search**: Instantly find any subject, topic, or unit across years.
- **Mobile-First Design**: Optimized layout for smartphones to help students review notes right before an exam.
- **Open Source & JSON-Powered CMS**: Easy for non-technical students to contribute notes via a simple Pull Request (PR).
- **Persistent Bookmarks**: Pin important unit resources to access them instantly from the home page.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **State/Themes**: `next-themes` (Dark/Light mode) & Lucide React Icons
- **Deployment**: Vercel (Auto-deploys from GitHub)

---

## 💻 Getting Started

### Prerequisites

Ensure you have **Node.js 18.0.0+** installed on your system.

### Installation

1. Fork and clone the repository:
   ```bash
   git clone https://github.com/your-username/study-buddy.git
   cd study-buddy
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

---

## 🤝 Contributing

We welcome all contributions! To add notes, update syllabus, or fix links, you do **not** need to touch any Next.js code. The resource content is stored as simple JSON files inside the `content/` directory.

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for step-by-step instructions on how to add/update resources and submit a pull request.

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.
