import Link from "next/link";

export const strings: { [id: string]: string } = {
    'main.header': 'Hey, you!',
    'main.subheader': 'Yeah, you!',
    'main.doYouNeed': 'Do you need a frontend dev who:',
    'main.point1': `Has over 6 1/2 years' experience in software development,
                    most of which was spent working with component-based architecture?`,
    'main.point2': 'Is a good communicator and can explain technical concepts to other devs, PMs, and customers?',
    'main.point3': 'Created build-test-deployment pipelines? For a frontend application, even?',
    'main.point4': 'Knows how to thrive in an agile environment?',
    'main.point5': 'Work well solo, in pairs, or in a mob?',
    'main.point6': 'Loves writing documentation?',
    'main.point7': 'Can learn anything?',
    'main.resumeLink': 'Then check out my {{resume}}!',
    'main.githubLink': "If you'd like to review my work, you can see the codebase for this site {{here}}.",
    'main.yachtLink': "And while you're here, {{why not play a game}}?",
    
    'resume.summary.header': 'Summary',
    'resume.summary': 'Front-end leaning software developer with over 6.5 years of experience who enjoys building software that users love. My passion lies in making people\'s lives easier, from creating high-quality products for customers to optimized processes and detailed documentation for my fellow devs. As a lifelong learner and teacher, I value both knowledge sharing and clear and open communication. I\'m looking for a collaborative environment where I can continue to build and maintain high-quality products that improve the lives of its users.',
    'resume.skills.header': 'Skills',
   'resume.job.skill1': "Experienced in both front and back end development of cloud applications, with a strong emphasis on the front-end",
    'resume.job.skill2': "Active involvement in feature analysis, breakdown, and scoping",
    'resume.job.skill3': "Authored both dev and customer facing documentation, including onboarding materials, dev wiki pages, and detailed release notes",
    'resume.job.skill4': "Over four years of experience mentoring and coaching junior developers",
    'resume.job.skill5': "CI/CD pipeline development and migrations",
    'resume.job.skill6': "QA automation and integration into CI/CD solutions",
    'resume.job.skill7': "Performance analysis and optimization",
    'resume.job.skill8': "Incorporating accessibility and localization best practices into software design",
    'resume.job.skill.tech1': 'Proficient in: Typescript, Javascript, HTML, CSS, LESS, AngularJS, ReactJS, YAML, Cypress, GIT, Azure Devops',
    'resume.job.skill.tech2': 'Familiar with: C#, C++, Gulp, TailwindCSS, SQL, .NET, AWS, PowerBI',
    'resume.job.title': 'Software Engineer III',
    'resume.experience.header': 'Experience',
    'resume.job.task1': 'Improved load time for main application by an average of 5 seconds by adding performance metrics to the app and using PowerBI for analysis',
    'resume.job.task2': 'Migrated CI/CD deployment pipeline from Azure Devops to YAML, identifying and removing a dependency which contributed to release cadence going from once a year to once a month',
    'resume.job.task3': 'Created and added Cypress front-end testing into the Ci/CD pipeline, configured as a quality deployment gate',
    'resume.job.task4': 'Completed C++ backend for web scanning app, then assisted in design and implementation of the AngularJS frontend, incorporating customer feedback into the final design',
    'resume.job.task5': 'Participated in localization of core application by refactoring and ensuring all errors displayed to the users were properly translated and actionable',
    'resume.job.task6': 'Provided regular code reviews for Typescript, AngularJS, HTML, and C#',
    'resume.education.header': 'Education',
    'resume.education.college': 'Harvey Mudd College',
    'resume.education.degree': 'B.S. in Computer Science',

    'yacht.playAgain': 'Play again',
    'yacht.roll': 'Roll',
    'yacht.rollsLeftInterpolated': '{{Number}} rolls left',
    'yacht.oneRollLeft': '1 roll left',
    'yacht.roll.screenReaderMessage': 'Roll dice',
    'yacht.deselect': 'Deselect',
    'yacht.select': 'Select',
    'yacht.resetConfirmationPrompt': 'Are you sure you want to reset your high score?',
    'yacht.reset.screenReaderMessage': 'Click to reset',
    'yacht.highScoreInterpolated': 'High Score: {{Score}}',
    'yacht.submitScore.screenReaderMessage': 'Submit score for selected category',
    'yacht.submitScore': 'Submit',
    'yacht.closeIntroDialog.screenReaderMessage': 'Close game info dialog',
    'yacht.introHeader': 'Welcome to Yacht!',
    'yacht.introText': "Yacht is a public domain dice game that is NOT Yahtzee(TM). It's actually the game Yahtzee was based on! There are many versions of Yacht, and many dice games with similar rule sets across different countries, but the one presented here is the 1938 version of the game {{as detailed on the Wikipedia page}}.",
    'yacht.rulesIntro': 'The rules are simple:',
    'yacht.rule1': 'You have five dice that you can roll up to three times each round by clicking the Roll button',
    'yacht.rule2': 'Click on a die to "lock" it, preventing it from being rolled with the other dice. Click it again to "unlock" it.',
    'yacht.rule3': 'By the end of each round, you must choose a category to mark your score. Check the box next to the category and click "Submit" to do so. Each category can only be used once.',
    'yacht.rule4': 'The game ends when all score categories have been marked. Try to get the highest score possible!',
    'yacht.rule5': 'To reset your high score, click the High Score text at the bottom of the page.',
    'yacht.moreDetails1': 'For more details on how each scoring section works, click the ',
    'yacht.moreDetails2': ' icon on the game screen.',
    'yacht.reopenIntroDialog1': 'To view this dialog again, click the ',
    'yacht.reopenIntroDialog2': ' icon on the game screen.',
    'yacht.play': 'Play',
    'yacht.scoreGuide.close.screenReaderMessage': 'Close score guide dialog',
    'yacht.scoreGuide.header': 'Score Guide',
    'yacht.scoreGuide.numbers.header': 'Score Guide',
    'yacht.scoreGuide.numbers.info': 'For these categories, the score is the sum of dice with the corresponding face.',
    'yacht.scoreGuide.numbers.example': 'For example, the following dice set would score 12 points under the Fours category:',
    'yacht.scoreGuide.fullHouse.header': 'Ones, Twoes, Threes, Fours, Fives, and Sixes',
    'yacht.scoreGuide.fullHouse.info': 'A Full House can be scored with two dice of one kind and three of another. The score marked is the sum of all dice.',
    'yacht.scoreGuide.fullHouse.example': 'For example, the following dice set would score 18 points:',
    'yacht.scoreGuide.fourOfAKind.header': 'Four of a Kind',
    'yacht.scoreGuide.fourOfAKind.info': 'A Four of a Kind can be scored with at least four dice with the same value. The score marked is the sum of those four dice.',
    'yacht.scoreGuide.fourOfAKind.example': 'For example, the following dice set would score 8 points:',
    'yacht.scoreGuide.littleStraight.header': 'Little Straight',
    'yacht.scoreGuide.littleStraight.info': 'A Little Straight can be scored with the values of 1 to 5, and is worth 30 points.',
    'yacht.scoreGuide.bigStraight.header': 'Big Straight',
    'yacht.scoreGuide.bigStraight.info': 'A Big Straigt can be scored with the values 2 to 6, and is worth 30 points.',
    'yacht.scoreGuide.choice.header': 'Choice',
    'yacht.scoreGuide.choice.info': 'Choice is equivalent to Chance in Yahtzee; it can be scored any time, and the score marked is the sum of all dice.',
    'yacht.scoreGuide.choice.example': 'For example, the following dice set would score 22 points:',
    'yacht.scoreGuide.yacht.header': 'Yacht',
    'yacht.scoreGuide.yacht.info': 'Yacht is equivalent to Yahtzee, though it can only be scored once per game. Yacht can be scored when all five dice have the same value, and is worth 50 points.',
};

// Sample string value for a link string: 'This string has a {{link}}.'

// The {{link}} will be replaced with: <Link href="linkHref">link</Link>
export const reactLinkString = (baseStringKey: string, linkHref: string) => {
    const baseString: string = strings[baseStringKey];
    const preLinkString: string = baseString.slice(0, baseString.indexOf('{{'));
    const linkTextString = baseString.slice(baseString.indexOf('{{') + 2, baseString.indexOf('}}'));
    let postLinkString: string = baseString.slice(baseString.indexOf('}}' + 2));
    if (postLinkString == '}')
    {
        postLinkString = '';
    }
    return (
        <span>{preLinkString}<Link href={linkHref}>{linkTextString}</Link>{postLinkString}</span>
    );
};

// Sample string value for a link string: 'This string has a {{link}}.'

// The {{link}} will be replaced with: <a href={linkHref}>link</a>
export const externalLinkString = (baseStringKey: string, linkHref: string) => {
    const baseString: string = strings[baseStringKey];
    const preLinkString: string = baseString.slice(0, baseString.indexOf('{{'));
    const linkTextString = baseString.slice(baseString.indexOf('{{') + 2, baseString.indexOf('}}'));
    let postLinkString: string = baseString.slice(baseString.indexOf('}}' + 2));
    if (postLinkString == '}')
    {
        postLinkString = '';
    }

    return (
        <span>{preLinkString}<a href={linkHref} target="_blank">{linkTextString}</a>{postLinkString}</span>
    );
};

// Like above, use {{this}} format to signify where to insert the text.
export const interpolate = (baseStringKey: string, textToInsert: string) => {
    const baseString: string = strings[baseStringKey];
    const preLinkString: string = baseString.slice(0, baseString.indexOf('{{'));
    let postLinkString: string = baseString.slice(baseString.indexOf('}}' + 2));
    if (postLinkString == '}')
    {
        postLinkString = '';
    }

    return `${preLinkString}${textToInsert}${postLinkString}`;
};
