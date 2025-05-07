**Importer Challenge - Backend Engineering @ Vizzuality**

---

Instructions for completing and submitting the challenge:
First things first. This coding challenge is about creating a space for you to share with us how you work and reason, what things you care about when doing coding work, and how you approach problem-solving.

As such, through this challenge we are not expecting to check if you know the finest algorithms, have all the right answers to a given situation or if you are the best coder in the world. We believe there are no right or wrong answers, so please make yourself comfortable and focus on what you know best.

## ✨ Overview:

Design and implement a robust data ingestion and querying system using a modular backend architecture. 
The goal is to simulate a real-world import pipeline that scales well and meets performance, quality, and maintainability standards.

Please read carefully all the instructions. If you feel that something is not clear, please reach out, or feel free to make an educated guess!


## 📆 Time estimate

Please submit your ideas within 7 days of receiving the challenge, so that we have enough time to review your solution with the rest of the team
before the next interview. 

Based on our previous experience, and the available tooling nowadays, we believe that it should take no more than 8-10h.
But do not let this to be a limiting factor to you. Good enough means good enough, but it's up to you how much do you want to polish it

---

## 1. Requirements

You are required to implement a small system that allows importing and querying environmental data.

This system must include:

### A. **CSV Import Microservice**

* Accepts a CSV upload (e.g., via POST endpoint).
* Parses and validates the file.
* Stores the data in a **relational database**.
* Performs basic aggregation (e.g., record count, min/max for numeric fields) post-import.

### B. **Query API Microservice**

* Exposes a REST API to query the imported dataset.
* Must support:
    * Filtering by any field (query params)
    * Pagination and sorting
* Must return results quickly.

### C. **Infrastructure & Tooling**

* Use a single GitHub repository (no need to create separate repositories for the services)
* Provide a comprehensive commit history, so we can better understand your process and approach to version control
* Use **Docker + docker-compose** to deliver a working setup. Provide a way to run your application with it and document how to do so.
* Provide **unit and/or integration tests**. Use you preferred approach and tools for testing, but make sure that your application is well tested.
* Use Typescript and any Node.js framework and ORM (e.g., Drizzle, Prisma, TypeORM).
* Provide any code-styling tool of your choice (e.g. ESLint)
* Add a basic testing pipeline to your project. Your code should be automatically tested when pushed upstream.
* Document the setup and usage in a `README.md`.


---

## 2. Optional goals

Found the basic requirements too easy? Want to go the extra mile to impress us? 
Whatever the reason is, here are some optional ways in which you can give us a better sense of your approach, of your analytical and communication skills and of what you care about:

* Use **two different languages/frameworks** (e.g., NodeJS for import, Python FastAPI for query).
* Add a basic **rate limiter** to the query service.
* Include profiling results or comments on performance considerations.
* Add a metadata endpoint (e.g., `/status`) to expose info like total records, last import, schema version.
* We use and love open source software, and all OSS code must be properly documented. Add relevant documentation, beyond the “quickstart”, as you would for a publicly available OSS project.
* Do you think something is missing/you can add useful features? Go for it!

---

## 3. Things to keep in mind:

- Be pragmatic and mindful of the trade-off between feature-completeness and complexity/performance. Completeness is better than show-offs
- In a real world scenario, the data file could be a lot larger.
- Assume a "write once, read many" scenario, where users may be willing to wait a few seconds for the file to be uploaded, depending on its size, but the GET endpoint needs to be fast.
- Based on the ideas above, **it is totally up to you how to model** your database to support the requirements
- Feel free to use AI tools to complete the challenge: You are going to use it in the job. Please be mindful on the output: We are looking for engineers, not vibe coders.


## 4. What we care about:

* Completeness of the requirements. We'd rather have a **solid** completeness of the requirements (proper handling of errors/edge cases), rather than half-baked mix of requirements and bonus points
* Code clarity, structure and documentation. Deliver code for humans, not machines. In a real world scenario, people other than yourself will be working with it. 
* Data modeling and API design decisions. Standardization and best practices do matter, when applicable.
* Testing approach. If it's in the code, it should be tested.
* Infrastructure reliability. Your setup should allow us to spin up a working system following your docs.
* Optional goals and overall polish.

## 5. Data

This is the file you'll have to use for the challenge

[emissions.csv](data/emissions.csv)

## 6. So, I submit the challenge. What will happen during the interview?

- In the upcoming interview we will take some time to understand more about you, your skills, and your previous experiences that relate to this role. We’ll take some time to explore together your coding challenge submission, and will ask you any clarifying questions we might have.
- This will also be an opportunity for you to provide some more context about the challenge, the assumptions you made, and add anything that you might want.
- Finally, we will also allocate some time for you to ask any questions about anything and everything you would like to know more about (ie. role, how we work at Vizzuality, our culture, benefits, etc.)
- The interview will last 120 minutes (max)

**“The Importer Challenge” has been created with the sole intention of being used as a guiding document for the current recruitment process. This means we won't be using it (all or parts of it) within our projects.**

