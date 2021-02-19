
Here is the step by step guide, how to deploy react app on github pages?
------------------------------------------------------------------------
copied from - https://dev.to/yuribenjamin/how-to-deploy-react-app-in-github-pages-2a1f

1. First create a repository named my-app using create-react-app.


   >     npm init react-app learn-react-app


2. We need to install GitHub Pages package as a dev-dependency.

      
   >     cd learn-react-app

   >     npm install gh-pages --save-dev


 3. Add properties to package.json file.

    The first property we need to add at the top level homepage second we will define this as a string and the value will be 

    >     `"http://{username}.github.io/{repo-name}" {username}`

    is your GitHub username, and {repo-name} is the name of the GitHub repository you created it will look like this :

    >
    >     "homepage": "http://imharshm.github.io/learn-react-app"

    Second in the existing `scripts` property we to need to add `predeploy` and `deploy`.

    >     "scripts": {
    >     //...
    >     "predeploy":
    >      "npm run build",
    >     "deploy": "gh-pages -d build"
    >     }


4. Create a Github repository and initialize it and add it as a remote in your local git repository.

    Now, create a remote GitHub repository with your app name and go back initialize this

    >     git init

    add it as remote

    
    >     git remote add origin git@github.com:imharshm/learn-react-app.git

 
5. Now deploy it to GitHub Pages.

   just run the following command :

    
    >     npm run deploy

    this command will create a branch named gh-pages this branch host your app, and homepage property you created in package.json file hold your link for a live     preview, or you can open the branch setting scroll down to GitHub Pages section you will find this:

    >     https://imharshm.github.io/learn-react-app/



6. commit and push your commit to GitHub. Optionally

    >     git add .
    >     git commit -m "Your awesome message"
    >     git push origin master
