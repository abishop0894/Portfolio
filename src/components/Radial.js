import React, { PureComponent } from "react";
import { PieChart, Pie, Sector, ResponsiveContainer } from "recharts";
import "../styles.css";

export default class Radial extends PureComponent {
  skillOne = this.props.skillOne;
  skillTwo = this.props.skillTwo;
  skillThree = this.props.skillThree;

  valOne = this.props.valOne;
  valTwo = this.props.valTwo;
  valThree = this.props.valThree;

  type = this.props.type;

  state = {
    activeIndex: 0,
  };

  onPieEnter = (_, index) => {
    this.setState({
      activeIndex: index,
    });
  };

  data = [
    { name: `${this.skillOne}`, value: this.valOne },
    { name: `${this.skillTwo}`, value: this.valTwo },
    { name: `${this.skillThree}`, value: this.valThree },
  ];

  renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
      cx,
      cy,
      midAngle,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? "start" : "end";
    const avoid = [
      "NextJS",
      "LESS",
      "SQL Server",
      "Sass",
      "Firebase",
      "Angular 6+",
    ];

    return (
      <g>
        <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
          {payload.name}
        </text>
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill="#243c64"
        />
        <Sector
          cx={cx}
          cy={cy}
          startAngle={startAngle}
          endAngle={endAngle}
          innerRadius={outerRadius + 6}
          outerRadius={outerRadius + 10}
          fill={fill}
        />

        {!avoid.includes(payload.name) && (
          <>
            <path
              d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`}
              stroke={fill}
              fill="none"
            />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text
              x={ex + (cos >= 0 ? 1 : -1) * 12}
              y={ey}
              textAnchor={textAnchor}
              fill="#333"
            >{`${this.type}`}</text>
          </>
        )}
      </g>
    );
  };

  render() {
    return (
      <ResponsiveContainer className="pie">
        <PieChart width={400} height={400}>
          <Pie
            activeIndex={this.state.activeIndex}
            activeShape={this.renderActiveShape}
            data={this.data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#60a5fa"
            dataKey="value"
            onMouseEnter={this.onPieEnter}
          />
        </PieChart>
      </ResponsiveContainer>
    );
  }
}
