# ats-resume-analyzer
AI-powered ATS Resume Analyzer that evaluates resumes, provides ATS scores, identifies missing keywords, and suggests improvements.

What i am  building?

I am  building an **ATS (Applicant Tracking System) Resume Analyzer**, which is a web application where:

- Users create accounts and log in.
- Users upload their resumes.
- The system extracts information from resumes.
- The system analyzes the resume and gives an ATS score.
- The system compares the resume with job descriptions.

To build this I divide the project into three parts :

ATS-Resume-Analyzer
│  
├── frontend → React application (User Interface)  
├── backend → Node.js + Express API  
└── python-parser → Python service for resume analysis

First i install React into my frontend folder

now,
      Why did I create the `backend` folder?
      
The **backend** is the brain of your application.

Like:
- User clicks **Login** → Backend checks credentials.
- User uploads resume → Backend stores the file.
- User requests ATS score → Backend processes the request.

now i create some other folders inside our backend folder

1 controllers(Folder)
it contains the actual logic of my application.
Like its a worker that perfome the tasks.

2 routes(Folder)
it defines which URL calls which function.

3 models(Folders)
it defines how data is stored in the database.
Like a **database blueprint**.

4 middleware(Folder)
it runs before requests reach our application logic.

5 uploads(Folder)
it stores uploaded resume files

6 config(Folder)
it stores configuration settings.

now i have create two files in my backend 

1 .env
to stores secret information
like - ports or database url

2 server.js
it is the **main control room** of our backend.
like
- Starts the server.
- Connects all routes.


 NOTE-
Here i am going to create a well structured project like different file and folders for different things
by which we can easly access any part and debug it.





