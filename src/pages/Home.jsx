import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {
	const { store, dispatch } = useGlobalReducer();

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => dispatch({ type: 'set_people', payload: data.results }));

		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => dispatch({ type: 'set_planets', payload: data.results }));
	}, []);

	return (
		<div className="container mt-4">
			<h2 className="text-danger">Characters (Top 20)</h2>
			<div className="d-flex overflow-auto gap-3 pb-3">
				{store.people && store.people.slice(0, 20).map((item) => (
					<div className="card" style={{ minWidth: "250px" }} key={item.uid}>
						<img
							src={`https://preview.redd.it/what-does-star-wars-mean-to-you-v0-trjrcz5h4e0d1.jpeg?width=640&crop=smart&auto=webp&s=71c2a87cfb4450fecdedaee00372db3384264de2`}
							className="card-img-top"
							alt={item.name}
							style={{ height: "300px", objectFit: "cover" }}
						/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<Link to={`/single/${item.uid}`} className="btn btn-primary me-2">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning"
								onClick={() => dispatch({ type: 'add_favorite', payload: item })}
							>
								♥
							</button>
						</div>
					</div>
				))}
			</div>

			<h2 className="text-danger mt-4">Planets</h2>
			<div className="d-flex overflow-auto gap-3 pb-3">
				{store.planets && store.planets.slice(0, 20).map((item) => (
					<div className="card" style={{ minWidth: "250px" }} key={item.uid}>
						<img
							src={`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-6wfVE3hpqR8UiC_kR1kXG4OQQcMUC6qBmRjKeQXK-w&s=10`}
							className="card-img-top"
							alt={item.name}
							style={{ height: "250px", objectFit: "cover" }}
						/>
						<div className="card-body">
							<h5 className="card-title">{item.name}</h5>
							<Link to={`/single/${item.uid}`} className="btn btn-primary me-2">
								Learn more!
							</Link>
							<button
								className="btn btn-outline-warning"
								onClick={() => dispatch({ type: 'add_favorite', payload: item })}
							>
								♥
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};