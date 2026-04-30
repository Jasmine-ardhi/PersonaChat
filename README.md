# 🤖 Persona Chatbot

> **Assignment 01 — Prompt Engineering**
> A full-stack AI chatbot that lets you converse with three Scaler/InterviewBit-inspired personalities.

---

## 🌐 Live Links

| Resource | URL |
|---|---|
| 🚀 Frontend (Vercel) | _Paste your Vercel link here_ |
| ⚙️ Backend (Render) | [persona-chatbot-backend-3twv.onrender.com](https://persona-chatbot-backend-3twv.onrender.com) |
| 📁 GitHub Repository | [github.com/Jasmine-ardhi/PersonaChat](https://github.com/Jasmine-ardhi/PersonaChat) |

---

## 🎭 Personas

| # | Persona | Style |
|---|---|---|
| 1 | **Anshuman Singh** | Pragmatic, no-nonsense educator focused on discipline, systems, and long-term consistency |
| 2 | **Kshitij Mishra** | Calm, reflective technical mentor focused on DSA and system design |
| 3 | **Abhimanyu Saxena** | Product-focused strategist emphasizing scale, career growth, and execution |

---

## ✨ Features

- **Three distinct AI personas** — each with a unique system prompt, tone, and expertise
- **Persona switcher** — tabs/buttons to switch personas; conversation resets on switch
- **Active persona indicator** — always visible in the UI
- **Suggestion chips** — quick-start questions for each persona
- **Typing indicator** — loading state while the API call is in progress
- **Responsive UI** — works on desktop and mobile
- **Secure API handling** — API key stored in environment variables, never exposed
- **Graceful error handling** — user-friendly messages on failure
- **Prompt engineering techniques used:**
  - Persona prompting
  - Few-shot prompting
  - Internal reasoning instruction
  - Output constraints
  - Role-based behaviour control

---

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Axios
- CSS

### Backend
- Node.js
- Express.js
- CORS
- dotenv
- Groq SDK

### Deployment
- **Frontend** → Vercel
- **Backend** → Render

---

## 📁 Project Structure

```
persona-chatbot/
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── personas/
│   │   ├── anshuman.js
│   │   ├── kshitij.js
│   │   └── abhimanyu.js
│   ├── utils/
│   │   └── getPersonaPrompt.js
│   ├── routes/
│   │   └── chat.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── .env.example
├── README.md
├── prompts.md
├── reflection.md
└── .gitignore
```

---

## ⚙️ How It Works

The frontend sends the user message and selected persona to the backend:

```json
{
  "message": "How do I stay consistent?",
  "persona": "anshuman"
}
```

The backend resolves the correct system prompt:

```js
getPersonaPrompt(persona)
```

Then calls the LLM API with that system prompt + user message. The model returns a persona-consistent reply, which is sent back to the frontend and rendered in the chat interface.

---

## 🚀 Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Jasmine-ardhi/PersonaChat.git
cd PersonaChat
```

---

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend/` folder:

```bash
touch .env
```

Add your Groq API key:

```env
GROQ_API_KEY=your_groq_api_key_here
```

> ⚠️ **Important:** Never commit your `.env` file to GitHub.

Start the backend server:

```bash
node server.js
```

The server starts at `http://localhost:5000`. You should see:

```
Server running on port 5000
```

Test it with:

```bash
curl -X POST http://localhost:5000/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"How do I stay consistent?","persona":"anshuman"}'
```

Expected response:

```json
{
  "reply": "A persona-style AI response..."
}
```

---

### 3. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The frontend runs at `http://localhost:5173`.

---

## 🔑 Environment Variables

The backend requires the following variable in a `.env` file:

```env
GROQ_API_KEY=your_groq_api_key_here
```

A `.env.example` file is included in the repo:

```env
GROQ_API_KEY=your_api_key_here
```

The real `.env` is excluded via `.gitignore`.

---

## 🌍 API Configuration

| Environment | Endpoint |
|---|---|
| Local development | `http://localhost:5000/chat` |
| Production | `https://persona-chatbot-backend-3twv.onrender.com/chat` |

---

## ☁️ Deployment

### Backend — Render

| Setting | Value |
|---|---|
| Root Directory | `backend` |
| Build Command | `npm install` |
| Start Command | `node server.js` |
| Environment Variable | `GROQ_API_KEY` |

### Frontend — Vercel

| Setting | Value |
|---|---|
| Root Directory | `frontend` |
| Framework Preset | Vite |
| Install Command | `npm install` |
| Build Command | `npm run build` |
| Output Directory | `dist` |

---

## ✅ Submission Checklist

- [x] GitHub repository is public
- [x] `README.md` contains setup instructions and deployment links
- [x] `prompts.md` contains all three system prompts with annotations
- [x] `reflection.md` contains 300–500 word reflection
- [x] `.env.example` is present; real API key is not committed
- [x] Backend deployed on Render
- [x] Frontend deployed on Vercel
- [x] Persona switching resets the conversation
- [x] Suggestion chips are present
- [x] Typing indicator is present
- [x] App is mobile responsive

---


