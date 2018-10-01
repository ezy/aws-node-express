# 🤓 Express JS on AWS Elastic beanstalk

An example setup to get your Express JS application deployed to AWS Elastic Beanstalk. There's so many config options and quite a few gotchas this was the most basic setup I found for Node.

## App Setup

* Clone the repository
* Cd to dir and run `npm install`
* Use the Elastic Beanstalk console to create a new NodeJS Application and environment
* Go to Configuration and set your Node -v to 8.11.4 and PORT=8081 in env vars
* Install EB-cli
* Setup with `eb init` and select previously setup Application
* Select your environment with `eb list` then `eb use <env-name>`
* Run `eb deploy`
