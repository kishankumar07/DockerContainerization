FROM node:20-alpine

WORKDIR /app

COPY . .

RUN ls -la /app  
# List files to verify that hello.js is copied

CMD [ "node", "hello.js" ]

##To run this docker file to build to image : 
      # docker build -t hello-docker .

# note: when building a file, you should be in the directory of Dockerfile

# after -t , it is the path to the docker file, here it is hello-docker and . , which tells the path where Dockerfile is located

# To verify an image was created : 
      #docker images / docker image ls

# To run the container in an interactive terminal :
      # docker run -it hello-docker 

#To run just the image inside the container:
      #docker run hello-docker      

#To view all the containers and images;
      #docker ps      

#to stop a container from running
      #docker stop [name of container]      

#To remove all stopped containers :
      #docker container prune      

#to remove a running container:
      #docker rm [name] --force      
      # --force flag is necessary , else it wont stop the running container and throws an error.
