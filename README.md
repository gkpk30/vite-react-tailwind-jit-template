# Vite + ReactJs + TailwindCss in JIT Template

**Update: TailwindCSS v3 came out, and it uses JIT compiler by default. The config file and the package.json has been updated accordingly.**

Just clone this repository or click the **`Use This Template`** to get a copy of this. 

Then run **`npm i`** in the root of the folder to install all the dependencies. 
If there are any vulnarabilities run **'npm audit fix'**. I think this is needed if running a newer version of Node or npm
Then run **'npm run dev'**. 

If using the TailwindUI components you must run **'npm install @headlessui/react'**

Then you can go ahead and start editing the src/App.jsx file and you can use tailwind throughout the entire app as the src/index.css file has registered tailwind and it is imported in the main.jsx file.

---


## Commands:

To start the dev server on your machine:

```
npm run dev
```

To start the dev server on your network:

```
npm run serve
```

To make the production build:

```
npm run build
```

To preview the production build locally:

```
npm run serve
```

---

### To deploy the site, refer to the [official docs](https://vitejs.dev/guide/static-deploy.html) as it is explained in detail there and for many providers.
