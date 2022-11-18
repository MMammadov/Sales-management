import { Card, CardMedia, CardContent, Typography, CardActions, Button, makeStyles, ListItem, List, Divider } from '@material-ui/core';
import React from 'react';
import { useQuery } from 'react-query';
import { carService } from '../../services/carService';

const useStyles = makeStyles({
    media: {
        height: 200,
    },
});

interface IProps {
    modelId: string;
    onRemoveClick: (modelId: string) => void;
}

export const CarComparisonCard: React.FC<IProps> = ({ modelId, onRemoveClick }) => {
    const classes = useStyles();
    const modelDetailsQuery = useQuery(['carService.getModelDetails', modelId], () => carService.getModelDetails(modelId));

    return (
        <Card>
            <CardMedia
                className={classes.media}
                image="https://www.willow-car-sales.co.uk/wp-content/uploads/2019/11/placeholder-image-1-300x203.jpg"
                title="Contemplative Reptile"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                    {modelDetailsQuery.data?.make_display} {modelDetailsQuery.data?.model_name}
                </Typography>
                <List>
                    <ListItem>
                        <b>Weight -</b> {modelDetailsQuery.data?.model_weight_kg}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <b>Top speed -</b> {modelDetailsQuery.data?.model_top_speed_kph || 'Not tested'}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <b>Horse power -</b> {modelDetailsQuery.data?.model_engine_power_hp}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <b>Egnine -</b> {modelDetailsQuery.data?.model_engine_l}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        Fuel type - {modelDetailsQuery.data?.model_engine_fuel}
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <b>Doors -</b> {modelDetailsQuery.data?.model_doors}
                    </ListItem>
                </List>
            </CardContent>
            <CardActions>
                <Button size="small" color="secondary" variant="contained" onClick={() => onRemoveClick(modelId)}>
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}