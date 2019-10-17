import React, { Component } from 'react';
import Chart from 'chart.js';

class PolarChart extends Component {
    componentDidMount() {
        const data = this.props.data;
        const node = this.node;
        const colors = [
            "#36a2eb",
            "#ffcd56",
            "#ff6384",
            "#4bc0c0"
        ]

        const subcategories = data.filter(d => {
            if (d.name != null) {
                return d;
            }
        });
            
        new Chart(node, {
            type: 'polarArea',
            data: {
                datasets: [
                    {
                        data: subcategories.map(s => s.score),
                        backgroundColor: colors.slice(0, subcategories.length)
                    }
                ],
            
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels: subcategories.map(s => s.name)
            },
            options: {
                scale: {
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }
            }
        });
    }

    render() {
        return (
            <div className="chart">
                <canvas
                    style={{ width: 800, height: 300 }}
                    ref={node => (this.node = node)}
                />
            </div>
        );
    }
}

export default PolarChart;
