# Backend Software engineer @ Vizzuality "Large File Importer Challenge"

## Instructions for completing and submitting the challenge

First things first. This coding challenge is about creating a space for you to
share with us how you work and reason, what things you care about when doing
backend engineering work, and how you approach problem-solving.

As such, through this challenge we are not expecting to check if you know the
finest algorithms, have all the right answers to a given situation or if you are
the best coder in the world. We believe there are no right or wrong answers, so
please make yourself comfortable and focus on what you know best.

## 1. This is what you need to do

As part of this exercise, you need to build a small REST API. This API should
have three endpoints:

- An endpoint that expects a payload containing a URL, which points to a very
  large CSV file (multiple GBs) hosted somewhere. This endpoint should load the
  data in that CSV file and save it to a local database.
- An endpoint that shows the status of the file import process (a simple
  "running"/"finished"/... will do).
- An endpoint that allows cancelling a running import process.

Your code, as well as any underlying dependencies, must be configured to run
using a Compose file you must provide.

Please document in the code/config files any significant decisions you make as
you go (be concise).

Tests are a plus (see also the section below on Optional Goals).

If you use LLM assistants as part of your daily engineering work, please feel
free to use them for this challenge, but please be transparent about where you
used them (project scaffolding? dev environment configuration? writing tests?
Compose setup? etc.). We acknowledge that LLM assistants are an important part
of engineers' development support tooling, and we are interested in
understanding how you use them.

## 2. Basic Requirements

These are the minimum things your solution must do, so we can properly evaluate
your approach. We tried to keep it easy and simple, as to not take up much of
your time:

- Use TypeScript or typed Python for your solution. These are the core languages
  we use at Vizzuality.
- Provide a way to run your application with Compose and document how to do so.
- Use the same tools you would use in a production-grade project (API
  frameworks, test runners/frameworks, test coverage reporting, build tools,
  linters, formatters... - only as far as you need them: these are just
  examples). This may be overkill for such a small app, but real-world apps are
  never this small.
- There is no need to create a web interface or worry about user
  authentication/authorization.

## 3. Optional Goals

Found the basic requirements too easy? Want to go the extra mile to impress us?
Whatever the reason is, below are some **optional** ways in which you can give
us a better sense of your approach, of your analytical and communication skills
and of what you care about.

- Add tests to your code or outline a testing strategy

You can implement a minimal but meaningful test suite using a testing framework,
or outline in a short design document how you would test this application.

- Add more complex import status report (like a "percentage completed"
  estimation, or an ETA, for example).

You can implement a way to report the progress of the process, or outline
briefly how you would do it, which challenges you anticipate at scale, and so
on.

- How would you deploy this application in a cloud environment?

You can add some basic Terraform/OpenTofu IaC setup, or outline how you would
approach deploying and running this application in a cloud environment: in this
case a brief design document or a pencil-on-paper sketch could be meaningful
ways to share your way of thinking and expertise.

## 4. Things to keep in mind

- Your application and architecture can be as simple or as complex as you want,
  but be pragmatic and mindful of the trade-off between feature-completeness and
  complexity/performance/time to implement.
- Assume that users are ok with imports taking tens of seconds or even minutes
  (basically with anything that would not qualify as a "fast" response in terms
  of a frontend application, or that would cause a gateway timeout under
  sensible configurations).
- If you are not sure about a particular requirement/detail, make an educated
  guess and document your assumption.
- This code challenge should match your CV. If you have experience with any
  tools that are perfect for this task, this is your opportunity to demonstrate
  that, and impress us.
- **Please submit your ideas to us within the timeframe agreed with your hiring
  manager** (usually one week). This will give us enough time to review your
  challenge with the rest of the team before the next interview.
- Based on the experiences of previous candidates, we believe **it will take you
  between 6 and 10 hours to complete the challenge**. If you see yourself
  allocating a lot more than that, you may be including too much or
  overcomplicating things :)

## 5. Data

Use the [Jan 2024 High Volume For-Hire Vehicle Trip Records
(CSV)](https://public-vizz-storage.s3.amazonaws.com/backend/coding-challenges/large-file-importer/fhvhv_tripdata_2024-01.csv)
(around 2.9GB uncompressed) dataset, from the original Parquet data file from
the [NYC TLC Trip Record Data
page](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) as your
import data file. Your application only needs to support files with this
structure (same columns, with the same data types, in the same position of the
csv). However, your solution needs to smoothly handle file sizes up to two
orders of magnitude higher than this one - this is just a (large) sample.

## 6. So, I submit the challenge. What will happen during the interview?

- In the upcoming interview we will take some time to understand more about you,
  your skills, and your previous experiences that relate to this role. We’ll
  take some time to explore together your coding challenge submission, and we
  will ask you questions to clarify anything that we may be unsure about.
- This will also be an opportunity for you to provide some more context about
  the challenge, the assumptions you made, and add anything you might want.
- Finally, we will also allocate some time for you to ask any questions about
  anything and everything you would like to know more about (ie. the role we are
  hiring for, how we work at Vizzuality, our culture, benefits, etc.)
- The interview will last 120 minutes (max)

If you have any other questions about the challenge, please reach out to your
hiring manager.

**“The Importer Challenge” has been created with the sole intention of being
used as a guiding document for the current recruitment process. This means we
won't be using it (all or parts of it) within our projects.**
