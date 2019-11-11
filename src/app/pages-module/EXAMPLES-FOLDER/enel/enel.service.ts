import { Enel } from './enel';
import { EnelFilter } from './enel-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URL } from '../../../@shared/constants/constants';

@Injectable()
export class EnelService {

    constructor(private http: HttpClient) {
    }

    enelList: Enel[] = [];


    findById (id: string): Observable<Enel> {
        const url = `${API_URL + 'company'}/${id}`;
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Enel>(url, {headers} );
    }


    load(filter: EnelFilter): void {
        this.find(filter).subscribe(
            result => {
                this.enelList = result;
            },
            err => {
                console.error('error loading', err);
            }
        )
    }

    find(filter: EnelFilter): Observable<Enel[]> {
        const url = API_URL + 'companies' ;
        let headers = new HttpHeaders()
                            .set('Accept', 'application/json');

        let params = {
            "companyName": filter.companyName,
        };

        return this.http.get<Enel[]>(url, {params, headers});
    }

    save(entity: Enel): Observable<Enel> {
        const url = API_URL + 'company';
        let headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.post<Enel>(url, entity, {headers});
    }

    edit(entity: Enel): Observable<Enel> {
        const url = `${API_URL + 'company'}`;
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.put<Enel>(url, entity, {headers});
    }

    delete (entity: Enel | number): Observable<Enel> {
        const id = typeof entity === 'number' ? entity : entity.id;
        const url = `${API_URL + 'company'}/${id}`;
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.delete<Enel>(url, {headers} );
    }
}

