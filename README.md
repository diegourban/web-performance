# Projeto do Curso de Otimização de Performance Web do Alura

## Installation
* Install gulp globally:

  If you have previously installed a version of gulp globally, please run npm rm --global gulp to make sure your old version doesn't collide with gulp-cli.

  `npm install --global gulp-cli`

* Install project dependencies:
  `npm install`

* Install and configure a local http server:

 * Example for NGINX
    * Install NGINX
    * Create a .conf file at your NGINX configurations folder with the content:
      ```
      server {
        listen 2020;
        root /[some path]/web-performance/site;
      }

      server {
        listen 3030;
        root /[some path]/web-performance/dist;
      }
      ```
    * run NGINX
    
## Usage
* At your project's folder, run:

  `gulp` - to apply the performance

* At your browser run:

  `http://localhost:2020` - for the original version
  
  `http://localhost:3030` - for performed version
