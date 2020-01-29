<template>
    <section id="customers">
        <h1>Our Clients</h1>
        <div class="container">
            <div class="row">
                <p>
                    Our divisions have successfully installed more than 10,000 projects for clients over a period of more than 10 years. In Australia, Asia, & Middle East we maintain customer equipment and networks. We have solutions for both City and regional centres.
                </p>
                <p>
                    Our customers include the largest Blue chip and Top 500 organisations who realise they can achieve the levels of support they need in a multilevel service agreement ensuring that resources are used wisely and economically.
                    <ul>
                        <li>‣ Operators, Telcos, energy and utility companies</li>
                        <li>‣ Offices in SME, Corporate & Government</li>
                        <li>‣ Industrial sites, manufacturing sites.</li>
                        <li>‣ Factories, Food processing</li>
                        <li>‣ Shipping, logistics, warehouses</li>
                        <li>‣ Hospitals and Health Care Centres.</li>
                        <li>‣ Shopping & Show Malls</li>
                        <li>‣ Universities, Colleges and Schools</li>
                        <li>‣ Security Sectors (Correctional Centres, Military compounds).</li>
                        <li>‣ Oil Refineries.</li>
                        <li>‣ Entertainment Industries.</li>
                        <li>‣ Governmental Sectors.</li>
                        <li>‣ Hotels, Resorts and Tourism industries.</li>
                        <li>‣ Contact us for a confidential discussion of References and Reference sites in your sector.</li>
                    </ul>
                </p>
                <div class="center">
                    <h3 class="notop">Our promise to you includes five guarantees of   quality and service.</h3>
                    <a href="/WWSI_Guarantees.jpg" target="_blank">
                        <img src="~assets/img/WWSI_Guarantees.jpg" alt="WWSI_GUARANTEES.JPG">
                    </a>
                </div>
                <div class="center" style="margin-top: 45px;">
                    <h3>WWSI carry a twelve-month return-to-base warranty, or longer by agreement.</h3>
                    <a href="/WWSI_WARRANTY AND RETURNS.jpg" target="_blank">
                        <img src="~assets/img/WWSI_WARRANTY AND RETURNS.jpg" alt="WWSI_GUARANTEES.JPG">
                    </a>
                </div>
            </div>
        </div>
        
    </section> 
</template>

<script>
export default {
    layout: 'company'
}
</script>

<style scoped>
#customers {
    padding-top: 0px;
}
ul {
    margin-top: 15px;
    margin-left: 10px;
}
.center {
    margin: 0 auto;
    text-align: center;
}
h3.notop {
    padding-top: 0px;
    margin-top: 10px;
}
img {
    transform: scale(1);
    transition: all 0.4s ease-in-out;
}
img:hover {
    transform: scale(1.02);
    transition: all 0.4s ease-in-out;
}
@media screen and (max-width: 700px) {
  h3 {
    text-align: center;
  }
  h4, h2 {
    padding-left: 10px;
    padding-right: 20px;
  }
  p {
    font-size: 15px;
  }
  p {
    padding-left: 10px;
  }
  img {
      width: 300px;
      background-repeat: no-repeat;
  }
}
</style>