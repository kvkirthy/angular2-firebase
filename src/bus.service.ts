import { Injectable } from "@angular/core";
import { Bus } from "./bus.model";
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BusService {
	buses: Bus[];
	constructor(af: AngularFire) {
		console.log(new AngularFire());
		console.log(af);
		this.buses = [{
			busId: "A2F001",
			from: "Hyderabad",
			to: "Bangalore",
			lastSpottedAt: "Kurnool",
			lastSpottedTime: "10:30 PM",
			kmsToGo: 500,
			imageUrl: "images/bus1.png"
		}];		
		// this.buses = [{
		// 	busId: "A2F001",
		// 	from: "Hyderabad",
		// 	to: "Bangalore",
		// 	lastSpottedAt: "Kurnool",
		// 	lastSpottedTime: "10:30 PM",
		// 	kmsToGo: 500,
		// 	imageUrl: "images/bus1.png"
		// },
		// {
		// 	busId: "A2F002",
		// 	from: "Vijayawada",
		// 	to: "Hyderabad",
		// 	lastSpottedAt: "Guntur",
		// 	lastSpottedTime: "10:20 PM",
		// 	kmsToGo: 280,
		// 	imageUrl: "images/bus2.png"
		// },
		// {
		// 	busId: "A2F003",
		// 	from: "Visakhapatnam",
		// 	to: "Chennai",
		// 	lastSpottedAt: "Rajahmundry",
		// 	lastSpottedTime: "10:20 PM",
		// 	kmsToGo: 600,
		// 	imageUrl: "images/bus3.png"
		// },
		// {
		// 	busId: "A2F004",
		// 	from: "Mumbai",
		// 	to: "Goa",
		// 	lastSpottedAt: "Pune",
		// 	lastSpottedTime: "10:20 PM",
		// 	kmsToGo: 350,
		// 	imageUrl: "images/bus4.png"
		// },
		// {
		// 	busId: "A2F005",
		// 	from: "Bangalore",
		// 	to: "Kanniyakumari",
		// 	lastSpottedAt: "Coimbatore",
		// 	lastSpottedTime: "10:20 PM",
		// 	kmsToGo: 700,
		// 	imageUrl: "images/bus5.png"
		// }];
	}

	getBuses(): Bus[] {
		return this.buses;
	}

	getBus(busId: string): Bus {
		return this.buses.find(b => b.busId === busId);
	}

	saveBus(bus: Bus) {
		//To be used to save data to Firebase
	}
}
