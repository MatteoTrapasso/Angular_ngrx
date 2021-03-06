import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PersonEditComponent} from './person-edit/person-edit.component';
import {PersonMainComponent} from './person-main/person-main.component';
import {PersonListComponent} from './person-list/person-list.component';
import {PersonRoutingModule} from './person-routing.module';
import {ButtonNewPersonComponent} from './components/button-new-person.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeletePersonComponent} from './components/button-delete-person.component';
import {ButtonEditManyTestPersonComponent} from './components/button-edit-many-test-person.component';
import {ButtonCreateManyTestPersonComponent} from './components/button-create-many-test-person.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    PersonEditComponent,
    PersonMainComponent,
    PersonListComponent,
    ButtonNewPersonComponent,
    ButtonDeletePersonComponent,
    ButtonEditManyTestPersonComponent,
    ButtonCreateManyTestPersonComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule
  ],
  providers: [],
  entryComponents: []
})
export class PersonModule {
}
