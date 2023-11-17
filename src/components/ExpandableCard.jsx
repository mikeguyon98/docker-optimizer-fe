import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import FormatTextWithLineBreaks from './FormatTextLineBreaks';
import Button from '@mui/material/Button';
import { BarChart } from '@mui/x-charts/BarChart';
import HorizontalChart from './HorizontalChart';

export default function RecipeReviewCard({expandedText, stats}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 800, width: "70%" }}>
      <CardContent sx={{display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Typography variant="h6" component="div" sx={{color: "black", fontWeight: "bold"}}>
            {"Docker Image Analysis"}
        </Typography>
        <BarChart
            xAxis={[{ scaleType: 'band', data: ['Efficiency %', 'User Wasted %'] }]}
            series={[{ data: [stats.efficiency, stats.userWastedPercent], color: '#9c27b0' }]}
            width={500}
            height={300}
        />
        <HorizontalChart data={stats.wastedBytes}/>
      </CardContent>
      <CardActions disableSpacing sx={{justifyContent:"center"}}>
        <Button 
            variant="outlined"
            onClick={handleExpandClick}
            color='secondary'
        >
            Dockerfile and Analysis
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{margin: 6}}>
          <FormatTextWithLineBreaks text={expandedText} />
        </CardContent>
      </Collapse>
    </Card>
  );
}