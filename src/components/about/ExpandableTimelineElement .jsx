// ExpandableTimelineElement.js
import React, { useState } from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './Timeline.css';

const ExpandableTimelineElement = ({ date, title, subtitle, description }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VerticalTimelineElement
      className={`vertical-timeline-element--education ${isExpanded ? 'expanded' : ''}`}
      date={date}
      iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <h3 className="vertical-timeline-element-title">{title}</h3>
      <h4 className="vertical-timeline-element-subtitle">{subtitle}</h4>
      <p>{description}</p>
    </VerticalTimelineElement>
  );
};

export default ExpandableTimelineElement;
