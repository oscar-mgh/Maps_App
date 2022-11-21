import { ChangeEvent, useRef, useContext } from 'react';
import { PlacesContext } from '../context/places/PlacesContext';
import { SearchResults } from './SearchResults';

export const SearchBar = () => {

	const { searchPlacesByTerm } = useContext( PlacesContext );

	const debounceRef = useRef<NodeJS.Timeout>()

	const onQueryChange = ( event: ChangeEvent<HTMLInputElement> ) => {
		if ( debounceRef.current ) 
			clearTimeout( debounceRef.current );

		debounceRef.current = setTimeout(() => {
			searchPlacesByTerm( event.target.value )
		}, 200 );
	}

	return (
		<div className="search-container">
			<input 
				type="text" 
				placeholder="Buscar lugar..."
				onChange={ onQueryChange }
			/>
			<SearchResults />
		</div>
	)
}
