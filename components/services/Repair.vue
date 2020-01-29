<template>
  <div>
    <AppAccordion>
      <b-button
        slot="button"
        block
        href="#"
        v-b-toggle.accordion-9
        variant="info"
      >Repair and Maintenance</b-button>
      <b-collapse slot="collapse" id="accordion-9" accordion="my-accordion" role="tabpanel">
        <b-card-body>
          <b-card-text>
            <p>
              <b>Our Heritage:</b>
              <br />As the company Ericsson endorsed to support and develop their cordless systems, we are the most experienced, longest serving cordless company in Australia.
            </p>
            <p>
              <b>Our Ability and Offering:</b>
            </p>
            <p>
              <b>‣ Support & Service to your Existing Cordless Systems</b>
              <br />We offer Support and Services to an immense range of Cordless phone systems that exist on the market, allowing us to be leaders in maintaining and servicing existing phone system installations. Some common systems we service include:
              <br />• All popular Cordless Systems
              <br />• Ericsson, Nira, Alcatel, Aastra, LG Ericsson, Ascom cordless Systems
            </p>
            <p>
              <b>‣ We provide free quotes for repair:</b>
              <br />To repair a cordless handset or equipment simply place it in a box or a bag with padding and courier or post it to us. We provide services in Sydney, Brisbane, Melbourne, Adelaide, Canberra, Perth and Australian regional Areas. We also have offices overseas that carry out similar services.
              <br />
              <br />Our technology leadership, business understanding and extensive experiences make us one of the market leader’s in support and maintenance. Based on the combination of Ericsson’s flexible support portfolio, our pro-active way of working and our focus on the customer’s business, we can provide operational expenses reductions as well as revenue protection. Our optimal and unique experience of local and global expertise guarantees our agreed service level.
            </p>
            <p>
              <b>‣ Tech Support for Cordless phone and Cordless phone system.</b>
              <br />• Help Desk for your cordless system
              <br />• Cordless Phone Support
              <br />• Troubleshooting
              <br />• Remote Dial-in 24/7 (Remote Access)
              <br />• 24/7 Support
            </p>
            <p>
              <b>‣ On Site Call Out</b>
              <br />• Cordless System Repair Work
              <br />• Cordless System upgrade
              <br />• Cordless System Expansions
              <br />• 24/7 On Site Call out Service
            </p>
            <p>
              <b>‣ Maintenance Plans</b>
              <br />• Maintenance Plans provide you with peace of mind with limited downtime
              <br />• 24/7 or custom hours
              <br />• 24/7 On Site Call out Service
              <br />
              <br />For further information regarding our above services or any services to your Phone Systems not mentioned above contact us via your preferred method below.
            </p>
            <p>
              <b>Cordless Handsets</b>
              <br />Sales, service and maintenance of: DT368, DT310, DT570, DT590, DT288, DT290, DT292, DT401, DT411
            </p>
            <p>
              <b>Control Cabinet and Cards</b>
              <br />Sales, service and maintenance of: DCT1800, DCT1800S, DCT1800G, BP250, BP150, BP Compact, MB110
            </p>
            <p>
              <b>Base Stations</b>
              <br />Sales, service and maintenance of: BS201, BS230, BS260, BS330, BS340, IPBS
            </p>
            <p>
              <b>We also support:</b>
              <br />• DT430 Atex, DT433, DT402, DT412, DT422, DT413, DT423, DT433 Atex
              <br />• 9d23 Talker messenger protector
              <br />• 9d24 Talker messenger protector
              <br />• d41, d62, d81 Talker messenger protector
              <br />• Ericsson Cordless systems, Ascom Cordless systems, Ericsson DECT, Ascom DECT, Nira Cordlesss Systems, Nira DECT
            </p>
            <p>
              <b>News:</b>
              <br />No need to upgrade immediately! Our Service manager estimates we can support the cordless DCT1800 system cards and cabinets for another 5 years at least without change. Contact us of 1300 765 543 for support of your existing system.
            </p>
            <p>
              <b>Interested in upgrading?</b>
              <br />We have 3 paths of upgrade; 3 levels of investment. Contact us for obligation-free quotations. You can upgrade for less than you expect!
            </p>
            <br />
            <p>
              <b style="font-weight:700;text-decoration:underline;">Contact Us</b>
            </p>
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-12">
                <p class="contact">
                  <b>By Courier:</b>
                  <br />
                  <br />Wired & Wireless Solutions International
                  <br />Ericsson Cordless Solutions
                  <br />Level 7, 6 Help St Chatswood NSW 2067
                  <br />Tel: +61 2 9412 2100 Fax:+61 2 9403 7900
                  <br />
                  <a
                    href="https://www.wwsinternational.com.au"
                    target="_blank"
                  >www.wwsinternational.com.au</a>
                  <br />
                  <a href="https://ericssoncs.com.au/" target="_blank">www.ericssoncs.com</a>
                </p>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-12">
                <p class="contact">
                  <b>By Post:</b>
                  <br />
                  <br />PO Box 1197, Chatswood 2057, Australia
                </p>
              </div>
            </div>
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