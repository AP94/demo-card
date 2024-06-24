import { strings as s } from "../strings";

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
                        <span className="skill-section-label"><i>{s['resume.skillSection.headerOne']}</i></span>
                        <ul>
                            <li>Typescript</li>
                            <li>Javascript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>LESS</li>
                            <li>AngularJS</li>
                            <li>ReactJS</li>
                            <li>YAML</li>
                            <li>Cypress</li>
                            <li>GIT</li>
                            <li>Azure DevOps</li>
                        </ul>
                        <span className="skill-section-label"><i>{s['resume.skillSection.headerTwo']}</i></span>
                        <ul>
                            <li>C#</li>
                            <li>Gulp</li>
                            <li>SQL</li>
                            <li>.Net</li>
                            <li>C++</li>
                            <li>AWS</li>
                            <li>PowerBI</li>
                        </ul>
                    </div>
                    <div className="education section">
                        <div className="section-label">
                            <span>{s['resume.education.header']}</span>
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
                    <span className="role">{s['resume.role']}</span>
                </div>
                <div className="work-section">
                    <div className="section">
                        <div className="section-label">
                            <span>{s['resume.experience.header']}</span>
                            <div className="underline" />
                        </div>
                    </div>
                    <div className="work-title-section">
                        <span className="business-title"><b>Laserfiche</b></span>
                        <span className="job-title">{s['resume.job.title']}</span>
                        <span className="employment-dates"><i>April 2017 - January 2024</i></span>
                    </div>
                    <ul>
                        <li>{s['resume.job.task1']}</li>
                        <li>{s['resume.job.task2']}</li>
                        <li>{s['resume.job.task3']}</li>
                        <li>{s['resume.job.task4']}</li>
                        <li>{s['resume.job.task5']}</li>
                        <li>{s['resume.job.task6']}</li>
                        <li>{s['resume.job.task7']}</li>
                        <li>{s['resume.job.task8']}</li>
                        <li>{s['resume.job.task9']}</li>
                        <li>{s['resume.job.task10']}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  );
}
