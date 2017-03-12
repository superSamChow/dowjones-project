import Plottable from 'plottable'
import * as d3 from 'd3'

// 官网的示例代码
export function createChart(data){
  const xScale = new Plottable.Scales.Time()
  const xAxis = new Plottable.Axes.Numeric(xScale, 'bottom')
  xAxis.formatter(Plottable.Formatters.multiTime())
  const yScale = new Plottable.Scales.Linear()
  const yAxis = new Plottable.Axes.Numeric(yScale, 'left')
  const colorScale = new Plottable.Scales.Color()

  var series1 = new Plottable.Dataset([{x: new Date(), y: 1}], { name: 'series1' })
  var series2 = new Plottable.Dataset([{x: new Date(), y: 1}], { name: 'series2' })

  const plot = new Plottable.Plots.Line()
  plot.x(function(d) { return d.x }, xScale).y(function(d) { return d.y }, yScale)
  plot.attr('stroke', function(d, i, dataset) { return dataset.metadata().name }, colorScale)
  plot.autorangeMode('y')
  plot.addDataset(series1).addDataset(series2)

  const sparklineXScale = new Plottable.Scales.Time()
  const sparklineXAxis = new Plottable.Axes.Time(sparklineXScale, 'bottom')
  const sparklineYScale = new Plottable.Scales.Linear()
  const sparkline = new Plottable.Plots.Line()
  sparkline.x(function(d) { return d.x }, sparklineXScale).y(function(d) { return d.y }, sparklineYScale)
  sparkline.attr('stroke', function(d, i, dataset) { return dataset.metadata().name }, colorScale)
  sparkline.addDataset(series1).addDataset(series2)

  const dragBox = new Plottable.Components.XDragBoxLayer()
  dragBox.resizable(true)
  dragBox.onDrag(function(bounds) {
    const min = sparklineXScale.invert(bounds.topLeft.x)
    const max = sparklineXScale.invert(bounds.bottomRight.x)
    xScale.domain([min, max])
  })
  dragBox.onDragEnd(function(bounds) {
    if (bounds.topLeft.x === bounds.bottomRight.x) {
      xScale.domain(sparklineXScale.domain())
    }
  })

  xScale.onUpdate(function() {
    dragBox.boxVisible(true)
    const xDomain = xScale.domain()
    dragBox.bounds({
      topLeft: { x: sparklineXScale.scale(xDomain[0]), y: null },
      bottomRight: { x: sparklineXScale.scale(xDomain[1]), y: null }
    })
  })
  const miniChart = new Plottable.Components.Group([sparkline, dragBox])

  const pzi = new Plottable.Interactions.PanZoom(xScale, null)
  pzi.attachTo(plot)

  const output = d3.select('#hoverFeedback')
  const outputDefaultText = 'Closest:'
  output.text(outputDefaultText)

  const legend = new Plottable.Components.Legend(colorScale)

  const chart = new Plottable.Components.Table([
      [null, legend                    ],
      [yAxis, plot          ],
      [null , xAxis                    ],
      [null , miniChart                ],
      [null , sparklineXAxis           ]
  ])
  chart.rowWeight(2, 0.2)

  return chart

}