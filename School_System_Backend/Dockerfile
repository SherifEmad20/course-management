#Dockerizing spring boot application
#Base image openjdk version 8
FROM openjdk:latest

#To add the runnable jar file of the backend project to the container
ADD ./target/school-backend-docker.jar school-backend-docker.jar

ENV DBCONNECTION host.docker.internal:3306

#To specify the command that runs the jar files in the /bin/bash in the container
ENTRYPOINT ["java", "-DdatabasePort=${DBCONNECTION}" ,"-jar", "/school-backend-docker.jar"]
