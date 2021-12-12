# IPM-Project
This project corresponds to a web application that was built with the help of an open-source model-view-viewmodel front end Javascript framework, Vue.js.

## In order to run the application, the user most follow the following steps:

0. If you don't have it, install node.js. You can get it on the following site: https://nodejs.org/en/download/
   Make sure you have node available globally by running the command:
 
           > node -v

   It should then show you the version of your node. If it doesn't, node is not properly installed. Try and contact our team.

1. After installing node.js you are gonna need vue. Run the following command: 
           
           > npm install -g @vue/cli @vue/cli-service-global

2. After installing vue, all you need is to download the project from git, and install the necessary dependencies (use the command bellow). Navigate to the wefit folder on two different console instances, you'll need them to run the backend and the frontend at the same time.

          > npm update

3. Run the following commands, one on each console (order shouldnt matter):
       
       Console 1:
          > npm run serve
       
       Console 2:
          > npm run db
           
4. On the console instance where you ran "npm run serve" wait for two links to be displayed. After that either click the any of the links or type them in your browser. 

5. You are now running wefit
