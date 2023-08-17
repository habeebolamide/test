<template>
    <div>
        <section class=" header">
            <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light">
                <a class="navbar-brand" href="#"><img src="../../assets/testlogo.png" alt=""></a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Individual</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Business</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Set your payroll</a>
                        </li>
                    </ul>
                    <div class=" my-2 my-lg-0">
                            <button class="btn login">Login</button>
                            <button class="btn register ml-5">Register</button>
                    </div>
                </div>
            </nav>
            <div class="row my-5">
                <div class="col-md-6">
                    <h1>Run your <span class="pay">payroll</span>  <span class="easily">easily</span> in <span class="sec">seconds</span></h1>
                    <p class="text-muted pt-3">We’ve built an all-inclusive simple solution for individual and businesses to manage staff, pay salaries, bills, and relevant taxes all at once.</p>
                    <button class="btn freebtn">Start Using Free, Forever</button>
                    <div class="download-section">
                        <p>Download the Eazipay App</p>
                        <div class="d-flex flex-row">
                            <img src="../../assets/appstore.png" alt="" class="img-fluid app">
                            <img src="../../assets/playstore.png" alt="" class="img-fluid app">
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <img src="../../assets/side.png" alt="" class="img-fluid">
                </div>
            </div>
        </div>
        </section>
        <section class="info">
            <div style="padding-top: 10rem;">
                <h1>For Individuals and Businesses</h1>
                <p class=" text-dark">Join 200+ businesses using Eazipay's easy solution.</p>
                <div class="d-flex flex-row container test">
                    <div class="slide">
                        <h5>Tamper-proof Payroll for LIfe</h5>
                        <p>Your staff payroll history is kept in one place forever.</p>
                        <p>No more excel sheet or manual records.</p>
                        <p>Download your payroll history anytime you need it.</p>
                    </div>
                    <div class="slide left">
                        <h5>All Payroll, Anytime Anywhere</h5>
                        <p>Wherever you are Eazipay has got you covered on ALL your Payroll tasks.</p>
                        <p>Whether it is Taxes, Pension insurances HMOs, trustfunds, Eazipay handle all your compliamces in one place and easily, in seconds!</p>
                    </div>
                    <div class="slide left">
                        <h5>Payroll in Seconds</h5>
                        <p>Never again wil you spend more than 2 minutes on payroll.</p>
                        <p>Just click on your staff annd bulk-pay them at once.</p>
                        <p>Payment is done permanently.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: 'LandingPage',
}
</script>

<style scoped>
.header {
    background: url('../../assets/gradients.png');
}
.nav-link {
    padding-right:35px !important ;
    font-size: 15px;
}
#navbarSupportedContent {
    margin-left: 1.5rem;
    margin-right: 1rem;
}
.login{
    width: 168px;
    padding: 10px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 24px;
    border: 1px solid var(--new-styles-primary-eazi-green, #11453B);
}
.register{
    width: 150px;
    padding: 10px 32px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 24px;
    background: var(--new-styles-primary-eazi-green, #11453B);
    box-shadow: 0px 8px 16px 0px rgba(17, 69, 59, 0.20);
    color: white;
}
h1{
    font-family: 'made-mellow-personal-use-2';
    font-size: 55px;
    line-height: 72px;
}
.pay{
    color: #11453B;
}
.easily{
    color:  #B4A572
}
.sec{
    color:  #EA4E4B;
}
.freebtn{
    width: 272px;
    padding: 16px 36px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 32px;
    background: var(--new-styles-primary-eazi-green, #11453B);
    box-shadow: 0px 8px 16px 0px rgba(17, 69, 59, 0.20);
    color: white;
}
.download-section{
    margin-top: 50px;
}
.download-section img{
    margin-left: -33px;
    width: 35%;
}
.info{
    background: url('../../assets/bg2.png');
    text-align: center;
}
.info h1{
    color: #11453B;
    font-weight: 600;
}
.slide{
    width: 552px;
    padding: 35px;
    border-radius: 16px;
    background: radial-gradient(50% 50.00% at 50% 50.00%, rgba(217, 235, 205, 0.14) 0%, rgba(217, 235, 205, 0.03) 100%), #11453B;
    box-shadow: -11px 0px 19px 0px rgba(23, 23, 23, 0.30), 0px 13px 20px 0px rgba(23, 23, 23, 0.20);
    text-align: initial;
}
.slide h5 ,p{
    color: white;
}
.slide h5{
   font-size: 28px;
}
.slide p {
    font-size: 17px;
    font-weight: 300;
    padding-top: 10px;
}
.left{
    margin-left: -295px;
}
</style>