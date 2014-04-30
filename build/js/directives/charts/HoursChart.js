'use strict';

angular
	.module("StravApp.Directives.HoursChart", [])
	.directive('hoursChart', function() {

		function link ( scope, element ) {

			var data = scope.block.hours;

			var 
				margin = {top: 10, right: 0, bottom: 20, left: 0},
				width = 600 - margin.left - margin.right,
				height = 270 - margin.top - margin.bottom,
				barWidth = width / data.length;

			// Scales
			var x = d3.scale.ordinal()
				.domain( d3.range(23) )
				.rangeRoundBands([0, width], .1);

			var y = d3.scale.linear()
				.domain([0, d3.max(data)])
				.range([height, 0]);


			// Chart
			var chart = d3.select(element[0]).append("svg")
					.attr("width", width + margin.left + margin.right)
					.attr("height", height + margin.top + margin.bottom)
				.append("g")
					.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

			// Bar
			var bar = chart.selectAll("g")
					.data(data)
				.enter().append("g")
					.attr("transform", function(d, i) { return "translate(" + i * barWidth + ", 0)"; });

			var rect = bar.append("rect")
				.attr("y", height)
				.attr("height", 0)
				.attr("width", x.rangeBand() );
				
			var text = bar.append("text")
				.attr("x", barWidth / 2)
				.attr("y", height)
				.attr("dy", ".75em")
				.text(function(d) { return d; });

			rect.transition()
				.attr("y", function(d) { return y(d); })
				.attr("height", function(d) { return height - y(d); })
				.duration( function(d) { return 100*d; } )
				.delay( function(d,i) { return 100*i; } );

			text.transition()
				.attr("y", function(d) { return y(d) + 5; })
				.duration( function(d) { return 100*d; } )
				.delay( function(d,i) { return 100*i; } );


			// Axis
			var xAxis = d3.svg.axis()
				.scale(x)
				.orient("bottom");

			chart.append("g")
					.attr("class", "x axis")
					.attr("transform", "translate(0," + height + ")")
					.call(xAxis)
				.append("text")
					.attr("transform", "rotate(-90)")
					.attr("x", 10)
					.attr("y", 0)
					.attr("dy", ".71em")
					.style("text-anchor", "start")
					.text("Time of the day");


		};

		return {
			restrict: 'C',
			link: link
		};
	});
