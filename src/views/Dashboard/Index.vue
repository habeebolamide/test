<template>
    <div>
        <Sidebar>
            <section class="head">
                <h1>Welcome Abasiama</h1>
                <p class="smalltxt">Pay and manage your employee in minutes</p>

                <div class="amt container">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="amtbg py-5 px-3">
                                <p class="text-light">Wallet Balance</p>
                                <h3 class="balance">12,560,078.00</h3> <i class="bi bi-eye eye"></i>
                                <button class="btn  fund">
                                    <span> Fund Wallet</span>
                                </button>
                            </div>
                            <div class="features">
                                <div class="row my-4">
                                    <div class="col-md-3">
                                        <div class="vuetify-card bootstrap-card">
                                            <div class="py-3">
                                                <img src="../../assets/add.png" class="img-fluid iconimg" alt="">
                                                <p class="icontxt">Add Employee</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="vuetify-card bootstrap-card">
                                            <div class="py-3">
                                                <img src="../../assets/wallet.png" class="img-fluid iconimg" alt="">
                                                <p class="icontxt">Pay Salaries</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="vuetify-card bootstrap-card">
                                            <div class="py-3">
                                                <img src="../../assets/pay.png" class="img-fluid iconimg" alt="">
                                                <p class="icontxt">Pay compliamces</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="vuetify-card bootstrap-card">
                                            <div class="py-3">
                                                <img src="../../assets/loan.png" class="img-fluid iconimg" alt="">
                                                <p class="icontxt">Quick Loan</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4"></div>
                    </div>
                </div>
            </section>
        </Sidebar>
    </div>
</template>


<style scoped>
.smalltxt {
    font-size: 16px;
    color: #515251;
}

.amtbg {
    /* background-image: url('../../assets/amtbg.png'); */
    background: #1e5144;
    border-radius: 20px;

}

.balance {
    color: white;
    display: inline;
}

.eye {
    color: white;
    font-size: 20px;
    padding-left: 10px;
}

.fund {
    background: #d8ebcc;
    color: #1e5144;
    border-radius: 50px;
    float: right;
    width: 150px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.fund span {
    font-size: 14px;
}

.fund:hover {
    background: #d8ebcc;
    color: #1e5144;
    border-radius: 50px;
    float: right;
    width: 150px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}
.vuetify-card {
    border-radius: 8px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s;
    margin-top: 20px;
    margin-bottom: 50px;
}
.bootstrap-card {
    border: none;
}
.iconimg{
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 50%; */
}
.icontxt{
    font-size: 14px;
    color: #515251;
    text-align: center;
    /* padding-top: 10px; */
}
</style>

<script>
import Sidebar from './partials/Sidebar.vue';
export default {
    name: "DashBoard",
    components: {
        Sidebar
    }
}
</script>