import { Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserModel, Comun, UserUpdate } from '../../../models';
import { DatosService } from '../../../services/datos.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HistorialService } from '../../../services/historial.service';

@Component({
  selector: 'app-tabla-user',
  standalone: true,
  imports: [MatSortModule, MatPaginatorModule, MatTableModule, MatFormFieldModule, RouterLink, RouterOutlet, CommonModule,MatSlideToggleModule],
  templateUrl: './tabla-user.component.html',
  styleUrl: './tabla-user.component.css'
})
export class TablaUserComponent {
  user!: UserUpdate;
  email?: string;
  datosUser: UserModel[] = [];
  datosComunes: Comun[] = [new Comun(0, 'No'), new Comun(1, 'Sí')];
  displayedColumns = ['id', 'fullName', 'email', 'role', 'createdAt', 'updatedAt', 'acciones'];
  dataSource: MatTableDataSource<UserModel> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator | null = null;
  @ViewChild(MatSort) sort: MatSort | null = null;

  constructor(private datosService: DatosService,private historialService: HistorialService) { }

  ngOnInit() {
    this.datosService.obtenerUsuarios().subscribe((datos: UserModel[]) => {
      this.datosUser = datos.map((user: UserModel) => {
        return new UserModel(
          user.id,
          user.fullName,
          user.email,
          user.password,
          user.createdAt,
          user.updatedAt,
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

  deshabilitar(row: UserModel) {
    this.user = new UserUpdate(row.id, row.fullName, row.email, row.password, row.createdAt, row.updatedAt, false, row.role);
    this.datosService.actualizarUsuario(this.user).subscribe((res: UserModel)=>{
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarDeshabilitadoUser(this.email,res).subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }

  habilitar(row: UserModel) {
    this.user = new UserUpdate(row.id, row.fullName, row.email, row.password, row.createdAt, row.updatedAt, true, row.role);
    this.datosService.actualizarUsuario(this.user).subscribe((res: UserModel)=>{
      this.email = sessionStorage.getItem('app.email') || "";
      this.historialService.insertarHabilitadoUser(this.email,res).subscribe((res) => {
        console.log(res)
      })
      location.reload();
    });
  }
} 
