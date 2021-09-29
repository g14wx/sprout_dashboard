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

        <v-row>
          <v-col cols="12" lg="6" md="6">
          <v-card>
            <v-card-title class="font-montserrat">Source of Opt-ins</v-card-title>
            <v-card-text class="d-flex justify-center align-center">
              <doughnut-chart-legends style="width: 350px" :data="chartData1"></doughnut-chart-legends>
            </v-card-text>
          </v-card>
          </v-col>
          <v-col cols="12" lg="6" md="6">
            <v-card>
              <v-card-title class="font-montserrat">Opt-in Status</v-card-title>
              <v-card-text class="d-flex justify-center align-center">
                <doughnut-chart-legends style="width: 350px" :data="chartData1"></doughnut-chart-legends>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>

        <v-row>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-card text>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-card text style="background-color: #44a88b; border-radius: 10px">
                        <v-card-text class="d-flex justify-center align-center font-montserrat" style="color: white; font-size: 40px;">
                          <span class="mt-12 mb-10" style="font-weight: bold">60</span>
                        </v-card-text>
                        <v-card-actions class="d-flex justify-center align-center" style="color: white">
                          <span class="font-nunito mb-10" style="font-size: 19px">Outbound Messages this month.</span>
                        </v-card-actions>
                      </v-card>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-card text style="border-radius: 10px">
                        <v-card-title class="font-montserrat">Subscriber Growth</v-card-title>
                        <v-card-text class="d-flex justify-center align-center">
                          <line-chart  style="width: 280px" :data="dataSetLineChart"></line-chart>
                        </v-card-text>
                      </v-card>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="6" lg="6" sm="6">
            <v-card
            >
              <v-list three-line>
                <template v-for="(item, index) in itemsNotifications">
                  <v-subheader
                    v-if="item.header"
                    :key="item.header"
                    v-text="item.header"
                    class="font-nunito"
                  ></v-subheader>

                  <v-divider
                    v-else-if="item.divider"
                    :key="index"
                    :inset="item.inset"
                  ></v-divider>

                  <v-list-item
                    v-else
                    :key="item.title"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="font-montserrat" v-html="item.title"></v-list-item-title>
                      <v-list-item-subtitle class="font-raleway" v-html="item.subtitle"></v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                </template>
              </v-list>
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
      dataSetLineChart: {
        labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
        datasets: [
          {
            label: "Population (millions)",
            backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
            data: [2478,5267,734,784,433]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Predicted world population (millions) in 2050'
        }
      },
      chartData1: {
        labels: [
          'Uploaded',
          'API',
          'Other'
        ],
        options: {
          legend: {
            display: false
          },
        },
        datasets: [{
          label: 'My First Dataset',
          data: [85.8, 14.2,0.1],
          backgroundColor: [
            '#3f51b5',
            '#ff5722',
            '#2196f3'
          ],
          hoverOffset: 4
        }]
      },
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
      },
      itemsNotifications: [
        {header: 'Most Recent Campaigns'},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Brunch this weekend?',
          subtitle: `<span class="text--primary">Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        {divider: true, inset: true},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
          subtitle: `<span class="text--primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend.`,
        },
        {divider: true, inset: true},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Oui oui',
          subtitle: '<span class="text--primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
        },
        {divider: true, inset: true},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Birthday gift',
          subtitle: '<span class="text--primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
        },
        {divider: true, inset: true},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {divider: true, inset: true},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
        {divider: true, inset: true},
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Recipe to try',
          subtitle: '<span class="text--primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
    };
  }
}
</script>
