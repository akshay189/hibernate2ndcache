import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Hibernate2NdcacheRegionModule } from './region/region.module';
import { Hibernate2NdcacheCountryModule } from './country/country.module';
import { Hibernate2NdcacheLocationModule } from './location/location.module';
import { Hibernate2NdcacheDepartmentModule } from './department/department.module';
import { Hibernate2NdcacheTaskModule } from './task/task.module';
import { Hibernate2NdcacheEmployeeModule } from './employee/employee.module';
import { Hibernate2NdcacheJobModule } from './job/job.module';
import { Hibernate2NdcacheJobHistoryModule } from './job-history/job-history.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        Hibernate2NdcacheRegionModule,
        Hibernate2NdcacheCountryModule,
        Hibernate2NdcacheLocationModule,
        Hibernate2NdcacheDepartmentModule,
        Hibernate2NdcacheTaskModule,
        Hibernate2NdcacheEmployeeModule,
        Hibernate2NdcacheJobModule,
        Hibernate2NdcacheJobHistoryModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Hibernate2NdcacheEntityModule {}
