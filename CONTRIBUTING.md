# Contributing to Study Buddy KKW

Thank you for wanting to contribute to **Study Buddy KKW**! This project is maintained by students, for students. By adding your notes, question papers, or resources, you are helping hundreds of peers.

---

## How Can I Contribute?

You can contribute in two ways:
1. **Content Contributions (No Code Needed)**: Adding or updating study materials, notes, or Google Drive links.
2. **Code Contributions**: Enhancing the Next.js UI, fixing bugs, or adding new features.

---

## 📚 1. Content Contributions (Adding Notes / Links)

All resource links and subject directories are powered by simple, editable JSON files in the `/content` folder. You do not need to know any programming to add your notes!

### Step 1: Find the File
Browse to:
- `content/first-year/` for First Year subjects.
- `content/second-year/` for Second Year subjects.

Identify the JSON file for the subject you want to edit (e.g., `maths-2.json` or `operating-systems.json`).

### Step 2: Edit the JSON File
Each file follows this standard structure:

```json
{
  "id": "subject-slug",
  "name": "Subject Display Name",
  "year": "first-year" or "second-year",
  "icon": "calculator" or "book-open" or "cpu", // Lucide icon name
  "lastUpdated": "YYYY-MM-DD",
  "units": [
    {
      "unitNumber": 1,
      "title": "Unit 1",
      "resources": [
        {
          "label": "Notes Name",
          "type": "file" or "folder" or "video" or "question-bank",
          "url": "https://drive.google.com/your-drive-link",
          "lastUpdated": "YYYY-MM-DD"
        }
      ]
    }
  ],
  "bonus": [
    {
      "label": "YouTube Playlist - Unit 1",
      "type": "video",
      "url": "https://youtube.com/..."
    }
  ]
}
```

Simply find the appropriate unit under `units` and add your resource to the `resources` array, or update the `url` of an existing resource.

### Step 3: Guidelines for Links
- **Google Drive Links**: Ensure that the link sharing permission is set to **"Anyone with the link can view"**.
- **Standard Names**:
  - Use `Notes` for official college PPTs/notes.
  - Use `Handwritten` for handwritten student notes.
  - Use `Question Bank` or `PYQ` for question sets.
- **standardize**: Always declare the correct resource `type`: `"file"`, `"folder"`, `"video"`, or `"question-bank"`.

---

## 💻 2. Code Contributions (Next.js / Tailwind CSS)

If you'd like to improve the website's code or design:

1. **Fork the Repo**: Click the "Fork" button on GitHub to copy the repo to your profile.
2. **Clone Locally**: Clone your fork to your computer:
   ```bash
   git clone https://github.com/your-username/study-buddy.git
   ```
3. **Branch out**: Create a branch for your changes:
   ```bash
   git checkout -b feature/cool-new-feature
   ```
4. **Make Changes**: Run the dev server (`npm run dev`) and make your changes.
5. **Lint & Format**: Ensure there are no ESLint or TypeScript errors:
   ```bash
   npm run lint
   npm run build
   ```
6. **Commit & Push**: Commit with a clean description and push your branch to GitHub.
7. **Submit a Pull Request**: Submit a PR to our main repository. Briefly explain what your changes do.

---

## 📜 Code of Conduct

- Be respectful and supportive of other contributors.
- Do not spam or add promotional/unrelated links.
- Only upload verified, high-quality notes that are helpful to the student community.
