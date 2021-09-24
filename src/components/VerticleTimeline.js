import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";

  const verticalTimeline = () => {
    return (
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="September 2021"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title">Le Wagon</h5>
          <h6 className="vertical-timeline-element-subtitle">
            Web development Bootcamp
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019-2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Freelance Developer
          </h5>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2018 - 2019"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h5 className="vertical-timeline-element-title">Software Engineer</h5>
          <h6 className="vertical-timeline-element-subtitle">OurPath</h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="June 2017"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title">Makers</h5>
          <h6 className="vertical-timeline-element-subtitle">
            Computer Science Bootcamp
          </h6>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2013 - 2016"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Computer Systems Engineering at Middlesex University
          </h5>
        </VerticalTimelineElement>
      </VerticalTimeline>
    );
  };

export default verticalTimeline;
