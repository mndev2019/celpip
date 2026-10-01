import React from 'react'
import ImmigrateBanner from '../CanadianResidency/ImmigrateBanner'
import WhyMadhav from '../../About/WhyMadhav'
import CitizenshipOverview from './CitizenshipOverview'
import CitizenshipTest from './CitizeshipTest'

const CanadianCitizenship = () => {
  return (
   <>
   <ImmigrateBanner  title="Prepare for Your Journey to"  subtitle="Canadian Citizenship"/>
    <CitizenshipOverview/>
   <WhyMadhav/>
   <CitizenshipTest/>
   </>
  )
}

export default CanadianCitizenship
