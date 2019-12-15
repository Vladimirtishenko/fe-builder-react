# New version of React + Redux environment

- Last logs
    * Structure has been slightly changed;
    * Redux-form was added;
    * Create validation helper for Redux-form;
    * New version of Babel has been installed;
    * Error page (404) has been added;
    * Old validator was removed;
    * Logic of routes was changed from jsx to js;
    * New function for extend bootstrap were added;
    * All dependencies were updated

# Installing
For create Front End Infrastructure that consist of (Yarn, Stylus, React + Redux, Webpack + Babel, BEM):

- Intall yarn https://yarnpkg.com/lang/en/docs/install/#mac-stable

```sh
cd /to/project/folder
yarn i fe-builder-react
echo "require('fe-builder-react')" >> index.js && node index.js && rm index.js
```

Now you have project tree:
- public
    - img
    - fonts
    - build
    - js
        - modules
            - oauth (Oauth module)
                - components
                    - login.jsx (Form component connected to Redux-form)
                - actions
                    - oauth.action.js
                - reducers
                    - oauth.rd.js
                - routes
                    - oauth.router.js
                - containers
                    - oauth.cv.jsx (Main entry form oauth module)
                - constants
                    - oauth.const.js
                - decorators
                    - autentification.dec.jsx (Decorated main entry for handle state of user)
        - libraries
            - warnings (Warnings or error fixed popups)
        - common
            - components
                - form
                    - input.jsx (Input component with Redux-form)
                - error
                    - error.jsx (Error page)
                - includes (Folder for header/footer and etc)
        - helpers (Folder with helpers validation, etc)
        - i18n (Folder for static translations)
        - configuration
        - store
            - store.js (Redux store)
        - routes
            - common.route.jsx (Collect all routes to one file)
        - reducers
            - root.rd.js (Main reducer which combined all reducers)
        - wrappers
            - root.jsx (Connect store and router)
            - main.jsx (Entry file with routing and some common things like menu, etc)
        - app.js (React entry point)
        - index.js (Entry point for webpack)
    - styl
        - vendor
          - bootstrap
            - bootstrap.styl ( Main bootstrap file that include just Bootstrap layout)
            - variables.styl ( Grid sizes for bootstrap )
            - function.styl ( Creating own cols- for bootstrap )
          - bem
            - \_\_modificators
                - \_\_\*.styl - (Static  bem modificators)
        - blocks
        - common
            - \_\_modificators
            - defaults.styls
    - templates (React html main entry)
- webpack.config.js (With architecture for transform stylus to CSS, ES6/ES7/ES8 to ES5 and .pug to .html)
- .babelrc
- .gitignore
- node_modules

# Launch

- Development

This command immediately open the browser on the http://localhost:8080, will make the build and will watches your changes!

```sh
yarn run dev
```

- Production

```sh
yarn run build
```

# Reqirement

- Node.js >= 8+
- Webpack 4+
- React 16+


# Tech

Dillinger uses a number of open source projects to work properly:

* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Webpack] - Module bundler
* [Stylus] - Expressive, dynamic, robust css

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Webpack]: <https://webpack.github.io/>
   [Stylus]: <http://stylus-lang.com/>
