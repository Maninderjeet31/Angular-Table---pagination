import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable, tap } from 'rxjs';


import { CoffeeService } from './coffee.service';
import { Coffee } from './coffee.model';
import { AppState } from './app-state.model';
import { GetCoffee } from './store/coffee.actions';

@Component({
  selector: 'app-coffee-list',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

	coffees$!: Observable<Coffee[]>;
	loading$!: Observable<Boolean>;
	error$!: Observable<Error>;

	//pagination
	displayedColumns: string[] = ["id", "uid", "blend_name", "origin", "variety", "notes", "intensifier"];
	coffeeData: any;
	dataSource : any;
	@ViewChild(MatPaginator) paginator !:MatPaginator;
	
	constructor(
		private coffeeService: CoffeeService,
		private store: Store<AppState>
	 ) {}

	//  paginator call
	 getAll() {
		this.coffeeService.getCoffeeList1().subscribe(result => {
			this.coffeeData = result;

			this.dataSource = new MatTableDataSource<Coffee>(this.coffeeData);
			this.dataSource.paginator = this.paginator;
		})
	}

	ngOnInit() {
		this.coffeeService.getCoffee().subscribe(
			value1 => console.log(value1)
		)

		this.coffeeService.getCoffeeList().subscribe(
			value2 => console.log(value2)
		)

		this.coffees$ = this.store.select(store => store.coffees.coffees);
		this.loading$ = this.store.select(store => store.coffees.loading);

		this.store.dispatch(new GetCoffee());

		//pagination
		this.getAll();
		
		
	}

}
