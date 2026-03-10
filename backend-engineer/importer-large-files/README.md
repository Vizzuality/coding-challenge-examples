# Backend Software Engineer @ Vizzuality — Large File Importer Challenge
### Mid–Senior Level

---

First things first. This coding challenge is a space for you to share with us how you work and reason, what you care about when doing backend engineering work, and how you approach problem-solving.

We are not looking for the finest algorithms, all the right answers, or the world's best coder. We believe there are no right or wrong answers — so please make yourself comfortable and focus on what you know best.

---

## 1. What You Need to Build

Design and implement a small system split across two microservices:

**A. CSV Import Service**
- An endpoint that accepts a payload containing a URL pointing to a very large CSV file (multiple GBs) hosted somewhere. This endpoint should load the data from that CSV file and persist it to a local database.
- An endpoint that exposes the status of the import process (e.g. "running" / "finished" / "failed").
- An endpoint that allows cancelling a running import process.

**B. Query API Service**
- Exposes a REST API to query the imported dataset.
- Must support filtering by any field (via query parameters), pagination, and sorting.
- Must return results quickly — optimise for read performance.

Both services share the same database. All code and dependencies must run via a Docker Compose file that you provide.

Please document any significant decisions directly in your code or config files — be concise but clear.

---

## 2. Basic Requirements

These are the minimum things your solution must include:

- **One service must use Node.js and TypeScript.** The other service may also use Node.js/TypeScript, or optionally Python (typed). These are the core languages we use at Vizzuality.
- Use a single GitHub repository. Provide a comprehensive commit history so we can follow your process.
- Provide a working Docker Compose setup and document how to run it.
- Use the same tools you would reach for in a production-grade project: API frameworks, ORMs, build tools, linters, formatters — only as far as you actually need them.
- No web interface or authentication/authorization is required.
- **Tests are mandatory.** Provide a meaningful test suite (unit and/or integration) with coverage reporting for each service, using whatever testing framework you prefer.
- **CI/CD pipeline using GitHub Actions.** Tests must run automatically on push (CI). Also include a CD pipeline example — it does not need to deploy to a real environment, but should illustrate how you would structure a deployment workflow (e.g. build, push image, deploy stage).
- **Cloud architecture design document.** Describe or sketch how you would deploy and operate this system in a cloud environment. We are especially interested in your reasoning around:
  - Service selection and justification given the workload characteristics
  - How you would handle large file ingestion at scale
  - Database choice and configuration for write-heavy import workloads vs. read-heavy query workloads
  - Observability: logging, metrics, and alerting strategy
  - Trade-offs between cost, operational complexity, and reliability
  - A Terraform/OpenTofu IaC sketch, architecture diagram, or a well-written design document are all valid formats.

---

## 3. Optional Goals

Found the basics too easy, or want to go the extra mile? Below are optional ways to give us a better sense of your depth, analytical thinking, and engineering instincts. None of these are required, but they are valued.

**A. Richer Import Status**
Add more detail to the import status endpoint — e.g. percentage completed, estimated time remaining, record counts. Or briefly describe how you would implement this, the technical challenges it raises, and how it scales.

**B. Performance & Scalability Notes**
Comment on the performance characteristics of your implementation: throughput bottlenecks, memory footprint, concurrency model, and how your approach would hold up if the file were 10× or 100× larger than the sample provided.

---

## 4. Things to Keep in Mind

- Be pragmatic. We value a clean, working solution over an incomplete one crammed with features.
- Users are fine with imports taking tens of seconds or even minutes. Do not optimise for sub-second response times on the import trigger endpoint.
- If a requirement is unclear, make an educated guess and document your assumption. We care more about your reasoning than the specific choice.
- This code challenge should reflect your CV. If you have hands-on experience with tools that are a natural fit here, use them and show us why.
- Based on previous candidates' experience, this should take between 6 and 10 hours. If you find yourself well beyond that, you may be over-engineering it.

---

## 5. Using AI Tools

If you use LLM assistants as part of your daily engineering work, please feel free to use them for this challenge. We use AI tools at Vizzuality and see them as a legitimate and valuable part of a modern engineer's toolkit.

We do ask for transparency about where and how you used them. In your submission, briefly note which parts of the work involved AI assistance — for example:

- Project scaffolding or boilerplate generation
- Writing or reviewing tests
- Docker / Compose configuration
- Architecture brainstorming or cloud design
- Code review, refactoring, or debugging

**We are hiring engineers, not vibe-coders.** What we want to understand is how you think, what you choose to delegate to AI, what you verify, and where you push back. A solution built uncritically from AI output with no understanding of the underlying trade-offs will be evident in the interview.

---

## 6. Data

Use the [Jan 2024 High Volume For-Hire Vehicle Trip Records (CSV)](https://public-vizz-storage.s3.amazonaws.com/backend/coding-challenges/large-file-importer/fhvhv_tripdata_2024-01.csv) (~2.9 GB uncompressed) from the [NYC TLC Trip Record Data page](https://www1.nyc.gov/site/tlc/about/tlc-trip-record-data.page) as your import dataset.

Your application only needs to support files with this specific structure (same columns, same data types, same column order). However, your solution must handle file sizes up to two orders of magnitude larger than this sample — this is just a (large) representative slice.

---

## 7. Submission & What Happens Next

**Please submit within the timeframe agreed with your hiring manager** (typically one week). This gives the team enough time to review before the next interview.

During the interview (120 minutes max) we will:

1. Take time to understand your background, skills, and experience relevant to this role.
2. Walk through your submission together and ask clarifying questions.
3. Give you space to add context, explain assumptions, or highlight anything you want us to notice.
4. Leave time for any questions you have about the role, the team, how we work, and Vizzuality as a company.

---

*"The Importer Challenge" has been created solely for use as part of Vizzuality's recruitment process and will not be used in any of our projects.*
