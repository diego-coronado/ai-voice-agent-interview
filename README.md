# AI Voice Agent Interview

## Project Overview

The AI Voice Agent Interview project is designed to facilitate interactive and intelligent interviews using AI-powered voice agents. This application leverages modern web technologies and AI models to provide a seamless interview experience. It is built using Next.js, React, and integrates with Firebase for backend services.

## Features

- **AI-Powered Interviews**: Conduct interviews using AI voice agents.
- **Real-time Feedback**: Get instant feedback and analysis during interviews.

## Installation

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/diego-coronado/ai-voice-agent-interview.git
   ```

2. Navigate to the project directory:
   ```bash
   cd ai-voice-agent-interview
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

To run the project, use the following command:

```bash
npm start
```

## Environment Variables

The project requires the following environment variables to be set. These are typically stored in a `.env.local` file:

- **Firebase Configuration**:
  - `FIREBASE_PROJECT_ID`: The Firebase project ID.
  - `FIREBASE_PRIVATE_KEY`: The private key for Firebase authentication.
  - `FIREBASE_CLIENT_EMAIL`: The client email for Firebase admin SDK.

- **Public Firebase Configuration**:
  - `NEXT_PUBLIC_FIREBASE_API_KEY`: API key for Firebase.
  - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Auth domain for Firebase.
  - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Public project ID for Firebase.
  - `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`: Storage bucket for Firebase.
  - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Messaging sender ID for Firebase.
  - `NEXT_PUBLIC_FIREBASE_APP_ID`: App ID for Firebase.
  - `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`: Measurement ID for Firebase.

- **Google Generative AI API**:
  - `GOOGLE_GENERATIVE_AI_API_KEY`: API key for accessing Google Generative AI services.

- **VAPI Configuration**:
  - `NEXT_PUBLIC_VAPI_WEB_TOKEN`: Web token for VAPI.
  - `NEXT_PUBLIC_VAPI_WORKFLOW_ID`: Workflow ID for VAPI.
