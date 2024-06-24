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
    
    'resume.skillSection.headerOne': 'Proficient in:',
    'resume.skillSection.headerTwo': 'Working knowledge of:',
    'resume.education.header': 'Education',
    'resume.role': 'Software Developer',
    'resume.experience.header': 'Work Experience',
    'resume.job.title': 'Software Engineer',
    'resume.job.task1': "Developed front-end cloud-based application in AngularJS as part of Laserfiche's suite of products",
    'resume.job.task2': 'Worked with four other developers to create a Cypress test suite for the front-end of our application, which was then integrated into the build-test-deploy pipeline to serve as deployment gateways',
    'resume.job.task3': "Migrated build and deploy pipelines from classic Azure DevOps to YAML pipelines, removing a pre-existing dependency on another team's release pipeline to deploy to AWS",
    'resume.job.task4': "Completed the backend for a web-based scanning application in C++, then assisted in designing and implementing the frontend in AngularJS, incorporating customer feedback on potential designs into the final product",
    'resume.job.task5': "Assisted in localization efforts by removing any hard-coded strings and by refactoring all front-end error reporting to ensure that the only user-facing errors shown were actionable and properly translated",
    'resume.job.task6': "Added metrics to measure front-end load times and loading errors for our main application, developed and monitored a dashboard to analyze the data using PowerBI, identified and then remedied a loading issue, which lowered the average load time by 5 seconds",
    'resume.job.task7': "Reviewed around 50 lines of code per month, the majority of which were in Typescript, AngularJS, HTML, and LESS, with occasional C#",
    'resume.job.task8': "Accumulated over five years of experience fixing and triaging bugs",
    'resume.job.task9': "Facilitated daily check-ins and backlog refinement meetings, breaking down and sorting planned work into features, backlog items, and tasks, such that they can be communicated to our scrum master and project manager as well as the developers on our team, on a semi-regular basis",
    'resume.job.task10': "Assisted customers in learning how to use our software and answered questions, both in workshops and one-on-one, at our annual conference",
    
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
