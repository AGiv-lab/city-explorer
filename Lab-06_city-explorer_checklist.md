# ✅ Lab 6- City Explorer Checklist

> Use this checklist throughout the lab to make sure your project is complete, functional, and ready to pass review.

---

## 🚀 Project Setup

- [x] Create a GitHub repository named `city-explorer`
- [ x] Do NOT initialize the repo with files on GitHub
- [ x] Create a React app locally named `city-explorer`
- [x ] Verify your project structure includes:

  ```txt
  city-explorer
     ├─x─ .env
     ├x── .gitignore
     ├─x─ package-lock.json
     ├─x─ package.json
     ├x── README.md
     ├─x─ public/
     └x── src/
        |_x_App.js
  ```

- [x ] Connect local repo to GitHub repo
- [x ] Push initial project setup to GitHub

---

## 📦 Dependencies & Configuration

- [x ] Install Axios
- [x] Install Bootstrap
- [ x] Verify dependencies appear in `package.json`
- [ x] Create a `.gitignore` file
- [ x] Confirm `.env` is listed inside `.gitignore`
- [ x] Verify `.env` is NOT uploaded to GitHub

---

## 🔑 LocationIQ API Setup

- [x ] Create a free LocationIQ account
- [x ] Open the API Access Tokens page
- [ x] Rename your token label to:

  ```txt
  City Explorer
  ```

- [x ] Add your localhost URL as an HTTP Referrer

  ```txt
  http://localhost:5173
  ```

- [ x] Add your deployed Netlify URL as an HTTP Referrer
- [ x] Create a `.env` file locally
- [x ] Add your API key to `.env`
- [ x] Use the SAME variable name everywhere

Example:

```env
VITE_API_KEY=your_key_here
```

---

## 🌎 Location Search Feature

- [ x] Build a form for city searches
- [x ] Add an input field for city names
- [x ] Add a button with the text:

  ```txt
  Explore!
  ```

- [x ] Capture user input with React state
- [ ] Use Axios to request data from LocationIQ
- [ ] Use async/await correctly
- [ ] Display:
  - [ ] Display name
  - [ ] Latitude
  - [ ] Longitude
- [ ] Display the data using Bootstrap components
- [ ] Verify valid searches work correctly

---

## 🗺️ Map Feature

- [ ] Use latitude and longitude to build the map URL
- [ ] Use the LocationIQ Static Map API
- [ ] Display the city map image on the page
- [ ] Style the image appropriately
- [ ] Use Bootstrap components for layout
- [ ] Add spacing and visual improvements with CSS
- [ ] Add a custom color scheme

---

## ⚠️ Error Handling

- [ ] Handle invalid city searches
- [ ] Handle empty input submissions
- [ ] Create conditional error rendering
- [ ] Display a Bootstrap error component
- [ ] Show:
  - [ ] Error status code
  - [ ] Error message
- [ ] Prevent broken data from rendering

---

## ☁️ Netlify Deployment

- [ ] Deploy project to Netlify
- [ ] Verify deployment works correctly
- [ ] Add environment variables in Netlify settings
- [ ] Use the SAME API variable name from `.env`
- [ ] Confirm deployed app can access the API

Netlify Path:

```txt
Site Settings → Build & Deploy → Environment Variables
```

---

## 🔀 GitHub Workflow

- [ ] Create a feature branch
- [ ] Open a Pull Request to `main`
- [ ] Push ALL lab work to the SAME PR
- [ ] Verify Netlify Deploy Preview works
- [ ] Commit changes regularly
- [ ] Write clear commit messages

---

## 📝 README Requirements

- [ ] Update README with project documentation
- [ ] Add project description
- [ ] Add setup instructions
- [ ] Add deployed Netlify link
- [ ] Add feature list
- [ ] Add author information
- [ ] Document current lab progress

---

## 🎯 Final Functional Checks

- [ ] User can search for a city
- [ ] Latitude displays correctly
- [ ] Longitude displays correctly
- [ ] Map image renders correctly
- [ ] Error messages appear correctly
- [ ] App styling looks polished
- [ ] No API keys are exposed publicly
- [ ] Deployment works online
- [ ] No console errors
- [ ] All code pushed to GitHub

---

## 🧠 Success Criteria

Your lab is likely successful if:

- [ ] The app works locally
- [ ] The app works on Netlify
- [ ] API requests succeed
- [ ] Errors are handled cleanly
- [ ] Styling is readable and organized
- [ ] README is complete
- [ ] Pull Request is updated
- [ ] API key remains private

---

## 💡 Student Tips

- [ ] Restart the dev server after editing `.env`
- [ ] Double-check API URLs carefully
- [ ] Use `console.log()` while debugging
- [ ] Read API error messages closely
- [ ] Commit working code often
- [ ] Push to GitHub frequently
- [ ] Test BOTH localhost and Netlify deployment
- [ ] Keep your API key private at all times
