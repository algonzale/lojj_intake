import {
  DataTableCell,
  Table,
  TableBody,
  TableCell,
  TableHeader
} from '@david.kucsai/react-pdf-table'
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer'
import React, { FC } from 'react'
import { ClientViewModel } from './types'

const IntakeReport: FC<{ client: ClientViewModel }> = ({ client }) => {
  const {
    clientName,
    languages,
    DOB,
    DOI,
    SSN,
    phoneNumber,
    address,
    email,
    spouse,
    emergencyContactName = '',
    emergencyContactPhone = '',
    emergencyContactRelation = '',
    PIPUMUIMClaimNo,
    PIPName,
    PIPPhone,
    PIPPolicyNumber,
    AdverseClaimNumber,
    AdverseName,
    AdversePhone,
    AdversePolicyNumber,
    HI,
    LW,
    injuriesIntake,
    priors,
    AdverseMMY,
    PDResolved,
    PIPCoverage,
    referred,
    PRCaseNo,
    PRCityAndInfo,
    WC,
    airbags,
    gov,
    hasPD,
    passengers,
    theoryOfLiab,
    timeOfIncident,
    PIPMMY,
    HHS,
    criminalHist,
    employer,
    howHear,
    wage,
    whoIntake,
    loanOwner,
    tow,
    treatment,
  } = client
  return (
    <Document>
      <Page size='A4' style={s.page}>
        {/* pip */}

        <Text style={s.title}>Client</Text>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Full name: {clientName}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Language: {languages}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Phone: {phoneNumber}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Email: {email}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>D.O.B: {DOB}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>SSN: {SSN}</Text>
            </View>
          </View>

          <View style={s.sep} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Legal spouse: {spouse}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>
                Emergency contact:{' '}
                {`${emergencyContactName} ${
                  emergencyContactRelation
                    ? `(${emergencyContactRelation})`
                    : ''
                } ${emergencyContactPhone}`}
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Address: {address}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Diagram(maps) and # of cars involved: </Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: '60px' }} />

        <Text style={s.title}>Insurance</Text>

        <View style={s.tableCont}>
          <Table
            data={[
              {
                PIPName,
                PIPPhone,
                PIPPolicyNumber,
                PIPUMUIMClaimNo,
              },
            ]}
          >
            <TableHeader>
              <TableCell style={s.tableHead}>PIP</TableCell>
              <TableCell style={s.tableHead}>Phone Number</TableCell>
              <TableCell style={s.tableHead}>Policy Number</TableCell>
              <TableCell style={s.tableHead}>Claim Number</TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.PIPName}
              />
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.PIPPhone}
              />
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.PIPPolicyNumber}
              />
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.PIPUMUIMClaimNo}
              />
            </TableBody>
          </Table>

          <View style={s.sep} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Make/Model/yr: {PIPMMY}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Coverage: {PIPCoverage}</Text>
            </View>
          </View>
        </View>

        {/* Liab */}
        <View style={s.tableCont}>
          <Table
            data={[
              {
                AdverseName,
                AdversePhone,
                AdversePolicyNumber,
                AdverseClaimNumber,
              },
            ]}
          >
            <TableHeader>
              <TableCell style={s.tableHead}>Adverse Ins</TableCell>
              <TableCell style={s.tableHead}>Phone Number</TableCell>
              <TableCell style={s.tableHead}>Policy Number</TableCell>
              <TableCell style={s.tableHead}>Claim Number</TableCell>
            </TableHeader>
            <TableBody>
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.AdverseName}
              />
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.AdversePhone}
              />
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.AdversePolicyNumber}
              />
              <DataTableCell
                style={s.tableCell}
                getContent={(r) => r.AdverseClaimNumber}
              />
            </TableBody>
          </Table>

          <View style={s.sep} />
          <Text style={s.text}>Make/Model/yr: {AdverseMMY}</Text>
        </View>

        <View style={{ marginBottom: '8px' }} />

        <Text style={s.title}>Accident</Text>
        <View>
          <Text style={s.text}>Theory of liability: {theoryOfLiab}</Text>

          <View style={s.sep} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={s.text}>Passengers: {passengers}</Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 2 }}>
              <Text style={s.text}>D.O.I: {DOI}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={s.text}>PR info: {PRCityAndInfo}</Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 2 }}>
              <Text style={s.text}>PR case #: {PRCaseNo}</Text>
            </View>
          </View>

          <View style={s.sep} />

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Has PD?: {hasPD}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>PD resolved?: {PDResolved}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Time: {timeOfIncident}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Airbags deployed?: {airbags}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Is WC?: {WC}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Is Gov?: {gov}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginBottom: '8px' }} />

        <Text style={s.title}>Medical</Text>

        <View style={{ flexDirection: 'row' }}>
          <View style={{ flex: 2 }}>
            <Text style={s.text}>HI: {HI}</Text>
          </View>
          <View style={{ flex: 3 }}>
            <Text style={s.text}>Pior medical history: {priors}</Text>
          </View>
          <View style={{ flex: 1 }} />
        </View>
        <Text style={s.text}>Injuries: {injuriesIntake}</Text>
        <Text style={s.text}>Treatment: {treatment}</Text>

        <View style={{ marginBottom: '8px' }} />

        <Text style={s.title}>Other</Text>
        <View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>LW?: {LW}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Employer: {employer}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Wage: {wage}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Referred to/by: {referred}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>HHS: {HHS}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Intake by: {whoIntake}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 3 }}>
              <Text style={s.text}>Criminal hist: {criminalHist}</Text>
            </View>
            <View style={{ flex: 1 }} />
            <View style={{ flex: 2 }}>
              <Text style={s.text}>How did you hear about us?: {howHear}</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>Loan/owner of car? {loanOwner}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={s.text}>
                Towed/tow yard?:
                {tow}
              </Text>
            </View>
          </View>
        </View>
      </Page>
    </Document>
  )
}

// Create styles
const s = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: '8px',
  },
  sep: {
    marginBottom: '5px',
  },
  text: {
    fontSize: 12,
    marginBottom: '8px',
  },
  title: {
    fontSize: 20,
    marginBottom: '10px',
    borderBottom: 1,
    borderBottomColor: 'gainsboro',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  tableCell: {
    padding: '2px 0 2px 4px',
    textAlign: 'center',
    fontSize: 12,
  },
  tableHead: {
    padding: '2px 0 2px 4px',
    textAlign: 'center',
    fontSize: 12,
  },
  tableCont: {
    paddingBottom: '8px',
  },
})

export default IntakeReport
