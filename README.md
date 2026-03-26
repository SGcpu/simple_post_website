# Simple Post Website — A New Start (Express Learning Project)

This repo is my “new start” learning project for building a tiny full‑stack app with **Express**.

It’s intentionally small: you can **create a post with an image + caption**, and view all posts in a simple feed.

## What I practiced (learning notes)

- Express basics: routes, middleware, JSON, and CORS
- Uploading files with `multer` (multipart/form-data)
- Persisting data with MongoDB + `mongoose`
- Keeping secrets out of Git with a backend `.env`
- Connecting a React + Vite frontend to an API (Axios)

## Project structure

- `backend/` — Express API + MongoDB + image upload
- `frontend/` — React (Vite) UI

## Requirements

- Node.js (any recent LTS should work)
- A MongoDB connection string
- ImageKit account/keys (used by the backend upload service)

## Setup

### 1) Backend environment variables

Create a file at `backend/.env` (it is gitignored).

Example:

```env
DATABASE_URL=mongodb://127.0.0.1:27017/post_website
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
```

Notes:
- `DATABASE_URL` is required by `mongoose.connect(...)` in `backend/src/db/db.js`.
- `IMAGEKIT_PRIVATE_KEY` is required by `backend/src/services/storage.service.js`.

### 2) Install dependencies

Backend:

```bash
cd backend
npm install
```

Frontend:

```bash
cd ../frontend
npm install
```

## Run locally (two terminals)

### Terminal A — backend API

```bash
cd backend
node server.js
```

The API listens on: `http://localhost:3000`

### Terminal B — frontend

```bash
cd frontend
npm run dev
```

Vite will print the local dev URL (usually `http://localhost:5173`).

## API endpoints

- `POST /create-post`
  - Content type: `multipart/form-data`
  - Fields:
    - `image` (file)
    - `caption` (text)
  - Saves a post record to MongoDB with the uploaded image URL.

- `GET /posts`
  - Returns all posts from MongoDB.

## Quick walkthrough

- Frontend pages live in `frontend/src/pages/`:
  - `CreatePost.jsx` uploads to `http://localhost:3000/create-post`
  - `Feed.jsx` fetches from `http://localhost:3000/posts`

- Backend routes are defined in `backend/src/app.js`.

## Known limitations (future improvements)

This is a learning project, so it’s intentionally minimal. Things I’d improve next:

- Better error handling/validation on the API
- Configurable ports (instead of hardcoding `3000`)
- Avoid hardcoding the upload filename (`image1.jpg`)
- Add a Vite proxy so the frontend doesn’t hardcode `http://localhost:3000`
