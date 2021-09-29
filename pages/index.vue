<template>
  <v-row justify="center" align="center">
    <v-col cols="12" class="border border-primary">
      <v-container>
        <v-row>
          <v-col md="8" lg="8" xl="8" cols="12" sm="12">
            <v-card tile>
              <v-container>
                <v-row>
                  <v-col md="6" lg="6" sm="12" cols="12">
                    <v-card flat>
                      <v-card-title class="font-montserrat pt-5">
                        <span>Welcome Back, Luis!</span>
                        <v-spacer/>
                        <v-icon large>mdi-human-greeting</v-icon>
                      </v-card-title>
                      <v-card-text class="font-montserrat">
                        You have completed 75% of your goal this week! Start a new goal and improve your result.
                      </v-card-text>
                    </v-card>
                  </v-col>
                  <v-col md="3" lg="3" sm="6" cols="12" class="d-flex justify-center align-items">
                    <client-only>
                      <doughnut-chart style="width: 150px" :data="chartData"></doughnut-chart>
                    </client-only>
                  </v-col>
                  <v-col md="3" lg="3" sm="6" cols="12"
                         class="d-flex justify-center align-center font-nunito font-weight-bold"
                         style="font-size: 55px">
                    <span>75%</span>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
          <v-col md="4" lg="4" xl="4" cols="12" sm="12" class="">
            <v-card flat>
              <v-card-title style="position: relative;" class="font-montserrat pt-5 d-flex justify-center">
                <span class="mt-1" v-if="!$vuetify.breakpoint.md">Wed, Sep&nbsp;<strong>29</strong>, 2021</span>
                <span class="mt-1" v-else>11/29/21</span>
                <v-spacer/>
                <span class="background-blue-gradient pa-5"
                      style="position: absolute;right: -10px; top: -10px; border-radius: 10px;">
                <v-icon x-large>mdi-bullhorn</v-icon>
                </span>
              </v-card-title>
              <v-card-text class="d-flex justify-center align-center">
                <span class="font-nunito">
                No pending campaigns.
                </span>
              </v-card-text>
              <v-card-actions class="d-flex justify-end">
                <v-btn tile style="border-radius: 10px" class="font-montserrat mt-2 mb-2 background-btn-green ">
                  <v-icon v-if="!$vuetify.breakpoint.mobile">mdi-bullhorn-outline</v-icon>
                  &nbsp;
                  <span class="text-truncate">Schedule New Campaign</span></v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>


        <v-row>
          <v-col cols="12" lg="4" xl="4" md="12" sm="12">
            <v-card>
              <v-card-title class="font-montserrat">
                <span class="mt-5">
                  <a href="" style="text-decoration: none; color: white" >
               Subscribers
                  </a>
                </span>
                <span class="background-blue-gradient pa-5"
                      style="position: absolute;right: -10px; top: -10px; border-radius: 10px;">
                <v-icon x-large>mdi-account-group </v-icon>
                </span>
              </v-card-title>
              <v-card-text class="d-flex justify-center font-montserrat" style="font-size: 40px">
                <span class="pa-5" style="color: #44a88b">
                <strong>3,323</strong>
                </span>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-icon large color="white">mdi-arrow-top-right-thick</v-icon>
                &nbsp;
                &nbsp;
                <span class="text-decoration-underline" style="color: dodgerblue">14% more since the last week</span>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" lg="4" xl="4" md="12" sm="12">
            <v-card>
              <v-card-title class="font-montserrat">
                <span class="mt-5">
                  <a href="" style="text-decoration: none; color: white" >
              Messages
                  </a>
                </span>
                <span class="background-blue-gradient pa-5"
                      style="position: absolute;right: -10px; top: -10px; border-radius: 10px;">
                <v-icon x-large>mdi-message </v-icon>
                </span>
              </v-card-title>
              <v-card-text class="d-flex justify-center font-montserrat" style="font-size: 40px">
                <span class="pa-5" style="color: #44a88b">
                <strong>12,815</strong>
                </span>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                <v-icon large color="white">mdi-arrow-bottom-left-thick</v-icon>
                &nbsp;
                &nbsp;
                <span class="text-decoration-underline" style="color: #E51E2B">10% less since the last week</span>
              </v-card-actions>
            </v-card>
          </v-col>

          <v-col cols="12" lg="4" xl="4" md="12" sm="12">
            <v-card>
              <v-card-title class="font-montserrat">
                <span class="mt-5">
                  <a href="" style="text-decoration: none; color: white" >
             Campaigns
                  </a>
                </span>
                <span class="background-blue-gradient pa-5"
                      style="position: absolute;right: -10px; top: -10px; border-radius: 10px;">
                <v-icon x-large>mdi-message </v-icon>
                </span>
              </v-card-title>
              <v-card-text class="d-flex justify-center font-montserrat" style="font-size: 40px">
                <span class="pa-5" style="color: #44a88b">
                <strong>1,224</strong>
                </span>
              </v-card-text>
              <v-card-actions class="d-flex justify-center">
                    <v-icon large color="white">mdi-arrow-top-right-thick</v-icon>
                &nbsp;
                &nbsp;
                    <span class="text-decoration-underline" style="color: dodgerblue">11% more since the last week</span>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>

      </v-container>
    </v-col>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      chartData: {
        labels: [
          'Red',
          'Blue',
          'Yellow'
        ],
        options: {
          legend: {
            display: false
          },
        },
        datasets: [{
          label: 'My First Dataset',
          data: [75, 25],
          backgroundColor: [
            'rgb(6, 45, 153)',
            'rgb(153, 28, 6)'
          ],
          hoverOffset: 4
        }]
      }
    };
  }
}
</script>
