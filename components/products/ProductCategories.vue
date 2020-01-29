<template>
  <section id="categories">
    <h1>Product Categories</h1>

    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" id="buscomms"></span>
            <h2>Business Communications</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/buscoms.png" slot="img" />
                  <ul slot="li" class="business">
                    <li class="top">
                      <a href="#">‣ Business wireless</a>
                    </li>
                    <li>
                      <a href="#">‣ Business cordless</a>
                    </li>
                    <li>
                      <a href="#">‣ Business telephone system</a>
                    </li>
                    <li>
                      <a href="#">‣ VoWiFi/VoWLAN</a>
                    </li>
                    <li>
                      <a href="#">‣ Deskphones</a>
                    </li>
                    <li>
                      <a href="#">‣ Bluetooth</a>
                    </li>
                    <li>
                      <a href="#">‣ Headsets</a>
                    </li>
                    <li>
                      <a href="#">‣ Fixed wireless terminals</a>
                    </li>
                    <li>
                      <a href="#">‣ Duress and safety system</a>
                    </li>
                    <li>
                      <a href="#">‣ Expansions and upgrades</a>
                    </li>
                    <li>
                      <a href="#">‣ 3G routers</a>
                    </li>
                    <li>
                      <a href="#">‣ Structured Voice</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" id="wirelessvoice"></span>
            <h2>Wireless Voice Communications</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod2.png" slot="img" />
                  <ul slot="li" class="voice">
                    <li class="top">
                      <a href="#">‣ Wireless handsets</a>
                    </li>
                    <li>
                      <a href="#">‣ VoWiFi, VoWLAN</a>
                    </li>
                    <li>
                      <a href="#">‣ IP-DECT handsets</a>
                    </li>
                    <li>
                      <a href="#">‣ IP DECT gateways</a>
                    </li>
                    <li>
                      <a href="#">‣ Business-grade DECT handsets</a>
                    </li>
                    <li>
                      <a href="#">‣ Tetra radio systems</a>
                    </li>
                    <li>
                      <a href="#">‣ Intrinsically safe FM-ATEX</a>
                    </li>
                    <li>
                      <a href="#">‣ Intrinsically safe FM-EEX</a>
                    </li>
                    <li>
                      <a href="#">‣ IS handsets</a>
                    </li>
                    <li>
                      <a href="#">‣ Satellite phones/Satellite tracking</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" id="wirelesslan"></span>
            <h2>Wireless LAN</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod2.png" slot="img" />
                  <ul slot="li" class="lan">
                    <li style="margin-top: 50px;" class="margbot">
                      <a href="#">‣ Wireless Switches</a>
                    </li>
                    <li class="margbot">
                      <a href="#">‣ Wireless access points</a>
                    </li>
                    <li class="margbot">
                      <a href="#">‣ Public WiFi systems</a>
                    </li>
                    <li class="margbot">
                      <a href="#">‣ Wireless Controllers</a>
                    </li>
                    <li class="margbot">
                      <a href="#">‣ MESH networks</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" id="datacomms"></span>
            <h2>Data Communications</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod3.png" slot="img" />
                  <ul slot="li" class="data">
                    <li class="top">
                      <a href="#">‣ Serial modems</a>
                    </li>
                    <li>
                      <a href="#">‣ Ethernet Modems</a>
                    </li>
                    <li>
                      <a href="#">‣ MESH networks</a>
                    </li>
                    <li>
                      <a href="#">‣ Industrial modems</a>
                    </li>
                    <li>
                      <a href="#">‣ SCADA radios</a>
                    </li>
                    <li>
                      <a href="#">‣ PLC modems</a>
                    </li>
                    <li>
                      <a href="#">‣ 3G, 4G cellular modems</a>
                    </li>
                    <li>
                      <a href="#">‣ Satellite modems</a>
                    </li>
                    <li>
                      <a href="#">‣ HF radio modems</a>
                    </li>
                    <li>
                      <a href="#">‣ PACCS telemetry</a>
                    </li>
                    <li>
                      <a href="#">‣ Sensor networks</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" id="radiodatacomms"></span>
            <h2>Radio Data Communications</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod4.png" slot="img" />
                  <ul slot="li" class="radio">
                    <li class="top">
                      <a href="#">‣ Microwave radio links</a>
                    </li>
                    <li>
                      <a href="#">‣ Antennas</a>
                    </li>
                    <li>
                      <a href="#">‣ Broadband radio</a>
                    </li>
                    <li>
                      <a href="#">‣ RF cables</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" id="industrialnet"></span>
            <h2>Industrial Networking</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod5.png" slot="img" />
                  <ul slot="li" class="industrial">
                    <li class="top">
                      <a href="#">‣ Hirschmann industrial ethernet</a>
                    </li>
                    <li>
                      <a href="#">‣ Hirschmann fiber interfaces</a>
                    </li>
                    <li>
                      <a href="#">‣ Power system</a>
                    </li>
                    <li>
                      <a href="#">
                        ‣ Large site warning &
                        <br />
                        <span class="newline">emergency sirens</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">‣ Rectifier</a>
                    </li>
                    <li>
                      <a href="#">‣ Leased line & dial-up</a>
                    </li>
                    <li>
                      <a href="#">‣ Industrial secure wireless</a>
                    </li>
                    <li>
                      <a href="#">‣ Industrial Wi-Fi</a>
                    </li>
                    <li>
                      <a href="#">‣ 400 MHz to 900 MHz wireless</a>
                    </li>
                    <li>
                      <a href="#">‣ Industrial mesh radios</a>
                    </li>
                    <li>
                      <a href="#">‣ Industrial products</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
          <span class="to-this" style="top: -380px" id="duressandsafety"></span>
            <h2>Duress safety and security technologies</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod6.png" slot="img" />
                  <ul slot="li" class="duress">
                    <li class="top">
                      <a href="#">‣ TWIG Australia</a>
                    </li>
                    <li>
                      <a href="#">‣ Duress and safety system</a>
                    </li>
                    <li>
                      <a href="#">‣ Intrinsically safe devices</a>
                    </li>
                    <li>
                      <a href="#">‣ Solutions</a>
                    </li>
                    <li>
                      <a href="#">‣ Personal transmitters</a>
                    </li>
                    <li>
                      <a href="#">‣ PACCS system</a>
                    </li>
                    <li>
                      <a href="#">‣ OH&S obligations</a>
                    </li>
                    <li>
                      <a href="#">
                        ‣ Duress person-down
                        <br />
                        <span class="newline">lone-worker systems</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">‣ Twig RTLS RFID</a>
                    </li>
                    <li>
                      <a href="#">‣ Mini-PACCS</a>
                    </li>
                    <li>
                      <a href="#">‣ PACCS alert</a>
                    </li>
                    <li>
                      <a href="#">‣ Wi-Fi and radio system</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12">
          <div class="info">
            <span class="to-this" style="top: -380px" id="largesitecoms"></span>
            <h2>Large Site Communications</h2>
            <div class="container">
              <div class="row card">
                <app-category-card>
                  <img src="../../assets/img/products/prod7.png" slot="img" />
                  <ul slot="li" class="large">
                    <li class="top">
                      <a href="#">‣ Evacuation & emergency systems</a>
                    </li>
                    <li>
                      <a href="#">‣ Alter alarm messaging software</a>
                    </li>
                    <li>
                      <a href="#">
                        ‣ Communications for BMS,
                        <br />
                        <span class="newline">PMS, fire, security, evac,</span>
                        <br />
                        <span class="newline">paging, messaging</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">‣ Display screens</a>
                    </li>
                    <li>
                      <a href="#">‣ Wi-Fi systems</a>
                    </li>
                  </ul>
                </app-category-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import OurPartners from "~/components/home/HomePartners";
import CategoryCard from "~/components/UI/CategoryCard.vue";

export default {
  components: {
    appOurPartners: OurPartners,
    appCategoryCard: CategoryCard
  }
};
</script>

<style lang="scss" scoped>
#categories {
  padding-top: 0px;
  margin-bottom: 20px;
  /* height: 1000px; */
}
.to-this {
  // background-color: purple;
  min-width: 20px;
  min-height: 20px;
  position: absolute;
  top: -85px;
}
li.top {
  margin-top: 20px;
}
a {
  color: black;
}
a:hover {
  text-decoration: none;
  color: rgb(76, 76, 253);
  /* transform: scale(1.5); */
  /* transition: all 0.3s ease; */
}
li:hover {
  transform: scale(1.15);
  transform-origin: 15% 100%;
  transition: all 0.2s ease;
}
li {
  transform: scale(1);
  transform-origin: 15% 100%;
  transition: all 0.5s ease;
}
ul {
  /* margin-left: 13px; */
  margin-left: 15px;
}
h1 {
  padding-bottom: 37px;
}
.container {
  margin: 0 auto;
}

h2 {
  margin-bottom: 15px;
  margin-top: 10px;
  text-align: center;
  color: rgba(86, 181, 219, 0.9);
}
.row.card {
  margin: 0 auto;
  text-align: center;
}
span.newline {
  margin-left: 12px;
}
.info {
  position: relative;
}
//STYLING THE BACK OF THE CARD'S LI TAGS
.info li {
  margin-left: 10px;
  margin-bottom: 0px;
}
li.margbot {
  margin-bottom: 25px;
}
.business li {
  margin-top: 1px;
  margin-bottom: 1px;
}
.business li.top {
  margin-top: 5px;
}
.industrial li {
  margin-top: 1px;
  margin-bottom: 1px;
}
.industrial li.top {
  margin-top: 5px;
}
.voice li {
  margin-top: 5px;
  margin-bottom: 5px;
}
.voice li.top {
  margin-top: 17px;
}
.data li {
  margin-top: 4px;
  margin-bottom: 4px;
}
.data li.top {
  margin-top: 8px;
}
.radio li {
  margin-top: 30px;
  margin-bottom: 30px;
}
.radio li.top {
  margin-top: 65px;
}
.duress li {
  margin-top: 0px;
  margin-bottom: 0px;
}
.duress li.top {
  margin-top: 0px;
}
.large li {
  margin-top: 20px;
  margin-bottom: 20px;
}
.large li.top {
  margin-top: 40px;
}
.row.card {
  border: none !important;
}
h2 {
  font-size: 21px;
  color: rgba(86, 181, 219, 0.9);
  font-weight: bold;
}
@media screen and (max-width: 700px) {
  .business li {
    margin-top: 4px;
    margin-bottom: 4px;
  }
  .business li.top {
    margin-top: 12px;
  }
  .voice li {
    margin-top: 3px;
    margin-bottom: 3px;
  }
  .voice li.top {
    margin-top: 12px;
  }
  .data li.top {
    margin-top: 18px;
  }
  .industrial li {
    margin-top: 1px;
    margin-bottom: 1px;
  }
  .industrial li.top {
    margin-top: 8px;
  }
  .large li.top {
  margin-top: 27px;
}
  .duress li.top {
  margin-top: 22px;
}
  div.flip-card {
    height: 320px;
    width: 300px;
  }
  a {
    font-size: 16px;
    max-width: 250px;
  }
  li {
    // margin: 2px;
    max-width: 250px;
    line-height: 20px;
  }
}
</style>