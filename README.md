# Twentynineteen Frontity Theme Project :art:

:fire: A WordPress Twentynineteen Theme Project in React for Frontity

# Demo :video_camera:

![](demo.gif)

# Installation :wrench:

## 1.For new project

### a. By cloning this project.
1. `git clone https://github.com/imranhsayed/frontity-twentynineteen`
2. `cd frontity-twentynineteen`
3. Add `@frontity/twentynineteen-theme` as you dependency in package.json of project's root directory.
```ruby
  "dependencies": {
    "@frontity/twentynineteen-theme": "./packages/twentynineteen-theme"
  }
```
4. Add the package name in `frontity-settings.js`
```ruby
  "packages": [
    {
      "name": "@frontity/twentynineteen-theme",
```

5. `npm install && npx frontity dev` ( from the project's root directory )
 
6. Your site will now be available at `http://localhost:3000/`

### b. Using Command Line.

1. `npx frontity create my-app && cd my-app/packages`
2. Add the theme package to the dependencies in package.json of the root of your project.
```ruby
  "dependencies": {
    "@frontity/twentynineteen-theme": "./packages/twentynineteen-theme"
  }
```
3. Add the package name to the `frontity-settings.js`
```ruby
  "packages": [
    {
      "name": "@frontity/twentynineteen-theme",
```
4. `npm install && npx frontity dev` ( from project's root directory )
5. Your site will be available at `http://localhost:3000/`

## 2.For existing project

1. Add the theme package to the dependencies in package.json of root of your project.
```ruby
  "dependencies": {
    "@frontity/twentynineteen-theme": "./packages/twentynineteen-theme"
  }
   ```
   
2. `cd packages`

3. `npm install @frontity/twentynineteen-theme`

4. Add the package name to the `frontity-settings.js`
```ruby
  "packages": [
    {
      "name": "@frontity/twentynineteen-theme",
```
5. `npx frontity dev` ( from the root of your project )

6. Your site will be available at `http://localhost:3000/`


## Instructions :clipboard:

Please follow the README for using the project/theme.

## Common Commands :computer:

- `npx frontity dev` Runs server in development mode ( from the root of your project )

## Credits :white_flower:

- Build with love :blue_heart:, using [Fronity's](https://frontity.org) [mars-theme](https://www.npmjs.com/package/@frontity/mars-theme)

## Author

1. [Imran Sayed](https://twitter.com/imranhsayed)
2. [Smit Patadiya](https://twitter.com/smit_patadiya)

## License :scroll:

[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)

- **[GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)**
