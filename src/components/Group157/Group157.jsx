import React from 'react';
import Ellipse86Image from 'src/assets/images/Group157_Ellipse_86.png';
import Ellipse85Image from 'src/assets/images/Group157_Ellipse_85.png';
import Ellipse84Image from 'src/assets/images/Group157_Ellipse_84.png';
import Ellipse83Image from 'src/assets/images/Group157_Ellipse_83.png';
import Ellipse87Image from 'src/assets/images/Group157_Ellipse_87.png';
import Ellipse88Image from 'src/assets/images/Group157_Ellipse_88.png';
import Ellipse89Image from 'src/assets/images/Group157_Ellipse_89.png';
import Ellipse90Image from 'src/assets/images/Group157_Ellipse_90.png';
import Chart from 'react-apexcharts';
import { styled } from '@mui/material/styles';

const Group1571 = styled('div')({
  display: `flex`,
  position: `relative`,
  isolation: `isolate`,
  flexDirection: `row`,
  width: '100%',
  height: `377px`,
  justifyContent: `flex-start`,
  alignItems: `flex-start`,
  padding: `0px`,
  boxSizing: `border-box`,
});

function Group157(props) {
  var options = {
    series: [22, 16, 27, 35],
    chart: {
      width: 400,
      type: 'donut',
    },
    labels: ['Spinning', 'Transportation', 'Carding', 'Heating/Cooling'],
    colors: ['rgba(87, 204, 120, 1)', 'rgba(85, 219, 219, 1)', 'rgba(226, 255, 50, 1)', '#ffc404'],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: 'bottom',
          },
        },
      },
    ],
  };
  return (
    <Group1571 className={props.className}>
      <Chart options={options} series={options.series} type="donut" width={400} className="chart" />
    </Group1571>
  );
}

export default Group157;
