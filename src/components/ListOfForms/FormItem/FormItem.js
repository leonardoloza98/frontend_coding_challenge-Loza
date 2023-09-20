import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const FormItem = ({id, title, description}) => {
    const navigate = useNavigate();

    const handleOnClickForm = () => {
        navigate(`/form/${id}`, {state: {title}});
    }

    const item = (
        <>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Code: {id}
              </Typography>
              <Typography variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="h7" component="div">
                {description}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={handleOnClickForm}>Complete</Button>
            </CardActions>
      </>
    )

    return(
        <Box>
            <Card variant='elevation' style={{borderBottom: '3px solid rgb(140, 140, 212)', maxWidth: '300px'}} > {item} </Card>
        </Box>
    )
}

export default FormItem;