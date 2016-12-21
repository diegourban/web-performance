# Projeto do Curso de Otimização de Performance Web do Alura

## Installation
1. Install gulp globally:

  If you have previously installed a version of gulp globally, please run `npm rm --global gulp` to make sure your old version doesn't collide with gulp-cli.

  * `npm install --global gulp-cli`

2. Install project dependencies:

  * `npm install`

3. Install and configure a local http server:

 * Example for NGINX and Ubuntu
    1. [Install NGINX](http://nginx.org/en/docs/install.html);
    2. Create a .conf file at your NGINX configuration folder with two server blocks
    
      /etc/nginx/config.d/web-performance.conf
      ```
      server {
        listen 2020;
        root /[some path]/web-performance/site;
      }

      server {
        listen 3030;
        root /[some path]/web-performance/dist;
        gzip on;
        gzip_types text/css application/javascript image/svg+xml;
      }
      ```
    3. start/reload NGINX;
 * Example for other http server:
    // TODO
 
## Usage
1. At your project's folder, run:

  * `gulp` - to generate the dist version

2. At your browser run:

  * `http://localhost:2020` - for the original version
  
  * `http://localhost:3030` - for the optimized version
