<template>
    <section id="links">
        <h1>Links</h1>
        <div class="container">
            <div class="row">
                <img src="~/assets/img/links/acs.jpg" alt="" style="height: 25px;">
                <p>
                    Australian Cordless Solutions & Products are widely used and support for Ericsson business cordless and residential cordless handsets and phone systems is obtainable.
                    <br>
                    <a href="https://www.ericssoncs.com.au" target="_blank">www.ericssoncs.com.au</a>
                </p>
                <br>
                <img src="~/assets/img/links/alcatel.gif" alt="" style="height: 80px;" class="eric">
                <p>
                    Alcatel provides communications solutions to telecommunication carriers, Internet service providers and enterprises for delivery of voice, data and video applications to their customers or employees.
                    <br>
                    <a href="https://www.al-enterprise.com" target="_blank">www.al-enterprise.com</a>
                </p>
                <img src="~/assets/img/links/belden.jpg" alt="" style="height: 80px;" class="top">
                <p>
                    Belden CDT Networking, a world leader in the design, manufacture and marketing of a broad range of cabling and connectivity components and structured cabling systems for the commercial communications market, announces the launch of its Belden IBDN System 10GX—a revolutionary end-to-end UTP cabling solution for 10 Gigabit Ethernet service.
                    <br>
                    <a href="https://www.belden.com" target="_blank">www.belden.com</a>
                </p>
                <img src="~/assets/img/links/ericsson.gif" alt="" style="height: 100px;width: 250px;" class="top eric">
                <p>
                    Ericsson is the world's leader in mobile and broadband Internet communications, helping to create networks that deliver new services to millions of people.
                    <br>
                    <a href="https://www.ericsson.com" target="_blank">www.ericsson.com</a>  
                </p>
                <img src="~/assets/img/links/heartmath.gif" alt="" style="height: 55px;" class="top">
                <p>
                    HeartMath LLC is a cutting edge performance company providing a range of unique services, products, and technology to boost performance, productivity, health and well-being while dramatically reducing stress.
                    <br>
                    <a href="https://www.heartmath.com" target="_blank">www.heartmath.com</a>
                </p>
                <img src="~/assets/img/links/macq.gif" alt="" style="height: 68px;" class="top">
                <p>
                    Macquarie Institute provides programs that bring performance benefits to organisations and individuals. The Macquarie Institute is proud to be Australia's representative of global leaders such as HeartMath LLC.
                    <a href="https://www.macquarieinstitute.com" target="_blank">www.macquarieinstitute.com</a>                    
                </p>
                <img src="~/assets/img/links/twig.png" alt="" style="height: 80px;">
                <p>
                    TWIG is a comprehensive protection system using a range of purpose-built personal alarm devices that work across the mobile network.
                    <br>
                    <a href="https://www.twigaustralia.com.au" target="_blank">www.twigaustralia.com.au</a>
                </p>
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
section {
    padding: 0;
}
h1 {
    margin-bottom: 10px;
}
img {
    margin-bottom: 10px;
    margin-top: 10px;
}
img.top {
    margin-top: 20px;
}
p {
    padding-bottom: 15px;
}
.eric {
    margin-left: -15px;
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
  img, .eric {
    margin-left: 20px;
  }
}
</style>