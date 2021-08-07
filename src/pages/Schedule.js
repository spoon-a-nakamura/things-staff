import { Helmet } from 'react-helmet';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Sectiontitle from '../components/Sectiontitle';
import Smalltitle from '../components/Smalltitle';
import Layout from '../components/Layout';
import Resume from '../components/Resume';

function Resumes() {
  // eslint-disable-next-line
  const [skills, setSkills] = useState([]);

  const [workingExperience, setWorkingExperience] = useState([]);

  // eslint-disable-next-line
  const [educationExperience, setEducationExperience] = useState([]);

  useEffect(() => {
    axios.get('/api/skills').then((response) => {
      setSkills(response.data);
    });
    axios.get('/api/experience').then((response) => {
      setWorkingExperience(response.data.workingExperience);
      setEducationExperience(response.data.educationExperience);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>Schedule | THINGS 2022 for staff</title>
        <meta name='description' content='Schedule | things 2022' />
      </Helmet>
      <div className='mi-resume-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Schedule' />
          <Smalltitle title='WORKSHOP' icon='briefcase' />
          <div className='mi-resume-wrapper'>
            {workingExperience.map((workingExp) => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          {/* <div className='mt-30'></div> */}
          {/* <Smalltitle title='Educational Qualifications' icon='book' />
          <div className='mi-resume-wrapper'>
            {educationExperience.map((educatonExp) => (
              <Resume key={educatonExp.id} resumeData={educatonExp} />
            ))}
          </div> */}
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
