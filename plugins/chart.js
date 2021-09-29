import Vue from 'vue'
import { Line,Pie,Doughnut } from 'vue-chartjs'
import Chart from "chart.js";

Chart.defaults.global.legend.display = false;

Vue.component('line-chart', {
  extends: Line,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
});

Vue.component('pie-chart', {
  extends: Pie,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})
Vue.component('doughnut-chart', {
  extends: Doughnut,
  props: ['data', 'options'],
  mounted () {
    this.renderChart(this.data, this.options)
  }
})