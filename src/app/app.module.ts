import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BreadcrumbsModule} from 'lib';
import {Comp1Component} from './comp1/comp1.component';
import {Comp2Component} from './comp2/comp2.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {Comp3Component} from './comp3/comp3.component';

const appRoutes: Routes = [
  {
    path: 'comp1',
    component: Comp1Component,
    data: {
      title: 'Компонент1',
      matrixParams: ['param']
    },
    children: [
      {
        path: 'comp2',
        component: Comp2Component,
        data: {
          title: 'Компонент2',
          link: 'comp1/3'
        },
        children: [
          {
            path: 'comp3',
            component: Comp3Component,
            data: {
              title: 'Провер очка',
              link: 'comp2'
            },
            children: [
              {
                path: 'comp4',
                component: Comp3Component,
                data: {
                  title: 'Корректная ссылка'
                }
              }
            ]
          },
          {
            path: 'comp5',
            component: Comp3Component,
            data: {
              title: 'Компонент 5'
            }
          }
        ]
      },
      {
        path: ':id',
        component: Comp3Component,
        data: {
          title: 'Тестовый компонент'
        }
      },
    ]
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    Comp3Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    BreadcrumbsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false})
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
