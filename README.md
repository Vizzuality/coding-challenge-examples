# Software engineer @ Vizzuality "Importer Challenge"


## Instructions for completing and submitting the challenge:

First thing first. This coding challenge is about creating a space for you to share with us how you work and reason, what things you care about when doing coding work, and how you approach problem solving. As such, through this challenge we are not expecting to check if you know the finest algorithms, have all the right answers to a given situation or if you are the best coder in the world. We believe there are no right or wrong answers, so please make yourself comfortable and focus on what you know best.


## 1. This is what you need to do:

As part of this exercise, you need to build a small REST API. This API should have two endpoints:

- POST: expects a CSV payload and saves the data to a MongoDB or Elasticsearch database
- GET: reads data from that same database and serves responses as JSON documents. Filters on the data should be implemented, preferably as query parameters.

Each endpoint needs to be implemented as its own standalone application. They will share the underlying data storage, but will not be aware of each other.

Both apps, as well as the underlying dependencies, must be configured to run using a docker-compose file you must provide. You can use either nodejs, python or rails. Document in the code/config files any significant decisions you make as you go (be concise). Tests are a plus.


## 2. Basic Requirements:

These are the minimum things your solution must do so we can properly evaluate your approach. We tried to keep it easy and simple, as to not take up much of your precious time:

- Use your favourite ORM/DB abstraction library to handle database objects.
- Use a framework - it may be overkill for such small apps, but real-world apps are never this small.
- Document how to start your application in a docker + docker-compose environment.
- There is no need to create a web interface


## 3. Optional Goals:

Found the basic requirements too easy? Want to go the extra mile just to impress us? Whatever the reason is, here are some optional ways in which you can make it super clear to us that you are a great developer:

- If you know more than one of the programming languages we’re looking for, implement each microservice using a different one. In other words, extra kudos will be given if you use two different ones, one per app.
- Add tests to your code.
- Add complex filters.
- We use and love open source software, and all OSS code must be properly documented. Add relevant documentation, beyond the “quickstart”, as you would for a publicly available OSS project.


## 4. Things to keep in mind:

- Be pragmatic and mindful of the trade-off between feature-completeness and complexity/performance.
- In a real world scenario, the data file could be a lot larger.
- Assume a "write once, read many" scenario, where users may be willing to wait a few minutes for the file to be uploaded, depending on its size, but the GET endpoint needs to be fast.
- This code challenge should match your CV. If you have experience with python or node, use that language. If you have experience with both, use this as an opportunity to impress us with your multi-language skills.
- **Please submit your ideas to us by Thursday 12th September (close of play)**. This will give us enough time to review your challenge with the rest of the team before the next interview. 
- Based on previous candidate experiences, we believe **it will take you between 6 and 10 hours to complete the challenge**. If you see yourself allocating a lot more than that, you are including too much and/or overcomplicating it :)


## 5. Data

[emissions.csv](data/emissions.csv)


## 6. So, I submit the challenge. What will happen during the interview?

- In the upcoming interview we will take some time to understand more about you, your skills, and your previous experiences that relate to this role. We’ll take some time to explore together your coding challenge submission, and will ask you any clarifying questions we might have. 
- This will also be an opportunity for you to provide some more context about the challenge, the assumptions you made, and add anything that you might want.
- Finally, we will also allocate some time for you to ask any questions about anything and everything you would like to know more about (ie. role, how we work at Vizzuality, our culture, benefits, etc.)
- The interview will last 120 minutes (max)


**“The Importer Challenge”, has been created with the sole intention of being used as a guiding document for the current recruitment process, and we won't be using any part of it within our internal projects.**

