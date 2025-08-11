//
// Crypto Price Chart
//

'use strict';

var apexCharts = require('apexcharts');
var themeStyles = require('../utils/styles');
var dayjs = require('dayjs')

function apexCryptoPriceChart() {
  this.init = function(chartEl) {
    var styles = new themeStyles();

    var colorPalette = [
			styles.colors().theme.primary,
			styles.colors().theme.light,
			styles.colors().theme.dark,
		];

    async function init($this) {
      let priceData = [];
      const api = require('../api');
      try {
        priceData = await api.getJson('/api/prices');
      } catch (e) {
        try { priceData = require('../../data/prices'); } catch (_) { priceData = []; }
      }
      var options = {
        chart: {
					stacked: false,
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
          shadow: {
            enabled: false
          },
          animations: {
            enabled: false,
          }
        },
        colors: colorPalette,
        stroke: {
          width: 3,
          curve: 'smooth',
					lineCap: 'butt',
          dashArray: [0, 3]
        },
        series: [
          {
            name: 'Price',
						data: priceData.map((d) => {
              return {
                x: new Date(d.date),
                y: [d.open, d.open, d.close, d.close]
              }
            })
          }
        ],
        markers: {
          size: 0
        },
				xaxis: {
          type: 'datetime',
          tooltip: {
            enabled: false
          },
					axisBorder: {
						show: false
					},
          axisTicks: {
            show: true
          },
          tooltip: {
            enabled: true,
            formatter: function(val) {
              return dayjs(val).format('MMM YYYY')
            }
          },
          labels: {
            show: true,
            showDuplicates: false,
            formatter: function(val) {
              return dayjs(val).format('MMM YYYY')
            }
          }
        },
				yaxis: [
          {
            seriesName: 'Price',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: true
            },
						labels: {
	            style: {
	              colors: styles.colors().body.color,
	              fontSize: '13px',
	              fontFamily: 'inherit',
	              cssClass: 'apexcharts-xaxis-label'
	            }
	          },
            opposite: false
          }
        ],
        legend: {
          show: false
        },
        grid: {
          borderColor: styles.colors().border.color,
          strokeDashArray: 3
        },
        dataLabels: {
          enabled: false
        },
				tooltip: {
          x: {
            formatter: function(val) {
              return dayjs(val).format('MMM DD, YYYY')
            }
          }
				}
      }

      // Get data from data attributes
      var height = $this.dataset.height;

      // Inject dynamic properties
      options.colors = colorPalette;
      options.chart.height = height
        ? height
        : 350;

             // Create chart
      const chart = new apexCharts($this, options);
      await chart.render();

      // Live updates via WS
      const { connectWs } = require('../api');
      connectWs({
        onMessage: (msg) => {
          if (msg?.type === 'price_tick' && msg.data) {
            const x = new Date(msg.data.ts).getTime();
            const y = [msg.data.price, msg.data.price, msg.data.price, msg.data.price];
            const series = chart.w.config.series[0].data.slice();
            series.push({ x, y });
            chart.updateSeries([{ name: 'Price', data: series }], false);
          }
        },
      });
    }

    if (chartEl) {
      init(chartEl);
    }
  }
}

module.exports = apexCryptoPriceChart;
