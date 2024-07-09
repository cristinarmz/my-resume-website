import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import Typography from '@mui/material/Typography';

export default function LeftAlignedTimeline() {
  return (
    <Timeline>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }}/>
        </TimelineSeparator>
        <TimelineContent>Eat</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Sleep</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }}  />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Meeting</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }}  />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Lunch</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }}  />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Design</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          {/* Last item does not need TimelineConnector */}
        </TimelineSeparator>
        <TimelineContent>Casting Agency Internship</TimelineContent>
        
      </TimelineItem>
    </Timeline>
  );
}
