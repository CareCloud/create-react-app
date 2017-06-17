# react-scripts

This package includes scripts and configuration used by [Create React App](https://github.com/facebookincubator/create-react-app).<br>
Please refer to its documentation:

* [Getting Started](https://github.com/facebookincubator/create-react-app/blob/master/README.md#getting-started) – How to create a new app.
* [User Guide](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md) – How to develop apps bootstrapped with Create React App.


# CareCloud React Scripts

We wanted to have more control of the underlying scripts that are used to initialize a new ReactJS application. Facebook's Create React App tool is incredibly easy to use however, granualar customization is not readily possible.
We want to use the all of the great Create React App features and also add our own packages and custom configurations without having to repeat these actions on each new application we create. 

In order to acheive this we will need to add some custom configuration to this package in particular. We can then call this specific react-scripts package on build using the example command below.

### Create a new ReactJS application using our fork
```
create-react-app --scripts-version @carecloud/react-scripts my-cool-app
```

### How add additional customizations

1. Fork this repository
```
$ cd your-dev-directory
$ git clone https://github.com/CareCloud/create-react-app
```

2. Navigate to the react-scripts directory
```
$ cd packages/react-scripts
```
#### React Scripts
This is where the actual work for customizing takes place. It's most likely that you'll be extending settings found in the webpack configuration. These files can be found in `config` directory. I recommend you keep custom files with the `config/carecloud` directory in order to colocated our customizations in one place. This should make it easier to continue rebasing from the Facebook fork.

### Testing your customizations

When you're ready to check if your contribution is working as designed the next thing you need to do is create a new app with the 
custom script. The `create-react-app` package accepts a `--scripts-version` argument which allows us to define the custom script package we want to use in order to build our new application.

```
create-react-app --scripts-version @carecloud/react-scripts my-cool-app
```

This argument should be an NPM located on a local or remote registry. For local development I recommend you run [Sinopia](https://github.com/rlidwka/sinopia)


#### Developing Node Packages Locally

1. Install Sinopia 
[Sinopia](https://github.com/rlidwka/sinopia) is a package that lets you run a private Node Manager locally

```
# installation and starting (application will create default
# config in config.yaml you can edit later)
$ npm install -g sinopia
$ sinopia
```
2. Update your NPM configuration to scope @carecloud packages locally
```
# npm configuration
$ npm config set @carecloud:registry http://localhost:4873
```

Now if you try to install any package with the `@carecloud` scope prefix, NPM will look for the package on the local server. 

3. Add User
```
npm adduser --registry http://localhost:4873

```


```
# OPTIONAL > if you use HTTPS, add an appropriate CA information
# ("null" means get CA list from OS)
$ npm set ca null


```

4. Run Sinopia

```
sinopia
``` 

5. Publish You Packages Locally

When you're ready to publish your local package to the Sinopia server in order to test it in your other projects, just run this command from the root directory of the project where the package.json is located.

```
npm publish
```

6. Updating your package in Sinopia

There are two quick ways to republish your package in Sinopia. 

* Update the version number is the `package.json` file and run
    ```
    $ npm publish
    ```

* Unpublish and Republish your package to Sinopia.

```
$ npm unpublish --force && npm publish
```
This will republish your package with the same version number. This is helpful if you're not interested in update the version number until you're ready to push your changes to a repository.