import Airtable from 'airtable'
import { CreateRecordParams } from './types'

const LOJJTestBase = new Airtable({
  apiKey: process.env.REACT_APP_AIRTABLE_API_KEY,
}).base(process.env.REACT_APP_AIRTABLE_BASEY_TEST)

export const createRecord = ({
  clientName,
  DOB,
  DOI,
  HI,
  LW,
  SOL,
  injuriesIntake,
  phoneNumber,
  priors,
  PDResolved,
  isGov,
  knownProviders,
  referred,
  intakeDate,
  caseNotes,
}: CreateRecordParams) =>
  LOJJTestBase('All Clients').create(
    [
      {
        fields: {
          Client: clientName,
          'Case Notes': caseNotes,
          'Phone Number': phoneNumber,
          'D.O.I.': DOI,
          'D.O.B.': DOB,
          'S.O.L.': SOL,
          'HI? On Notice?': HI,
          'LW?': LW,
          'Injuries - Intake': injuriesIntake,
          Priors: priors,
          'PD Resolved?': PDResolved,
          'Known Providers': knownProviders,
          'Referred By/To': referred,
          'Intake Date': intakeDate,
          'Govt Entity?': isGov ? 'Yes' : undefined,
          Spoken: intakeDate,
          'PIP Exhausted': 'No',
          'PIP App': 'Not Done',
          Status: '1',
        },
      },
    ],
    function (err: any, records: any) {
      if (err) {
        console.error(err)
        return
      }
      records.forEach(function (record: any) {
        console.log(record.getId())
      })
    }
  )
