import React from 'react'
import ImmigrateBanner from '../CanadianResidency/ImmigrateBanner'
import WhyMadhav from '../../About/WhyMadhav'
import banner from '../../../../assets/Image/australianvisa.jfif'
import AustralianVisaOverview from './AustralianVisaOverview'
import VisaTest from './VisaTest'

const AustralianVisa = () => {
    return (
        <>
            <ImmigrateBanner title="Simplify Your Journey to" subtitle="Australia" img={banner} />
            <AustralianVisaOverview/>
              <WhyMadhav/>
              <VisaTest/>
        </>
    )
}

export default AustralianVisa
