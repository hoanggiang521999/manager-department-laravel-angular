import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BasicService } from 'src/app/shared/service/basic.service';
import { HelperService } from 'src/app/shared/service/helper.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService extends BasicService {

  constructor(public httpClient: HttpClient, public helperService: HelperService) {
    super('person', httpClient, helperService);
  }

  public findByCodeOrName(codeOrName: string): Observable<any> {
    const url = `${this.serviceUrl}/find-autocomplete/${codeOrName}`;
    return this.getRequest(url);
  }
}
