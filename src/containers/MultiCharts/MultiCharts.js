import React, { Component } from 'react';

import classes from './MultiCharts.css';
import BubbleChart from '../../components/BubbleChart/BubbleChart';
import BarChart from '../../components/BarChart/BarChart';
import * as inputData from '../../assets/data/newUsers.json';


class MultiCharts extends Component { 
    state = {
        bubbleData: inputData.data.slice(0,10).map(x => [x.week*50, x.users, x.orders]), // the [x, y, size] of bubbles
        barData: inputData.data,
        chartUI: {
            bubble: {
                title: 'Bubble Chart Demo'
            },
            bar: {
                title: 'Bar Chart Demo',
                color: 'steelblue'
            }
        }
    }

    // this function is for the bar chart, it is triggered when the "SwitchColor" button is clicked in the BarChart component
    switchBarColorHandler = () => {
        console.log("switch!")
        if (this.state.chartUI.bar.color === 'steelblue') {
            this.setState({
                chartUI: {
                    ...this.state.chartUI,
                    bar: {
                        ...this.state.chartUI.bar,
                        color: 'orange'
                    }
                }
            })
        } else {
            this.setState({
                chartUI: {
                    ...this.state.chartUI,
                    bar: {
                        ...this.state.chartUI.bar,
                        color: 'steelblue'
                    }
                }
            })
        }
    }

    // this function is for both charts, it listens to the click event of the "Modify property used by both chart" button,
    // which locates in this MultiCharts component
    updateTitleHandler = () => {
        this.setState({
            chartUI: {
                ...this.state.chartUI,
                bar: {
                    ...this.state.chartUI.bar,
                    title: this.state.chartUI.bar.title + ' Go'
                },
                bubble: {
                    ...this.state.chartUI.bubble,
                    title: this.state.chartUI.bubble.title + ' Go'
                }

            }
        })
    }

    // this function is for both charts, it listens to the click event of the "Reset Title" button,
    // which locate in both the BarChart component and the BubbleChart component
    resetTitleHandler = (chart) => {
        this.setState({
            chartUI: {
                ...this.state.chartUI,
                [chart]: {
                    ...this.state.chartUI[chart],
                    title: chart.charAt(0).toUpperCase() + chart.slice(1) + " Chart Demo"
                }
            }
        })
    }

    render () {
        console.log(this.state.bubbleData)
        return (
            <div className={classes.MultiCharts}>
                <h1>How to put multiple charts together</h1>
                <p>Play with the buttons and see how functions are passed into components to trigger re-rendering :)</p>
                <button onClick={this.updateTitleHandler}>Modify property used by both chart</button>
                <BubbleChart 
                    inputData={this.state.bubbleData} 
                    title={this.state.chartUI.bubble.title} 
                    resetTitleHandler={this.resetTitleHandler}/>
                <br/>
                <BarChart 
                    inputData={this.state.barData} 
                    title={this.state.chartUI.bar.title} 
                    resetTitleHandler={this.resetTitleHandler}
                    barColor={this.state.chartUI.bar.color} 
                    switchColorHandler={this.switchBarColorHandler}/>
            </div>
        );
    }
}

export default MultiCharts;