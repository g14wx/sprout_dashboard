<template>
  <v-app class="bakground-theme">
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="false"
      fixed
      class="black-app-bar"
      app
      style="border-radius: 0px 10px 10px 0px"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-content class="d-flex justify-center">
            <v-img max-width="100px" max-height="50px" class="mt-5 mb-5"
                   src="https://crm.sprout.online/images/logo-client/sprout-logo-color.png?1"/>
          </v-list-item-content>
        </v-list-item>
      </template>

      <v-list>

        <v-divider/>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://cdn.vuetifyjs.com/images/john.jpg"
              alt="John"
            >
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title class="font-nunito" style="font-size: 14px !important;" >John Leider</v-list-item-title>
            <v-list-item-subtitle>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs"
                         v-on="on">
                    <v-icon>mdi-cog</v-icon>
                  </v-btn>
                </template>
                <span>Config. Profile</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs"
                         v-on="on">
                    <v-icon>mdi-email</v-icon>
                  </v-btn>
                </template>
                <span>Direct Messages</span>
              </v-tooltip>

              <v-tooltip top>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn icon v-bind="attrs"
                         v-on="on">
                    <v-icon>mdi-logout</v-icon>
                  </v-btn>
                </template>
                <span color="red">Logout</span>
              </v-tooltip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider class="mb-2"/>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          class="font-montserrat"
          router
          exact
          :class="item.to === $route.path ? 'highlighted' : ''"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title  style="font-size: 13px !important;" v-text="item.title"/>

          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <v-row>
          <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 11">
            <v-app-bar
              :clipped-left="false"
              class="mt-1 black-app-bar rounded-corners"
              :rounded="'10.50px'"
              height="75px"
              flat
            >
              <v-app-bar-nav-icon @click.stop="drawer = !drawer"/>
              <v-btn icon text @click="miniVariant=!miniVariant">
                <v-icon>mdi-{{ miniVariant ? 'chevron-right' : 'chevron-left' }}</v-icon>
              </v-btn>

              <!--DROPDOWN ALTERNATIVO -->
              <v-menu
                transition="slide-y-transition"
                bottom
                open-on-hover
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    text
                    class="font-nunito"
                    v-bind="attrs"
                    v-on="on"
                    style="font-size: 13px !important;"
                  >
                    <v-icon
                      left
                      dark
                    >{{ selectedRoute.icon }}
                    </v-icon>

                    {{ selectedRoute.title }}
                    <v-icon left class="ml-1">mdi-chevron-down</v-icon>
                  </v-btn>
                </template>
                <v-list>
                  <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                  >
                    <v-list-item-icon>
                      <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-title class="font-montserrat" style="font-size: 13px !important;">{{ item.title }}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <v-spacer/>

              <v-icon medium class="mr-3" color="white">
                mdi-magnify
              </v-icon>
              <!-- BADGE -->
              <v-menu
                transition="slide-y-transition"
                open-on-hover
                bottom
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-btn
                    icon
                    color="green accent-3"
                    v-bind="attrs"
                    v-on="on"
                  >

                    <v-badge
                      dot
                      :content="messages"
                      :value="messages"
                      color="green"
                      overlap
                      class="mr-5"
                    >
                      <v-icon medium class="animate__animated " color="white" :class="{'animate__swing':animateAlert}">
                        mdi-bell
                      </v-icon>
                    </v-badge>
                  </v-btn>
                </template>
                <v-card
                  max-width="350"
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
              </v-menu>
            </v-app-bar>
          </v-col>
          <v-col style="position: relative;" cols="1" class="d-flex justify-center align-center"
                 :class="{'d-none': $vuetify.breakpoint.mobile}">
            <v-badge
              bordered
              bottom
              color="green accent-4"
              dot
              offset-x="10"
              offset-y="10"
              :class="{'d-none': $vuetify.breakpoint.mobile}"
            >
              <v-avatar>
                <img
                  src="https://cdn.vuetifyjs.com/images/john.jpg"
                  alt="John"
                >
              </v-avatar>
            </v-badge>
            <!--<v-icon
              large
              color="green darken-2"
              style="position: absolute; right: 15px; top: 35px; transform: rotate(20deg);"
              small
            >
              mdi-star-four-points
            </v-icon>-->
          </v-col>
        </v-row>
        <Nuxt/>
      </v-container>
    </v-main>
    <!--<v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>-->
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: true,
      miniVariant: false,
      messages: 1,
      animateAlert: false,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: 'Dashboard',
          to: '/'
        },
        {
          icon: 'mdi-account-group',
          title: 'Contacts',
          to: '/contacts'
        },
        {
          icon: 'mdi-bullhorn',
          title: 'Campaings',
          to: '/campaings'
        },
        {
          icon: 'mdi-email-check',
          title: 'Opt-In Msg',
          to: '/opt-in-msg'
        },
        {
          icon: 'mdi-toolbox',
          title: 'Tools',
          to: '/tools'
        },
        {
          icon: 'mdi-forum',
          title: 'Marketing',
          to: '/martketinf'
        },
        {
          icon: 'mdi-chart-bar-stacked',
          title: 'Reports',
          to: '/reports'
        }

      ],
      title: 'Vuetify.js',
      itemsNotifications: [
        {header: 'Today'},
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
      ],
    }
  },
  computed: {
    selectedRoute() {
      return this.items.find((item) => item.to === this.$route.path);
    }
  },
  mounted() {
  }
}
</script>
