import { strings as s } from "../strings";

export default function ResumePage() {
  return (
    <div className="resume-page">
        <div className="resume-container">
            <div className="header">
                <div className="horizontal-line" />
                <div className="name-container">
                    <span>Anna Pinson</span>
                </div>
                <div className="horizontal-line" />
            </div>
            <div className="contact">
                <div className="top">
                    <div>
                        <div className="email icon" />
                        <span>anna.c.pinson@gmail.com</span>
                    </div>
                    <div>
                        <div className="phone icon" />
                        <span>(760) 613-1784</span>
                    </div>
                    <div>
                        <div className="location icon" />
                        <span>Buena Park, CA</span>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <div className="github icon" />
                        <span>github.com/AP94</span>
                    </div>
                    <div>
                        <div className="linkedin icon" />
                        <span>linkedin.com/in/anna-pinson</span>
                    </div>
                </div>
            </div>
            <div className="summary section">
                <div className="section-label">
                    <span>{s['resume.summary.header']}</span>
                    <div className="underline" />
                </div>
                <span className="summary-text">{s['resume.summary']}</span>
            </div>
            <div className="skills section">
                <div className="section-label">
                    <span>{s['resume.skills.header']}</span>
                    <div className="underline" />
                </div>
                <ul>
                    <li>{s['resume.job.skill1']}</li>
                    <li>{s['resume.job.skill2']}</li>
                    <li>{s['resume.job.skill3']}</li>
                    <li>{s['resume.job.skill4']}</li>
                    <li>{s['resume.job.skill5']}</li>
                    <li>{s['resume.job.skill6']}</li>
                    <li>{s['resume.job.skill7']}</li>
                    <li>{s['resume.job.skill8']}</li>
                    <li>{s['resume.job.skill.tech1']}</li>
                    <li>{s['resume.job.skill.tech2']}</li>
                </ul>
            </div>
            <div className="work section">
                <div className="section">
                    <div className="section-label">
                        <span>{s['resume.experience.header']}</span>
                        <div className="underline" />
                    </div>
                </div>
                <div className="work-title-section">
                    <span className="job-title">{s['resume.job.title']}</span>
                    <span>|</span>
                    <span className="business-title">Laserfiche</span>
                    <span>|</span>
                    <span className="employment-dates"><i>April 2017 - January 2024</i></span>
                </div>
                <ul>
                    <li>{s['resume.job.task1']}</li>
                    <li>{s['resume.job.task2']}</li>
                    <li>{s['resume.job.task3']}</li>
                    <li>{s['resume.job.task4']}</li>
                    <li>{s['resume.job.task5']}</li>
                    <li>{s['resume.job.task6']}</li>
                    
                    {/* <li>{s['resume.job.task7']}</li>
                    <li>{s['resume.job.task8']}</li>
                    <li>{s['resume.job.task9']}</li>
                    <li>{s['resume.job.task10']}</li> */}
                </ul>
            </div>
            <div className="education section">
                <div className="section-label">
                    <span>{s['resume.education.header']}</span>
                    <div className="underline" />
                </div>
                <div className="college-info">
                    <span className="college">{s['resume.education.college']}</span>
                    <span>|</span>
                    <span className="degree">{s['resume.education.degree']}</span>
                </div>
            </div>
        </div>
    </div>
  );
}
