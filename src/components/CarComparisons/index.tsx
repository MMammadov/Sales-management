import { Grid } from '@material-ui/core';
import React from 'react';
import { CarComparisonCard } from './CarComparisonCard';

interface IProps {
    modelIds: string[];
    onRemoveClick: (modelId: string) => void;
}

export const CarComparisons: React.FC<IProps> = ({ modelIds, onRemoveClick }) => {
    return (
        <Grid container spacing={1}>
            {modelIds.map((modelId) => (
                <Grid item xs={4} key={modelId}>
                    <CarComparisonCard modelId={modelId} onRemoveClick={onRemoveClick} />
                </Grid>
            ))}
        </Grid>

    )
}