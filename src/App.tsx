import React from 'react';
import './App.css';
import CarsForm from './components/CarsForm';
import { CarComparisons } from './components/CarComparisons';
import { Box, Container } from '@material-ui/core';

function App() {
	const [selectedModelIds, setSelectedModelIds] = React.useState<string[]>([]);

	const handleAddCar = (modelId: string) => {
		if (selectedModelIds.length < 4) {
			setSelectedModelIds((prevState) => [...prevState, modelId]);
		}
	}

	const handleRemoveCar = (modelId: string) => {
		setSelectedModelIds((prevState) => prevState.filter((x) => x !== modelId));
	}

	return (
		<Container fixed>
			<Box mb="24px">
				<CarsForm onAddClick={handleAddCar} />
			</Box>
			<CarComparisons modelIds={selectedModelIds} onRemoveClick={handleRemoveCar} />
		</Container>
	);
}

export default App;
 