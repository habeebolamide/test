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
                                <p class="text-light" style="font-family:'Poppins', sans-serif;">Wallet Balance</p>
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
            <section class="chart">
                <div class="card">
                    <div class="card-body py-5">
                        <!-- <h5 class="card-title">
                            Reports <span>/Today</span></h5> -->
                            <div class="row">
                                <div class="col-4">
                                    <small class="intxt">Inflow</small>
                                    <h1 class="in">N1,562,552</h1>
                                </div>
                                <div class="col-4">
                                    <small class="outtxt">Outflow</small>
                                    <h1 class="out">N1,562,552</h1>
                                </div>
                                <div class="col-4" style="float: right;">
                                    <small>Inflow/Outlaw <i class="bi bi-chevron-compact-down"></i></small>
                                </div>
                            </div>
                        <div id="reportsChart" class="container"></div>
                        <button class="btn date">2022</button>
                    </div>
                </div>
            </section>
            <section class="activities my-4">
                <h2>Recent Activities</h2>
                <form class="search-wrapper cf">
                    <input type="text" placeholder="Search employee." required style="box-shadow: none">
                    <button type="submit"><i class="bi bi-search"></i></button>
                </form>
                <button class="btn filter ml-3 mt-1">
                    <small> <i class="bi bi-sliders2-vertical"></i> filter</small>
                </button>
            </section>
        </Sidebar>
    </div>
</template>


<style scoped>

/*Clearing Floats*/
.cf:before, .cf:after{
    content:"";
    display:table;
}

.cf:after{
    clear:both;
}

.cf{
    zoom:1;
}    
/* Form wrapper styling */

.search-wrapper {
    width: 90%;
    border-radius: 40px;
    border: 1px solid  #B5B6B5;
    background: #fff;
    display: inline-block;
}

/* Form text input */

.search-wrapper input {
    padding-left: 20px;
    width: 330px;
    height: 20px;
    font: bold 13px 'lucida sans', 'trebuchet MS', 'Tahoma';
    border: 0;
    background: transparent;
    border-radius: 40px;
    border-top-style: none;
}

.search-wrapper input:focus {
    outline: 0;
    background: #fff;
    box-shadow: 0 0 2px rgba(0,0,0,0.8) inset;
}

.search-wrapper ::placeholder {
   color: #999;
   font-weight: normal;
   padding-left: 20px;
   padding-top: 20px;
} 

/* Form submit button */
.search-wrapper button {
    overflow: visible;
    position: relative;
    float: right;
    border: 0;
    padding: 0;
    cursor: pointer;
    height: 40px;
    width: 110px;
    font: 13px/40px 'lucida sans', 'trebuchet MS', 'Tahoma';
    color: #11453B;
    text-transform: uppercase;
    background: #D9EBCD;
    border-radius: 0px 40px 40px 0px;
    text-shadow: 0 -1px 0 rgba(0, 0 ,0, .3);
}  

.search-wrapper button:hover{    
/*     background: #e54040; */
}  

.search-wrapper button:active,
.search-wrapper button:focus{  
    background: #198cff;
    outline: 0;  
}

.search-wrapper button:focus:before,
.search-wrapper button:active:before{
        border-right-color: #c42f2f;
}     

.search-wrapper button::-moz-focus-inner { /* remove extra button spacing for Mozilla Firefox */
    border: 0;
    padding: 0;
}   
.date{
    width: 80px;
    padding: 10px 16px;
    background: #11453B;
    float: right;
    color: white;
    border-radius: 0px;
}
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

.iconimg {
    display: block;
    margin-left: auto;
    margin-right: auto;
    /* width: 50%; */
}

.icontxt {
    font-size: 14px;
    color: #515251;
    text-align: center;
    padding-top: 10px;
}
.in{
    color: #219653;
    font-family: 'Poppins';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; 
}
.out{
    color: #EF4444;
    font-family: 'Poppins';
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: 36px; 
}
.filter{
    border-radius: 16px;
    border: 1px solid #B5B6B5;
    background: #FFF;
    color: #8D8E8D;
}
.filter:hover{
    border-radius: 16px;
    border: 1px solid #B5B6B5;
    background: #FFF;
    color: #8D8E8D;
}
</style>

<!-- <script src="assets/vendor/apexcharts/apexcharts.min.js"></script> -->
<script src="../../assets/vendor/apexcharts/apexcharts.min.js"></script>
<script>
import Sidebar from './partials/Sidebar.vue';
import ApexCharts from 'apexcharts';
export default {
    name: "DashBoard",
    components: {
        Sidebar
    },
    data() {
        return {
            showFilter: false,
        };
    },
    methods: {
        toggleFilter() {
        this.showFilter = !this.showFilter;
        },
    },
    mounted() {
    const chart = new ApexCharts(document.querySelector("#reportsChart"), {
      series: [
        {
          name: 'Sales',
          data: [31, 40, 28, 51, 42, 82, 56,31, 50, 18, 41, 92, 32],
        },
        {
          name: 'Revenue',
          data: [11, 32, 45, 32, 34, 52, 41,31, 40, 28, 51, 42, 82,],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
        toolbar: {
          show: false,
        },
      },
      markers: {
        size: 4,
      },
      colors: ['#4154f1', '#2eca6a', '#ff771d'],
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.3,
          opacityTo: 0.4,
          stops: [0, 90, 100],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 2,
      },
      xaxis: {
        // type: 'datetime',
        categories: [
          'JAN',
          'FEB',
          'MAR',
          'APR',
          'MAY',
          'JUN',
          'JUL',
          'AUG',
          'SEPT',
          'OCT',
          'NOV',
          'DEC',
        ],
      },
      tooltip: {
        x: {
          format: 'dd/MM/yy HH:mm',
        },
      },
    });
    chart.render();
  },
}
</script>