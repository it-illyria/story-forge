import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import * as fromComponents from '@core/components';
import {LoaderInterceptorService} from "@core/interceptors/loader.interceptor";
import {HTTP_INTERCEPTORS} from "@angular/common/http";


@NgModule({
  declarations: [...fromComponents.components],
  exports: [...fromComponents.components],
  imports: [CommonModule],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptorService, multi: true}
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule?: CoreModule) {
    if (parentModule) {
      throw new Error('Core Module is already loaded. Import it in the AppModule only');
    }
  }
}
