import {throwError as observableThrowError, Observable} from 'rxjs';
// import {catchError} from 'rxjs/operators';
// import {HttpErrorResponse} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {FlightResource} from 'flight-api/src/lib/resources/flight.resource';
import {Flight} from 'flight-api/src/lib/models/flight';


@Injectable()
export class FlightService {

  constructor(private fr: FlightResource) {
  }

  findById(id: string): Observable<Flight> {
    return this.fr.findById(id)
      .pipe(
      // catchError(error => observableThrowError(error.json()))
      );
  }

  find(from: string, to: string): Observable<Flight[]> {
    return this.fr.find(from, to)
      .pipe(
       // catchError(error => observableThrowError(error.json()))
      );
  }

  create(flight: Flight): Observable<Flight> {
    return this.fr.create(flight)
      .pipe(
       /* catchError((e: HttpErrorResponse) => {
          let errMsg: string = 'Client Error or Network Error' + e.error.message;
          if (e instanceof HttpErrorResponse) {
            switch (e.status) {
              case 400:
                errMsg = e.error;
                break;
              case 500:
                errMsg = 'You got a 500! :-(';
                break;
              default:
                errMsg = 'Server Error';
            }
            return observableThrowError({message: errMsg});
          }
        })*/
      );
  }

}
