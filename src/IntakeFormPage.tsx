import {
  Button,
  DatePicker,
  Form,
  Input,
  message,
  Radio,
  Select,
  Steps,
  Typography
} from 'antd'
import { format, set } from 'date-fns'
import React, { FC } from 'react'
import { Input as RainbowInput } from 'react-rainbow-components'
import { createRecord } from './API'
import { ClientViewModel } from './types'

const { Title } = Typography

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
}
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
}

const steps = [
  {
    title: 'Client',
    content: 'client',
  },
  {
    title: 'Accident',
    content: 'accident',
  },
  {
    title: 'Insurance',
    content: 'insurance',
  },
  {
    title: 'Medical',
    content: 'medical',
  },
  {
    title: 'Other',
    content: 'other',
  },
]

const IntakeForm: FC<{ onSubmit: Function }> = ({ onSubmit }) => {
  const [current, setCurrent] = React.useState(0)

  const next = () => {
    setCurrent(current + 1)
  }

  const prev = () => {
    setCurrent(current - 1)
  }

  const onFinish = ({
    clientName,
    gov,
    phoneNumber,
    DOB,
    whoIntake,
    DOI,
    hasPD,
    PDResolved,
    HIUsed,
    LW,
    treatment,
    injuries,
    priorMed,
    referred,
    ...p
  }: any) => {
    const DOIDate = new Date(DOI)
    const intakeDate = format(new Date(), 'MM/dd/yyyy')
    const client: ClientViewModel = {
      DOB: format(new Date(DOB), 'MM/dd/yyyy'),
      DOI: format(DOIDate, 'MM/dd/yyyy'),
      HI: HIUsed,
      LW,
      SOL: format(
        set(DOIDate, {
          month: DOIDate.getMonth(),
          date: 1,
          year: DOIDate.getFullYear() + 5,
        }),
        'MM/dd/yyyy'
      ),
      email: p.email,
      clientName,
      SSN: p.SSN,
      address: p.address,
      spouse: p.spouse,
      injuriesIntake: injuries?.join('; '),
      phoneNumber,
      priors: priorMed?.join('; '),
      PIPName: p.PIPName,
      AdverseName: p.AdverseName,
      PIPPolicyNumber: p.PIPPolicyNumber,
      AdverseClaimNumber: p.AdverseClaimNumber,
      AdversePolicyNumber: p.AdversePolicyNumber,
      PIPUMUIMClaimNo: p.PIPClaimNumber,
      AdverseMMY: p.AdverseMMY,
      passengers: p.passengers?.join('; '),
      resolved: p.resolved,
      emergencyContactName: p.emergencyContactName,
      emergencyContactPhone: p.emergencyContactPhone,
      emergencyContactRelation: p.emergencyContactRelation,
      gov: gov,
      PDResolved,
      airbags: p.airbags,
      hasPD,
      PRCaseNo: p.PRCaseNo,
      WC: p.WC,
      isGov: gov === 'Yes',
      languages: p.language?.join(' / '),
      timeOfIncident: p.timeOfIncident,
      PRCityAndInfo: p.PRCityAndInfo,
      theoryOfLiab: p.theoryOfLiab,
      knownProviders: treatment?.join('; '),
      PIPCoverage: p.PIPCoverage,
      howHear: p.howHear,
      PIPMMY: p.PIPMMY,
      PIPPhone: p.PIPPhone,
      AdversePhone: p.AdversePhone,
      treatment: treatment?.join('; '),
      caseNotes: `${intakeDate} (Did Intake - ${whoIntake});`,
      criminalHist: p.criminalHist,
      referred,
      intakeDate,
      whoIntake,
      loanOwner: p.loanOwner,
      employer: p.employer,
      wage: p.wage,
      tow: p.tow,
    }
    createRecord(client)
    onSubmit(client)
    message.success('Client added to Needles and Intake added to drive')
  }

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Form
      {...formItemLayout}
      name='basic'
      initialValues={{
        SSN: '000000000',
        resolved: 'No',
        gov: 'No',
        WC: 'No',
        hasPD: 'Yes',
        PDResolved: 'No',
        airbags: 'No',
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Steps progressDot current={current} size='small'>
        {steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>

      <div
        style={{
          display: steps[current].content === 'client' ? 'block' : 'none',
        }}
      >
        {/* Client Area Start */}
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={2}>Client Information</Title>
        </Form.Item>
        <Form.Item label='Client Name' name='clientName'>
          <Input />
        </Form.Item>
        <Form.Item label='Phone Number' name='phoneNumber'>
          <Input />
        </Form.Item>
        <Form.Item label='Email' name='email'>
          <Input />
        </Form.Item>
        <Form.Item label='Language' name='language'>
          <Select
            options={[
              { label: 'Spanish', value: 'Spanish' },
              { label: 'English', value: 'English' },
            ]}
            mode='tags'
          />
        </Form.Item>
        <Form.Item label='D.O.B' name='DOB'>
          <DatePicker format='MM/DD/YYYY' showToday={false} />
        </Form.Item>
        <Form.Item label='SSN' name='SSN'>
          <Input />
        </Form.Item>
        <Form.Item label='Address' name='address'>
          <Input />
        </Form.Item>
        <Form.Item label='Legal Spouse Name' name='spouse'>
          <Input />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={5}>Emergency Contact</Title>
        </Form.Item>
        <Form.Item label='Contact Name' name='emergencyContactName'>
          <Input />
        </Form.Item>
        <Form.Item label='Phone' name='emergencyContactPhone'>
          <Input />
        </Form.Item>
        <Form.Item
          label='Relation (e.g. Mom, Spouse, Brother)'
          name='emergencyContactRelation'
        >
          <Input />
        </Form.Item>
        {/* Client Area End */}
      </div>

      <div
        style={{
          display: steps[current].content === 'accident' ? 'block' : 'none',
        }}
      >
        {/* Accident Area Start */}
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={2}>Accident Information</Title>
        </Form.Item>
        <Form.Item label='Theory Of Liability' name='theoryOfLiab'>
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item label='D.O.I' name='DOI'>
          <DatePicker format='MM/DD/YYYY' />
        </Form.Item>
        <Form.Item label='Passengers' name='passengers'>
          <Select mode='tags' />
        </Form.Item>
        <Form.Item label='PR City and Info' name='PRCityAndInfo'>
          <Input.TextArea autoSize />
        </Form.Item>
        <Form.Item label='PR Case Number' name='PRCaseNo'>
          <Input />
        </Form.Item>
        <Form.Item label='Time Of Incident' name='timeOfIncident'>
          <RainbowInput name='timeOfIncident' type='time' />
        </Form.Item>
        <Form.Item label='Is Already Resolved?' name='resolved'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Government Entity?' name='gov'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Workers Comp?' name='WC'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Has PD?' name='hasPD'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Is PD Already Resolved?' name='PDResolved'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Did Airbags Deploy?' name='airbags'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        {/* Accident Area End */}
      </div>

      <div
        style={{
          display: steps[current].content === 'insurance' ? 'block' : 'none',
        }}
      >
        {/* Isurance Area Start */}
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={2}>Insurance Information</Title>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={5}>PIP</Title>
        </Form.Item>
        <Form.Item label='Insurance Name' name='PIPName'>
          <Input />
        </Form.Item>
        <Form.Item label='Phone Number' name='PIPPhone'>
          <Input />
        </Form.Item>
        <Form.Item label='Policy Number' name='PIPPolicyNumber'>
          <Input />
        </Form.Item>
        <Form.Item label='Claim Number' name='PIPClaimNumber'>
          <Input />
        </Form.Item>
        <Form.Item label='Make/Model/Yr' name='PIPMMY'>
          <Input />
        </Form.Item>
        <Form.Item label='Kind of Pip Coverage' name='PIPCoverage'>
          <Radio.Group>
            <Radio value='Full'>Full</Radio>
            <Radio value='Simple'>Simple</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={5}>Adverse</Title>
        </Form.Item>
        <Form.Item label='Insurance Name' name='AdverseName'>
          <Input />
        </Form.Item>
        <Form.Item label='Phone Number' name='AdversePhone'>
          <Input />
        </Form.Item>
        <Form.Item label='Policy Number' name='AdversePolicyNumber'>
          <Input />
        </Form.Item>
        <Form.Item label='Claim Number' name='AdverseClaimNumber'>
          <Input />
        </Form.Item>
        <Form.Item label='Make/Model/Yr' name='AdverseMMY'>
          <Input />
        </Form.Item>
        {/* Insurance Area End */}
      </div>

      <div
        style={{
          display: steps[current].content === 'medical' ? 'block' : 'none',
        }}
      >
        {/* Medical Area Start */}
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={2}>Medical Information</Title>
        </Form.Item>
        <Form.Item label='HI Used' name='HIUsed'>
          <Input />
        </Form.Item>
        <Form.Item label='Injuries' name='injuries'>
          <Select mode='tags' />
        </Form.Item>
        <Form.Item
          label='Treatment and dates (amb/hospital/MRI?)'
          name='treatment'
        >
          <Select mode='tags' />
        </Form.Item>
        <Form.Item label='Prior Med History' name='priorMed'>
          <Select mode='tags' />
        </Form.Item>
        {/* Medical Area End */}
      </div>

      <div
        style={{
          display: steps[current].content === 'other' ? 'block' : 'none',
        }}
      >
        {/* Medical Area Start */}
        <Form.Item
          wrapperCol={{
            xs: {
              span: 24,
              offset: 0,
            },
            sm: {
              span: 16,
              offset: 8,
            },
          }}
        >
          <Title level={2}>Other Information</Title>
        </Form.Item>
        <Form.Item label='Referred to/by' name='referred'>
          <Input />
        </Form.Item>
        <Form.Item label='How did you hear about us?' name='howHear'>
          <Input />
        </Form.Item>
        <Form.Item label='Criminal History' name='criminalHist'>
          <Select mode='tags' />
        </Form.Item>
        <Form.Item label='HHS' name='HHS'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='LW?' name='LW'>
          <Radio.Group>
            <Radio value='Yes'>Yes</Radio>
            <Radio value='No'>No</Radio>
            <Radio value='Maybe'>Maybe</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Employer (in cash?)' name='employer'>
          <Input />
        </Form.Item>
        <Form.Item label='Wage' name='wage'>
          <Input />
        </Form.Item>
        <Form.Item label='Loan/owner of car?' name='loanOwner'>
          <Input />
        </Form.Item>
        <Form.Item label='Towed/tow yard?' name='tow'>
          <Input />
        </Form.Item>
        <Form.Item label='Who did the intake?' name='whoIntake'>
          <Input />
        </Form.Item>
        {/* Medical Area End */}
      </div>

      {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
          Previous
        </Button>
      )}
      {current === steps.length - 1 && (
        <Form.Item {...tailFormItemLayout}>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      )}
      {current < steps.length - 1 && (
        <Button type='primary' onClick={() => next()}>
          Next
        </Button>
      )}
    </Form>
  )
}

export default IntakeForm
