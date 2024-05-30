

export default function ResumePage() {
  return (
    <div className="resume-page">
        <div className="resume-container">
            <div className="left-column">
                <div className="namecard">
                    <span className="name">Anna Pinson</span>
                </div>
                <div className="section-container">
                    <div className="contact section">
                        <div className="section-label">
                            <span>Contact</span>
                            <div className="underline" />
                        </div>
                        <ul>
                            <li><div className="location icon" />Greater Los Angeles Area, CA</li>
                            <li><div className="email icon" />anna.c.pinson@gmail.com</li>
                            <li><div className="phone icon" />(760) 613-1784</li>
                            <li><div className="linkedin icon" />linkedin.com/in/anna-pinson</li>
                            <li><div className="github icon" />github.com/AP94</li>
                        </ul>
                    </div>
                    <div className="skills section">
                        <div className="section-label">
                            <span>Skills</span>
                            <div className="underline" />
                        </div>
                        <ul>
                            <li>Typescript/Javascript</li>
                            <li>HTML</li>
                            <li>CSS/LESS</li>
                            <li>ReactJS</li>
                            <li>AngularJS</li>
                            <li>C#</li>
                            <li>YAML</li>
                            <li>Gulp</li>
                            <li>Cypress</li>
                            <li>GIT</li>
                            <li>Azure DevOps</li>
                            <li>PowerBI</li>
                        </ul>
                    </div>
                    <div className="education section">
                        <div className="section-label">
                            <span>Education</span>
                            <div className="underline" />
                        </div>
                        <span><b>Harvey Mudd College</b></span>
                        <span>B. S. in Computer Science</span>
                        <span className="sub-info">2012-2016, Claremont CA</span>
                    </div>
                </div>
            </div>
            <div className="right-column">
                <div className="top-section">
                    <span className="work-title">Software Engineer</span>
                </div>
                <div className="work-section">
                    <div className="section">
                        <div className="section-label">
                            <span>Work Experience</span>
                            <div className="underline" />
                        </div>
                    </div>
                    <div className="work-title-section">
                        <span className="business-title"><b>Laserfiche</b></span>
                        <span className="employment-dates"><i>April 2017 - January 2024</i></span>
                    </div>
                    <ul>
                        <li>Developed front-end cloud-based application in AngularJS as part of Laserfiche's suite of products</li>
                        <li>Worked with four other developers to create a Cypress test suite for the front-end of our application, which was then integrated into the build-test-deploy pipeline to serve as deployment gateways</li>
                        <li>Migrated build and deploy pipelines from classic Azure DevOps to YAML pipelines, removing a pre-existing dependency on another team's release pipeline to deploy to AWS</li>
                        <li>Completed the backend for a web-based scanning application, then assisted in designing and implementing the frontend, incorporating customer feedback on potential designs into the final product</li>
                        <li>Assisted in localization efforts by removing any hard-coded strings and by refactoring all front-end error reporting to ensure that the only user-facing errors shown were actionable and properly translated</li>
                        <li>Added metrics to measure front-end load times and loading errors for our main application, developed and monitored a dashboard to analyze the data using PowerBI, identified and then remedied a loading issue, which lowered the average load time by 5 seconds</li>
                        <li>Reviewed around 50 lines of code per month, the majority of which were in Typescript, AngularJS, HTML, and LESS, with occasional C#</li>
                        <li>Accumulated over five years of experience fixing and triaging bugs</li>
                        <li>Facilitated daily check-ins and backlog refinement meetings, breaking down and sorting planned work into features, backlog items, and tasks, such that they can be communicated to our scrum master and project manager as well as the developers on our team, on a semi-regular basis</li>
                        <li>Assisted customers in learning how to use our software and answered questions, both in workshops and one-on-one, at our annual conference</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
