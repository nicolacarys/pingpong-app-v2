import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PlayerEntry from './components/PlayerEntry';
import PlayerDetails from './components/PlayerDetails';
import PlayerPairing from './components/PlayerPairing';

export default () => (
	<div>
	  <Header />

	  <PlayerEntry />
	  <PlayerDetails />
	  <PlayerPairing />

	  <Footer />
	</div>
)