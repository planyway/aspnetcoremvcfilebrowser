Thanks first to https://github.com/filebrowser. Without filebrowser's filebrowser, this repository won't exist.

Ensure your webapp is working properly:
```
dotnet run
```
The normal appearance of the page:
![image](https://user-images.githubusercontent.com/92812919/215078822-4777f12d-7199-43fc-8907-85ad558801e9.png)

Laravel Mix is used in this app. The .vue files will be compiled only when you:

Install dependencies
```
npm install
```
Then start a watcher
```
npm run watch
```
Or compile codes for development use
```
npm run dev
```
Or compile for production use
```
npm run prod
```
After the .vue files are compiled, site.css and vue-site.js will be created in wwwroot.

In case someone wonders, webpack.mix.js, all things in VUE folder, package.json, mix-manifest.json, and changes in Views/Home/Index.cshtml and Views/Shared/_Layout.cshtml
are the only changes I made to the .NET Core MVC default template.

The next step is to let all filebrowser vue components work, then translate the Go codes to C#, so that it looks close to the original one:
![image](https://user-images.githubusercontent.com/92812919/215083854-b0307a7b-5f34-4077-b85e-48ea928dd8e2.png)

