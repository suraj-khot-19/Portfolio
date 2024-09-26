<p>My Portfolio using react.js</p>

<h1>Hosting on Github</h1>
<ul>
    <li>Install git pages</li>
        <pre>PS D:\Workspace\portfolio> npm i gh-pages --save-dev</pre>
    <li>Add homepage to package.json</li>
        <pre>
            {
                "homepage": "https://suraj-khot-19/github.io/Portfolio",
                ....
            }
        </pre> 
    <li>change start tag in package.json</li>
        <pre>
            "scripts": {
                "predeploy": "npm run build",
                "deploy":"gh-pages -d build",
            },
        </pre>
    <li>now npm run deploy</li>
        <pre> 
            PS D:\Workspace\portfolio> npm run deploy
        </pre>

</ul>
