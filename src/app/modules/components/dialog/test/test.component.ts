import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild, inject} from '@angular/core';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { TasksService } from 'src/app/services/tasks/tasks.service';
import { ComponentsModule } from '../../components.module';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
/**
 * @title Table with sorting
 */
@Component({
  selector: './test-example',
  styleUrls: ['./test.component.scss'],
  templateUrl: './test.component.html',
  standalone: true,
  imports: [ MatTableModule, MatSortModule, ComponentsModule ],
})
export class TestComponent implements AfterViewInit {
  private _liveAnnouncer = inject(LiveAnnouncer);

  tasks: any[] = [];
  displayedColumns: string[] = ['title', 'description', 'status', 'dateCreation', 'dateUpdate', 'actions'];
  // displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource:any;

  @ViewChild(MatSort) sort!: MatSort;
  
  constructor(private taskService: TasksService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit() {
    console.log(this.tasks)
    this.tasks = this.loadUsers();
  }
  
  loadUsers(): any {
    this.taskService.getAllTasks().subscribe((data:any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      return data;
    });
  }

  formatDate(date:any){
    return formatDate(date, 'dd-MM-yyyy', 'en');
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }
}

