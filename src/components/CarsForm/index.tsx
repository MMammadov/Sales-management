import React from 'react';
import { Box, Button, createStyles, FormControl, InputLabel, makeStyles, MenuItem, Select, Theme } from '@material-ui/core';
import { useCarMakes } from '../../hooks';
import { carService } from '../../services/carService';
import { useQuery } from 'react-query';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        button: {
            display: 'block',
            marginTop: theme.spacing(2),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
    }),
);

interface IProps {
    onAddClick: (modelId: string) => void;
}

const CarChoiceForm: React.FC<IProps> = ({ onAddClick }) => {
    const classes = useStyles();
    const [make, setMake] = React.useState('');
    const [model, setModel] = React.useState('');
    const [modelId, setModelId] = React.useState('');
    const makesQuery = useCarMakes();
    const modelsQuery = useQuery(['carService.getModels', make], () => carService.getModels(make), {
        enabled: Boolean(make)
    });
    const trimsQuery = useQuery(['carService.getTrims', model, make], () => carService.getTrims(make, model), {
        enabled: Boolean(model)
    });

    React.useEffect(() => {
        if (make) {
            modelsQuery.refetch();
        }
    }, [make, modelsQuery]);

    React.useEffect(() => {
        if (model) {
            trimsQuery.refetch();
        }
    }, [model, trimsQuery]);

    return (
        <Box display="flex" alignItems="center">
            <FormControl className={classes.formControl}>
                <InputLabel>Make</InputLabel>
                <Select value={make} onChange={(e) => setMake(e.target.value as string)}>
                    {makesQuery.data?.map((make) => (
                        <MenuItem key={make.make_id} value={make.make_id}>{make.make_display}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} disabled={!make}>
                <InputLabel>Model</InputLabel>
                <Select value={model} onChange={(e) => setModel(e.target.value as string)}>
                    {modelsQuery.data?.map((model) => (
                        <MenuItem key={model.model_name} value={model.model_name}>{model.model_name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl className={classes.formControl} disabled={!model}>
                <InputLabel>Trim</InputLabel>
                <Select value={modelId} onChange={(e) => setModelId(e.target.value as string)}>
                    {trimsQuery.data?.map((trim) => (
                        <MenuItem key={trim.model_id} value={trim.model_id}>{trim.model_trim}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button variant="contained" color="primary" size="large" disabled={!modelId} onClick={() => onAddClick(modelId)}>
                Add choice
            </Button>
        </Box>
    );
};

export default CarChoiceForm;