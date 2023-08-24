FROM ubuntu:latest
LABEL authors="mrg"

EXPOSE 8080
ADD backend/target/app.jar app.jar
CMD [ "sh", "-c", "java -jar /app.jar" ]