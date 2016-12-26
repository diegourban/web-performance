# Projeto do Curso de Otimização de Performance Web do Alura

## Installation
1. Install gulp globally:

  If you have previously installed a version of gulp globally, please run `npm rm --global gulp` to make sure your old version doesn't collide with gulp-cli.

  * `npm install --global gulp-cli`

2. Install project dependencies:

  * `npm install`

3. Install and configure a local http server:

 * Example of NGINX and Linux
    1. [Install NGINX](http://nginx.org/en/docs/install.html);
    2. Create a [configuration file](https://nginx.org/en/docs/beginners_guide.html#conf_structure) at your NGINX configuration folder
    
      Example: /etc/nginx/config.d/web-performance.conf
    3. And add this content to your configuration file:  
      ```
      server {
        listen 2020;
        root /home/diego/git/web-performance/site;
      }

      server {
        listen 3030;
        root /home/diego/git/web-performance/dist;
        gzip on;
        gzip_types text/css application/javascript image/svg+xml;
        location /assets {
		      expires 1y;
	 	      add_header Cache-Control public;
	      }
      }
      ```
    4. [Start/Reload NGINX configuration](https://nginx.org/en/docs/beginners_guide.html#control);
 
## Usage
1. At your project's folder, run:

  * `gulp` - to generate the dist version

2. At your browser run:

  * `http://localhost:2020` - for the original version
  
  * `http://localhost:3030` - for the optimized version
