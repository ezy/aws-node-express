# 🤓 Express JS on AWS Elastic beanstalk

An example setup to get your Express JS application deployed to AWS Elastic Beanstalk t2.micro. There's so quite a few config options and gotchas when setting up an instance, and this was the most basic setup I found for Node.

## App Setup

* Use the Elastic Beanstalk console to create a new NodeJS Application and environment
* Go to Configuration and set your Node -v to 8.11.4 and PORT=8081 in env vars
* Clone the repository
* Cd to dir and run `npm install`
* Install EB-cli
* Setup your dir with `eb init` and select previously setup Application
* Select your environment with `eb list` then `eb use <env-name>` (or `eb create` an env from the console)
* Run `eb deploy` to upload to AWS
