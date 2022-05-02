import React from 'react'
import skillData from '../../../../data/skills'
function Skills() {

    return (
      <div className='flex -z-10 flex-wrap'>
        {skillData && skillData.map((theSkill) =>
          <div className='flex 3lg/2:w-1/4 w-1/3 md:w-1/3 w-1/2 xs:w-1/2 w-screen'>
            <div class={ `progress-circle progress-${theSkill.rate}`}><span>{theSkill.rate}</span></div>
            <div className='mt-6 font-mono text-slate-900'> {theSkill.skill}</div>
          </div>)
        }
        </div>
  )
}

export default Skills
