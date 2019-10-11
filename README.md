# Twenty Nineteen Frontity Theme Project :art:

:fire: A WordPress Twenty Nineteen Theme Project in React for Frontity.

:zap: Check out the [demo site here](https://twentynineteen.frontity.org/).

[Tutorial Video](https://youtu.be/i1LaEDv0PNk)

# Demo :video_camera:

<p align="center">
  <img alt="Frontity en la consola" src="assets/demo.gif">
</p>

# Demo 2 :video_camera:

> Speed and performance comparision between the same Twenty Nineteen theme on WordPress (in PHP) vs Frontity (in React).

<p align="center">
  <img alt="Frontity en la consola" src="assets/demo-compare.gif">
</p>

# Installation :wrench:

## 1. For new projects: clone this project.

1. `git clone https://github.com/imranhsayed/frontity-twentynineteen`.
2. `cd frontity-twentynineteen`.
3. `npm install && npx frontity dev` (from the project's root directory).

4. Your site will now be available at `http://localhost:3000/`

## 2. For new/existing project: use npm.

1. `npm install @frontity/twentynineteen-theme`.
2. Add the package in `frontity-settings.js`.

```javascript
  packages: [
    {
      name: "@frontity/twentynineteen-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Nature", "/category/nature/"],
            ["Travel", "/category/travel/"],
            ["Japan", "/tag/japan/"],
            ["About Us", "/about-us/"]
          ],
          featured: {
            showOnList: true,
            showOnPost: true
          }
        }
      }
    },
```

3. Remove your previous theme (`mars-theme`?) from `frontity-settings.js`.
4. `npx frontity dev` (from project's root directory).
5. Your site will be available at `http://localhost:3000/`.

## Credits :white_flower:

- Build with love :blue_heart:, using [Frontity's](https://frontity.org) [mars-theme](https://www.npmjs.com/package/@frontity/mars-theme) as base.

## Authors

1. [Imran Sayed](https://twitter.com/imranhsayed)
2. [Smit Patadiya](https://twitter.com/smit_patadiya)

## Contributors

1. [Shaun Guimond](https://twitter.com/shagui88)
2. [David Arenas](https://twitter.com/darerodz)

## License :scroll:

![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

- **[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)**
