DOCKER_IMAGE="$1"
 docker run -p 8082:8082 \
  -e AWS_BUCKET=$AWS_BUCKET -e JWT_SECRET=$JWT_SECRET -e POSTGRES_USERNAME=$POSTGRES_USERNAME -e POSTGRES_DATABASE=$POSTGRES_DATABASE -e POSTGRES_PASSWORD=$POSTGRES_PASSWORD \
   -e POSTGRES_HOST=$POSTGRES_HOST -e AWS_REGION=$AWS_REGION -e AWS_PROFILE=$AWS_PROFILE -e URL=$URL -e AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID -e AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY $DOCKER_IMAGE 
 
 

