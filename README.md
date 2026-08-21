# The Mercy Seat

[https://themercyseat.com](https://themercyseat.com)

The Mercy Seat is a quiet, scripture-centered site that invites visitors to pause at the biblical image of covering and meeting with God. It presents Exodus 25:22, a brief account of the Hebrew *kapporeth*, and Sojourn Music’s recording of John Newton’s hymn “Approach My Soul The Mercy Seat.”

The public site is the primary experience. This repository is the source for that site.

## Architecture

The site is a React application built with Vite and published as static files on Azure Static Web Apps. There is no backend or API in this project.

Local development:

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

A production build is created with `npm run build` and output to `dist`. Pushes and pull requests against `main` are built and deployed by GitHub Actions using the Azure Static Web Apps workflow.
