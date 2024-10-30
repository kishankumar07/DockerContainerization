# set the base image to create the image for react app
FROM node:20-alpine
# From must be the first instruction in a Dockerfile

# create a user with permissions to run the app
# -S -> create a system user
# -G -> add the user to a group
# This is done to avoid running the app as root
# If the app is run as root, any vulnerability in the app can be exploited to gain access to the host system ( our local machine where this container is running)
# It's a good practice to run the app as a non-root user
RUN addgroup app && adduser -S -G app app

# set the user to run the app
USER app

# set the working directory to /app
WORKDIR /app

# copy package.json and package-lock.json to the working directory
# This is done before copying the rest of the files to take advantage of Docker’s cache
# If the package.json and package-lock.json files haven’t changed, Docker will use the cached dependencies
COPY package*.json ./

# sometimes the ownership of the files in the working directory is changed to root
# and thus the app can't access the files and throws an error -> EACCES: permission denied
# to avoid this, change the ownership of the files to the root user
USER root

# change the ownership of the /app directory to the app user
# chown -R <user>:<group> <directory>
# chown command changes the user and/or group ownership of for given file.
RUN chown -R app:app .

# change the user back to the app user
USER app

# install dependencies
RUN npm install

# copy the rest of the files to the working directory
COPY . .

# expose port 5173 to tell Docker that the container listens on the specified network ports at runtime
EXPOSE 5173

# command to run the app
CMD ["npm","run","dev"]

#Extra notes 
# -To start, npm create vite@latest .
# - after choosing React , then typeScript, no need to do npm install , because all that will be mentioned in Dockerfile and the packagages will be installed in the dockerized container while running.
#- Dockerfile is not created in src folder , it is created at root level, also same applies for .dockerignore
# - add node_modules in .dockerignore as same we do in .gitignore 
# - Once Dockerfile is ready with all these content, it's time to build it
            # docker build -t react-docker .

# so when Dockerfile is build, we get image , and only when we run it , it will run inside container to get the exact output.      
# to run it 
                  # docker run react-docker

# when running this, it will seems like it is running , but gives "cant access this webpage"  , why is that as I already said EXPOSE 5173 , so this mean EXPOSE has only one job, it tells docker that the container to listen to port 5173 at runtime                        
# So docker knows and the container also knows where to listen, but someone else is not knowing this at this stage. Any guesses?
# Remeber the localhost, the host mahcine also should know in which port it is running, till now nothing is set for localhost to know it.
# containers run in isolated environments and by default these containers do not expose this port to anyone or even the local machine where it is runnig (by default).
# PORT Mapping : to the rescue. i.e mapping the port between the  docker container and the localhost machine.
# kill the terminal and run this command : 

      # docker run -p 5173:5173 react-docker
#              (conatiner): (localhost)

# still it will not run correctly

# got to package.json and in the script change "vite" to "vite --host"


# to get all active running containers list
            # docker ps

# to get all containers list : 
            # docker ps -a

# to stop a docker contaner : 
            # docker stop [container id's first three / even name of the container
# after running if terminal returns the [part] in side bracket , then the operation was successful.

# to get rid of all stopped / inactive containers 
            # docker container prune

# to remove a container which is running 
            # docker rm [first three letters of conatiner id]      will not work
            
            # use 

            # docker rm [first three letters of container id] --force
# --force flag will remove it even it is running.            

#  before we are going to approach in right way , ensure all are clean , removed unused things from the docker image and containers.
# 

# docker built -t react-docker
# docker run -p 5173:5173 react-docker

            # great news it worked, now the default boilerplate of vite + React page is displayed on localhost:5173
# but when I make any changes at app.tsx nothing can be seen as a real time change in the browser why?
# how painful it is , to rebuild the conatiner every time for every changes made.             
# remember while building all codes and files are copied from the local directory to image directory, only copy, so that one persists without any real time change we make in our vscode.

# Go and refer the vite.config.ts file , I made an update there, that is necessary to get constant update while changing in localmachine.

            #usePolling:true

            