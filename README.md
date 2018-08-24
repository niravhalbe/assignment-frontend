# assignment-frontend

This is a front application coded in Angular 6. This will call the Rest Api (assignment-backend repo) and display the Contacts on the browser. In addition, this will also be used to perform CRUD operations.

Steps to run:
1. First run the rest api solution (assignment-backend repo)
2. Open this solution (assignment-frontend) in Visual Studio Code
3. Copy the rest api browser url and paste the same in Contact-Client > src > app > contact.service.ts > uri
4. Open the integrated terminal and run the command - ng serve
5. The application will not be running on the default http://localhost:4200

If you face problems in running the solution, follow the below steps:

Since this project includes package.json, we need to first open the project in the vs code editor. Then run the following command:
npm install --save-dev @angular-devkit/build-angular

This will download all the dependencies.
No run the below command:
ng serve
