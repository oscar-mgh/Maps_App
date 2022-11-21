import { useContext, useState } from 'react';
import { PlacesContext, MapContext } from '../context/';
import { LoadingPlaces } from './';
import { Feature } from '../interfaces/places';
export const SearchResults = () => {

	const { places, isLoadingPlaces, userLocation } = useContext( PlacesContext );
	const { map, getRouteBetweenPoints } =  useContext( MapContext );

	const [activeId, setActiveId] = useState('');

	const onPlaceClicked = ( place:Feature ) => {
		const [ lng, lat ] = place.center;
		setActiveId( place.id );
		map?.flyTo({
			zoom: 14,
			center: [ lng, lat ]
		})
	}

	const getRoute = ( place: Feature ) => {
		if ( !userLocation ) return;
		const [ lng, lat ] = place.center
		getRouteBetweenPoints( userLocation, [ lng, lat ] );
	}

	if ( isLoadingPlaces ) {
		return (
			<LoadingPlaces />
		)
	}

	if ( places.length === 0 ) {
		return <></>
	}

	return (
		<ul className="list-group mt-3">			
			{
				places.map( place => (
					<li 
						key={ place.id } 
						className={`pointer list-group-item list-group-item-action ${ (activeId === place.id) ? 'active' : '' }`}
						onClick={ () => onPlaceClicked( place ) }
					>
						<h6>{ place.text }</h6>
						<p
							style={{
								fontSize: '12px',
							}}>
							{ place.place_name }
						</p>
						<button 
							className={`btn btn-sm ${(activeId === place.id) ? 'btn-light' : 'btn-dark' }`}
							onClick={() => getRoute( place )}
						>
							Direcciones
						</button>
					</li>
				))
			}			
		</ul>
	);
};
