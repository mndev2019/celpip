import React from 'react'
import ImmigrateBanner from './ImmigrateBanner'
import ResidencyOverview from './ResidencyOverview'
import WhyMadhav from '../../About/WhyMadhav'
import CanadianTest from './CanadianTest'
import banner from '../../../../assets/Image/Canadian flag.jfif'

const CanadianResidency = () => {
  return (
   <>
       <ImmigrateBanner  title="Streamline Your Pathway to"  subtitle="Canadian Residency" img={banner}/>
       <ResidencyOverview/>
       <WhyMadhav/>
       <CanadianTest/>
   </>
  )
}

export default CanadianResidency
