import { NgModule } from '@angular/core';

import { Hibernate2NdcacheSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Hibernate2NdcacheSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Hibernate2NdcacheSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Hibernate2NdcacheSharedCommonModule {}
