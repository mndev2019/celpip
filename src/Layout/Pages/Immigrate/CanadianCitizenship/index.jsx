import React from 'react'
import ImmigrateBanner from '../CanadianResidency/ImmigrateBanner'
import WhyMadhav from '../../About/WhyMadhav'
import CitizenshipOverview from './CitizenshipOverview'
import CitizenshipTest from './CitizeshipTest'
import banner from '../../../../assets/Image/Canadian flag.jfif'

const CanadianCitizenship = () => {
  return (
   <>
   <ImmigrateBanner  title="Prepare for Your Journey to"  subtitle="Canadian Citizenship" img={banner}/>
    <CitizenshipOverview/>
   <WhyMadhav/>
   <CitizenshipTest/>
   </>
  )
}

export default CanadianCitizenship
