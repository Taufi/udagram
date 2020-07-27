FROM beevelop/ionic AS ionic
 
# Install prerequisites 
# (if I want to use the curl command)
# RUN apt-get update && apt-get install -y curl
# CMD /bin/bash

WORKDIR /usr/src/app
 
COPY . .
 
RUN npm install

# so that ng can run without error
RUN npm install -g @angular/cli@7.3.9

#after npm install I obviously have to reload node-sass - otherwise there is an error
RUN npm rebuild node-sass
 
EXPOSE 8100

CMD [ "ionic", "serve"] 
# CMD [ "ionic", "serve", "--no-open"]