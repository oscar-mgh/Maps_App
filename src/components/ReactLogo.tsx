import rLogo from '../react.svg';

export const ReactLogo = () => {
	return <img 
		style={{
			position: 'fixed',
			bottom: '40px',
			right: '40px',
			width: '140px'
		}}
		src={rLogo} 
	/>;
};
