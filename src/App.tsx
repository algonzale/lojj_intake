import { PDFDownloadLink } from '@react-pdf/renderer'
import { Button } from 'antd'
import React, { useState } from 'react'
import './App.css'
import IntakeForm from './IntakeFormPage'
import IntakeReport from './IntakeReport'
import Login from './Login'
import { ClientViewModel } from './types'

//not working
//language
//pip claim no
//Has PD
//PD resolved
//isGov
//PR Case
//Treatment
//Criminal Hist
//Exployer
//HHS
//Wage
//Intake by
//Towed
//loan owner of car

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [isIntakeReportPage, setIsIntakeReportPage] = useState<boolean>(false)
  const [client, setClient] = useState<ClientViewModel>({
    DOB: '2/3/4',
    DOI: '3/4/5',
    HI: 'Medicaid',
    languages: 'Spanish / English',
    LW: 'Maybe',
    SOL: '3/4/5',
    email: 'test@test.com',
    clientName: 'John E. Cena',
    SSN: '000000000',
    address: '508 E Outlook Cv Draper, UT 84020',
    spouse: 'Michelle Obama',
    injuriesIntake: 'Knee; Chest; Right Arm; Left Shoulder; Dizzines',
    phoneNumber: '345-434-4343',
    priors: '2017 MVA; 2015 Knee Surgery;',
    PIPName: 'Allstate',
    AdverseName: 'Geico',
    PIPPolicyNumber: 'S9F8M9999888FJ',
    AdverseClaimNumber: '98DF0000000HF8800',
    AdversePolicyNumber: '834JF',
    PIPUMUIMClaimNo: '845304849',
    AdverseMMY: '2013 NISSAN SUBURU',
    passengers: 'King Krule (Son)',
    resolved: 'No',
    emergencyContactName: 'Barack Obama',
    emergencyContactPhone: '293-383-3833',
    emergencyContactRelation: 'Friend',
    gov: 'No',
    PDResolved: 'No',
    airbags: 'Yes',
    hasPD: 'Yes',
    WC: 'No',
    timeOfIncident: '12:32 AM',
    PRCityAndInfo:
      'Located in West Valley City. It has been requested and we are waiting',
    theoryOfLiab: 'P was heading west when D rear-ended him',
    PIPCoverage: 'Full',
    howHear: 'Radio',
    PIPMMY: 'TOY CORR 2005',
    PIPPhone: '801-233-2222',
    AdversePhone: '343-2344-2345',
    treatment:
      'USMRI (1/3/20); Axcess Chiro (12/7/20); Health for Life (1/18/21)',
  })

  const onSubmit = (client: ClientViewModel) => {
    console.log(client, 'client')
    setClient(client)
    setIsIntakeReportPage(true)
  }

  return (
    <div className='App'>
      {/* <IntakeReport client={client} /> */}
      {!isIntakeReportPage ? (
        isLoggedIn ? (
          <IntakeForm onSubmit={onSubmit} />
        ) : (
          <Login setIsLoggedIn={setIsLoggedIn} />
        )
      ) : (
        <div>
          <div>
            <Button>
              <PDFDownloadLink
                document={<IntakeReport client={client} />}
                fileName={`${client.clientName.replaceAll(' ', '_')}.pdf`}
              >
                {({ blob, url, loading, error }) =>
                  loading ? 'Loading document...' : 'Download Report'
                }
              </PDFDownloadLink>
            </Button>
            or
            <Button onClick={() => setIsIntakeReportPage(false)}>
              New Intake
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
