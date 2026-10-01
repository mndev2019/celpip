import React from 'react'
import ImmigrateBanner from './ImmigrateBanner'
import ResidencyOverview from './ResidencyOverview'
import WhyMadhav from '../../About/WhyMadhav'
import CanadianTest from './CanadianTest'

const CanadianResidency = () => {
  return (
   <>
       <ImmigrateBanner  title="Streamline Your Pathway to"  subtitle="Canadian Residency"/>
       <ResidencyOverview/>
       <WhyMadhav/>
       <CanadianTest/>
   </>
  )
}

export default CanadianResidency
