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
            2023-2024
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator >
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }}/>
        </TimelineSeparator>
        <TimelineContent>Front-end Developer & UX/UI • ViralCo</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2020-2023
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Front-end Developer & UX/UI • DaCodes</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2019-2020
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }} />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Front-end Developer • ECCHO</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2018
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }}  />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Product Designer • LaBrand</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            Summer 2018
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }}  />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Attractions Internship • Walt Disney World</TimelineContent>
      </TimelineItem>
      <TimelineItem>
      <TimelineOppositeContent>
          <Typography variant="body2" fontWeight="bold">
            2017-2018
          </Typography>
          </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot sx={{ bgcolor: '#B278F1' }}  />
          <TimelineConnector sx={{ bgcolor: '#B278F1' }} />
        </TimelineSeparator>
        <TimelineContent>Multimedia Designer • Random Box Agency</TimelineContent>
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
        <TimelineContent>Casting Internship • Ink Entourage</TimelineContent>
        
      </TimelineItem>
    </Timeline>
  );
}
