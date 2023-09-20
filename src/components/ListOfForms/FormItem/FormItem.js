import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';

const FormItem = ({id, title, description}) => {
    const navigate = useNavigate();

    const handleOnClickForm = () => {
        navigate(`/form/${id}`, {state: {title}});
    }

    const handleOnClickClear = () => {
      const toastProps = {autoClose: 3000, closeButton: false};
      const form = localStorage.getItem(title);
      if(!form) return
      localStorage.removeItem(title);
      toast.success("The form has been successfully cleaned", toastProps);
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
              <Button size="small" style={{marginLeft:'auto'}} onClick={handleOnClickClear}>Clear form</Button>
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