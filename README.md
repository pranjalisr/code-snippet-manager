# Code Snippet Manager

Code Snippet Manager is a web application designed to help developers organize, store, and quickly retrieve code snippets. This tool allows users to add, tag, and search for code snippets, making it easier to manage and reuse code across projects.

## Features

- User Authentication: Secure login system to ensure only authorized users can access the snippet manager.
- Add Snippets: Easily add new code snippets with title, code content, language, and tags.
- Tag System: Organize snippets with a flexible tagging system for easy categorization.
- Search Functionality: Quickly find snippets by searching through titles, languages, or tags.
- Responsive Design: User-friendly interface that works well on both desktop and mobile devices.

## Technologies Used

- Next.js: React framework for building the user interface
- React: JavaScript library for building user interfaces
- TypeScript: Typed superset of JavaScript for improved developer experience
- shadcn/ui: UI component library for consistent and attractive design
- Express.js: Backend framework for handling API requests (to be implemented)
- MongoDB: Database for storing snippet data (to be implemented)

## Setup Instructions

1. Clone the repository:
   \`\`\`
   git clone https://github.com/your-username/code-snippet-manager.git
   cd code-snippet-manager
   \`\`\`

2. Install dependencies:
   \`\`\`
   npm install
   \`\`\`

3. Run the development server:
   \`\`\`
   npm run dev
   \`\`\`

4. Open your browser and navigate to \`http://localhost:3000\` to view the application.

## Usage Instructions

1. Login: Use the login page to access the application. (Note: In this demo version, any non-empty username and password will work)

2. Add Snippet: Click the "Add New Snippet" button to open the snippet creation form. Fill in the title, code, language, and tags for the new snippet.

3. Search Snippets: Use the search bar to find snippets by title, language, or tag.

4. View Snippets: Existing snippets are displayed as cards, showing the title, language, code, and tags.

5. Logout: Use the logout button in the top right corner to securely log out of the application.

## Future Improvements

- Backend Integration: Implement Express.js server and MongoDB database for data persistence and user authentication.
- Snippet Editing: Add functionality to edit and delete existing snippets.
- User Profiles: Implement user profiles with personalized snippet collections.
- Sharing: Allow users to share snippets with other users or make them public.
- Syntax Highlighting: Implement syntax highlighting for different programming languages.
- Version Control: Add version history for snippets to track changes over time.
- Export/Import: Allow users to export their snippets or import from other sources.

## Contributing

Contributions to the Code Snippet Manager project are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.

