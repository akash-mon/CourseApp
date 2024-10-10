import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './Course.css';
import axios from "axios"
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
const Course = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:3000/course')
      .then((res) => {
        setRows(res.data); // Set fetched product data
      })
      .catch((error) => {
        console.error("Error fetching data: ", error); // Handle error
      });
  }, []);

  return (
    <>
      <Container>
        <Grid container spacing={8}>
          {rows.map((course) => (
            <Grid item key={rows.id} xs={12} sm={6} md={4}>
              <Card sx={{ maxWidth:500 , marginTop:'50px', border:'2px double black'}}>
                <CardMedia
                
                
                style={{ objectFit: 'contain' }}
                  sx={{ height: 200}}
                  image={course.CourseImage}
                  title={course.CourseName}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">

                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course Id :{course.CourseId}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course Category :{course.CourseCategory}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Course Description :{course.CourseDescription}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>Duration :{course.Duration}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>fees :{course.fees}</Typography>

                </CardContent>
                <CardActions>
                  {/* <Button size="small">Share</Button>
        <Button size="small">Learn More</Button> */}
                  <Button variant="contained" sx={{ backgroundColor: 'green', marginLeft:'90px'}}>Edit</Button>
                  <Button variant="contained" sx={{ backgroundColor: 'Red' }}>Delete</Button>
                </CardActions>
              </Card>
            </Grid>

          ))}
        </Grid>
      </Container>



    </>
  )
}

export default Course