<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-1
        variant="info"
      >Systems Integration and Consulting</b-button>
      <b-collapse slot="collapse" id="accordion-1" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>Wired & Wireless provide superlative integration and consulting services in all areas of electronics and electrical engineering including Telecommunications, Telemetry, Electrical industrial control, and Wireless systems.</p>
            <p>Specific areas of specialty are listed below:</p>
            <p>
              <b>‣ Off-the-shelf technologies</b>
              <br />From the world's leading suppliers and supported by our professional engineering approach to quality project delivery. Wired & Wireless offers a range of communication solutions including VOIP, Wireless, Telemetry, Emergency-systems, Messaging, PABX, Paging, Broadband VPN , OH& S, RF, Security and Training.
            </p>
            <p>
              <b>‣ City-wide location systems, wireless security systems</b>
            </p>
            <p>
              <b>‣ Industrial on-site and multi-site Telemetry and Emergency-systems</b>
            </p>
            <p>
              <b>‣ City Wide Utility Monitoring for metering, breakdown, and security services.</b>
            </p>
            <p>
              <b>‣ Voice Network Services</b>
              <br />Telephony Solutions have been part of our offerings for more than a decade. We provide designed solutions for customers irrespective of size or distance. (5 -20,000 staffs). For instance we are able to provide a communications server for a multi-country pabx service.
            </p>
            <p>
              <b>‣ Communications Mobility Services</b>
              <br />Workforces are becoming increasingly mobile. Remote Teleworking, Wireless LAN, Handheld Devices – PDA’s, barcode-readers, DECT and portable telephony, GSM / GPRS / Blackberry, Videoconferencing.
            </p>
            <p>
              <b>‣ Communications Connectivity & Services</b>
              <br />We design, implement & commission advanced cabling and wireless systems for voice, data and video communications including:
              <br />- Cat5 , Cat5e Cat6 Structured Cabling, Server, Active Equipment, Cabinets, Cable pathways, patch panels, Network Hardware - Hubs, Switches etc.
              <br />- Network Traffic Audits & Cable Certifications
              <br />- Fibre Optic Cabling for voice, data and videoBroadband, ADSL, DSL, SHDSL
              <br />- Wireless – Wireless radiolinks, Microwave communications, Laser and Optical communications
              <br />
            </p>
            <p>
              <b>‣ Data & IT Network Services</b>
              <br />We are able to supply, install, & maintain leading brands of IT hardware and software such as:
              <br />- Hardware, Active Equipment, Switches, Routers, Database construction, Specialist programming services, Network design & maintenance
              <br />- Peripheral Equipment, Printers, Software, Microsoft Products, Custom Applications, Unified Messaging
              <br />- Solutions, Call Accounting Solutions, Network Monitoring, Infrastructure.
              <br />- Database construction, Specialist programming services, Network design & maintenance.
            </p>
            <p>
              <b>‣ Security and Image Network Services</b>
              <br />Access Control, M.A.T.V, C.C.T.V., network cameas and imaging storage.
            </p>
            <p>
              <b>‣ Consulting services</b>
              <br />Commercial Consulting in Telecommunications, Telemetry, IT and Wireless Systems.
            </p>
            <p>
              <b>‣ Internet Network Services</b>
              <br />Toll-bypass, VPN, Display, TCP/IP messaging, website-design, website optimisation, website communications interfacing.
            </p>
            <p>
              <b>‣ Electronics and telecommunications engineering design services</b>
              <br />These services ensure that a client's specific needs can always be solved no matter how complex the task. Our Telecom & ICT Advisory Service is available to provide designs and consulting to assist businesses define appropriate solutions to achieve their safety, efficiency and performance goals. R & D and Consulting in HighTechnology.
            </p>
          </b-card-text>
        </b-card-body>
      </b-collapse>
    </AppAccordion>
  </div>
</template>

<script>
import AppAccordion from "~/components/UI/Accordion";
export default {
  components: {
    AppAccordion
  }
};
</script>

<style lang="scss" scoped>
p {
  color: black;
  margin-left: 20px;
  margin-right: 20px;
  font-size: 19px;
  letter-spacing: 0;
  padding-bottom: 10px;
  font-weight: 500;
}
h3 {
  font-size: 27px;
  margin: 0 auto;
  margin-bottom: 10px;
  margin-top: 30px;
  margin-left: 20px;
  letter-spacing: 1.2px;
  text-align: left;
  color: rgba(86, 181, 219, 0.9);
}
hr {
  margin-left: 20px;
  margin-right: 20px;
  border-top: 1px solid rgba(86, 181, 219, 0.9);
}
b {
  font-weight: 600;
}
</style>