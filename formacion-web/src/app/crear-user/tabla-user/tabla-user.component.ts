import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserModel } from '../../../models/autentificacion/user-model';
import { Comun } from '../../../models/comun';
import { DatosService } from '../../../services/datos.service';

@Component({
  selector: 'app-tabla-user',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, RouterLink, RouterOutlet, CommonModule],
  templateUrl: './tabla-user.component.html',
  styleUrl: './tabla-user.component.css'
})
export class TablaUserComponent {
  datosUser: UserModel[]=[];
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];
  displayedColumns = ['fullName','email','role','createdAt','updateAt','enabled'];
  dataSource: MatTableDataSource<UserModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService, private dialog: MatDialog) { }

  ngOnInit() {
    this.datosService.obtenerUsuarios().subscribe((datos: UserModel[]) => {
      this.datosUser = datos.map((user: UserModel) => {
        return new UserModel(
          user.id,
          user.fullName,
          user.email,
          user.password,
          user.createdAt,
          user.updateAt,
          user.aceptado,
          user.role,
          user.enabled,
          user.authorities,
          user.username,
          user.accountNonExpired,
          user.credentialsNonExpired,
          user.accountNonLocked
        );
      });

      this.dataSource = new MatTableDataSource(this.datosUser);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }
} 
