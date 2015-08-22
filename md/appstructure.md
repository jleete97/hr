## Application Structure

*Caveat: Still learning how to put this all together.*

HTML template directory: src/main/resources/public/
JavaScript subdirectory: js/
Stylesheet subdirectory: css/
Image subdirectory: images/

Main page: index.html
Subpages for views: *.html in the same directory

Application layout JS: js/app.js (includes routing)
Controller JS: js/controllers.js
Services JS: js/services.js

Uses index.html as a shell with login functions and a header.

Swaps in different views from other HTML pages.

All controllers declared in one file, likewise all services.

