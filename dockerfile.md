FROM node:alpine
COPY . /app
WORKDIR /app
CMD node app.js

// docker build -t hello-docker .
telling docker to package our application - docker build 
-t hello-docker : giving tag to the image to identify it
. : where docker can find the docker file,here in the current directory

//docker image ls
To see all the images on this computer

//docker run hello-docker

We can dockerise any application by adding docker file to it. 
This docker file contain instructions to package the application to an image.
Once we have an image we can run it anywhere on any machine using that image.

//docker run ubuntu

//docker ps
//docker ps -a

//docker run -it ubuntu

----------------------------------------
      Docker compose
      Docker init
      Docker scout
      Docker compose watch
------------------------------------------      

Docker workflow : 1) Docker client
                  2) Docker Host  (Docker Daemon)
                  3) Docker registry ( docker hub )

--------------------------------------
      Docker commands: 
            FROM : The base image to use for the new image.
            WORKDIR
            COPY
            RUN
            EXPOSE
            ENV
            ARG
            VOLUME
            CMD
            ENTRYPOINT

---------------------------------------------            
To execute an image file :
       docker run -it ubuntu
--------------------------------------------------
