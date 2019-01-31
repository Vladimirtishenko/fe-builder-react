# Installing
For installing React infrastracture that consist of (React, Redux, React router, Webpack + Babel, Stylus), you have to do all at an example:

```sh
$ cd /to/project/folder
$ npm i fe-builder-react
$ echo "require('fe-builder-react')" >> index.js && node index.js && rm index.js
```

Now you have project tree:
- public
    - img
    - fonts
    - build
    - js
        - index.js (Entry point for webpack)
        - app.js (React component)
    - templates
        - index.html
    - styl
        - vendor
          - bootstrap.styl
        - blocks
        - common
            - \_\_modificators
            - defaults.styls

- webpack.config.js (With architecture for transform stylus to CSS, ES6/ES7/ES8 to ES5 and .pug to .html)
- .babelrc
- .gitignore
- node_modules

# Reqirement

- Node.js >= 8+
- NPM >= 3.10.*
- Webpack 4+
- React 16+
