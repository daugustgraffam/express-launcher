# SIFTer: Standardized Integration Functionality Tester
## A tool to allow only the finest of integration branches to pass through.

This is a tool that can be run on a created integration branch to verify basic functionality is intact. This should prove very useful prior to a handoff for testing. It checks the basic happy paths for things like account creation, checkout on a published site, Square Sync status and more. It provides a high level readout of what is and is not functioning on the branch.

 >IMPORTANT NOTE:  Due to the constantly evolving state of our testing environments, false negatives may occur. These can be caused by environmental slowness or changes to the flows (perhaps introduced by you!). Please treat this tool as a diagnostic utility. It will provide you with the login info for accounts it creates so that you may easily verify any issues it discovers. While this tool will not completely negate the need for manual checks, it will allow you to focus only on the areas where environmental issues or flow changes cause the automation to fail.

 REQUIREMENTS:  Users will need to have Node.js installed. 

 ### Installation with the DUST installer:

`bash setup.sh`

DUST (the Direct User Setup Thingy) will handle installation of all dependencies. 

### Launching SIFTer

`bash sifter.sh`

We are constantly working on keeping these tests as up to date as possible. This will pull any updates to the tests and then launch the tool in your browser of choice.

```
This can be done manually as well using the following commands:

git submodule update --recursive --remote
nvm use
node index
In browser, navigate to http://localhost:9002/ 
```

### Frequently Asked Questions

Q: What do I do if port 9002 is already in use?

A: You can close the other program prior to launching this tool. Otherwise you can use this command: `kill $(lsof -t -i:"9002")` to manually close whatever program is currently running on that port.


Q: Intermittently, one of the tests fails to launch and provide logs. What is the fix for this?

A: This issue was resolved with the release of SIFTer 2.0. If you find it persisting please reach out in the #sifter-help room on Slack


Q: I'm receiving error `./Setup/first-time-setup.sh: line 3: nvm: command not found` or similar NVM error when setting up. How do I fix this?

A: This can be caused if you have an older version of Node installed. You can install NVM using the command `nvm install` and run the install script again.
