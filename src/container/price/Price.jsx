import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { styles } from './style'


const tiers = [    {      title: 'Basic',      price: '10',      description: [        'Record incoming inventory',        ' Record outgoing inventory',        'Record profits earned',      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Entrepreneur',
      price: '20',
      description: [
        'Record incoming inventory',
        ' Record outgoing inventory',
        'Record profits earned',
        'Analyze sales performance with charts',
        '24/7 support',
  
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
    {
      title: 'Entrepreneur',
      price: '30',
      description: [
        'Record incoming inventory',
        ' Record outgoing inventory',
        'Record profits earned',
        'Analyze sales performance with charts',
        '24/7 support',
        'Export data to Excel',
        'AI prediction of earnings'
      ],
      buttonText: 'Get started',
      buttonVariant: 'contained',
    },
  ];


function PricingContent() {
  return (
    <Box>
			<Typography variant='h3' sx={styles.head}>Price</Typography>
      <GlobalStyles styles={styles.global} />
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} sx={{ ...styles.wrapPrice, alignItems: 'stretch' }}>
          {tiers.map((tier) => (
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
                  }}
                />
                <CardContent >
                  <Box sx={styles.warptier}>
                    <Typography component="h2" variant="h3" color="text.primary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto' }}>
                  <Button fullWidth variant={tier.buttonVariant} sx={styles.button}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default function Pricing() {
  return <PricingContent />;
}