const id = "policies/GitHub-Management-Policy.md";
						const collection = "docs";
						const slug = "policies/github-management-policy";
						const body = "\n## GitHub Management Policy\n\nThis document provides instructions on how to use GitHub as a Thoth Tech team member.\n\nAs a team member who wants to contribute to your team’s project, the following steps should be\nfollowed to get your code or markdown document published to the main branch of your products\nrepository.\n\n## Step 1: Fork the Main Branch of your Products Repository\n\n1. Navigate to the repository that you want to fork and locate Fork on the top right corner of the\n   page.\n\n   ![git tut](/git-tut-1.png)\n\n2. Click on Fork and you would be required to Choose an owner. This is usually your personal GitHub\n   account, add a description if you wish and Create Fork.\n\n   ![git tut](/git-tut-2.png)\n\n3. Once the Fork is completed, you should now see it as a repository in your personal GitHub account\n   or whatever account you chose as the owner.\n4. While on the Forked repo, clone it and perform the updates you wish to.\n\n### I forked from the wrong repo; how do I change it?\n\nIf you forked from the wrong repo and you haven’t made any commits, then the easiest option is to\nstart over. If you have made commits you will need to change the fork location like this...\n\n1. Fork the correct repo (the Thoth Tech one) via the GitHub web interface\n\n2. Navigate to the your local repo's root directory in terminal\n\n3. Rename your origin to upstream\n\n   git remote rename origin upstream\n\n4. Add the new fork as the origin\n\n   git remote add origin [git@github.com](git@github.com)/[GITHUB_USERNAME]/[YOUR_NEW_FORK_NAME]\n\n5. Fetch from new origin\n\n   git fetch origin\n\n6. Set origin master\n\n   git branch --set-upstream-to origin/master master\n\n7. Push to fork\n\n   git push origin\n\n... Done!\n\nYour changes should now be going to the right place.\n\n## Step 2: Install Prettier, Vale, and Markdown Lint on VS Code\n\nAfter you have forked the repository and cloned it to begin work on your local system via VS Code,\nyou would need to set up the required spell checkers and code formatters to ensure compatibility\nduring code build. To achieve this, do the following.\n\n1. Locate and Click the Extensions icon on the navigation bar (usually located at the left side of\n   your screen). ![git tut](/git-tut-3.png)\n\n2. Search for Prettier and follow the prompts to install it.\n\n   ![git tut](/git-tut-4.png)\n\n3. Follow the same process to search for and install Vale and Markdownlint.\n4. Navigate back to your terminal. To ensure that all the required modules is available on the copy\n   of the cloned repo, run \"npm install\" on the terminal.\n5. To configure Prettier, run \"npm install prettier.\"\n6. To ensure the document is well formatted after creation, right click on your document and select\n   \"Format Document with\", then select \"markdownlint\", then right click the document again and\n   Format Document with \"Prettier.\"\n\n## Step 3: Format your Code\n\nFor a markdown document, the tools installed above would be used for this purpose. Once you are done\nwriting your document, follow these steps to prevent a failed check in GitHub.\n\n1. On your document, right click and select “Format document with” and select markdwonlint.\n2. Then right click again, select “Format document with” and select Prettier.\n3. On your terminal run npm run format:check.\n\n## Step 4: Create a Commit\n\n- On VS Code, locate the commit icon on the left navigation bar, type in a Commit message (you can\n  adopt [Chris beam’s guide](https://cbea.ms/git-commit/) to create a good commit message), and\n  commit the changes.\n\n  ![git tut]/Starlight-Documentation-Website(/git-tut-5.png)\n\n## Step 5: Create a Pull Request\n\n1. On GitHub, navigate to the main page of the repository.\n2. In the \"Branch\" menu, choose the branch that contains your commits.\n3. Above the list of files, in the yellow banner, click Compare & pull request to create a pull\n   request for the associated branch.\n4. Use the base branch dropdown menu to select the branch you'd like to merge your changes into,\n   then use the compare branch drop-down menu to choose the topic branch you made your changes in.\n\n   ![git tut](/git-tut-6.png)\n\n5. Type a title and description for your pull request.\n6. To create a pull request that is ready for review, click Create Pull Request. To create a draft\n   pull request, use the drop-down and select Create Draft Pull Request, then click Draft Pull\n   Request.\n7. After your pull request has been reviewed and approved, it can be merged into the repository.\n\n## Code Review Guidelines\n\nYou are strongly encouraged to get your code reviewed by a reviewer as soon as there is any code to\nreview, to get a second opinion on the chosen solution and implementation, and an extra pair of eyes\nlooking for bugs, logic problems, or uncovered edge cases.\n\n### Draft Pull Request\n\nDraft Pull Requests allow a work in progress to receive early feedback. The developer creating the\nPR should, in the description, indicate their progress and any particular aspect they are looking\nfor feedback on. When the PR is ready for final review, the developer should update the description,\nre-request reviews as required and change the status to \"ready to review\".\n\nPull requests (draft and otherwise) are created from the GitHub website.\n\n### Required Approvals\n\nPull requests require **a minimum of two approvals**. The default approach is to choose a reviewer\nfrom your team for the first review. However, the reviewer may be from different team, for example a\ndomain expert in a programming language, quality assurance process, telemetry or documentation.\nDepending on the team size and dynamics, the number of required approvals can be higher or lower.\n\n## Collaborate on an existing branch\n\nIdeally, we should avoid having developers working on the same code. It creates merge conflicts and\nhinders efficiency. If possible, try to break it down into small tasks so developers can work\nindependently. In the worst-case scenario, if there is more than 1 person working on a feature\nbranch:\n\n1. Please make sure you pull changes in the remote branch before starting your work.\n\n   git pull origin feature/_remote branch name_\n\n2. Resolve any merge conflicts that may now be revealed. **Please avoid force-push and rebase when\n   working on a shared branch**. It can cause complex and hard to resolve merge conflicts as wellas\n   undo others' commits accidentally.\n";
						const data = {title:"GitHub Management Policy",editUrl:true,head:[],template:"doc",sidebar:{hidden:false,attrs:{}},pagefind:true};
						const _internal = {
							type: 'content',
							filePath: "C:/Users/Danma/OneDrive/Desktop/Deakin-Work/Github Work/Capstone-Documentation-Website-Template/src/content/docs/policies/GitHub-Management-Policy.md",
							rawData: "\ntitle: GitHub Management Policy",
						};

export { _internal, body, collection, data, id, slug };
