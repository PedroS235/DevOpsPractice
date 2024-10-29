const quizData = {
    "Question 1": {
        question: "The parts that comprise an application (at runtime) are:",
        answers: ["data", "configuration", "test cases", "binaries"],
        correctAnswer: ["data", "configuration", "binaries"]
    },
    "Question 2": {
        question: "Every automated test has to be run during the CI process:",
        answers: ["True", "False"],
        correctAnswer: ["False"]
    },
    "Question 3": {
        question: "Environments have to be homogeneous in the sense that the services required to make the product/services work should be running either on a private infrastructure or in the cloud, but definitely not mixed:",
        answers: ["True", "False"],
        correctAnswer: ["False"]
    },
    "Question 4": {
        question: "It is advised that automated acceptance testing is followed by some manual testing:",
        answers: ["True", "False"],
        correctAnswer: ["True"]
    },
    "Question 5": {
        question: "The commit stage typically (i.e. in most general cases) includes the following steps :",
        answers: [
            "Compile the code (if necessary)",
            "Create binaries for use by later stages",
            "Run User Acceptance Tests (UATs)",
            "Perform analysis of code to check its health",
            "Run a set of commit tests (i.e. tests optimise to run very quickly)"],
        correctAnswer: [
            "Compile the code (if necessary)",
            "Create binaries for use by later stages",
            "Perform analysis of code to check its health",
            "Run a set of commit tests (i.e. tests optimise to run very quickly)"]
    },
    "Question 6": {
        question: "If the commit stage fails then indicate which of the following actions should be taken:",
        answers: [
            "Notify the operators and support staff.", 
            "Notify the developers who committed changes since the last successful build.",
            "Developers concerned with the failure should back their changes out from the VCS.",
            "Developers concerned with the failure should quickly start to fix the problem."],
        correctAnswer: [
            "Notify the developers who committed changes since the last successful build.",
            "Developers concerned with the failure should back their changes out from the VCS.",
            "Developers concerned with the failure should quickly start to fix the problem."]
    },
    "Question 7": {
        question: "The decision on how to deploy the candidate needs to involve:",
        answers: [
            "Developers", 
            "Operators",
            "Testers"],
        correctAnswer: [
            "Developers", 
            "Operators",
            "Testers"]
    },
    "Question 8": {
        question: "Team members should use VCS for:",
        answers: [
            "test scripts", 
            "binary output of your application's compilation",
            "source code",
            "configuration files"],
        correctAnswer: [
            "test scripts",
            "source code",
            "configuration files"]
    },
    "Question 9": {
        question: "A deployment script should be engineered to cover both the case of upgrading the candidate as well as installing from scratch:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 10": {
        question: "The configuration information (i.e. shell scripts, xml files, YAML files, etc) related to the application has to be managed differently that the source code: i.e no need to be tracked for changes, not tested:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 11": {
        question: "The “build master” should be a permanent role: i.e. the person who does the job is always the same:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 12": {
        question: "Virtualization improves the ability to test non-functional requirements:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 13": {
        question: "Everything that is “created” as a result of having executed the build process has to be checked into the VCS:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 14": {
        question: "The notion of “fail fast” represents the aim of trying to catch common errors as early as possible. The errors are introduced by:",
        answers: [
            "Developers", 
            "End-users",
            "Operators",
            "Analysts"],
        correctAnswer: [
            "Developers"]
    },
    "Question 15": {
        question: "A functional acceptance test script should include:",
        answers: [
            "the preparation of data (i.e. fill out the particular database with some representative data)", 
            "the deployment of the candidate in the production environment",
            "the compilation of the application",
            "the execution of acceptance tests",
            "the deployment of the candidate in a particular staging environment"],
        correctAnswer: [
            "the preparation of data (i.e. fill out the particular database with some representative data)", 
            "the execution of acceptance tests",
            "the deployment of the candidate in a particular staging environment"],
    },
    "Question 16": {
        question: "When doing CI, if you don't have a “comprehensive suite of automated tests” (i.e. these tests cases provide confidence that your application is working), a passing build means:",
        answers: [
            "any introduction change has not broken an existing functionality.", 
            "the most commonly used functionalities are not broken",
            "the application can be compiled and assembled."],
        correctAnswer: [
            "the application can be compiled and assembled."]
    },
    "Question 17": {
        question: "The process for getting software from version control into the hands of its expected users must not require any human interaction to achieve its objective:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 18": {
        question: "The commit stage is the vital first step of the deployment pipeline:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 19": {
        question: "The results of the commit stage need to be stored somewhere. This place is/are:",
        answers: [
            "the build environment", 
            "the artefact repository",
            "the version control system"],
        correctAnswer: [
            "the artefact repository"]
    },
    "Question 20": {
        question: "A good practice related to development pipelines that should be followed states that “you should only build your binaries once”. Based on such practice, indicate which of the following statements are true:",
        answers: [
            "If we recreate the binaries, we run the risk that some changes will be introduced.", 
            "The binaries are created during the commit stage",
            "This practice does not help to keep the deployment pipeline efficient",
            "The binaries are created for a specific environment"],
        correctAnswer: [
            "If we recreate the binaries, we run the risk that some changes will be introduced.", 
            "The binaries are created during the commit stage"]
    },
    "Question 21": {
        question: "The CI process (i.e. compile, test, packaging) should take no more than a few minutes:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 22": {
        question: "You do need a continuous integration software (e.g. Jenkins, GitLab, Bamboo) to do CI:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 23": {
        question: "The commit stage begins when a change to the state of the project is detected. Keep in mind that the state of the project should be handled by a version control system:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 24": {
        question: "The recommend CI process (eventually) has to include the execution of a comprehensive suite of automated tests:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 25": {
        question: "Scripts used in the implementation of the deployment pipeline have to be kept in a version control repository:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 26": {
        question: "Select the statements that are true:",
        answers: [
            "The principles to manage the organisation's infrastructure and the application's environment are the same.", 
            "The techniques to manage the testing and production environments should be identical.",
            "Every testing environment must be identical to the production environment.",
            "The boundary between the application's environment and the rest of the organisation's infrastructure is always very clear.",
            "Testing environments should be production-like"],
        correctAnswer: [
            "The principles to manage the organisation's infrastructure and the application's environment are the same.", 
            "The techniques to manage the testing and production environments should be identical.",
            "Testing environments should be production-like"]
    },
    "Question 27": {
        question: "External (build) dependencies within your application are:",
        answers: [
            "components under development by other teams within your oganisation", 
            "test scripts",
            "third-party libraries"],
        correctAnswer: [
            "components under development by other teams within your oganisation", 
            "third-party libraries"]
    },
    "Question 28": {
        question: "Modern Cl servers provide an artefact repository:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 28": {
        question: "Infrastructure smoke tests are aimed at catch common failures. They should be very simple as they are intended to assert the presence or absence of key resources. Some examples of smoke tests for a staging environment are:",
        answers: [
            "Confirm the VCS is up and running", 
            "Confirm a record from the database can be retrieved",
            "Confirm the email service (required by the product) can send emails",
            "Confirm a new functional feature of the candidate is working fine",
            "Confirm a third-party service (required by the product) is reachable",
            "Confirm the application can be built"],
        correctAnswer: [
            "Confirm a record from the database can be retrieved",
            "Confirm the email service (required by the product) can send emails",
            "Confirm a third-party service (required by the product) is reachable",]
    },
    "Question 29": {
        question: "If you have a good Configuration Management Strategy it should be easy (i.e. without having to resort to “heroic” efforts) to:",
        answers: [
            "automate the creation of an environment", 
            "reproduce any of the environments",
            "make incremental changes to the environments",
            "automate the provisioning of an environment"],
        correctAnswer: [
            "reproduce any of the environments",
            "make incremental changes to the environments",]
    },
    "Question 30": {
        question: "The goal of the acceptance test stage is to:",
        answers: [
            "Provide quick feedback on problems with the latest build", 
            "Provide quick feedback on bugs in the small",
            "Assert that the (candidate) product delivers the value the customer is expected",
            "Assert that the (candidate) product works in the same way as in the developer's environment"],
        correctAnswer: [
            "Assert that the (candidate) product delivers the value the customer is expected",]
    },
    "Question 31": {
        question: "The process to deploy the candidate to every environment should not be the same:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 32": {
        question: "It is advised to create a script for each stage in the deployment pipeline:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 33": {
        question: "The defining characteristic(s) of Cloud computing is/are:",
        answers: [
            "computing resources can expand and contract to meet specific needs", 
            "your information is stored in the resources of a third-party company (the owner of the cloud)",
            "it is always cheaper than owning your own infrastructure",
            "computing resources are accessible through software services",
            "it requires no capital investment in infrastructure"],
        correctAnswer: [
            "computing resources can expand and contract to meet specific needs", 
            "your information is stored in the resources of a third-party company (the owner of the cloud)",
            "computing resources are accessible through software services",
            "it requires no capital investment in infrastructure"]
    },
    "Question 34": {
        question: "Velocity is the metric that measures:",
        answers: [
            "The rate at which the development team delivers working, tested, ready for use code.", 
            "Number of builds per day",],
        correctAnswer: [
            "The rate at which the development team delivers working, tested, ready for use code."]
    },
    "Question 35": {
        question: "Authors explain that the process for getting software from version control into the hands of its expected users is organised as a sequence of stages. Depending of the kind of system, the required stages may vary. However, there is a subset of stages that is common to all projects. These stages are: the commit stage, the automated acceptance test stage, the manual test stage, and the release stage. Indicate which of the following statements are true:",
        answers: [
            "Automated acceptance test stage asserts that the system works at the functional and non-functional level.", 
            "The automated acceptance test happens after the manual test stage.",
            "Automated unit test cases are run in the commit stage.",
            "The environment used to test that candidate in the manual test stage is more production-like than the one used in the commit stage.",
            "A candidate is created during the manual test stage"],
        correctAnswer: [
            "Automated acceptance test stage asserts that the system works at the functional and non-functional level.", 
            "Automated unit test cases are run in the commit stage.",
            "The environment used to test that candidate in the manual test stage is more production-like than the one used in the commit stage."]
    },
    "Question 36": {
        question: "Developers are recommended to wait until the commit stage successes before checking in new changes:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 37": {
        question: "You do need a version control system software (e.g. GitHub, GitLab, Subversion, CVS) to do CI:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 38": {
        question: "The event that triggers the commit stage is a developer checking a change into the repository where the project is stored:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 39": {
        question: "A middleware (i.e. software that is placed on top of the OS -e.g. web servers, databases, message queues, etc) can be decomposed into three parts: binaries, configuration, and data:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 40": {
        question: "Anyone who starts using a CI server is recommended to follow a simple process. This process starts by checking if the build is already running. If so, you have to wait until it finishes. Once it has successfully finished (i.e. the build is green) the next step you need to do is:",
        answers: [
            "update the code in your local development environment from the VCS to get any updates", 
            "run the build on your local development environment to make sure that everything works correctly on your computer.",
            "check your local modifications into the VCS."],
        correctAnswer: [
            "update the code in your local development environment from the VCS to get any updates"]
    },
    "Question 41": {
        question: "Select the reasons why operations managers want every change to any environment they control to be documented and audited:",
        answers: [
            "blame people who make mistakes", 
            "conformance to standards",
            "if things go wrong they can find the relevant changes that caused the problem",
            "establish a change management process"],
        correctAnswer: [
            "conformance to standards",
            "if things go wrong they can find the relevant changes that caused the problem",
            "establish a change management process"]
    },
    "Question 42": {
        question: "Platform virtualisation means simulating an entire computer system so as to run multiple instances of operating systems simultaneously on a single physical machine. In this configuration:",
        answers: [
            "an infinite number of VMs can be run on the single physical machine", 
            "there is a virtual machine monitor (VMM), also know as hypervisor",
            "a new VM can be provisioned in seconds at no cost",
            "the VMM has control of the physical machine's hardware resources",
            "guest operative systems run on virtual machines (VMs)"],
        correctAnswer: [
            "there is a virtual machine monitor (VMM), also know as hypervisor",
            "a new VM can be provisioned in seconds at no cost",
            "the VMM has control of the physical machine's hardware resources",
            "guest operative systems run on virtual machines (VMs)"]
    },
    "Question 43": {
        question: "Operations managers will have systems in place to monitor:",
        answers: [
            "the requirements specification", 
            "the applications requirements",
            "the applications running upon their infrastructure",
            "their infrastructure"],
        correctAnswer: [
            "the applications running upon their infrastructure",
            "their infrastructure"]
    },
    "Question 44": {
        question: "The process to manage the production and stage environments (i.e. how to track its changes, be configured, and deploy assets to it) should be the same:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 45": {
        question: "Management libraries tools should not be installed in the production environment:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 46": {
        question: "It is advised to use the same scripts to deploy to every environment:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 47": {
        question: "The tests executed in the commit stage:",
        answers: [
            "test the application's Ul", 
            "should run very fast",
            "are mainly unit tests"],
        correctAnswer: [
            "should run very fast",
            "are mainly unit tests"],
    },
    "Question 48": {
        question: "Configuration Management definition refers to",
        answers: [
            "A process",
            "A Tool"],
        correctAnswer: [
            "A process"]
    },
    "Question 49": {
        question: "The general term infrastructure represents all the environments of an organisation, along with the services (e.g. DNS servers, firewalls, version control systems, CI server, mail servers, etc.) required to support such as environments.",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 50": {
        question: "Tests that are performing slowly (because of the processing requirements) should not be included into the CI process:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 51": {
        question: "There exist tools that allow not only to manage the build of Java applications, but also the management of dependent libraries required by the application:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 52": {
        question: "The configuration information can be injected only at build time (i.e. the configuration information is incorporated into the binaries during the build process):",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 53": {
        question: "The Configuration Management Strategy is what determines how you manage most of the changes that happen within your project:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 54": {
        question: "The CI process (i.e. compile the application, run some automated test cases, and create an artefact) is also known as commit stage:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 55": {
        question: "Every team should have a member playing the role of build master, regardless the size of such a team:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "False"]
    },
    "Question 56": {
        question: "Every Configuration Management Strategy requires to make use of a version control system (VCS):",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 57": {
        question: "The commit stage reduces the time spent on code-level integration:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 58": {
        question: "Let SYS be a configuration management system, and CONF be the declarative specification of the desired state of a particular infrastructure and/or environment. The system SYS is said to be idempotent if:",
        answers: [
            "It applies CONF over the infrastructure regardless its current state", 
            "once it applies CONF, then the end state of the infrastructure is always equal to CONF, regardless the number of time CONF is applied."],
        correctAnswer: [
            "It applies CONF over the infrastructure regardless its current state", 
            "once it applies CONF, then the end state of the infrastructure is always equal to CONF, regardless the number of time CONF is applied."],
    },
    "Question 59": {
        question: "Authors claim that an important global metric is cycle time. We have referred to this metric as Delivery lead time. This metric measures:",
        answers: [
            "The time between deciding that a features needs to be implemented and having the feature released to users.", 
            "The time between the developer commits the code related to a wished feature and having such feature released to users."],
        correctAnswer: [
            "The time between the developer commits the code related to a wished feature and having such feature released to users."],
    },
    "Question 60": {
        question: "Authors propose to follow an incremental approach when implementing a deployment pipeline. This approach is defined as an ordered sequence of steps. Assuming you are doing this incremental approach, then indicate which of the following statements are true:",
        answers: [
            "Automating the unit tests and code analysis come before automating the build process.", 
            "A staging environment must be as close as possible to the production environment",
            "The environment where the candidate is deployed for testing purposes is called staging",
            "A Continuous Integration (Cl) server is a must to automate the build process.",
            "The build process should be performed manually before it is automated.",
            "Automating the build process is done before automating the deployment process."],
        correctAnswer: [
            "A staging environment must be as close as possible to the production environment",
            "The environment where the candidate is deployed for testing purposes is called staging",
            "The build process should be performed manually before it is automated.",
            "Automating the build process is done before automating the deployment process."],
    },
    "Question 61": {
        question: "Select the attributes that may describe an environment:",
        answers: [
            "networking infrastructure configuration", 
            "operative system configuration",
            "hardware configuration of the servers that form the environment",
            "database configuration"],
        correctAnswer: [
            "networking infrastructure configuration", 
            "operative system configuration",
            "hardware configuration of the servers that form the environment",
            "database configuration"],
    },
    "Question 62": {
        question: "The essential results (i.e. meaningful for the next phases in the deployment pipeline) of the commit stage are:",
        answers: [
            "code analysis results", 
            "executable artefacts (i.e. the set of files that make the candidate)",
            "test results"],
        correctAnswer: [
            "code analysis results", 
            "executable artefacts (i.e. the set of files that make the candidate)",
            "test results"],
    },
    "Question 63": {
        question: "Select the sources that may generate useful data for monitoring purposes:",
        answers: [
            "Middleware", 
            "Application (or product)",
            "Operative system",
            "Test case executions",
            "Continuous Integration server"],
        correctAnswer: [
            "Middleware", 
            "Application (or product)",
            "Operative system",
            "Test case executions",
            "Continuous Integration server"],
    },
    "Question 64": {
        question: "Let's consider all stages of a deployment pipelines, but those related with releasing the candidate (whatever the release strategy is). The environments used on these stages are (in some way) different:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 65": {
        question: "The process to manage the production and stage environments (i.e. how to track its changes, be configured, and deploy assets to it) should be the same:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 66": {
        question: "Any implementation of a deployment pipeline must (i.e. without its existence it cannot be implemented) contain:",
        answers: [
            "One or more resources hosted in the cloud", 
            "A VCS",
            "One or more virtual machines",
            "One and only one resource hosted in the cloud",
            "At most one virtual machine",
            "An Artefact repository"],
        correctAnswer: [
            "A VCS", 
            "An Artefact repository"],
    },
    "Question 67": {
        question: "The practice of Continuous Integration (CI) in a development team relies on certain prerequisites. Thus, before you start with CI you need:",
        answers: [
            "the agreement of every team member that the task to fix any change that breaks the application has the highest priority", 
            "to be able to start the build of the application from command line",
            "the agreement of every team member to check in small incremental changes frequently to mainline (i.e. trunk)",
            "to have (at least one) Version Control repository"],
        correctAnswer: [
            "the agreement of every team member that the task to fix any change that breaks the application has the highest priority", 
            "to be able to start the build of the application from command line",
            "the agreement of every team member to check in small incremental changes frequently to mainline (i.e. trunk)",
            "to have (at least one) Version Control repository"],
    },
    "Question 68": {
        question: "The commit stage should ONLY be stopped in the following circumstances (otherwise it is considered to be optimised too far):",
        answers: [
            "Compilation fails", 
            "Load tests do not pass",
            "Unit tests do not pass",
            "Performance tests do not pass",
            "Violation of code quality rules",
            "Compilation warnings"],
        correctAnswer: [
            "Compilation fails", 
            "Unit tests do not pass"],
    },
    "Question 69": {
        question: "The CI process is expected to produce as result an artefact that eventually can be executed. This artefact is know as “candidat”",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 70": {
        question: "If the commit stage fails because a test case did not pass then you should comment out such a test case as it is probably no longer valid:",
        answers: [
            "True",
            "False"],
        correctAnswer: [
            "True"]
    },
    "Question 71": {
        question: "Operations manager will have systems in place to monitor:",
        answers: [
            "the requirements specification", 
            "the applications running upon their infrastructure",
            "their infrastructure",
            "the applications requirements"],
        correctAnswer: [
            "the applications running upon their infrastructure",
            "their infrastructure"],
    },
    "Question 72": {
        question: "Smoke-tests are used when you deploy your (candidate) application to:",
        answers: [
            "Check the application is up and running", 
            "Check any services the application depends on are up and running"],
        correctAnswer: [
            "Check the application is up and running", 
            "Check any services the application depends on are up and running"],
    },
    "Question 73": {
        question: "Acceptance tests:",
        answers: [
            "Are written in a way that they run against the whole candidate in a production-like environment", 
            "Can take a long time to run",
            "Assert that the candidate works in the same way as in the developer's environment",
            "Provide quick feedback on bugs in the small",
            "Assert that the candidate delivers the value the customer is expected"],
        correctAnswer: [
            "Are written in a way that they run against the whole candidate in a production-like environment", 
            "Can take a long time to run",
            "Assert that the candidate delivers the value the customer is expected"],
    },
    "Question 74": {
        question: "Let p be the process for getting software from version control into the hands of its expected users. The automated manifestation of this process p is known as:",
        answers: [
            "Release management", 
            "Deployment pipeline",
            "Continuos integration",
            "Provide quick feedback on bugs in the small",
            "Assert that the candidate delivers the value the customer is expected"],
        correctAnswer: [
            "Deployment pipeline"],
    },
    "Question 75": {
        question: "Indicate the teams that benefit from monitoring the application (or product) in production, as well as its environment:",
        answers: [
            "Operation team", 
            "Business team"],
        correctAnswer: [
            "Operation team", 
            "Business team",],
    },
    "Question 76": {
        question: "Everything that is needed to create and maintain the infrastructure must be keep under version control:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 77": {
        question: "A deployment process is idempotent regarding a particular target environment if:",
        answers: [
            "it always leaves the environment in the same state that is different from the state of the environment when the process starts.", 
            "it always leaves the environment in a same correct state, regardless the state of the environment when the process starts.",
            "it leaves the environment in a state that is indicated as parameter when the process starts."],
        correctAnswer: [
            "it always leaves the environment in a same correct state, regardless the state of the environment when the process starts."],
    },
    "Question 78": {
        question: "Files related to the creation and maintenance of the infrastructure are as important as the source code that makes the product/service to be delivered:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 79": {
        question: "A fully automated deployment process is achieved by evolving incrementally an initial set of scripts used to automatically deploy the candidate in a local development environment:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 80": {
        question: "The application's environment refers to the hardware, software and external services the application depends on in order to work. The configuration of this environment:",
        answers: [
            "has to be tracked for changes.", 
            "has to be tested.",
            "is as important as the configuration of the application itself."],
        correctAnswer: [
            "has to be tracked for changes.", 
            "has to be tested.",
            "is as important as the configuration of the application itself."],
    },
    "Question 81": {
        question: "The commit stage should be completed in a reasonable length of time. Ideally it should be completed (i.e. wished deadline) in less than:",
        answers: [
            "20 minutes", 
            "5 minutes",
            "10 minutes"],
        correctAnswer: [
            "5 minutes"],
    },
    "Question 82": {
        question: "The term used to refer to the collection of all resources (along with their configuration) required by the application to work is:",
        answers: [
            "infrastructure", 
            "candidate",
            "product",
            "environment"],
        correctAnswer: [
            "environment"],
    },
    "Question 83": {
        question: "Indicate the benefits of having a good configuration management process:",
        answers: [
            "to easily recreate an environment in case of failure", 
            "to easily provision new environments that match the configuration of existing ones",
            "to ensure consistency across all environments",
            "to control the way you make changes over an environment"],
        correctAnswer: [
            "to easily recreate an environment in case of failure", 
            "to easily provision new environments that match the configuration of existing ones",
            "to ensure consistency across all environments",
            "to control the way you make changes over an environment"],
    },
    "Question 84": {
        question: "Authors claim that the best way to make the release of a valuable software a low-risk activity is by releasing as frequently as possible:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 85": {
        question: "Everything that is “created” as result of having executed the build process has to be checked into the VCS:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"],
    },
    "Question 86": {
        question: "Virtualisation is not an option when the product relies on third-party services/software that cannot be installed or configured in an automated way:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"],
    },
    "Question 87": {
        question: "The time the commit stage of a deployment pipeline may take to complete, largely depends on the characteristics of the product aimed to be built. Book’s authors however, indicate a max time for this stage (i.e. kind of hard deadline). This time is meant to be used as a reference for devops engineers when implementing and optimizing the deployment pipeline’s stage. They say that the commit stage should certainly be completed in less than:",
        answers: [
            "20 minutes", 
            "5 minutes",
            "10 minutes"],
        correctAnswer: [
            "10 minutes"],
    },
    "Question 88": {
        question: "The configuration information (i.e. shell scripts, xml files, YAML files, etc) related to the application has to be managed differently than source code: i.e. no need to be tracked for changes, nor tested:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"],
    },
    "Question 89": {
        question: "The commit stage is the vital first step of the deployment pipeline:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 90": {
        question: "The application's environment refers to the hardware, software, and external services the application depends on in order to work. The configuration of this environment:",
        answers: [
            "has to be tracked for changes", 
            "has to be tested",
            "is as important as the configuration of the application itself"],
        correctAnswer: [
           "has to be tracked for changes",
            "has to be tested",
            "is as important as the configuration of the application itself"],
    },
    "Question 91": {
        question: "A fully automated deployment process is achieved by evolving incrementally an initial set of scripts used to automatically deploy the candidate in a local development environment:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 92": {
        question: "The term used to refer to the collection of all resources (along with their configuration) required by an application to work is:",
        answers: [
            "infrastructure", 
            "product",
            "candidate",
            "environment"],
        correctAnswer: [
            "environment"],
    },
    "Question 93": {
        question: "A good practice related to deployment pipelines that should be followed states that “you should only build your binaries once”. Based on such a practice, indicate which of the following statements are true:",
        answers: [
            "The binaries are created during the commit stage", 
            "This practice does not help to keep the deployment pipeline efficient",
            "The binaries are created for a specific environment",
            "If we recreate the binaries, we run the risk that some changes will be introduced"],
        correctAnswer: [
            "The binaries are created during the commit stage",
            "If we recreate the binaries, we run the risk that some changes will be introduced"],
    },
    "Question 94": {
        question: "Tests that are performing slowly (because of the processing requirements) should not be included into the CI process:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"],
    },
    "Question 95": {
        question: "The CI process (i.e. compile, test, and packaging) should take no more than a few minutes:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 96": {
        question: "The CI process is expected to produced as result an artefact that eventually can be executed. This artefact is know as candidate:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 97": {
        question: "Management libraries tools should not be installed in the production environment:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 98": {
        question: "When making changes to the infrastructure, these changes should be first tested on a production-like testing environment:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "True"],
    },
    "Question 99": {
        question: "Environments have to be homogeneous in the sense that the services required to make the product/services work should be running either on a private infrastructure, or in the cloud, but definitively not mixed:",
        answers: [
            "True", 
            "False"],
        correctAnswer: [
            "False"],
    },    
    "Question 100": {
        question: "Smoke tests are used when you deploy your (candidate) application to:",
        answers: [
            "Check any services the application depends on are up annd running", 
            "Check the application depends is up annd running"],
        correctAnswer:[
            "Check any services the application depends on are up annd running", 
            "Check the application depends is up annd running"],
    },
};

const questionElement = document.getElementById("question");
const answersListElement = document.getElementById("answers-list");
const feedbackElement = document.getElementById("feedback");
const questionSelector = document.getElementById("question-selector");
const progressBarCorrect = document.getElementById("correct-progress");
const progressBarPartial = document.getElementById("partial-progress");
const progressBarIncorrect = document.getElementById("incorrect-progress");

let currentQuestion = "";
let correctCount = 0;
let incorrectCount = 0;
let partialCount = 0;
let totalQuestions = Object.keys(quizData).length;

function loadQuestion(questionKey) {
    currentQuestion = questionKey;
    const questionData = quizData[questionKey];

    questionElement.textContent = questionData.question;

    answersListElement.innerHTML = "";
    questionData.answers.forEach(answer => {
        const li = document.createElement("li");
        li.innerHTML = `<label><input type="checkbox" name="answer" value="${answer}"> ${answer}</label>`;
        answersListElement.appendChild(li);
    });

    feedbackElement.textContent = "";
}

function updateProgressBar() {
    const total = correctCount + incorrectCount + partialCount;
    progressBarCorrect.style.width = `${(correctCount / total) * 100}%`;
    progressBarPartial.style.width = `${(partialCount / total) * 100}%`;
    progressBarIncorrect.style.width = `${(incorrectCount / total) * 100}%`;
}

document.getElementById("submit-btn").addEventListener("click", () => {
    const questionData = quizData[currentQuestion];
    const selectedAnswers = Array.from(document.querySelectorAll('input[name="answer"]:checked')).map(input => input.value);

    const correctAnswers = questionData.correctAnswer;
    const missedCorrect = correctAnswers.filter(answer => !selectedAnswers.includes(answer));
    const incorrectSelected = selectedAnswers.filter(answer => !correctAnswers.includes(answer));
    let feedbackText = "";

    if (selectedAnswers.length === 0 || missedCorrect.length === correctAnswers.length) {
        incorrectCount++;
        feedbackText = "Incorrect.";
    } else if (missedCorrect.length === 0 && incorrectSelected.length > 0) {
        partialCount++;
        feedbackText = "Partially Correct!";
    } else if (missedCorrect.length > 0 && incorrectSelected.length === 0) {
        partialCount++;
        feedbackText = "Partially Correct!";
    } else if (missedCorrect.length === 0 && incorrectSelected.length === 0) {
        correctCount++;
        feedbackText = "Correct!";
    }

    feedbackElement.textContent = feedbackText;
    updateProgressBar();

    document.querySelectorAll('input[name="answer"]').forEach(input => {
        const icon = document.createElement("span");
        icon.style.marginLeft = "10px";
        icon.style.fontWeight = "bold";

        if (correctAnswers.includes(input.value) && input.checked) {
            icon.textContent = "✔️";
            icon.style.color = "green";
        } else if (correctAnswers.includes(input.value) && !input.checked) {
            icon.textContent = "❌";
            icon.style.color = "red";
        } else if (!correctAnswers.includes(input.value) && input.checked) {
            icon.textContent = "❌";
            icon.style.color = "red";
        }
        input.parentElement.appendChild(icon);
    });
});

Object.keys(quizData).forEach(questionKey => {
    const option = document.createElement("option");
    option.value = questionKey;
    option.textContent = questionKey;
    questionSelector.appendChild(option);
});

questionSelector.addEventListener("change", (e) => {
    loadQuestion(e.target.value);
});

document.getElementById("next-btn").addEventListener("click", () => {
    const questions = Object.keys(quizData);
    let nextIndex = questions.indexOf(currentQuestion) + 1;
    questionSelector.selectedIndex = nextIndex;
    if (nextIndex >= questions.length) nextIndex = 0;
    loadQuestion(questions[nextIndex]);
});

document.getElementById("shuffle-btn").addEventListener("click", () => {
    const questions = Object.keys(quizData);
    const randomIndex = Math.floor(Math.random() * questions.length);
    loadQuestion(questions[randomIndex]);
});

loadQuestion(Object.keys(quizData)[0]);
