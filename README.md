# Random Image API

A Next.js project that serves random images through simple HTTP endpoints.
It includes a landing page, API documentation, and a browsable API list.

![Random image](https://random-image.woxly.de/api/nature-image)

## Live Site

- [https://random-image.woxly.de](https://random-image.woxly.de)

## Features

- Random image endpoints for multiple categories
- Easy embedding in Markdown, HTML, or apps
- Built with Next.js, TypeScript, and Tailwind CSS
- Public docs page and endpoint list page
- Lightweight API routes backed by curated JSON image lists

## Tech Stack

- Next.js (Pages Router)
- React
- TypeScript
- Tailwind CSS

## Getting Started

### Prerequisites

- Node.js 18+ recommended
- npm (or compatible package manager)

### Install

```bash
git clone https://github.com/Hennes617/random_image.git
cd random_image
npm install
```

### Run Locally

```bash
npm run dev
```

Open `http://localhost:3000`.

### Production Build

```bash
npm run build
npm start
```

## API Endpoints

All endpoints return an image response.

| Endpoint | Description |
| --- | --- |
| `/api/nature-image` | Random image from the default nature list |
| `/api/nature-2000` | Random image from the large nature collection |
| `/api/natur-2000` | Legacy alias route for nature-2000 |
| `/api/night-sky` | Random night sky image |
| `/api/skeleton-random-image` | Random skeleton-themed image |
| `/api/studio-ghibli` | Random Studio Ghibli-themed image |
| `/api/minecraft-memes` | Random Minecraft meme image |
| `/api/swag-wallpaper` | Random wallpaper from the swag list |

## Usage Examples

### Direct URL

```txt
https://random-image.woxly.de/api/nature-image
```

### Markdown

```md
![Random image](https://random-image.woxly.de/api/nature-image)
```

### HTML

```html
<img
  src="https://random-image.woxly.de/api/nature-2000"
  alt="Random image"
  width="500"
  height="300"
  class="rounded-lg shadow-lg"
/>
```

## Project Structure

```txt
pages/
  api/                 # API routes for random image categories
  index.tsx            # Landing page
  docs.tsx             # API usage documentation
  api-lists.tsx        # Endpoint overview page
lists/                 # Source JSON files with image URLs
components/            # Reusable UI components
```

## Scripts

- `npm run dev` - start development server
- `npm run build` - create production build
- `npm run start` - run production server
- `npm run lint` - run ESLint checks

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Open a pull request

## License

No license file is currently included in this repository.
