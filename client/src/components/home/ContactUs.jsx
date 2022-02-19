
import { Box, makeStyles, Typography, Link } from '@material-ui/core';
import { GitHub, Instagram, Email,LinkedIn } from '@material-ui/icons';
import DefaultLayout from '../DefaultLayout';

const useStyles = makeStyles({
    banner: {
        backgroundImage: `url(${'https://cdn.pixabay.com/photo/2017/12/02/14/38/contact-us-2993000__480.jpg'})`,
        width: '100%',
        height: '50vh',
        backgroundPosition: 'left 0px top -100px',
        backgroundSize: 'cover'
    },
    wrapper: {
        padding: 20,
        '& > *': {
            marginTop: 50
        }
    },
    text: {
        color: '#878787'
    }
})


const ContactUs = () => {
    const classes = useStyles();
    return (
        <DefaultLayout>
        <Box>
            <Box className={classes.banner}>Helloo</Box>
            <Box className={classes.wrapper}>
                <Typography variant="h3">Getting in touch is easy!</Typography>    
                <Typography variant="h5" className={classes.text}>
                    Reach out to me on LinkedIn 
                    <Link href="https://www.linkedin.com/in/shivam-malviya-02bbb620a/" color="inherit" target="_blank">
                        <LinkedIn/>
                    </Link> 
                    or send me an Email 
                    <Link href="mailto:shivammalviya205@gmail.com?Subject=This is a subject" target="_blank" color="inherit">
                        <Email />
                    </Link>.
                </Typography>
            </Box>
        </Box>
        </DefaultLayout>
    );
}

export default ContactUs;
