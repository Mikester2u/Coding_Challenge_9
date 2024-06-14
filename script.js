//U22562170
function createInteractiveDivs() {
    const data = [1, 2, 3, 4, 5];
    const container = d3.select('body').append('div').attr('class', 'container');

    container.selectAll('.data-point')
    .data(data)
    .enter()
    .append('div');
    .attr('class', 'data-point')
    .style('background-color', 'greenyellow')
    .style('width', '100px')
    .style('height', '100px')
    .style('margin', '10px')
    .style('display', 'inline-block')
    .on('mouseover', handleMouseOver)
    .on('mouseout', handleMouseOut);
    }

function handleMouseover(event, d) {
    d3.select(this).style('background-color', 'firebrick');
    }

function handleMouseOut(event, d) {
    d3.select(this).style('background-color', 'greenyellow');
    }

document.addEventListener('DOMContentLoaded', createInteractiveDivs);