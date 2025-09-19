# Ran-Nants Thought Journal

A simple, clean notes app for capturing and organizing your innovative ideas and random thoughts.

## Features

- 📝 **Simple Text Editor** - Write your thoughts without distractions
- 🔐 **Secure Authentication** - Firebase-powered user accounts
- ☁️ **Cloud Storage** - Your notes are saved and synced across devices
- 🌙 **Dark Theme** - Easy on the eyes for late-night brainstorming
- 📱 **Responsive Design** - Works on desktop and mobile

## Getting Started

### Prerequisites

- Node.js 18+
- Firebase account

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd nextjs-15-course
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
Create a `.env.local` file with your Firebase configuration:
```env
NEXT_PUBLIC_FIREBASE_APIKEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTHDOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECTID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGEBUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGINGSENDERID=your_sender_id
NEXT_PUBLIC_FIREBASE_APPID=your_app_id
```

4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to start journaling your thoughts.

## Usage

1. **Sign Up/Login** - Create an account or log in to access your notes
2. **Create Notes** - Click "New Note" and start writing
3. **Save Automatically** - Your thoughts are saved as you type
4. **Organize** - Browse through your previous entries

## Built With

- [Next.js 15](https://nextjs.org/) - React framework
- [Firebase](https://firebase.google.com/) - Authentication and database
- [Fanta.css](https://github.com/jamezmca/fantacss) - Custom styling

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Start capturing your ran-nants (random thoughts) today!* 💭